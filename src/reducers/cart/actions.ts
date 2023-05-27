import { Cart } from "./reducer";

export enum CartActionTypes {
	UPDATE_CART = 'UPDATE_CART',
	WIPE_CART = 'WIPE_CART'
}

export type CartAction =
	| { type: CartActionTypes.UPDATE_CART, payload: { coffeeCart: Cart } }
	| { type: CartActionTypes.WIPE_CART }

export function updateCartAction(coffeeCart: Cart) {
	return {
		type: CartActionTypes.UPDATE_CART,
		payload: {
			coffeeCart,
		}
	}
}

export function wipeCartAction(): { type: CartActionTypes.WIPE_CART } {
	return {
		type: CartActionTypes.WIPE_CART
	}
}