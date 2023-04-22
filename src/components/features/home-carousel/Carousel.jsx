import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../assets/massage-banners/banner-1.webp';
import banner2 from '../../../assets/massage-banners/banner-2.jpg';
import banner3 from '../../../assets/massage-banners/banner-3.avif';
import Banner from './Banner';
import CarouselWrap from './CarouselWrap';

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
          <Banner item={item} index={index} key={item.quote} />
        ))}
      </Slider>
      <div className="center-hero">
        <img src="https://user-images.githubusercontent.com/103900838/232329006-da6685dd-e72a-4eb9-a15a-457d2d2b555d.png" alt="" />
        <h1 className="carousel-title">Caroline Aimé</h1>
        <p>Your Healer</p>
      </div>

    </CarouselWrap>
  );
};

export default Carousel;
