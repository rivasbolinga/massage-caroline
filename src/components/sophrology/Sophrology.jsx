import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Sophrology.scss';
import styled from 'styled-components';
import MassageIcon from '../../assets/icons/massage.png';
import From from '../contactpage/From';

const Sophrology = () => {
  const { t } = useTranslation();
  return (
    <section className="sp-section">
      <header
        className="sophrology-title-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          title={t('sophrology.sophrology')}
          className="sophrology-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t('sophrology.sophrology')}
        </h1>
      </header>
      <main className="sophrology-main">
        <div className="explanation-container">
          <div className="what-is" data-aos="fade-up" data-aos-duration="1000">
            <h2 title={t('sophrology.what-is')} className="what-is-question">
              {t('sophrology.what-is')}
            </h2>
            <p title={t('tooltips.description')} className="what-is-text">
              {t('sophrology.what-description')}
            </p>
          </div>
          <div className="who-for" data-aos="fade-up" data-aos-duration="1000">
            <h2 title={t('sophrology.who-for')} className="who-for-question">
              {t('sophrology.who-for')}
            </h2>
            <p title={t('tooltips.description')} className="who-description">
              {t('sophrology.who-description')}
            </p>
          </div>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            title="Detail Chart"
            alt="sophrology chart"
            className="sp-image"
            src="https://be-sophro.com/wp-content/uploads/2023/01/What-is-Sophrology-Infographic-960x960.png"
          />
          <div className="extra-info-container">
            <div
              className="offer-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="offer-text" title={t('tooltips.sophrology.offer')}>
                {t('sophrology.offer')}
              </p>
            </div>
            <div
              className="duration-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                className="duration-text"
                title={t('tooltips.sophrology.time')}
              >
                {t('sophrology.duration')}
              </p>
            </div>
          </div>
        </div>
        <div className="sessions-container">
          <div className="icon-div" data-aos="fade-up" data-aos-duration="1000">
            <img
              title="icon"
              className="massage-icon"
              src={MassageIcon}
              alt="massage icon"
            />
          </div>
          <div
            className="sessions"
            title={t('tooltips.sophrology.price')}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="first-session">
              <i className="fa-solid fa-circle-dot" />
              <p className="first-text">{t('sophrology.first-session')}</p>
            </div>
            <div className="follow-up">
              <i className="fa-solid fa-circle-dot" />
              <p className="follow-text">{t('sophrology.follow-up')}</p>
            </div>
          </div>
        </div>
        <SpWrap>
          <From />
        </SpWrap>
      </main>
    </section>
  );
};

const SpWrap = styled.div`
  margin-top: 2rem !important;
  padding: 1rem;
  h3 {
    font-size: 1rem;
  }
`;

export default Sophrology;
