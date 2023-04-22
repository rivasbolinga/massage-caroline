import styled from 'styled-components';

const CarouselWrap = styled.div`
  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
position: relative;
  .center-hero {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    padding: 2rem;
    background: linear-gradient(-45deg, rgba(241, 194, 125, 50%), rgba(141, 85, 36, 50%));
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
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
        height: 90vh;
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



  h1 {
    display: inline-block;
    position: absolute;
    z-index: 3;
    font-size: 4rem;
    padding: 1rem;
    @media screen and (max-width: 769px) {
      font-size:${(props) => (props.massage ? '2.4rem' : '2.5rem')};
      bottom:${(props) => (props.massage ? '0' : '5% !important')} ;
      top:${(props) => (props.massage ? '15% !important' : '60% !important')};
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
