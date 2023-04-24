import React from 'react';
import '../styles/About.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <main
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="about-me-container">
          <h1 title={t('about.about-me')} className="about-me-title">{t('about.about-me')}</h1>
          <h3 title={t('tooltips.carousel.name')} className="about-me-name">{t('about.name')}</h3>
          <div title={t('tooltips.about.description')} className="about-me-text">
            <p>{t('about.my-work')}</p>
            <br />
            <p>{t('about.techniques')}</p>
            <br />
            <p>{t('about.passionate')}</p>
          </div>
          <div title={t('tooltips.navigation.nav-link')} className="button-container">
            <Link to="/massages#top" type="button" className="massages-button">
              {t('about.go-massages')}
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
