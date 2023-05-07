import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CarouselWrap from './CarouselWrap';

const Banner = ({ item }) => {
  const { t } = useTranslation();
  return (
    <CarouselWrap>
      <div className="carousel">
        <img
          title={t('tooltips.carousel.img')}
          className="banner-massage"
          src={item.image}
          alt="Banner Carousel"
        />
      </div>
    </CarouselWrap>
  );
};

Banner.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
