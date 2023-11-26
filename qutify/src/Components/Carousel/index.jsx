import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Carousel.css"
import Cards from '../Cards';

export default ({data}) => {
  return (  <Swiper
    modules={[Virtual, Navigation, Pagination]}
    // onSwiper={setSwiperRef}
    slidesPerView={7}
    // centeredSlides={true}
    // spaceBetween={30}
    // pagination={{
    //   type: 'fraction',
    // }}
    // navigation={{nextEl:".arrow-left", prevEl:".arrow-right"}}
    navigation={true}
    virtual
  >
   
   {data.map((item)=>{
              
               return( <SwiperSlide  key={item.id}>
               <Cards 
                
                title={item.title}
                follow={item.follows}
                imgUrl={item.image}
            />
             </SwiperSlide> )
                
                })}
                
  </Swiper>)
};
