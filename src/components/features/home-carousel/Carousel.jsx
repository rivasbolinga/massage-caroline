import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../assets/massage-banners/banner-c1.png';
import banner2 from '../../../assets/massage-banners/banner-c2.png';
import banner3 from '../../../assets/massage-banners/banner-c3.png';
import Banner from './Banner';
import CarouselWrap from './CarouselWrap';

const Carousel = () => {
  const peelers = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
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
        {peelers.map((item) => (
          <Banner item={item} key={item.image} />
        ))}
      </Slider>
      <div className="center-hero">
        <img src="https://user-images.githubusercontent.com/103900838/232329006-da6685dd-e72a-4eb9-a15a-457d2d2b555d.png" alt="" />
        <h1 className="carousel-title">Caroline Aimé</h1>
        <p>Healing</p>
      </div>
    </CarouselWrap>
  );
};

export default Carousel;
