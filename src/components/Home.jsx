import React from 'react'
import SliderComponents from './features/home-sliders/SliderComponent';
import Carousel from './features/home-carousel/Carousel';
import About from './aboutPage/About'

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <SliderComponents />
    </>
  )
}

export default Home


