import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavWrapper from './NavWrapper'
import LanguageButton from '../language-btn/LanguageButton';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { t } = useTranslation();
  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <NavWrapper className="nav-bar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="menu">
        <li className="nav-item">
          <Link to="/">{t('navigation.home')}</Link>
        </li>
        <li className="nav-item">
          <Link to="/bookings">{t('navigation.bookings')}</Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseLeave}
        >
          {t('navigation.services')}
          {isDropdownOpen && (
            <div className="dropdown" onMouseLeave={handleMouseLeave}>
              <Link to="/massages">{t('navigation.massages')}</Link>
              <Link to="/gift-card">{t('navigation.gift-card')}</Link>
              <Link to="/sophrology">{t('navigation.sophrology')}</Link>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link to="/about">{t('navigation.about-me')}</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">{t('navigation.contact')}</Link>
        </li>
        <LanguageButton />
      </ul>
      <Outlet />
    </NavWrapper>
  )
}

export default Navigation
