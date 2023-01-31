import ball from "../img/ball-review.png";

function Reviews() {
  return (
    <div className='eighth-section__slider'>
      <div className='eighth-section__slider-item'>
        <div className='eighth-section__slider-item_up-block'>
          <div className='eighth-section__slider-item_up-block-left'>
            <div className='eighth-section__slider-item_avatar'>
              <img src='https://placehold.co/60' alt='' />
            </div>
            <div className='eighth-section__slider-item_flexbox'>
              <div className='eighth-section__slider-item_name'>Марк</div>
              <div className='eighth-section__slider-item_company'>
                gridenflex
              </div>
            </div>
          </div>
          <div className='eighth-section__slider-item_stars'></div>
        </div>
        <div className='eighth-section__slider-item_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita
          vero beatae qui? Eum incidunt excepturi, libero impedit debitis,
          corporis quidem aliquid deleniti ea suscipit provident et eos
          voluptatibus! Totam doloremque architecto repudiandae est error eaque
          ipsa libero nostrum enim?
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
    </div>
  );
}

export default Reviews;
