import React from 'react';
import '../styles/About.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutImages from '../features/aboutImages/AboutImages'

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <main data-aos="fade-up"
        data-aos-duration="1000">
        <AboutImages />
        <div className="about-me-container">
          <h1 className="about-me-title">{t('about.about-me')}</h1>
          <h3 className="about-me-name">{t('about.name')}</h3>
          <div className="about-me-text">
            <p>{t('about.my-work')}</p>
            <br></br>
            <p>{t('about.techniques')}</p>
            <br></br>
            <p>{t('about.passionate')}</p>
          </div>
          <div className="button-container">
            <Link to="/massages#top" type="button" className="massages-button">
              {t('about.go-massages')}
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
