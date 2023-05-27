import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { Coffees } from "../../../../@types/Coffees/coffee";
import { CartContext } from "../../../../contexts/CartContext";
import { Cart } from "../../../../reducers/cart/reducer";
import { BuyForm, CoffeeQnt, CountButtons, RemoveButton } from "./styles";

interface CoffeeCountProps {
	coffeeIndex: number
	variant: 'default' | 'checkout'
}

export function CoffeeCount({ coffeeIndex, variant }: CoffeeCountProps) {
	const { cartState, updateCart } = useContext(CartContext)

	let coffeeCount = 1;

	const currentIndex = cartState.findIndex((coffee) => {
		return coffee.coffeeIndex === coffeeIndex
	})

	if (currentIndex >= 0) coffeeCount = cartState[currentIndex].coffeeQnt

	function handleSomar() {
		coffeeCount = (coffeeCount + 1) > 99 ? 99 : coffeeCount + 1

		let coffeeCart: Cart = {
			coffeeIndex: coffeeIndex,
			coffeeInfo: Coffees[coffeeIndex],
			coffeeQnt: coffeeCount
		}

		updateCart(coffeeCart)
	}

	function handleDiminuir() {
		coffeeCount = (coffeeCount - 1) < 1 ? 1 : coffeeCount - 1

		let coffeeCart: Cart = {
			coffeeIndex: coffeeIndex,
			coffeeInfo: Coffees[coffeeIndex],
			coffeeQnt: coffeeCount
		}

		updateCart(coffeeCart)
	}

	function handleAddToCart() {
		let coffeeCart: Cart = {
			coffeeIndex: coffeeIndex,
			coffeeInfo: Coffees[coffeeIndex],
			coffeeQnt: coffeeCount
		}

		updateCart(coffeeCart)
	}

	function handleRemoveFromCart() {
		let coffeeCart: Cart = {
			coffeeIndex: coffeeIndex,
			coffeeInfo: Coffees[coffeeIndex],
			coffeeQnt: 0
		}

		updateCart(coffeeCart)
	}

	function ShowVariant() {
		switch (variant) {
			case "default":
				return <span onClick={handleAddToCart}><ShoppingCart size={22} weight="fill" /></span>

			case "checkout":
				return <RemoveButton onClick={handleRemoveFromCart}><Trash size={16} /> REMOVER</RemoveButton>
		}
	}

	return (
		<>
			<BuyForm>
				<CountButtons onClick={handleDiminuir}><Minus size={14} weight="bold" /></CountButtons>
				<CoffeeQnt>{coffeeCount}</CoffeeQnt>
				<CountButtons onClick={handleSomar}><Plus size={14} weight="bold" /></CountButtons>
			</BuyForm>

			<ShowVariant />
		</>
	)
}