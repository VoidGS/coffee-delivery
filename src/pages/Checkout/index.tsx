import { CartContainer, CartInfoContainer, CheckoutContainer, CustomerContainer, CustomerInfoContainer } from "./styles";
import { CustomerForm } from "./components/CustomerForm";
import { CoffeeOrder } from "./components/CoffeeOrder";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
	const { cartState } = useContext(CartContext)

	return (
		<CheckoutContainer>
			<CustomerContainer>
				<span>Complete seu pedido</span>

				<CustomerInfoContainer>
					<CustomerForm />
				</CustomerInfoContainer>
			</CustomerContainer>

			<CartContainer>
				<span>Cafés selecionados</span>
				<CartInfoContainer>
					{cartState.map(coffee => {
						return <CoffeeOrder key={coffee.coffeeIndex} coffeeCart={coffee} />
					})}
				</CartInfoContainer>
			</CartContainer>
		</CheckoutContainer>
	)
}