import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
   const { t } = useTranslation()
  return (
    <section className="contact-section">
      <article className="contact-title">Contact</article>
      <article className="hours-location-container">
        <div className="opening-hours-container">
          <h2 className="opening-hours-title">{t('contact.opening-hours')}</h2>
          <div className="opening-hours-text-container">
            <h3 className="week-days">{t('contact.week-days')}</h3>
            <p className="week-days-hours">{t('contact.week-days-hours')}</p>
            <h3 className=""></h3>
            <h3 className=""></h3>
            <p className=""></p>
            <h3 className=""></h3>
          </div>
        </div>
      </article>
      <article className="contact-container"></article>
    </section>
  )
}

export default Contact
