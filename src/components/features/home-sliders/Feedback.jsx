import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import TitleWrap from '../../styles/HomeTitle';
import FeedbackCard from './FeedbackCard';
import costumer from '../../../assets/customer.png';

const Feedback = () => {
  const feedbacks = [
    {
      id: 0,
      image: costumer,
      name: 'God Spartan',
      star: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 1,
      image: costumer,
      name: 'God Spartan',
      star: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 2,
      image: costumer,
      name: 'God Spartan',
      star: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 3,
      image: costumer,
      name: 'God Spartan',
      star: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
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
      <TitleWrap><h2>Customer Feedbacks</h2></TitleWrap>
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
