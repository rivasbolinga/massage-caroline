import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TranslatedTitle from './TranslatedTitle';

const ProductCard = ({ imgSrc, data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card style={{ width: 'inherit' }}>
        <img className="massage-img" src={imgSrc} alt="massage images" />
        <Card.Body>
          <Card.Title>
            <TranslatedTitle title={data.title} />
          </Card.Title>
          <div className="product-actions">
            <Link className="massages-btn" type="button" to="/massages">
              {t('about.go-massages')}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
