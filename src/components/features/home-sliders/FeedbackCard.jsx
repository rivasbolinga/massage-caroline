import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackCard = ({
  id, image, name, description, star,
  index,
}) => (
  <FeedbackCardWrap>
    <>
      {id}
      {' '}
      {image}
      {' '}
      {name}
      {' '}
      {description}
      {' '}
      {star}
      {' '}
      {index}
    </>
  </FeedbackCardWrap>
);

const FeedbackCardWrap = styled.div`
  display: flex;
`;
FeedbackCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FeedbackCard;
