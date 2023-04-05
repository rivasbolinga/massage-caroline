import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../assets/massage-banners/banner-1.webp';
import banner2 from '../../../assets/massage-banners/banner-2.jpg';
import banner3 from '../../../assets/massage-banners/banner-3.avif'
import styled from 'styled-components';

const Carousel = () => {
  const peelers = [
    {
      image: banner1,
      quote: `Want to Relax, <br /> you are at right place`,
      style: {backgroundColor:'rgba(255, 255, 255, 20%)',color: '#D25C33', top: 0, right: 0, borderRadius: "2rem 0 0 2rem"}
    },
    {
      image: banner2,
      quote: `We don't compromise <br />in costumer comfort`,
      style: {backgroundColor:'rgba(255, 255, 255, 20%)',color: '#30221E', bottom: 0, right: 0, borderRadius: "2rem 0 0 2rem"}
    },
    {
      image: banner3,
      quote: `We can beautify your <br /> each muscles`,
      style: {backgroundColor:'rgba(255, 255, 255, 20%)',color: '#D25C33', bottom: 0, left: 0, borderRadius: "0 2rem 2rem 0"}
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <CarouselWrap>
      <Slider {...settings} >
        {peelers.map((item, index) => (
        <div className="carousel">
          <img key={index} src={item.image} alt="Banner Carousel" />
          <h1 style={item.style} className="carousel-title" dangerouslySetInnerHTML={{ __html: item.quote }}></h1>
        </div>))}
      </Slider>
    </CarouselWrap>
  )
}

const CarouselWrap = styled.div`
  .carousel {
    position: relative;
    width: 100%;
    height: 80vh;
  }
  .slick-slider {
    width: 100%;
    margin: 0;
    img {
      width: 100%;
      height: 80vh;
      position: absolute;
      margin: auto 0;
      z-index: -1;
      @media screen and (max-width: 768px) {
        height: 90vh;
      }
    }

    h1 {
      display: inline-block;
      position: absolute;
      z-index: 3;
      font-size: 5rem;
      padding: 1rem;
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
