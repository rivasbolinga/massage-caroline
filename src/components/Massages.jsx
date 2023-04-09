import React from 'react'
import bannerImg from '../assets/home-massage-pics/banner.png'
import Banner from './features/home-carousel/Banner'

const Massages = () => {
  return (
    <>
      <Banner index={1} item={
        {
          image: bannerImg,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 20%)',
            color: '#D25C33',
            top: 0,
            right: 0,
            borderRadius: "2rem 0 0 2rem",
          },
          quote: `Want to Relax, <br /> you are at <br /> right place`,
        }} />
      <main>
        <h1>Hello from home</h1>
      </main>
    </>
  )
}

export default Massages
