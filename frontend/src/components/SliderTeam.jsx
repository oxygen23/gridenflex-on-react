import * as images from '../img/images'
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function SliderTeam() {
  return (
    <Swiper
      modules={[Pagination]}
      className='seventh-section__grid-item_slider'
      spaceBetween={65}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <div className='seventh-section__grid-item_slider-item_img-block'>
            <img src='' alt='' />
          </div>
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Дизайнер</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Андрей
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <div className='seventh-section__grid-item_slider-item_img-block'>
            <img src={images.markTeam} alt='' />
          </div>
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Марк
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <div className='seventh-section__grid-item_slider-item_img-block'>
            <img src='' alt='' />
          </div>
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Михаил
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
            corporis.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <div className='seventh-section__grid-item_slider-item_img-block'>
            <img src={images.denisTeam} alt='' />
          </div>
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Денис
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <div className='seventh-section__grid-item_slider-item_img-block'>
            <img src={images.igorTeam} alt='' />
          </div>
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Игорь
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderTeam;
