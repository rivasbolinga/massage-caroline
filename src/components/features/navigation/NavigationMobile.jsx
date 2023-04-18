import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavWrapper from './NavWrapper';
import LanguageButton from '../language-btn/LanguageButton';
import Logo from '../../../assets/icons/logo2.jpeg';

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <div className="logo">
        <Link to="/">
          <img className="logo-navbar" alt="logo" src={Logo} />
        </Link>
      </div>

      <div className="burger">
        <LanguageButton />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          size={20}
        />
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/">
            <img className="logo-mobile" alt="logo" src={Logo} />
          </Link>
          <ul className="menu">
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
    </NavWrapper>
  );
};

export default NavigationMobile;
