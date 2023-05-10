import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialLogos from '../social/SocialLogos';
import Logo from '../../../assets/icons/logo2.jpeg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterWrap>
      <div className="footer-container">
        <div className="footer-item">
          <h3 title={t('footer.touch')}>{t('footer.touch')}</h3>
          <ul className="footer-list">
            {/* Andrea first you have to go here it's important for you */}
            <li title={t('tooltips.footer.address')}>
              <a
                href="https://goo.gl/maps/qrTwinB554XdUAet8"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-location-dot" />
                606 route de la Télécabine, 01170 Crozet
              </a>
            </li>
            <li title={t('tooltips.footer.number')}>
              <a href="tel:0033674812009">
                <i className="fa-solid fa-phone-volume" />
                {' '}
                0033/ 674812009
              </a>
            </li>
            <li title={t('tooltips.footer.email')}>
              <a href="mailto:info@example.com">
                <i className="fa-solid fa-envelope-open" />
                {' '}
                info@example.com
              </a>
            </li>
          </ul>
          <div className="logo-wrap">
            <div className="client">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <SocialLogos color="rgb(246,232,225)" />
          </div>
        </div>
        <div className="footer-item">
          <h3 title={t('footer.links')}>{t('footer.links')}</h3>
          <ul className="footer-list">
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link to="#top">
                <i className="fa-solid fa-angle-right" />
                {' '}
                {t('footer.home')}
                {' '}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link to="/massages">
                <i className="fa-solid fa-angle-right" />
                {' '}
                Massages
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link to="/sophrology">
                <i className="fa-solid fa-angle-right" />
                {' '}
                {t('navigation.sophrology')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link to="/about">
                <i className="fa-solid fa-angle-right" />
                {' '}
                {t('navigation.about-me')}
              </Link>
            </li>
            <li title={t('tooltips.navigation.nav-link')} className="nav-item">
              <Link to="/contact">
                <i className="fa-solid fa-angle-right" />
                {' '}
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-item form">
          <h3>Contact</h3>
          <form
            title={t('tooltips.footer.form')}
            action="https://formspree.io/f/xqkoyerk"
            method="post"
          >
            <div className="from-container">
              <input
                title={t('tooltips.footer.name')}
                name="Visitor Name"
                type="text"
                maxLength="30"
                placeholder={t('form.name')}
                required
              />
              <input
                name="email"
                type="email"
                maxLength="70"
                placeholder={t('form.email')}
                required
              />
              <textarea
                title={t('tooltips.footer.massages')}
                name="Massage"
                maxLength="300"
                placeholder={t('form.message')}
                type="text"
                required
              />
            </div>
            <button type="submit">Contact Developers</button>
          </form>
        </div>
      </div>
      <div className="copyright-section">
        <div title={t('tooltips.footer.copyright')}>
          © Caroline Massage Hub, All Right Reserved.
        </div>
        <div title={t('tooltips.footer.developers')}>
          Design by
          {' '}
          <a
            href="https://www.linkedin.com/in/andrearivaspalacios/"
            target="_blank"
            rel="noreferrer"
          >
            Andrea
          </a>
          {' '}
          and
          {' '}
          <a
            href="https://www.linkedin.com/in/adarsh-pathak-powerlevel/"
            target="_blank"
            rel="noreferrer"
          >
            Adarsh
          </a>
        </div>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  padding: 4rem 0 0 0;
  background-color: #292929;
  h3, a {
    color: rgb(246, 232, 225);
  }
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      gap: 1rem;
    }
  }

  .client {
    display: grid;
    place-items: center;
    @media screen and (max-width: 390px) {
      width: 75px;
      height: 70px;
    }
  }

  .logo-wrap {
    display: flex;
    gap: 2rem;
    align-items: center;
    img {
      width: 80px;
    }
  }
  .footer-item {
    display: flex;
    min-width: 100px;
    flex-direction: column;
    .footer-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    margin: 0.5rem 1rem;
    @media screen and (max-width: 676px) {
      width: 70%;
    }
  }
  .from-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    margin: 0.5rem 0;
    padding: 0.2rem;
    border: none;
    border-radius: 5px;
  }

  .form {
    width: 30%;
    input,
    textarea {
      width: 100%;
      padding: 0.2rem;
      font-style: italic;
      background: rgb(255, 237, 219);
      background: linear-gradient(
        342deg,
        rgba(255, 237, 219, 1) 100%,
        rgba(237, 205, 187, 1) 48%,
        rgba(191, 146, 112, 1) 0%
      );
    }

    @media screen and (max-width: 1054px) {
      width: 70%;
    }
  }
  a {
    text-decoration: none;
  }

  .copyright-section {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    @media screen and (max-width: 564px) {
      border: 1px solid black;
      gap: 0.5rem;
      flex-direction: column;
    }
  }
`;

export default Footer;
