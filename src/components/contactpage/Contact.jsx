import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiTimeFive } from 'react-icons/bi';
import SocialLogos from '../features/social/SocialLogos';
import '../styles/Contact.scss';
import Map from '../features/map/Map';
import Form from './From';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-section">
      <h1
        className="contact-title"
        title={t('navigation.contact')}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contact
      </h1>
      <main className="contact-main">
        <article
          className="hours-location-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="opening-hours-container">
            <h2
              className="opening-hours-title"
              title={t('contact.opening-hours')}
            >
              {t('contact.opening-hours')}
            </h2>
            <div className="title-line" />
            <div className="opening-hours-text-container">
              <h3 className="week-days" title={t('tooltips.contact.days')}>
                {t('contact.week-days')}
              </h3>
              <div className="hours-div">
                <BiTimeFive className="time-icon" />
                <p className="hours" title={t('tooltips.contact.time')}>
                  {t('contact.week-days-hours')}
                </p>
              </div>
              <h3
                className="saturday-wednesday"
                title={t('tooltips.contact.days')}
              >
                {t('contact.saturday-wednesday')}
              </h3>
              <div className="hours-div">
                <BiTimeFive className="time-icon" />
                <p className="hours" title={t('tooltips.contact.days')}>
                  {t('contact.weekend-hours')}
                  {' '}
                </p>
              </div>
              <h3 className="sunday" title={t('tooltips.contact.days')}>
                {t('contact.sunday')}
              </h3>
              <p className="hours" title={t('tooltips.contact.close')}>
                {t('contact.close')}
              </p>
            </div>
          </div>
        </article>
        <article
          className="location-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 title={t('contact.address')}>{t('contact.address')}</h2>
          <div className="title-line" />
          <p className="location-text" title={t('contact.address')}>
            606 route de la Télécabine 01170 Crozet
          </p>
          <div className="map-container" title={t('tooltips.contact.map')}>
            <Map />
          </div>
        </article>
        <article
          className="contact-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <article className="phone-container">
            <h3 className="phone-title" title={t('contact.phone')}>
              {t('contact.phone')}
            </h3>
            <div className="title-line" />
            <p className="phone-number" title={t('contact.phone')}>
              0033/6 74 81 20 09
            </p>
            <p
              className="contact-text"
              title={t('tooltips.contact.contact-me')}
            >
              {t('contact.contact-text')}
            </p>
            <SocialLogos />
          </article>
        </article>
        <Form />
      </main>
    </section>
  );
};

export default Contact;
