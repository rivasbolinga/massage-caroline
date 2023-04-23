import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import TitleWrap from '../../styles/HomeTitle';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  const feedbacks = [
    {
      id: 0,
      image: '',
      name: '',
      star: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 1,
      image: '',
      name: '',
      star: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 2,
      image: '',
      name: '',
      star: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
    {
      id: 3,
      image: '',
      name: '',
      star: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus corrupti debitis accusamus quaerat tempore, facilis inventore a doloribus nihil sequi nam exercitationem id. Ratione, numquam distinctio! Assumenda, delectus laudantium.',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
  padding: 0;

  h2 {
    margin: 0;
  }
`;

export default Feedback;
