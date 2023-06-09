import React from 'react';
import '../styles/About.scss';
import { useTranslation } from 'react-i18next';
import me from '../../assets/images/image5.jpeg';
import SocialLogos from '../features/social/SocialLogos';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="about-main" data-aos="fade-up" data-aos-duration="1000">
        <div className="about-me-container">
          <h1 className="about-me-title" title={t('about.about-me')}>
            {t('about.about-me')}
          </h1>
          <h3 className="about-me-name" title={t('tooltips.carousel.name')}>
            {t('about.name')}
          </h3>
          <div className="about">
            <img className="image-about" alt="me" src={me} />
            <div
              className="about-me-text"
              title={t('tooltips.about.description')}
            >
              <p>{t('about.my-work')}</p>
              <br />
              <p>{t('about.techniques')}</p>
              <br />
              <p>{t('about.passionate')}</p>
              <br />
              <br />
              <SocialLogos color="#D25C33" className="social-logos" />
              <br />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
