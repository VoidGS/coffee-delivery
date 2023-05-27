import { Coffees } from "../../../../@types/Coffees/coffee";
import { Cart } from "../../../../reducers/cart/reducer";
import { CoffeeCount } from "../../../Home/components/CoffeeCount";
import { CoffeeOrderContainer, CoffeeOrderCount, CoffeeOrderDetails, CoffeeOrderImage, CoffeeOrderInfo, CoffeeOrderTitle, CoffeePrice } from "./styles";

interface CoffeeOrderProps {
	coffeeCart: Cart
}

export function CoffeeOrder({ coffeeCart }: CoffeeOrderProps) {
	const { img, name, price } = coffeeCart.coffeeInfo

	return (
		<CoffeeOrderContainer>
			<CoffeeOrderInfo>
				<CoffeeOrderImage src={img} width="64" />
				<CoffeeOrderDetails>
					<CoffeeOrderTitle>{name}</CoffeeOrderTitle>
					<CoffeeOrderCount>
						<CoffeeCount coffeeIndex={coffeeCart.coffeeIndex} variant="checkout" />
					</CoffeeOrderCount>
				</CoffeeOrderDetails>
			</CoffeeOrderInfo>

			<CoffeePrice>R$ {price}</CoffeePrice>
		</CoffeeOrderContainer>
	)
}