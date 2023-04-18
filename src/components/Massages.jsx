import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/home-massage-pics/banner.png';
import Banner from './features/home-carousel/Banner';
import TitleWrap from './styles/HomeTitle';

const Massages = () => (
  <>
    <Banner
      massage
      index={1}
      item={
        {
          image: bannerImg,
          style: {
            backgroundColor: 'rgba(255, 255, 255, 20%)',
            color: '#D25C33',
            top: 0,
            left: 0,
            borderRadius: '2rem 0 0 2rem',
          },
          quote: `${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!'}`,
        }
}
    />
    <MainWrapper>
      <section className="massages-section">
        <TitleWrap>
          <h2>Massages WE Offer</h2>
          <p className="description">You are our valuable customer choice A massage that suits your body</p>
        </TitleWrap>
        <div className="massage-container" />
      </section>
    </MainWrapper>
  </>
);

const MainWrapper = styled.main`
  margin: 0;
  padding: 0;
  .massages-section {
    width: 100%;
    background: rgb(231,221,221);
    background: radial-gradient(circle, rgba(231,221,221,0.7792366946778712) 59%, rgba(242,210,189,1) 100%);
    h2 {
      margin: 1rem 0 0 0 !important;
    }
  }
  .description {
    text-align: center;
    margin-bottom: 1rem;
    padding: 0;
  }

  .massage-container {
    width: 80%
    margin: 0 auto;
  }
`;

export default Massages;
