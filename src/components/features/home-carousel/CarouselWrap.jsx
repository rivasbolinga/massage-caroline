import styled from 'styled-components';

const CarouselWrap = styled.div`
  .carousel {
    position: relative;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 426px) {
      height: 50vh !important;
    }
  }
  .slick-slider {
    width: 100%;
    margin: 0;
    }
  }

  img {
    width: 100%;
    height: 90vh;
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
