import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLogos from './features/social/SocialLogos';
import './styles/Contact.scss';
import { BiTimeFive } from 'react-icons/bi';
const Contact = () => {
   const { t } = useTranslation()
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
            <div className="title-line"></div>
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
          <div className="title-line"></div>
          <p className="location-text">
            606 route de la Télécabine 01170 Crozet
          </p>
          <div className="map-container">map here</div>
        </article>
        <article className="contact-container">
          <article className="phone-container">
            <h3 className="phone-title">{t('contact.phone')}</h3>
            <div className="title-line"></div>
            <p className="phone-number">0033/6 74 81 20 09</p>
            <p className="contact-text">{t('contact.contact-text')}</p>
            <SocialLogos />
          </article>
        </article>
        <div className=" form">
          <h3>{t('footer.touch')}</h3>
          <div className="title-line"></div>
          <p className="form-text">{t('contact.form')}</p>
          <form action="https://formspree.io/f/xqkoyerk" method="post">
            <div className="form-container">
              <input
                className="input name"
                name="Visitor Name"
                type="text"
                maxLength="30"
                placeholder="Your Name"
                required
              />
              <input
                className="input email"
                name="email"
                type="email"
                maxLength="120"
                placeholder="Your email"
                required
              />
              <textarea
                className="input textarea"
                name="Massage"
                maxLength="300"
                placeholder="Your message"
                type="text"
                required
              />
            </div>
          </form>
          <button className="book-now-btn submit" type="submit">
            Submit
          </button>
        </div>
      </main>
    </section>
  )
}

export default Contact
