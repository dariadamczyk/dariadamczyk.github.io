import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import Photo1 from '../img/photo1.png';
import Photo2 from '../img/photo2.png';
import Photo3 from '../img/photo3.jpg';



const PhotoSwipe = () => {
    return (
        <div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      keyboard={
          {enabled: true,
            onlyInViewport: false
        }
      }
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
          <img src={Photo1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
          <img src={Photo2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
          <img src={Photo3} alt="" />
      </SwiperSlide>
      
    </Swiper>
        </div>
    )
}

export default PhotoSwipe
