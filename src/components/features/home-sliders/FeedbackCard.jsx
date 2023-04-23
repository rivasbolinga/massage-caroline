import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackCard = ({
  id, image, name, description, star,
  index,
}) => (
  <FeedbackCardWrap>
    <div className="img-wrap">
      <img key={id} src={image} alt={name} />
    </div>
    <div key={index} className="star-name">
      <span>{name}</span>
      <q className="description">
        {description}
      </q>
      <span>{star}</span>
    </div>
  </FeedbackCardWrap>
);

const FeedbackCardWrap = styled.div`
  display: flex;
  margin: auto auto;
  width: 70%;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 2rem;
  overflow: hidden;
  gap: 10px;
  .img-wrap {
    width: 40vh;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 50vh;
  }
  .star-name {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    img {
      overflow: hidden;
      transform: scale(1.1, 1.1);
    }
  }
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
