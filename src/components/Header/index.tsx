import { HeaderContainer, NavBar, NavOption } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
	return (
		<HeaderContainer>
			<NavBar>
				<NavLink to="/" title="Home">
					<img src={logo} alt="" />
				</NavLink>
				<nav>
					<NavOption iconColor='purple' backgroundColor='purple-light' textColor='purple-dark'>
						<a href="">
							<MapPin size={22} weight="fill" />
							<span>Porto Alegre, RS</span>
						</a>
					</NavOption>

					<NavOption iconColor='yellow-dark' backgroundColor='yellow-light'>
						<NavLink to="/checkout" title="Carrinho">
							<ShoppingCart size={22} weight="fill" />
						</NavLink>
					</NavOption>
				</nav>
			</NavBar>
		</HeaderContainer>
	)
}
