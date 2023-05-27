import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	max-width: 256px;
	padding: 0 1.5rem;

	background-color: ${(props) => props.theme["base-card"]};

	margin-bottom: 2.5rem;

	border-radius: 6px 36px 6px 36px;
`

interface CoffeeImgProps {
	'imgUrl': string
}

export const CoffeeImage = styled.div<CoffeeImgProps>`
	width: 120px;
	height: 120px;

	margin: 0 auto;
	margin-top: calc(0px - 1.25rem);
	margin-bottom: 0.75rem;

	background-image: url(${(props) => props.imgUrl});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
`

export const TagsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
`

export const Tag = styled.span`
	padding: 0.25rem 0.5rem;
	border-radius: 100px;
	color: ${(props) => props.theme["yellow-dark"]};
	background-color: ${(props) => props.theme["yellow-light"]};
	font-weight: bold;
	font-size: 0.625rem;
	text-transform: uppercase;
	margin-bottom: 1rem;
`

export const CoffeeName = styled.span`
	width: 100%;
	text-align: center;
	font-family: "Baloo 2", cursive;
	font-size: 1.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme["base-subtitle"]};
`

export const CoffeeDescription = styled.span`
	width: 100%;
	text-align: center;
	font-size: 0.875rem;
	color: ${(props) => props.theme["base-label"]};
	margin-bottom: 2rem;
`

export const BuyContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	margin-bottom: 1.25rem;
`

export const PricePrefix = styled.span`
	font-size: 0.875rem;
	color: ${(props) => props.theme["base-text"]};
`

export const Price = styled.span`
	font-family: "Baloo 2", cursive;
	font-size: 1.5rem;
	font-weight: 800;
`

export const BuyFormContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	> span {
		display: inline-flex;
		padding: 0.4rem;
		border-radius: 6px;
		background-color: ${(props) => props.theme["purple-dark"]};
		color: ${(props) => props.theme["base-card"]};
		cursor: pointer;
		transition: .1s;
	}

	> span:hover{
		background-color: ${(props) => props.theme.purple};
	}
`