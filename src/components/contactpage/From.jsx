import React from 'react';
import { useTranslation } from 'react-i18next';

const From = () => {
  const { t } = useTranslation();
  return (
    <div className=" form" data-aos="fade-up" data-aos-duration="1000">
      <h3>{t('footer.touch')}</h3>
      <div className="title-line" />
      <p className="form-text">{t('contact.form')}</p>
      <form action="https://formspree.io/f/xqkoyerk" method="post">
        <div className="form-container">
          <input
            className="input name"
            name="Visitor Name"
            type="text"
            maxLength="30"
            placeholder={t('form.name')}
            required
          />
          <input
            className="input email"
            name="email"
            type="email"
            maxLength="120"
            placeholder={t('form.email')}
            required
          />
          <textarea
            className="input textarea"
            name="Massage"
            maxLength="300"
            placeholder={t('form.message')}
            type="text"
            required
          />
        </div>
      </form>
      <button className="book-now-btn submit" type="submit">
        {t('contact.send')}
      </button>
    </div>
  );
};

export default From;
