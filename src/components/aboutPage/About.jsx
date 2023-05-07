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
<<<<<<< HEAD
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
=======
          <h1 className="about-me-title">{t('about.about-me')}</h1>
          <h3 className="about-me-name">{t('about.name')}</h3>
          <div className="about">
            <img className="image-about" alt="me" src={me} />
            <div className="about-me-text">
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
>>>>>>> d54de5f4149899067f32191d0b1ab4695b3069d6
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
