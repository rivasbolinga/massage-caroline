import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import TitleWrap from '../../styles/HomeTitle';
import ProductCard from './ProductCard';

const ProductSlider = () => {
  const { t } = useTranslation();
  const massagesData = useSelector((store) => store.massageReducer.massagesData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="massages">
      <TitleWrap className="about-title">
        <h2>{t('navigation.massages')}</h2>
      </TitleWrap>

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
        {massagesData.map((slide) => (
          <div data-aos="flip-left" data-aos-duration="2000" key={slide.id}>
            <ProductCard imgSrc={slide.image} data={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
