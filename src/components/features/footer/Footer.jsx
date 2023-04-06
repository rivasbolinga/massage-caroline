import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import SocialLogos from '../social/SocialLogos';

const Footer = () => {

  const { t } = useTranslation()
  return (
    <FooterWrap>
      <div className="footer-container">
        <div className="footer-item">
          <h3>{t('footer.touch')}</h3>
          <ul className="footer-list">
            {/* Andrea first you have to go here it's important for you */}
            <li>
              <a
                href="https://goo.gl/maps/qrTwinB554XdUAet8"
                target="_blank"
                rel="noreferrer"
              >
                <i className='fa-solid fa-location-dot' /> 612 E Mitchell St,
                Kendallville, IN 46755, United States
              </a>
            </li>
            <li>
              <a href="tel:+012 345 67890">
                <i className="fa-solid fa-phone-volume" /> +012 345 67890
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com">
                <i className="fa-solid fa-envelope-open" /> info@example.com
              </a>
            </li>
          </ul>
          <div className="logo-wrap">
            <div className="client">
              <Link to="/">Logo</Link>
            </div>
            <SocialLogos color="#D25C33"/>
          </div>
        </div>
        <div className="footer-item">
          <h3>{t('footer.links')}</h3>
          <ul className="footer-list">
            <li className="nav-item">
              <Link to="#top">
                <i className="fa-solid fa-angle-right" />
                {t('footer.home')}{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings#top">
                <i className="fa-solid fa-angle-right" /> {t('footer.bookings')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/massages#top">
                <i className="fa-solid fa-angle-right" /> Massages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/syphilology#top">
                <i className="fa-solid fa-angle-right" /> Syphilology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gift-card#top">
                <i className="fa-solid fa-angle-right" /> Gift card
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about#top">
                <i className="fa-solid fa-angle-right" /> About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact#top">
                <i className="fa-solid fa-angle-right" /> Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-item form">
          <h3>Developer's Contact</h3>
          <form action="https://formspree.io/f/xqkoyerk" method="post">
            <div className="from-container">
              <input
                name="Visitor Name"
                type="text"
                maxLength="30"
                placeholder="Your Name"
                required
              />
              <input
                name="Purpose"
                type="text"
                maxLength="70"
                placeholder="Purpose of Contact"
                required
              />
              <textarea
                name="Massage"
                maxLength="300"
                placeholder="Massage"
                type="text"
                required
              />
            </div>
            <button type="submit">contact Developers</button>
          </form>
        </div>
      </div>
      <div className="copyright-section">
        <div>© Caroline Massage Hub, All Right Reserved.</div>
        <div>
          Design by{' '}
          <a
            href="https://www.linkedin.com/in/andrearivaspalacios/"
            target="_blank"
            rel="noreferrer"
          >
            Andrea
          </a>{' '}
          and{' '}
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
  )
}

const FooterWrap = styled.footer`
  margin: 1rem 0 0 0;
  padding: 4rem 0 0 0;
  background-color: #E1BDA7;
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
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: grid;
    place-items: center;

    @media screen and (max-width: 390px) {
      width: 40px;
      height: 40px;
    }
  }

  .logo-wrap {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .footer-item {
    display: flex;
    min-width: 100px;
    flex-direction: column;
    .footer-list {
      list-style-type:none;
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    margin: .5rem 1rem;
    @media screen and (max-width: 676px) {
      width: 70%;
    }
  }
  .from-container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
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
      padding: 0.2rem;
      font-style: italic;
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

export default Footer
