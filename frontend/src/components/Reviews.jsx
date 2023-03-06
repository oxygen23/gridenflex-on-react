import ball from '../img/ball-review.png';
import * as images from '../img/images';
function Reviews({
  id,
  author,
  image_url,
  description,
  company,
  rating,
  date,
  length,
}) {
  const maxValue = 5;
  return (
    <div
      className={
        length < 3
          ? 'eighth-section__slider-item two-slide-item'
          : 'eighth-section__slider-item'
      }
    >
      <div className='eighth-section__slider-item_up-block'>
        <div className='eighth-section__slider-item_up-block-left'>
          <div className='eighth-section__slider-item_avatar'>
            <img src={image_url} alt='' />
          </div>
          <div className='eighth-section__slider-item_flexbox'>
            <div className='eighth-section__slider-item_name'>{author}</div>
            <div className='eighth-section__slider-item_company'>{company}</div>
          </div>
        </div>
        <div className='eighth-section__slider-item_stars'>
          {[...Array(rating)].map((star, index) => {
            return (
              <div
                key={index}
                className='eighth-section__slider-item_stars-item'
              >
                <img src={images.starYelow} alt='' />
              </div>
            );
          })}
          {[...Array(maxValue - rating)].map((star, index) => {
            return (
              <div
                key={index}
                className='eighth-section__slider-item_stars-item'
              >
                <img src={images.starGray} alt='' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='eighth-section__slider-item_description'>
        {description}
      </div>
      <div className='eighth-section__slider-item_decorations'>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
