import React from 'react'
import bannerImg from '../assets/home-massage-pics/banner.png'
import Banner from './features/home-carousel/Banner'

const Massages = () => {
  return (
    <>
      <Banner massage index={1} item={
        {
          image: bannerImg,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 20%)',
            color: '#D25C33',
            top: 0,
            left: 0,
            borderRadius: "2rem 0 0 2rem",
          },
          quote: `${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'}`,
        }} />
      <main>
        <h1>Hello from home</h1>
      </main>
    </>
  )
}

export default Massages
