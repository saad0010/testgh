"use client";

import Link from "next/link";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BecomClient = () => {
  return (
    // <div className="h-screen bg-black flex items-center">

    <section className="md:mt-10 mb-10 bg-transparent w-full bg-cover bg-center md:py-32">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-md md:text-2xl font-medium mb-6">
          A B2B consultancy with expertise in
        </h1>
        <p className=" text-3xl md:text-6xl mb-6 md:mb-12 text-yellow-400">
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
            className="bg-black text-white text-xs py-2 px-8 md:text-lg md:py-4 md:px-12 rounded-full hover:bg-yellow-400 hover:text-black"
          >
            Book A 30 Minute Free Consultation
          </span>
        </Link>
      </div>
    </section>
  );
};

export default BecomClient;
