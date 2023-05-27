import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { updateCartAction, wipeCartAction } from "../reducers/cart/actions";
import { Cart, cartReducer } from "../reducers/cart/reducer";

interface CartContextType {
	cartState: Cart[]
	updateCart: (coffeeCart: Cart) => void
	wipeCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
	children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const cartInitialValue: Cart[] = []

	const [cartState, dispatch] = useReducer(
		cartReducer,
		cartInitialValue,
		() => {
			const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

			if (storedStateAsJSON) {
				return JSON.parse(storedStateAsJSON)
			} else {
				return []
			}
		}
	)

	function updateCart(coffeeCart: Cart) {
		dispatch(updateCartAction(coffeeCart))
	}

	function wipeCart() {
		dispatch(wipeCartAction())
	}

	return (
		<CartContext.Provider
			value={{
				cartState,
				updateCart,
				wipeCart
			}}
		>
			{children}
		</CartContext.Provider>
	)
}