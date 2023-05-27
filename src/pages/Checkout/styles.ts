import styled from "styled-components";

export const CheckoutContainer = styled.div`
	margin-top: 12rem;

	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 2rem;
`

export const CustomerContainer = styled.div`
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

export const CustomerInfoContainer = styled.div`
	margin-top: 1rem;
`

export const CartInfoContainer = styled.div`
	margin-top: 1rem;
	padding: 2.5rem;
	background-color: ${(props) => props.theme["base-card"]};
	border-radius: 6px 44px 6px 44px;
`
