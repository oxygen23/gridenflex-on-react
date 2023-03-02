import React, { useContext } from 'react';
import { BodyReviewContext } from '../Modals/BodyReview';

import Star from './Star';

function StarListReview() {
  const { maxValue } = useContext(BodyReviewContext);

  return (
    <div
      className='star-rating'
      style={{
        display: 'flex',
        width: '140px',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}
    >
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return <Star key={index} value={value} />;
      })}
    </div>
  );
}

export default StarListReview;
