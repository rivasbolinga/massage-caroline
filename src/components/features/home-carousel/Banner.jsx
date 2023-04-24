import React from 'react';
import PropTypes from 'prop-types';
import CarouselWrap from './CarouselWrap';

const Banner = ({ item }) => (
  <CarouselWrap>
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
  }).isRequired,
};

export default Banner;
