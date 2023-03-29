import React, { useState } from 'react'
import NavWrapper from './NavWrapper'
import { Spin as Hamburger } from 'hamburger-react'

const NavigationMobile = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<NavWrapper>
			<div className="logo">
				<span>PlaceHolder</span>
			</div>
			<div className="burger">
				<Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
			</div>
			{isOpen && <ul className="menu" onClick={()=>setOpen(false)}>
				<li className="nav-item">
					<a href="#">Placeholder</a>
				</li>
				<li className="nav-item">
					<a href="#">Home</a>
				</li>
				<li className="nav-item">
					<a href="#">About us</a>
				</li>
				<li className="nav-item">
					<a href="#">Contact us</a>
				</li>
				<li className="nav-item">
					<a href="#">Bookings</a>
				</li>
				<li className="nav-item">
					<a href="#">Massages</a>
				</li>
				<li className="nav-item">
					<a href="#">Syphilology</a>
				</li>
				<li className="nav-item">
					<a href="#">Gift card</a>
				</li>
			</ul>}
		</NavWrapper>
	)
}

export default NavigationMobile
