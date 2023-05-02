import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import MassageIcon from '../assets/icons/massage.png';
// import bgImage from '../assets/bc-images/background404.avif';

const Default404 = () => {
  const { t } = useTranslation();
  return (
    <DefaultWrap className="default">
      <div className="content">
        <h1>404</h1>
        <h2>{t('default.lost')}</h2>
      </div>
      <div className="buttons">
        <Link to="/"><button type="button">{t('default.button')}</button></Link>
      </div>

    </DefaultWrap>
  );
};

const DefaultWrap = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255,237,219);
  background: -moz-radial-gradient(circle, rgba(255,237,219,1) 0%, rgba(237,205,187,1) 48%, rgba(191,146,112,1) 100%);
  background: -webkit-radial-gradient(circle, rgba(255,237,219,1) 0%, rgba(237,205,187,1) 48%, rgba(191,146,112,1) 100%);
  background: radial-gradient(circle, rgba(255,237,219,1) 0%, rgba(237,205,187,1) 48%, rgba(191,146,112,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffeddb",endColorstr="#bf9270",GradientType=1);
  .content {
    text-align: center;
    h1 {
      font-size: 20rem;
      color: transparent;
      background: url("./massage-5.jpg");
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      background-size: 200% 200%;
      animation: gradient 10s ease infinite;
    }
    h2 {
      font-size: 5rem;
    }
  }
  button {
    font-size: 2rem;
  }

  @media screen and (max-width: 727px) {
    h1 {
      font-size: 12rem !important;
    }
    h2 {
      font-size: 3rem !important;
    }
  }

  @media screen and (max-width: 426px) {
    h1 {
      font-size: 10rem !important;
    }
  }
`;
export default Default404;
