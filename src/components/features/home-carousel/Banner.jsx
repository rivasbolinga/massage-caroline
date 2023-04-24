import React from 'react';
import PropTypes from 'prop-types';
import CarouselWrap from './CarouselWrap';

const Banner = ({ massage, item }) => (
  <CarouselWrap massage={massage}>
    <div className="carousel">
      <img
        className="banner-massage"
        src={item.image}
        alt="Banner Carousel"
      />
    </div>
  </CarouselWrap>
);

Banner.propTypes = {
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
  massage: PropTypes.bool.isRequired,
};

export default Banner;
