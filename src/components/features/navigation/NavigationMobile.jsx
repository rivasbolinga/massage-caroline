import React, { useState } from 'react'
import NavWrapper from './NavWrapper'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageButton from '../language-btn/LanguageButton';

const NavigationMobile = () => {
	const [isOpen, setOpen] = useState(false);
	const {t} = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname.split('/').reverse()[0];
	return (
    <NavWrapper>
      <div className="logo">
        <Link to="/">Logo</Link>
        <span title="Current Page">{!currentPath ? t('routes.home') : t(`routes.${currentPath}`)}</span>
      </div>
      
      <div className="burger">
        <LanguageButton />
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={15} />
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
            <Link to="/sophrology">{t('navigation.sophrology')}</Link>
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
