import React, { useState } from 'react'
import NavWrapper from './NavWrapper'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

const NavigationMobile = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<NavWrapper >
			<div id="top" className="logo">
				<Link to="/">PlaceHolder</Link>
			</div>
			<div className="burger">
				<Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
			</div>
			{isOpen && <ul className="menu" onClick={() => setOpen(false)}>
				<li className="nav-item">
					<Link to="/">Placeholder</Link>
				</li>
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>

				<li className="nav-item">
					<Link to="/bookings">Bookings</Link>
				</li>
				<li className="nav-item">
					<Link to="/massages">Massages</Link>
				</li>
				<li className="nav-item">
					<Link to="/syphilology">Syphilology</Link>
				</li>
				<li className="nav-item">
					<Link to="/gift-card">Gift card</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">About us</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact">Contact us</Link>
				</li>
			</ul>}
		</NavWrapper>
	)
}

export default NavigationMobile
