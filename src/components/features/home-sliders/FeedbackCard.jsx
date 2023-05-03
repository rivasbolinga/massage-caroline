import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackCard = ({
  id, image, name, description, star,
  index,
}) => (
  <FeedbackCardWrap data-aos="flip-right" data-aos-duration="2000">
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
        {[...Array(5)].map((_, i) => (
          <i data-aos="fade-up" data-aos-duration={`${1000 + i * 200}`} key={Math.random()} className={`fa-solid fa-star${i < star ? ' active' : ''}`} />
        ))}
      </span>
      <i className="fa-solid fa-quote-left quote fa-beat" />
    </div>
  </FeedbackCardWrap>
);

const FeedbackCardWrap = styled.div`
  @keyframes twinkle {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
  display: flex;
  margin: auto auto;
  width: 60%;
  max-width: 665px;
  min-width: 598px;
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

  .fa-solid.fa-star {
    color: gray;
  }

  .fa-solid.fa-star.active {
    color: #F8CBA6;
  }

  img {
    width: 100%;
    height: 50vh;
    margin: auto;
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

    .fa-star {
      animation: twinkle 0.5s ease-in-out infinite
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

  @media screen and (max-width: 727px) {
    max-width: unset;
    min-width: unset;
    h2 {
      font-size: 2rem;
    }
    width: 90%;
    .img-wrap {
      width: 100%;
    }
    .star-name {
      width: 100%;
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
