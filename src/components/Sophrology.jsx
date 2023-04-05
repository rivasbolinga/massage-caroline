import React from 'react'
import { useTranslation } from 'react-i18next'
const Sophrology = () => {
	const { t } = useTranslation()
	return (
    <div>
      <header>
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
          <p className="who-description">
            {t('sophrology.who-for-description')}
          </p>
          <div className="offer-container">
            <p className="offer-text">{t('sophrology.offer')}</p>
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
        </div>
      </main>
    </div>
  )
}

export default Sophrology
