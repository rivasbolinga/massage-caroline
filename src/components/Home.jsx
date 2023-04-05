import React from 'react'
import SliderComponents from './features/home-sliders/SliderComponent';
import Carousel from './features/home-carousel/Carousel';
import About from './aboutPage/About'

const Home = () => {
  return (
    <main>
      <Carousel />
      <About />
      <SliderComponents />
    </main>
  )
}

export default Home


