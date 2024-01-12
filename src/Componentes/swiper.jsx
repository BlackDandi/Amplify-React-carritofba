import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination } from 'swiper/modules';
import { ActionCard, Tarjeta1, Tarjeta2, Tarjeta3, Tarjeta4, Tarjeta5, Tarjeta6} from "../ui-components";
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '480': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '600': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '960': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1280': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Tarjeta1/></SwiperSlide>
        <SwiperSlide><Tarjeta2/></SwiperSlide>
        <SwiperSlide><Tarjeta3/></SwiperSlide>
        <SwiperSlide><Tarjeta4/></SwiperSlide>
        <SwiperSlide><Tarjeta5/></SwiperSlide>
        <SwiperSlide><Tarjeta6/></SwiperSlide>
        </Swiper>
    </>
  );
}