import React from 'react'
import SocialLogos from './features/social/SocialLogos'
import LanguageButton from './language-btn/LanguageButton';
import './styles/About.scss';

const About = () => {
	return (
    <>
      <LanguageButton />
      <main>
        <div className="images-container"></div>
        <div className="about-me-container">
          <h1 className="about-me-title">Qui suis je</h1>
          <h3 className="about-me-name">Caroline Aimé</h3>
          <p className="about-me-text">
            Je travaille en tant que masseur depuis 2010, en commençant par une
            formation axée sur le bien-être, puis en me spécialisant dans la
            thérapie.  Diverses techniques telles que la relaxation, l'anatomie
            palpatoire, ainsi que différents types de massage tels que le
            massage viscéral, détoxifiant et ayurvédique que j'ai appris en
            Inde, m'ont permis d'acquérir une dextérité particulière et une
            capacité à lire les corps. Passionné par mon travail, j'ai eu le
            privilège de travailler dans des établissements prestigieux à
            travers le monde et dans des cliniques privées en Suisse. Cela m'a
            conduit à vouloir explorer une approche plus subtile et émotionnelle
            grâce à la sophrologie. Je suis diplômé de l'école suisse de
            sophrologie caycédienne et je suis maintenant en mesure de vous
            offrir un soutien personnalisé basé sur nos deux aspects : l'esprit
            et le corps.
          </p>
        </div>
      </main>
      <div className="social-media-logos">
        <SocialLogos />
      </div>
    </>
  )
}

export default About
