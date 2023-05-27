import { CoffeesContainer, CoffeeTitle, FeatureIcon, HomeContainer, SloganContainer, SloganFeature, SloganImage, SloganList, SloganSubtitle, SloganText, SloganTitle } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import sloganImage from '../../assets/img/SloganImage.svg'
import { CoffeeCard } from "./components/CoffeeCard";
import { Coffees } from "../../@types/Coffees/coffee";

export function Home() {
	return (
		<HomeContainer>
			<SloganContainer>
				<SloganText>
					<SloganTitle>Encontre o café perfeito para qualquer hora do dia</SloganTitle>
					<SloganSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SloganSubtitle>

					<SloganList>
						<SloganFeature>
							<FeatureIcon iconColor="yellow-dark"><ShoppingCart size={16} weight="fill" /></FeatureIcon>
							Compra simples e segura
						</SloganFeature>

						<SloganFeature>
							<FeatureIcon iconColor="base-text"><Package size={16} weight="fill" /></FeatureIcon>
							Embalagem mantém o café intacto
						</SloganFeature>

						<SloganFeature>
							<FeatureIcon iconColor="yellow"><Timer size={16} weight="fill" /></FeatureIcon>
							Entrega rápida e rastreada
						</SloganFeature>

						<SloganFeature>
							<FeatureIcon iconColor="purple"><Coffee size={16} weight="fill" /></FeatureIcon>
							O café chega fresquinho até você
						</SloganFeature>
					</SloganList>
				</SloganText>

				<SloganImage>
					<img src={sloganImage} alt="" />
				</SloganImage>
			</SloganContainer>

			<CoffeesContainer>
				<CoffeeTitle>
					Nossos cafés
				</CoffeeTitle>

				{Coffees.map((coffee, index) => {
					return <CoffeeCard key={index} coffeeIndex={index} />
				})}
			</CoffeesContainer>
		</HomeContainer>
	)
}