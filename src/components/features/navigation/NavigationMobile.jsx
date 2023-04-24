import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageButton from '../language-btn/LanguageButton';
import Logo from '../../../assets/icons/logo2.jpeg';
import '../../styles/NavigationMobile.scss';

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="nav-mobile">
      <div title={t('tooltips.navigation.logo')} className="logo-mobile">
        <Link to="/">
          <img className="logo-navbar-mobile" alt="logo" src={Logo} />
        </Link>
      </div>

      <div title={t('tooltips.navigation.menu-button')} className="burger-container">
        <LanguageButton />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          color="black"
          size={20}
          className="hamburger-icon"
        />
      </div>
      {isOpen && (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/">
            <img title={t('tooltips.navigation.logo')} className="logo-mobile-popup" alt="logo" src={Logo} />
          </Link>
          <ul className="menu">
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(false);
                  }
                }}
                to="/"
              >
                {t('navigation.home')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(false);
                  }
                }}
                to="/massages"
              >
                {t('navigation.massages')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(false);
                  }
                }}
                to="/sophrology"
              >
                {t('navigation.sophrology')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(false);
                  }
                }}
                to="/about"
              >
                {t('navigation.about-me')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link
                tabIndex="0"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(false);
                  }
                }}
                to="/contact"
              >
                {t('navigation.contact')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMobile;
