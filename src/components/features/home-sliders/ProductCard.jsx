import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonBookNow from '../../styles/ButtonBookNow';
import { setDetails } from '../../redux/massages/massageSlice';

const ProductCard = ({ imgSrc, data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card style={{ width: 'inherit' }}>
        <img className="massage-img" src={imgSrc} alt="massage images" />
        <Card.Body>
          <Card.Title>Massage Title</Card.Title>
          <Card.Text>
            Details of the massages you have to tell me otherwise it will as it is
            be aware of that lol client will be fire
          </Card.Text>
          <div className="product-actions">
            <ButtonBookNow variant="primary" type="Button" onClick={() => dispatch(setDetails(data))}>SEE DETAILS</ButtonBookNow>
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
