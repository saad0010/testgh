"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { dbanner, logos } from "@/constants";
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
        slidesPerView={4}
        // effect={"fade"}
        centeredSlides={true}
        spaceBetween={4}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* <div className="grid grid-cols-1 justify-center items-start h-screen w-full  relative ">
          {dbanner.map((item) => (
            <SwiperSlide key={item._id} className="swiperSlide">
              <Image
                src={item.image}
                alt={item.slug}
                width={400}
                height={400}
                className="absolute -z-10 object-cover w-screen h-screen  "
              />
              <div className="p-10 lg:p-52">
                <h1 className="text-2xl lg:text-6xl mb-3 font-semibold text-white">
                  Unleash Your Creativity: Custom Shirt Printing for Every
                  Industry!
                </h1>
                <p className="text-2xl hidden lg:block text-white mt-4  mb-8">
                  Are you tried of wearing generic, mass-produced shirts that
                  lack personality? Its time to take control of your style and
                  embrace individually with our custom shirt printing services.
                </p>
                <Link
                  href={"/contact"}
                  className="transform rounded-md px-2 py-2  text-sm  lg:px-5 lg:py-3 lg:font-medium  text-white transition-colors bg-black hover:bg-yellow-400 hover:text-black"
                >
                  CONTACT US
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div> */}

        {logos.map((item) => (
          <SwiperSlide key={item._id} className="swiperSlide ">
            <section className="mt-24 ">
              <Image
                src={item.src}
                alt="logo"
                width={200}
                height={200}
                className="    "
              />
              {/* <div>
                <div className="p-10 lg:p-36 lg:px-72 relative">
                  <h1 className="text-2xl lg:text-6xl font-mirza mb-3 font-semibold text-white">
                    Unleash Your Creativity: Custom Shirt Printing for Every
                    Industry!
                  </h1>
                  <p className="text-md hidden font-libre lg:block text-white   mb-8">
                    Are you tried of wearing generic, mass-produced shirts that
                    lack personality? Its time to take control of your style and
                    embrace individually with our custom shirt printing
                    services.
                  </p>
                  <Link
                    href={"/contact"}
                    className="transform rounded-md px-2 pt-2 text-[.5rem] md:text-sm  font-mirza lg:px-5 lg:pt-3 lg:pb-2 lg:font-medium  text-black transition-colors bg-yellow-400 hover:bg-black hover:text-white"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div> */}
            </section>
            {/* <section className=" ">
              <Image
                src={item.image}
                alt={item.slug}
                width={500}
                height={500}
                className="absolute -z-20 object-contain w-full h-auto   "
              />
              <div>
                <div className="p-10 lg:p-32 lg:px-52 relative">
                  <h1 className="text-2xl lg:text-5xl font-mirza mb-3 font-semibold text-white">
                    Unleash Your Creativity: Custom Shirt Printing for Every
                    Industry!
                  </h1>
                  <p className="text-2xl hidden font-libre lg:block text-white mt-4  mb-8">
                    Are you tried of wearing generic, mass-produced shirts that
                    lack personality? Its time to take control of your style and
                    embrace individually with our custom shirt printing
                    services.
                  </p>
                  <Link
                    href={"/contact"}
                    className="transform rounded-md px-2 py-2  text-sm  font-libre lg:px-5 lg:py-3 lg:font-medium  text-white transition-colors bg-black hover:bg-yellow-400 hover:text-black"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </section> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sliding;
