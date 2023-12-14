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
import { dbanner } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliding.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Sliding = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      speed={5000}
      autoplay={{
        delay: 5000,

        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {dbanner.map((item) => (
        <SwiperSlide key={item._id} className="swiperSlide">
          <div className="grid grid-cols-1 justify-center items-center  w-full  lg:h-screen relative ">
            <Image
              src={item.image}
              alt={item.slug}
              width={1000}
              height={100}
              className="absolute -z-10  md:object-cover w-full h-full"
            />
            <div className="p-10 lg:p-52">
              <h1 className="text-2xl lg:text-6xl mb-3 font-semibold text-white">
                Unleash Your Creativity: Custom Shirt Printing for Every
                Industry!
              </h1>
              <p className="text-2xl hidden lg:block text-white mt-4  mb-8">
                Are you tried of wearing generic, mass-produced shirts that lack
                personality? Its time to take control of your style and embrace
                individually with our custom shirt printing services.
              </p>
              <Link
                href={"/contact"}
                className="transform rounded-md px-2 py-2  text-sm  lg:px-5 lg:py-3 lg:font-medium  text-white transition-colors bg-black hover:bg-yellow-400 hover:text-black"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <SwiperSlide className="swiperSlide">
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
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Sliding;
