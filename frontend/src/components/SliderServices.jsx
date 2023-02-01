import * as images from '../img/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
function SliderServices() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1.5}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='sixth-section__slider-item'>
          <div className='sixth-section__slider-item_name-bg'>landing</div>
          <div className='sixth-section__slider-item_title'>
            Одностраничный <br /> сайт
          </div>
          <div className='sixth-section__slider-item_img'>
            <img src={images.landing} alt='' />
          </div>
          <div className='sixth-section__slider-item_price'>
            от <span>50 000</span> руб
          </div>
          <button className='sixth-section__slider-item_link'>
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button'>
            Заказать
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='sixth-section__slider-item'>
          <div className='sixth-section__slider-item_name-bg'>landing</div>
          <div className='sixth-section__slider-item_title'>
            Одностраничный <br /> сайт
          </div>
          <div className='sixth-section__slider-item_img'>
            <img src={images.landing} alt='' />
          </div>
          <div className='sixth-section__slider-item_price'>
            от <span>50 000</span> руб
          </div>
          <button className='sixth-section__slider-item_link'>
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button'>
            Заказать
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='sixth-section__slider-item'>
          <div className='sixth-section__slider-item_name-bg'>landing</div>
          <div className='sixth-section__slider-item_title'>
            Одностраничный <br /> сайт
          </div>
          <div className='sixth-section__slider-item_img'>
            <img src={images.landing} alt='' />
          </div>
          <div className='sixth-section__slider-item_price'>
            от <span>50 000</span> руб
          </div>
          <button className='sixth-section__slider-item_link'>
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button'>
            Заказать
          </button>
        </div>
      </SwiperSlide>
    </Swiper>

    // <div className='sixth-section__slider'>
    // </div>
  );
}

export default SliderServices;
