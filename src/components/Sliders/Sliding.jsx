"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hero from "../../../public/s1.webp";
import hero1 from "../../../public/s.webp";
import hero2 from "../../../public/s3.webp";
import hero3 from "../../../public/s4.webp";
import hero4 from "../../../public/s5.webp";
import hero5 from "../../../public/s6.webp";
import hero6 from "../../../public/s7.webp";
import hero7 from "../../../public/s8.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliding.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Sliding = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,

        disableOnInteraction: false,
      }}
      //   pagination={{
      //     clickable: true,
      //   }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="swiperSlide">
        <Image src={hero1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero3} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero4} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero5} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero6} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Image src={hero7} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliding;
