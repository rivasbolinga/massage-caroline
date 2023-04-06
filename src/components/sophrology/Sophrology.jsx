import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Sophrology.scss';
import { Link } from 'react-router-dom';
import MassageIcon from '../../assets/icons/massage.png';
import MassageIconFace from '../../assets/icons/massage (1).png';

const Sophrology = () => {
	const { t } = useTranslation()
	return (
    <section className="sp-section">
      <header className="sophrology-title-container">
        <h1 className="sophrology-title">{t('sophrology.sophrology')}</h1>
        <div className="horizontal-line"></div>
      </header>
      <main className="sophrology-main">
        <div className="explanation-container">
          <div className="what-is">
            <h2 className="what-is-question">{t('sophrology.what-is')}</h2>
            <p className="what-is-text">{t('sophrology.what-description')}</p>
          </div>
          <div className="who-for">
            <h2 className="who-for-question">{t('sophrology.who-for')}</h2>
            <p className="who-description">{t('sophrology.who-description')}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            alt="sophrology chart"
            className="sp-image"
            src="https://be-sophro.com/wp-content/uploads/2023/01/What-is-Sophrology-Infographic-960x960.png"
          ></img>
          <div className="extra-info-container">
            <div className="offer-container">
              <p className="offer-text">{t('sophrology.offer')}</p>
            </div>
            <div className="duration-container">
              <p className="duration-text">{t('sophrology.duration')}</p>
            </div>
          </div>
        </div>
        <div className="sessions-container">
          <div className="icon-div">
            <img
              className="massage-icon"
              src={MassageIcon}
              alt="massage icon"
            ></img>
          </div>
          <div className="sessions">
            <div className="first-session">
              <i className="fa-solid fa-circle-dot"></i>
              <p className="first-text">{t('sophrology.first-session')}</p>
            </div>
            <div className="follow-up">
              <i className="fa-solid fa-circle-dot"></i>
              <p className="follow-text">{t('sophrology.follow-up')}</p>
            </div>
          </div>
        </div>

        <Link to="/bookings">
          <button className="book-now-btn">Book now</button>
        </Link>
      </main>
    </section>
  )
}

export default Sophrology
