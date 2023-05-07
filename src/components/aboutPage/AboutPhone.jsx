import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/AboutPhone.scss';
import { useState } from 'react';
import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai';
import styled from 'styled-components';

const AboutPhone = ({ home }) => { // eslint-disable-line
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <AboutWrap
      home={home}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="about-container">
        <h1 title={t('about.about-me')} className="about-title">{t('about.about-me')}</h1>
        <div className="line-title" />
        <h3 title={t('tooltips.carousel.name')} className="about-name">{t('about.name')}</h3>
        <div title={t('tooltips.about.description')} className="about-text">
          <p>{t('about.my-work')}</p>
          <p>{t('about.techniques')}</p>
          {showMore && <p>{t('about.passionate')}</p>}
          <button type="button" onClick={handleClick} className="read-more-btn">
            {showMore ? t('about.see-less') : t('about.read-more')}
            {showMore ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
          </button>
        </div>
      </div>
      {!home && (
        <div className="button-container">
          <button title={t('tooltips.navigation.nav-link')} type="button">
            <Link to="/massages#top" className="massages-btn">
              {t('about.go-massages')}
              <BsArrowRight className="arrow" />
            </Link>
          </button>
        </div>
      )}
    </AboutWrap>
  );
};

const AboutWrap = styled.main`
  button {
    display: ${(props) => (props.home ? 'none' : 'block')}
  }
  @media screen and (max-width: 768px) {
    .about-title {
      border-radius: ${(props) => (props.home ? '15px' : '0px')};
    }

    .about-text {
      text-align: ${(props) => (props.home ? 'left' : 'center')} !important;
    }
  }

`;

export default AboutPhone;
