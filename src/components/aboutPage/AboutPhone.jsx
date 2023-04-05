import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/AboutPhone.scss';
import AboutImages from "../features/aboutImages/AboutImages";
import { useState } from 'react';
import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai';
import styled from "styled-components";

const AboutPhone = ({ home }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <AboutWrap home={home}>
      <div className="about-container">
        <h1 className="about-title">{t('about.about-me')}</h1>
        <div className="line-title"></div>
        <h3 className="about-name">{t('about.name')}</h3>
        <div className="about-text">
          <p>{t('about.my-work')}</p>
          <p>{t('about.techniques')}</p>
          {showMore && <p>{t('about.passionate')}</p>}
          <button onClick={handleClick} className="read-more-btn">
            {showMore ? t('about.see-less') : t('about.read-more')}
            {showMore ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
          </button>
        </div>
      </div>
      <AboutImages />
      {!home && <div className="button-container">
        <button type="button">
          <Link to="/massages#top" className="massages-btn">
            {t('about.go-massages')}
            <BsArrowRight className="arrow" />
          </Link>
        </button>
      </div>}
    </AboutWrap>
  )
}
const AboutWrap = styled.main`
  @media screen and (max-width: 768px) {
    .about-title {
      border-radius: ${props => props.home ? '15px' : '0px'};
    }

    .about-text {
      text-align: ${props => props.home ? 'left' : 'center'} !important;
    }
  }

`;

export default AboutPhone;