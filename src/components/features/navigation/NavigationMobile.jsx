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
  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-mobile">
        {isOpen ? null : (
          <Link to="/">
            <img className="logo-navbar" alt="logo" src={Logo} />
          </Link>
        )}
        <div className="burger-container">
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
      </div>
      <div
        role="button"
        tabIndex="0"
        onClick={handleMenuClick}
        onKeyDown={handleMenuClick}
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
      >
        <ul className="menu">
          <li className="logo-in-menu">
            <Link to="/">
              <img className="logo-mobile-popup" alt="logo" src={Logo} />
            </Link>
          </li>
          <li className="nav-item" aria-label="Accueil">
            <Link to="/" onClick={handleMenuClick} onKeyDown={handleMenuClick}>
              {t('navigation.home')}
            </Link>
          </li>
          <li className="nav-item" aria-label="À propos de nous">
            <Link
              to="/massages"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {t('navigation.massages')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sophrology"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {t('navigation.sophrology')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {t('navigation.about-me')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {t('navigation.contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMobile;
