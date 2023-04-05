import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../assets/massage-banners/banner-1.webp';
import banner2 from '../../../assets/massage-banners/banner-2.jpg';
import banner3 from '../../../assets/massage-banners/banner-3.avif'
import styled from 'styled-components';

const Carousel = () => {
  const images = [
    banner1,
    banner2,
    banner3
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <CarouselWrap>
      <Slider {...settings} >
        {images.map((item, index) => <img key={index} src={item} alt="Banner Carousel" />)}
      </Slider>
    </CarouselWrap>
  )
}

const CarouselWrap = styled.div`
  .slick-slider {
    width: 100%;
    margin: 0;
    img {
      width: 100%;
      height: 80vh;
      margin: auto 0;
      @media screen and (max-width: 768px) {
        height: 90vh;
      }
    }
  }

  .slick-slide {
    padding: 0;
    margin: 0;
  }

  .slick-list {
    margin: 0;
  }
`

export default Carousel
