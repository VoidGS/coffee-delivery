import { BuyContainer, BuyFormContainer, CoffeeCardContainer, CoffeeDescription, CoffeeImage, CoffeeName, Price, PricePrefix, Tag, TagsContainer } from "./styles";
import { Coffees } from "../../../../@types/Coffees/coffee";
import { CoffeeCount } from "../CoffeeCount";

interface CoffeeCardProps {
	coffeeIndex: number
}

export function CoffeeCard({ coffeeIndex }: CoffeeCardProps) {
	const { img, tags, name, description, price } = Coffees[coffeeIndex]

	return (
		<CoffeeCardContainer >
			<CoffeeImage imgUrl={img} />

			<TagsContainer>
				{tags.map((tag, index) => {
					return <Tag key={index}>{tag}</Tag>;
				})}
			</TagsContainer>

			<CoffeeName>{name}</CoffeeName>
			<CoffeeDescription>{description}</CoffeeDescription>
			<BuyContainer>
				<div>
					<PricePrefix>R$ </PricePrefix>
					<Price>{price}</Price>
				</div>

				<BuyFormContainer>
					<CoffeeCount coffeeIndex={coffeeIndex} variant="default" />
				</BuyFormContainer>
			</BuyContainer>
		</CoffeeCardContainer >
	)
}