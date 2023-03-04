import img from '../img/photo-team.png';
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
          <img src={img} alt='' />
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Дизайнер</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Окси
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <img src={img} alt='' />
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Окси
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <img src={img} alt='' />
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Окси
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <img src={img} alt='' />
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Окси
          </div>
          <div className='seventh-section__grid-item_slider-item_slogan'>
            "Если я состою в гриденфлексе, <br /> не значит что ..."
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='seventh-section__grid-item_slider-item'>
          <img src={img} alt='' />
          <div className='seventh-section__grid-item_slider-item_post'>
            <p>Разработчик</p>
          </div>
          <div className='seventh-section__grid-item_slider-item_name'>
            Окси
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
