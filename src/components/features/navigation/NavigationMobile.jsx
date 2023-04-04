import React, { useState } from 'react'
import NavWrapper from './NavWrapper'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const NavigationMobile = () => {
	const [isOpen, setOpen] = useState(false);
	const {t} = useTranslation();
	return (
    <NavWrapper>
      <div id="top" className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="burger">
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
      </div>
      {isOpen && (
        <ul className="menu" onClick={() => setOpen(false)}>
          <li className="nav-item">
            <Link to="/">Logo</Link>
          </li>
          <li className="nav-item">
            <Link to="/">{t('navigation.home')}</Link>
          </li>

          <li className="nav-item">
            <Link to="/bookings">{t('navigation.bookings')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/massages">{t('navigation.massages')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/syphilology">{t('navigation.sophrology')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/gift-card">{t('navigation.gift-card')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">{t('navigation.about-me')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">{t('navigation.contact')}</Link>
          </li>
        </ul>
      )}
    </NavWrapper>
  )
}

export default NavigationMobile
