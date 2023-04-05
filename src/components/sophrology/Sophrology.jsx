import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Sophrology.scss';
const Sophrology = () => {
	const { t } = useTranslation()
	return (
    <section className="sp-section">
      <header className="sophrology-title-container">
        <h1 className="sophrology-title">{t('sophrology.sophrology')}</h1>
        <div className="horizontal-line"></div>
      </header>
      <main className="sophrology-main">
        <div className="what-is">
          <h2 className="what-is-question">{t('sophrology.what-is')}</h2>
          <p className="what-is-text">{t('sophrology.what-description')}</p>
        </div>
        <div className="who-for">
          <h2 className="who-for-question">{t('sophrology.who-for')}</h2>
          <p className="who-description">{t('sophrology.who-description')}</p>
        </div>
        <div className="offer-container">
          <p className="offer-text">{t('sophrology.offer')}</p>
        </div>
        <div className="duration-container">
          <p className="duration-text">{t('sophrology.duration')}</p>
        </div>
        <div className="sessions">
          <p className="first-session">
            <p className="offer-text">{t('sophrology.first-session')}</p>
          </p>
          <p className="follow-up">
            <p className="offer-text">{t('sophrology.follow-up')}</p>
          </p>
        </div>
        <button className="book-now-btn"></button>
      </main>
    </section>
  )
}

export default Sophrology
