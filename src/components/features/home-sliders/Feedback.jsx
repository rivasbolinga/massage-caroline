import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import TitleWrap from '../../styles/HomeTitle';
import FeedbackCard from './FeedbackCard';
import costumer1 from '../../../assets/customer-1.png';
import costumer2 from '../../../assets/customer-2.png';
import costumer3 from '../../../assets/customer-3.png';

const Feedback = () => {
  const { t } = useTranslation();
  const feedbacks = [
    {
      id: 0,
      image: costumer1,
      name: 'Annie Ranoux',
      star: 5,
      description:
        'Je me suis senti tellement détendu et revigoré après mon massage avec Caroline. Elle a une présence apaisante et a vraiment écouté mes préoccupations avant de commencer la séance. Je la recommanderais sans hésiter à quiconque recherche un excellent massage!',
    },
    {
      id: 1,
      image: costumer2,
      name: 'Ugo Climber',
      star: 5,
      description:
        "Je vois Caroline depuis plusieurs mois maintenant et je suis continuellement impressionné par son professionnalisme et son habileté. Elle m'a aidé à gérer mes douleurs chroniques et m'a donné des conseils précieux sur les soins personnels et les étirements à faire à la maison. Je repars toujours en me sentant mieux qu'à mon arrivée.",
    },
    {
      id: 2,
      image: costumer3,
      name: 'Oceane Guede',
      star: 4,
      description:
        "J'ai eu une expérience merveilleuse avec Caroline. Elle m'a mis à l'aise dès que je suis entré et son massage était à la fois thérapeutique et relaxant. Son attention aux détails et sa concentration sur les zones à problèmes la distinguent vraiment des autres massothérapeutes que j'ai vus. Je ne peux pas la recommander assez",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <FeedbackWrap>
      <TitleWrap><h2 title={t('tooltips.feedback.title')}>{t('tooltips.feedback.title')}</h2></TitleWrap>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        initialSlide={settings.initialSlide}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        responsive={settings.responsive}
      >
        {feedbacks.map((item, index) => (
          <FeedbackCard
            key={item.id}
            id={item.id}
            index={index}
            image={item.image}
            name={item.name}
            star={item.star}
            description={item.description}
          />
        ))}
      </Slider>
    </FeedbackWrap>
  );
};

const FeedbackWrap = styled.section`
  background: rgb(231,221,221);
  margin: 0;
  padding: 5rem;
  h2 {
    margin: 0;
    font-size: 2.5rem;

  }

  @media screen and (max-width: 596px) {
    h2 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 426px) {
    padding: 3rem 0;
    h2{
      font-size: 1.8rem;
    }
    
  }
`;

export default Feedback;
