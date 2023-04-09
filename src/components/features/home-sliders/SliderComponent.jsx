import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import TitleWrap from "../../styles/HomeTitle";
import img1 from '../../../assets/home-massage-pics/massage-1.jpg'
import img2 from '../../../assets/home-massage-pics/massage-2.jpg'
import img3 from '../../../assets/home-massage-pics/massage-4.jpg'
import img4 from '../../../assets/home-massage-pics/massage-3.jpg'
import img5 from '../../../assets/home-massage-pics/massage-5.jpg'
import img7 from '../../../assets/massage-banners/banner-2.jpg'
import img8 from '../../../assets/massage-banners/banner-1.webp'
import img9 from '../../../assets/massage-banners/banner-3.avif'
import img10 from '../../../assets/images/image5.jpeg'
import backgroundImage from "../../../assets/massage-banners/background-makups.jpg";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img3
        },
        {
          img: img4
        },
        {
          img: img5
        },
        {
          img: img7
        },
        {
          img: img8
        },
        {
          img: img9
        },
        {
          img: img10
        }
      ]
    };
  }
  render() {
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
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.img} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
