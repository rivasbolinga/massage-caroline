import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import TitleWrap from "../../styles/HomeTitle";

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://dummyimage.com/400x300/fff/7CFC00",
          feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'
        },
        {
          img: "https://dummyimage.com/400x300/0f8/ccccc",
          feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'
        },
        {
          img: "https://dummyimage.com/400x300/595/dddddd",
          feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'
        },
        {
          img: "https://dummyimage.com/400x300/808/fff",
          feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'
        },
      ]
    };
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
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
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div id="feedback">
        <TitleWrap className="about-title">
          <h2>Costumer Feedback</h2>
        </TitleWrap>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index} className="image-wrap">
                <img src={slide.img} alt={`slide${index}`} />
                <div className="quotes">{slide.feedback}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Feedback;
