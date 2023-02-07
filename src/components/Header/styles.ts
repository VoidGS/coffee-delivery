import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;

	background-color: ${props => props.theme.background};
`

export const NavBar = styled.div`
	margin: 0 auto;
	max-width: 1120px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;

	nav {
		display: flex;
		gap: 0.75rem;
	}
`

interface NavOptionProps {
	iconColor: keyof typeof defaultTheme
	backgroundColor: keyof typeof defaultTheme
	textColor?: keyof typeof defaultTheme
}

export const NavOption = styled.div<NavOptionProps>`
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		text-decoration: none;

		color: ${(props) => props.theme[props.iconColor]};
		background-color: ${props => props.theme[props.backgroundColor]};

		border-radius: 6px;
		border: 3px solid transparent;

		transition: 0.2s;

		span {
			margin-left: 0.25rem;
			font-size: 0.875rem;
			color: ${(props) => props.theme[props.textColor ? props.textColor : props.iconColor]};
		}
	}
`
