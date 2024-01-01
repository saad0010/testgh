"use client";

import Link from "next/link";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BecomClient = () => {
  return (
    // <div className="h-screen bg-black flex items-center">

    <section className="  md:mb-0 p-6 w-full bg-cover bg-center md:py-8 bg-white">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-md md:text-xl font-libre mb-6">
          A B2B consultancy with expertise in
        </h1>
        <p className=" text-3xl md:text-6xl font-mirza mb-3  text-yellow-400">
          <Typewriter
            words={[
              "Screen Printing",
              "Embroidery",
              "3D Puff Solutions",
              "Twill & Applique",
              "Direct To Garment",
              "Sublimation",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </p>

        <Link href={"/contact"}>
          <span
            href="#"
            className="bg-black text-white text-[.6rem] py-2 text-libre  px-3 md:text-sm md:py-2 md:px-4 rounded-full hover:bg-yellow-400 hover:text-black"
          >
            Book A 30 Minute Free Consultation
          </span>
        </Link>
      </div>
    </section>
  );
};

export default BecomClient;
