import React from 'react';
import './styles/About.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import imageCaroline from '../assets/images/image5.jpeg';
import imageHands from '../assets/images/image0 (1).jpeg';
import { useSelector } from 'react-redux';

const About = () => {
  const language = useSelector((state) => state.language);
  console.log(language)
  const { t } = useTranslation('translation', { lng:language })
	return (
    <>
      <main>
        <div className="images-container">
          <img className="image image2" alt="me" src={imageCaroline}></img>
          <img className="image image1" src={imageHands}></img>
        </div>
        <div className="about-me-container">
          <h1 className="about-me-title">{t('about.about-me')}</h1>
          <h3 className="about-me-name">{t('about.name')}</h3>
          <div className='about-me-text'>
            <p>{t('about.my-work')}</p>
          </div>
  
          <Link to="/massages#top" type="button" className="massages-button">
            LES MASSAGES
            <BsArrowRight />
          </Link>
        </div>
      </main>
    </>
  )
}

export default About
