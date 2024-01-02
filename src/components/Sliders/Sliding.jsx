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
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliding.css";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Sliding = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        spaceBetween={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper md:h-screen"
      >
        {dbanner.map((item) => (
          <SwiperSlide key={item._id} className="swiperSlide ">
            <section className="relative  ">
              <Image
                src={item.image}
                alt={item.slug}
                width={1000}
                height={1000}
                priority
                className="absolute -z-10 h-full md:h-screen md:object-fill   md:w-screen  "
              />
              <div c>
                <div className="p-10   lg:p-16 md:px-60 lg:px-72 relative">
                  <h1 className="text-2xl  sm:mt-16 md:mt-24  lg:mt-52 md:text-3xl lg:text-6xl font-mirza mb-3 font-semibold text-white">
                    Unleash Your Creativity: Custom Shirt Printing for Every
                    Industry!
                  </h1>
                  <p className="text-lg hidden lg:px-24 font-libre lg:block text-white   mb-8">
                    Are you tried of wearing generic, mass-produced shirts that
                    lack personality? Its time to take control of your style and
                    embrace individually with our custom shirt printing
                    services.
                  </p>
                  {/* <Link
                    href={"/contact"}
                    className="transform rounded-md px-2 py-2 text-[.5rem] md:text-sm  font-mirza lg:px-5 lg:pt-3 lg:pb-2 lg:font-medium  text-black transition-colors bg-btnyel hover:bg-midnigh hover:text-white"
                  >
                    CONTACT US
                  </Link> */}
                  <Link href={"/contact"} className="pt-10">
                    <button className="pt-[.4rem] px-2 md:px-3 h-6 lg:h-7 md:mr-10 text-[.7rem] md:text-[1rem] font-mirza bg-btnyel   text-black uppercase rounded hover:bg-midnigh hover:text-white duration-300 tracking-wide">
                      CONTACT A PRINTING PRO
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sliding;
