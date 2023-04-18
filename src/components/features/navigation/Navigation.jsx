import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavWrapper from './NavWrapper';
import LanguageButton from '../language-btn/LanguageButton';
import Logo from '../../../assets/icons/logo2.jpeg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const handleScroll = () => {
    if (window.scrollY >= 800) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <NavWrapper className={`nav-bar ${isScrolled ? 'sticky' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img className="logo-navbar" alt="logo" src={Logo} />
        </Link>
      </div>
      <ul className="menu">
        <li className="nav-item">
          <Link to="/">{t('navigation.home')}</Link>
        </li>
        <li className="nav-item">
          <Link to="/massages">{t('navigation.massages')}</Link>
        </li>
        <li className="nav-item">
          <Link to="/sophrology">{t('navigation.sophrology')}</Link>
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
  );
};

export default Navigation;
