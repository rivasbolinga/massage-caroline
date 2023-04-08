import React from 'react'
import SliderComponents from './features/home-sliders/SliderComponent';
import Carousel from './features/home-carousel/Carousel';
import About from './aboutPage/About'
import AboutPhone from './aboutPage/AboutPhone';
import { useState, useEffect } from 'react';
import Feedback from './features/home-sliders/Feedback';

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Carousel />
      {width<768?<AboutPhone home />:<About />}
      <SliderComponents />
      <Feedback />
    </>
  )
}

export default Home


