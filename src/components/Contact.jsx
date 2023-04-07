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
            <h3 className="saturday-wednesday">
              {t('contact.saturday-wednesday')}
            </h3>
            <p className="saturday-wednesday-hours">
              {t('contact.saturday-wednesday-hours')}
            </p>
            <h3 className="sunday">{t('contact.sunday')}</h3>
            <p className="close">
              {t('contact.close')}
            </p>
          </div>
        </div>
      </article>
      <article className="contact-container"></article>
    </section>
  )
}

export default Contact
