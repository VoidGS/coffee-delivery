import { produce } from "immer"
import { Coffees } from "../../@types/Coffees/coffee"
import { CartAction, CartActionTypes } from "./actions"

export interface Cart {
	coffeeIndex: number
	coffeeInfo: typeof Coffees[number]
	coffeeQnt: number
}

export function cartReducer(state: Cart[], action: CartAction) {
	switch (action.type) {
		case CartActionTypes.UPDATE_CART:
			const { coffeeIndex, coffeeInfo, coffeeQnt } = action.payload.coffeeCart

			const currentCoffeeIndex = state.findIndex((coffee) => {
				return coffee.coffeeIndex === coffeeIndex
			})

			return produce(state, (draft) => {
				if (currentCoffeeIndex < 0) {
					if (coffeeQnt > 0) {
						draft.push(action.payload.coffeeCart)
					}
				} else {
					if (coffeeQnt < 1) {
						draft.splice(currentCoffeeIndex, 1)
					} else {
						draft[currentCoffeeIndex].coffeeQnt = coffeeQnt
					}
				}

				localStorage.setItem('@coffee-delivery:cart-state-1.0.0', JSON.stringify(draft))
			})

		case CartActionTypes.WIPE_CART:
			return produce(state, (draft) => {
				draft.splice(0, draft.length)
				localStorage.setItem('@coffee-delivery:cart-state-1.0.0', JSON.stringify(draft))
			})
	}
}