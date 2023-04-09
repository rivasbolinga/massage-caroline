import React from 'react';
import TitleWrap from '../../styles/HomeTitle';
import styled from 'styled-components';
import img1 from '../../../assets/home-massage-pics/massage-1.jpg'
import img2 from '../../../assets/home-massage-pics/massage-2.jpg'
import img3 from '../../../assets/home-massage-pics/massage-4.jpg'
import img4 from '../../../assets/home-massage-pics/massage-3.jpg'
import img5 from '../../../assets/home-massage-pics/massage-5.jpg'
import img6 from '../../../assets/home-massage-pics/banner.png'

const Gallery = () => {
  return (
    <WrapSection data-aos="fade-up"
      data-aos-duration="1000">
      <TitleWrap>
        <h2>Latest Work</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!</p>
      </TitleWrap>
      <div className="gallery">
        <div className="container-item">
          <div className="image-scale-hover">
            <img src={img1} alt="" />
          </div>
          <div className="image-scale-hover">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="container-item-big">
          <div className="image-scale-hover big">
            <div className="big-image">
              <img src={img3} alt="" />
            </div>
            <div className="gallery-pealed">
              <img src={img6} alt="" className="banner" />
              <div className="info">
                <TitleWrap><h2>we love to hear feedback</h2></TitleWrap >
                <TitleWrap ><h2>Want to try</h2></TitleWrap>
                <i className="fa-solid fa-handshake"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container-item">
          <div className="image-scale-hover">
            <img src={img4} alt="" />
          </div>
          <div className="image-scale-hover">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </WrapSection>
  )
}

const WrapSection = styled.section`
  p{
    text-align: center;
    width: 60%;
    margin: 0 auto 1rem auto;
    padding: 0;
    font-size: 1.5rem;
  }
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  background: rgb(231,221,221);
  background: radial-gradient(circle, rgba(231,221,221,0.7792366946778712) 59%, rgba(242,210,189,1) 100%);
  img:not(.banner) {
    width: 100%;
    height: 100%;
    transition: all 1s;

    &:hover {
      transform: scale(1.5,1.5);
    }
  }
  .gallery {
    display: flex;
    gap: 1rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .image-scale-hover {
    width:100%;
    overflow: hidden;
  }
  
  .big {
    height: 100%;
  }
  .container-item {
    width: 30%;
    @media screen and (max-width: 768px) {
      display: flex;
      width: 100%;
    }
  }
  .container-item-big {
    width: 40%;
    h2{
      font-size: 1.9rem;
      font-weight: 800;
      margin: 0.8 .5rem !important;
      padding: .5rem;
      text-align: left;
      color: #D25C33;

      @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
      }
    }

    i {
      font-size: 2rem;
      text-align: center;
      padding: 1rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .big-image {
      overflow: hidden;
    }

    .gallery-pealed {
      position: relative;
      .banner {
        position: absolute;
        width: 100%;
        z-index: -3;
      }
    }
  }
  
`

export default Gallery
