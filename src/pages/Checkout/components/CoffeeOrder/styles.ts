import styled from "styled-components";

export const CoffeeOrderContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 0.5rem 0.25rem;
`

export const CoffeeOrderInfo = styled.div`
	display: flex;
`

export const CoffeeOrderImage = styled.img`
	margin-right: 1.25rem;
`

export const CoffeeOrderDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const CoffeeOrderCount = styled.div`
	display: flex;
	gap: 0.5rem;
`

export const CoffeeOrderTitle = styled.span`
	margin-bottom: 0.5rem;
`

export const CoffeePrice = styled.span`
	font-weight: bold;
	color: ${(props) => props.theme["base-text"]};
`