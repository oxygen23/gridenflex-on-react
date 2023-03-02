import React, { useContext } from 'react';
import { BodyReviewContext } from '../Modals/MoadlReview';

function Star({ value }) {
  const {
    emptyColor,
    fillColor,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width,
  } = useContext(BodyReviewContext);

  return (
    <div
      className='star'
      onClick={() => setRating(value)}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        height={height}
        viewBox='0 0 25 25'
        width={27.9}
      >
        <polygon
          strokeWidth='0'
          points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
        />
      </svg>
    </div>
  );
}

export default Star;
