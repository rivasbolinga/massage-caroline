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
      <article className="contact-title-container">
        <h1 className="contact-title">Contact</h1>
      </article>
      <main className="contact-main">
        <article className="hours-location-container">
          <div className="opening-hours-container">
            <h2 className="opening-hours-title">
              {t('contact.opening-hours')}
            </h2>
            <div className="title-line" />
            <div className="opening-hours-text-container">
              <h3 className="week-days">{t('contact.week-days')}</h3>
              <div className="hours-div">
                <BiTimeFive className="time-icon" />
                <p className="hours">{t('contact.week-days-hours')}</p>
              </div>
              <h3 className="saturday-wednesday">
                {t('contact.saturday-wednesday')}
              </h3>
              <div className="hours-div">
                <BiTimeFive className="time-icon" />
                <p className="hours">{t('contact.weekend-hours')}</p>
              </div>
              <h3 className="sunday">{t('contact.sunday')}</h3>
              <p className="hours">{t('contact.close')}</p>
            </div>
          </div>
        </article>
        <article className="location-container">
          <h2>{t('contact.address')}</h2>
          <div className="title-line" />
          <p className="location-text">
            606 route de la Télécabine 01170 Crozet
          </p>
          <div className="map-container">
            <Map />
          </div>
        </article>
        <article className="contact-container">
          <article className="phone-container">
            <h3 className="phone-title">{t('contact.phone')}</h3>
            <div className="title-line" />
            <p className="phone-number">0033/6 74 81 20 09</p>
            <p className="contact-text">{t('contact.contact-text')}</p>
            <SocialLogos />
          </article>
        </article>
        <Form />
      </main>
    </section>
  );
};

export default Contact;
