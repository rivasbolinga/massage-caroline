import styled from 'styled-components';

const CarouselWrap = styled.div`
  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
  @keyframes boxShadow {
    0% {box-shadow: 0 15px 15px rgba(255, 219, 172, .7);}
    25% {box-shadow: 15px 0 15px rgba(255, 219, 172, .7);}
    50% {box-shadow: 0 -15px 15px rgba(255, 219, 172, .7);}
    75% {box-shadow: -15px 0 15px rgba(255, 219, 172, .7);}
    100% {box-shadow: 0 15px 15px rgba(255, 219, 172, .7);}
  }
position: relative;
  .center-hero {
    width: 90%;
    max-width: 545px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    padding: 2rem;
    background: linear-gradient(-45deg, rgba(241, 194, 125, 50%), rgba(141, 85, 36, 50%));
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    transition: all 0.2s ease-in-out;
    img {
      position: relative;
      z-index: 1;
      width: 150px;
      height: 150px;
    }
    h1 {
      display: block;
      margin: 0;
      padding: 0;
      position: relative;
    }

    p {
      font-size: 2rem;
    }
    &:hover{
      animation: boxShadow 5s ease infinite;
    }

    @media screen and (max-width: 446px) {
      width: 100%;
      max-width: none;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transform: unset;
      border-radius: unset;
      img {
        width: 100px;
        height: 100px;
      }
      &:hover {
        animation: none;
        background: transparent;
      }
    }
  }
  .carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 426px) {
      height: 50vh !important;
    }
    img {
      width: 100%;
      height: 100vh;
      position: absolute;
      margin: auto 0;
      z-index: -1;
      @media screen and (max-width: 768px) {
        height: 100vh;
      }

      @media screen and (max-width: 426px) {
        height: 50vh !important;
      }
    }
  }
  .slick-slider {
    width: 100%;
    margin: 0;
    }
  }

    @media screen and (max-width: 426px) {
      font-size: 1.5rem;
      font-weight: 800;
      line-spacing: 200;
    }
  }

  .slick-slide {
    padding: 0;
    margin: 0;
  }

  .slick-list {
    margin: 0;
  }

  .banner-massage {
    width: 100%;
    height: 90vh;
  }
`;

export default CarouselWrap;
