import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImgSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../images/home1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="../images/home2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="../images/home3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="../images/home4.jpg" /></SwiperSlide>
      </Swiper>
    </>
  );
}
