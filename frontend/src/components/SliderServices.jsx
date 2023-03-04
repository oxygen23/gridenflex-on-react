import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as images from '../img/images';
function SliderServices({ fnOpenLanding, fnOpenCorp, fnOpenShop, fnOpenFeedback }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.51}
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
          <button
            className='sixth-section__slider-item_link'
            onClick={() => {
              fnOpenLanding(true);
            }}
          >
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button' onClick={() => fnOpenFeedback(true)}>
            Заказать
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='sixth-section__slider-item'>
          <div className='sixth-section__slider-item_name-bg'>corporate</div>
          <div className='sixth-section__slider-item_title'>
            Корпоративный <br /> сайт
          </div>
          <div className='sixth-section__slider-item_img'>
            <img src={images.corp} alt='' />
          </div>
          <div className='sixth-section__slider-item_price'>
            от <span>80 000</span> руб
          </div>
          <button
            className='sixth-section__slider-item_link'
            onClick={() => fnOpenCorp(true)}
          >
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button' onClick={() => fnOpenFeedback(true)}>
            Заказать
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='sixth-section__slider-item'>
          <div className='sixth-section__slider-item_name-bg'>shop</div>
          <div className='sixth-section__slider-item_title'>
            Интернет <br /> магазин
          </div>
          <div className='sixth-section__slider-item_img'>
            <img src={images.shop} alt='' />
          </div>
          <div className='sixth-section__slider-item_price'>
            от <span>150 000</span> руб
          </div>
          <button
            className='sixth-section__slider-item_link'
            onClick={() => fnOpenShop(true)}
          >
            Читать подробнее
          </button>
          <button className='sixth-section__slider-item_button button' onClick={() => fnOpenFeedback(true)}>
            Заказать
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderServices;
