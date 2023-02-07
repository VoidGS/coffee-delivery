import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

import backgroundImage from '../../assets/img/Background.png'

export const HomeContainer = styled.div``

export const SloganContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12rem 0 5rem 0;
`

export const SloganText = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 3.5rem;
`

export const SloganTitle = styled.span`
	font-family: "Baloo 2", cursive;
	font-weight: 800;
	font-size: 3rem;
	line-height: 130%;
	margin-bottom: 1rem;
	color: ${props => props.theme["base-title"]};
`

export const SloganSubtitle = styled.span`
	font-size: 1.25rem;
	line-height: 130%;
	color: ${props => props.theme["base-subtitle"]};
`

export const SloganList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	row-gap: 1.25rem;
	margin-top: 4.125rem;
`

interface FeatureIconProps {
	iconColor: keyof typeof defaultTheme
}

export const SloganFeature = styled.li`
	width: 50%;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	color: ${props => props.theme["base-text"]};
`

export const FeatureIcon = styled.span<FeatureIconProps>`
	width: 2rem;
	height: 2rem;
	color: ${props => props.theme.background};
	background-color: ${props => props.theme[props.iconColor]};
	padding: 0.5rem;
	border-radius: 50%;
`

export const SloganImage = styled.div`

`

export const CoffeesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 2rem;
	margin-bottom: 5rem;
`

export const CoffeeTitle = styled.span`
	font-family: "Baloo 2", cursive;
	font-weight: 800;
	font-size: 2rem;
	line-height: 130%;
	margin-top: 2rem;
	margin-bottom: 3.375rem;
	
	grid-column-end: span 4;
`