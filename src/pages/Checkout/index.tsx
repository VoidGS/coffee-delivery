import { CartContainer, CartInfoContainer, CheckoutContainer, CostumerContainer, CostumerFormContainer, CostumerInfoContainer, CostumerTitle } from "./styles";
import { MapPinLine } from 'phosphor-react'

export function Checkout() {
	return (
		<CheckoutContainer>
			<CostumerContainer>
				<span>Complete seu pedido</span>

				<CostumerInfoContainer>
					<CostumerTitle>
						<div>
							<MapPinLine size={22} />
							<span>Endereço de Entrega</span>
						</div>
						<span>Informe o endereço onde deseja receber seu pedido</span>
					</CostumerTitle>

					<CostumerFormContainer>

					</CostumerFormContainer>
				</CostumerInfoContainer>
			</CostumerContainer>

			<CartContainer>
				<span>Cafés selecionados</span>
				<CartInfoContainer>
					<span>abde</span>
				</CartInfoContainer>
			</CartContainer>
		</CheckoutContainer>
	)
}