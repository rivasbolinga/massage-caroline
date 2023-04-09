import React from 'react';
import TitleWrap from '../../styles/HomeTitle';
import styled from 'styled-components';
import img1 from '../../../assets/home-massage-pics/massage-1.jpg'
import img2 from '../../../assets/home-massage-pics/massage-2.jpg'
import img3 from '../../../assets/home-massage-pics/massage-4.jpg'
import img4 from '../../../assets/home-massage-pics/massage-3.jpg'
import img5 from '../../../assets/home-massage-pics/massage-5.jpg'

const Gallery = () => {
  return (
    <WrapSection>
      <TitleWrap>
        <h2>Latest Project</h2>
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
          <div className="image-scale-hover">
            <img src={img3} alt="" />
            <div className="gallery-pealed">
              <TitleWrap><h2>we love to hear feedback</h2></TitleWrap >
              <TitleWrap ><h2>Want to try</h2></TitleWrap>
              <i className="fa-solid fa-handshake"></i>
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
  width: 100%;
  margin: auto;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
  .gallery {
    display: flex;
    gap: 1rem;
  }

  .image-scale-hover {
    width:100%;
  }

  .container-item {
    width: 30%;
  }
  .container-item-big {
    width: 40%;
    h2{
      font-size: 2rem;
      font-weight: 800;
      margin: .5rem !important;
      padding: .5rem;

      @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
      }
    }

    i {
      font-size: 2rem;
      text-align: center;
    }
  }
`

export default Gallery
