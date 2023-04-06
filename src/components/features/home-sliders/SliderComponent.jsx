import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import TitleWrap from "../../styles/HomeTitle";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        },
        {
          img: "https://dummyimage.com/600x400/000/fff"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
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
      initialSlide: 0,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div id="massages">
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
