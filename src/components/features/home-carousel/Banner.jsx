import React from 'react';
import PropTypes from 'prop-types';
import CarouselWrap from './CarouselWrap';

const Banner = ({ massage, item, index }) => (
  <CarouselWrap massage={massage}>
    <div className="carousel">
      <img className="banner-massage" key={index} src={item.image} alt="Banner Carousel" />
      <h1 style={item.style} className="carousel-title" dangerouslySetInnerHTML={{ __html: item.quote }} />
    </div>
  </CarouselWrap>
);

Banner.protoTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    style: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      right: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
    }).isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Banner;
