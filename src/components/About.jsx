import React from 'react';
import './styles/About.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import imageCaroline from '../assets/images/image5.jpeg';
import imageHands from '../assets/images/image0 (1).jpeg';

const About = () => {
  const { t } = useTranslation();
	return (
    <>
      <main>
        <div className="images-container">
          <img className='image image2' alt="me" src={imageCaroline}></img>
          <img
            className="image image1"
            src={imageHands}
          ></img>
        </div>
        <div className="about-me-container">
          <h1 className="about-me-title">{t('Qui suis je')}</h1>
          <h3 className="about-me-name">Caroline Aimé</h3>
          <p className="about-me-text">
            Je travaille en tant que masseur depuis 2010, en commençant par une
            formation axée sur le bien-être, puis en me spécialisant dans la
            thérapie. <br></br>
            <br></br>
            Diverses techniques telles que la relaxation, l'anatomie palpatoire,
            ainsi que différents types de massage tels que le massage viscéral,
            détoxifiant et ayurvédique que j'ai appris en Inde, m'ont permis
            d'acquérir une dextérité particulière et une capacité à lire les
            corps. <br></br>
            <br></br>
            Passionné par mon travail, j'ai eu le privilège de travailler dans
            des établissements prestigieux à travers le monde et dans des
            cliniques privées en Suisse. <br></br> <br></br>
            Cela m'a conduit à vouloir explorer une approche plus subtile et
            émotionnelle grâce à la sophrologie. <br></br>
            <br></br>
            Je suis diplômé de l'école suisse de sophrologie caycédienne et je
            suis maintenant en mesure de vous offrir un soutien personnalisé
            basé sur nos deux aspects : l'esprit et le corps.
          </p>
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
