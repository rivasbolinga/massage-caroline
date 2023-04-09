import React, { useState } from 'react'
import NavWrapper from './NavWrapper'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageButton from '../language-btn/LanguageButton';
import deck1 from '../../../assets/images/image0 (1).jpeg';
import deck2 from '../../../assets/images/image1.jpeg';

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
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
        <div className="mobile-menu">
          <div className="mobile-logo" onClick={() => setOpen(false)}>
            <Link to="/">Logo</Link>
          </div>

          <div className="deck one">
            <img src={deck1} alt="decks" />
          </div>
          <div className="deck two">
            <img src={deck2} alt="decks" />
          </div>
          <div className="deck three">
            <img src={deck1} alt="decks" />
          </div>

          <ul className="menu">
            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/">{t('navigation.home')}</Link>
            </li>

            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/bookings">{t('navigation.bookings')}</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/massages">{t('navigation.massages')}</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/sophrology">{t('navigation.sophrology')}</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/about">{t('navigation.about-me')}</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen(false)}>
              <Link to="/contact">{t('navigation.contact')}</Link>
            </li>
          </ul>
        </div>

      )}
    </NavWrapper>
  )
}

export default NavigationMobile
