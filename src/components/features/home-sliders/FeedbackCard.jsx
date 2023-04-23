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
      <i className="fa-solid fa-quote-right quote fa-beat" />
      <h3>{name}</h3>
      <q className="description">
        {description}
      </q>
      <span>
        {() => {
          for (let i = 0; i < 5; i += 1) {
            if (i <= star) <i className="fa-solid fa-star" />;
              <i className="fa-solid fa-star" />;
          }
        }}
      </span>
      <i className="fa-solid fa-quote-left quote fa-beat" />
    </div>
  </FeedbackCardWrap>
);

const FeedbackCardWrap = styled.div`
  display: flex;
  margin: auto auto;
  width: 70%;
  flex-wrap: wrap;
  border: 1px inset #f9a392;
  border-radius: 2rem;
  overflow: hidden;
  gap: 10px;
  box-shadow: 5px 5px 15px #30221e;
  translation: all 1s ease-in-out;
  .img-wrap {
    width: 40vh;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 50vh;
    transition: all 1s ease;
  }
  .star-name {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &:hover {
    img {
      overflow: hidden;
      transform: scale(1.1, 1.1);
    }
  }
  .quote {
    position: absolute;
    font-size: 1.8rem;
  }

  .fa-quote-right {
    top: 10%;
    right: 10%;
  }
  .fa-quote-left {
    bottom: 10%;
    left: 10%;
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
