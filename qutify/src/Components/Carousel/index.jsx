import React, { useRef, useState } from "react";
// Import Swiper React components
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import Cards from "../Cards";

export default ({ data, navId }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={7}
        // centeredSlides={true}
        // spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={{
          nextEl: `.arrow-left-${navId}`,
          prevEl: `.arrow-right-${navId}`,
        }}
        // navigation={true}
        virtual
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Cards
                title={item.title}
                follow={item.follows}
                imgUrl={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="navigation">
        <div className={`arrow-left-${navId}`}>
          {" "}
          <img src="back.png" />
        </div>
        <div className={`arrow-right-${navId}`}>
          {" "}
          <img src="next.png" />{" "}
        </div>
      </div>
    </div>
  );
};
