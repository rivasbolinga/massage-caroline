import React from 'react'
import { useSelector } from 'react-redux';
import backgroundImage from "../../../assets/massage-banners/background-makups.jpg"
import TitleWrap from '../../styles/HomeTitle';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductSlider = () => {
  const massagesData = useSelector(store => store.massageReducer.massagesData)
  console.log(massagesData)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="massages">
      <img src={backgroundImage} alt="" className="backgroundImage" />
      <TitleWrap className="about-title">
        <h2>Our Massages</h2>
      </TitleWrap>
      <Slider {...settings}>
        {massagesData.map((slide, index) => {
          return (
            <div data-aos="flip-left" data-aos-duration="2000" key={index}>
              <ProductCard imgSrc={slide.image} />
              {/* <img src={slide.img} alt={`slide${index}`} /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default ProductSlider
