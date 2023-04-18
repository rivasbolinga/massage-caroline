import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import banner1 from '../../../assets/massage-banners/banner-1.webp';
import banner2 from '../../../assets/massage-banners/banner-2.jpg';
import banner3 from '../../../assets/massage-banners/banner-3.avif';
import Banner from './Banner';

const Carousel = () => {
  const peelers = [
    {
      image: banner1,
      quote: 'Want to Relax, <br /> you are at <br /> right place',
      style: {
        backgroundColor: 'rgba(255, 255, 255, 20%)', color: '#D25C33', top: 0, right: 0, borderRadius: '2rem 0 0 2rem',
      },
    },
    {
      image: banner2,
      quote: 'We don\'t compromise <br />in costumer comfort',
      style: {
        backgroundColor: 'rgba(255, 255, 255, 20%)', color: '#30221E', bottom: '15%', right: 0, borderRadius: '2rem 0 0 2rem',
      },
    },
    {
      image: banner3,
      quote: 'We can beautify your <br /> each muscles',
      style: {
        backgroundColor: 'rgba(255, 255, 255, 20%)', color: '#D25C33', bottom: '15%', left: 0, borderRadius: '0 2rem 2rem 0',
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <CarouselWrap data-aos="fade-down" data-aos-duration="1000">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        initialSlide={settings.initialSlide}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
      >
        {peelers.map((item, index) => (
          <Banner item={item} index={index} key={item} />
        ))}
      </Slider>
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  .carousel {
    position: relative;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 426px) {
      height: 50vh !important;
    }
  }
  .slick-slider {
    width: 100%;
    margin: 0;
    }
  }

  img {
    width: 100%;
    height: 90vh;
    position: absolute;
    margin: auto 0;
    z-index: -1;
    @media screen and (max-width: 768px) {
      height: 90vh;
    }

    @media screen and (max-width: 426px) {
      height: 50vh !important;
    }
  }

  h1 {
    display: inline-block;
    position: absolute;
    z-index: 3;
    font-size: 4rem;
    padding: 1rem;

    @media screen and (max-width: 769px) {
      font-size:${(props) => (props.massage ? '2.4rem' : '2.5rem')};
      bottom:${(props) => (props.massage ? '0' : '5% !important')} ;
      top:${(props) => (props.massage ? '15% !important' : '60% !important')};
    }

    @media screen and (max-width: 426px) {
      font-size: 1.5rem;
      font-weight: 800;
      line-spacing: 200;
    }

  .slick-slide {
    padding: 0;
    margin: 0;
  }

  .slick-list {
    margin: 0;
  }

  .banner-massage {
    width: 100%;
    height: 90vh;
  }
`;

export { Carousel, CarouselWrap };
