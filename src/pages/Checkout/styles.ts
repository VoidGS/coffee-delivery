import styled from "styled-components";

export const CheckoutContainer = styled.div`
	margin-top: 12rem;

	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 2rem;
`

export const CostumerContainer = styled.div`
	> span {
		font-family: "Baloo 2", cursive;
		font-size: 1.125rem;
		line-height: 130%;
		font-weight: bold;
	}
`

export const CartContainer = styled.div`
	> span {
		font-family: "Baloo 2", cursive;
		font-size: 1.125rem;
		line-height: 130%;
		font-weight: bold;
	}
`

export const CostumerInfoContainer = styled.div`
	margin-top: 1rem;
	padding: 2.5rem;
	background-color: ${(props) => props.theme["base-card"]};
	border-radius: 6px;
`

export const CostumerTitle = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	div {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		
		svg {
			color: ${(props) => props.theme["yellow-dark"]};
		}

		span {
			color: ${(props) => props.theme["base-subtitle"]};
		}
	}

	> span {
		margin-left: 1.65rem;
		color: ${(props) => props.theme["base-text"]};
		font-size: 0.875rem;
	}
`

export const CostumerFormContainer = styled.div`
	display: flex;
`

export const CartInfoContainer = styled.div`
	margin-top: 1rem;
	padding: 2.5rem;
	background-color: ${(props) => props.theme["base-card"]};
	border-radius: 6px 44px 6px 44px;
`
