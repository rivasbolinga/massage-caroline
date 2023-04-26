import React from 'react';
import SliderComponents from './features/home-sliders/SliderComponent';
import Carousel from './features/home-carousel/Carousel';
import About from './aboutPage/About';
import Feedback from './features/home-sliders/Feedback';

const Home = () => (
  <>
    <Carousel />
    <About />
    <SliderComponents />
    <Feedback />
  </>
);

export default Home;
