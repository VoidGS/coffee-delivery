import { BuyContainer, BuyForm, BuyFormContainer, CoffeeCardContainer, CoffeeDescription, CoffeeImage, CoffeeName, Price, PricePrefix, Tag, TagsContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffees } from "../../../../@types/Coffees/coffee";

interface CoffeeCardProps {
	'coffeeIndex': number
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
					<BuyForm>
						<Minus size={14} weight="bold" />
						<span>1</span>
						<Plus size={14} weight="bold" />
					</BuyForm>

					<span><ShoppingCart size={22} weight="fill" /></span>
				</BuyFormContainer>
			</BuyContainer>
		</CoffeeCardContainer >
	)
}