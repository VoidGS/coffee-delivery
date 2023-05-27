import styled from "styled-components"

export const BuyForm = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	gap: 0.5rem;
	background-color: ${(props) => props.theme["base-button"]};
	padding: 0.5rem;
	border-radius: 6px;
`

export const CoffeeQnt = styled.span`
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`

export const CountButtons = styled.span`
	display: inline-flex;
	color: ${(props) => props.theme.purple};
	cursor: pointer;
	transition: .1s;

	&:hover {
		color: ${(props) => props.theme["purple-dark"]};
	}
`

export const RemoveButton = styled.span`
	display: flex;
	padding: 0.5rem;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.75rem;
	color: ${(props) => props.theme["base-text"]};
	background-color: ${(props) => props.theme["base-button"]};
	border-radius: 6px;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme["base-subtitle"]};
		background-color: ${(props) => props.theme["base-hover"]};
	}

	svg {
		color: ${(props) => props.theme["purple"]};
	}
`