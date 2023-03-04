import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import StarsList from '../StarRating/StarsList';
export const BodyReviewContext = createContext();

export default function ModalReview({
  isVisible = true,
  defaultState,
  emptyColor,
  fillColor,
  height,
  labelText,
  maxValue,
  readOnly,
  width,
}) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);

  const [data, setData] = useState({
    author: '',
    image_url: '',
    company: '',
    description: '',
    key: null,
    rating: defaultState,
  });
  const setRatingFn = (value) => {
    if (readOnly) return;

    setRating(value);
    setData({
      ...data,
      rating: value,
    });
  };

  const setHoverFn = (value) => {
    if (readOnly) return;

    setHover(value);
  };

  const submit = (e) => {
    setData({
      author: '',
      image_url: '',
      company: '',
      description: '',
      key: null,
      rating: defaultState,
    });
    e.preventDefault();
  };

  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const postData = () => {
    axios
      .post('http://localhost:3001/api/sendReview', data)
      .then(function (response) {
        console.log(response);
      });

  };

  return !isVisible ? null : (
    <BodyReviewContext.Provider
      value={{
        emptyColor,
        fillColor,
        height,
        hover,
        labelText,
        rating,
        setHover: setHoverFn,
        setRating: setRatingFn,
        width,
        maxValue,
      }}
    >
      <div className='modal-window-grid'>
        <div className='modal-window-grid_title review'>Оставить отзыв</div>
        <form className='modal-window-grid_form' onSubmit={submit}>
          <input
            type='text'
            name='author'
            placeholder='Ваше имя'
            value={data.name}
            onChange={update}
          />
          <input
            type='text'
            name='company'
            placeholder='Организация'
            value={data.corp}
            onChange={update}
          />
          <input
            type='text'
            name='key'
            placeholder='Ключ отзыва'
            value={data.key}
            onChange={update}
          />
          <textarea
            name='description'
            placeholder='Отзыв'
            value={data.review}
            onChange={update}
          />

          <StarsList />

          <button className='button' onClick={postData}>
            Оствить отзыв
          </button>
        </form>
      </div>
    </BodyReviewContext.Provider>
  );
}

ModalReview.propTypes = {
  defaultState: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelText: PropTypes.func,
  maxValue: PropTypes.number,
  onChangeHover: PropTypes.func,
  onChangeValue: PropTypes.func,
  readOnly: PropTypes.bool,
  width: PropTypes.number,
};

ModalReview.defaultProps = {
  defaultState: 0,
  emptyColor: 'white',
  fillColor: '#FFC000',
  height: 20,
  width: 20,
  maxValue: 5,
  readOnly: false,
};
