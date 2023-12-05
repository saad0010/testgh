"use client";

import Link from "next/link";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BecomClient = () => {
  return (
    // <div className="h-screen bg-black flex items-center">

    <section className="mt-10 mb-10 bg-transparent w-full bg-cover bg-center py-32">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-xl md:text-2xl font-medium mb-6">
          A B2B consultancy with expertise in
        </h1>
        <p className=" text-4xl md:text-6xl mb-12 text-purple-800">
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
            className="bg-purple-600 text-white text-sm py-2 px-8 md:text-lg md:py-4 md:px-12 rounded-full hover:bg-purple-950"
          >
            Book A 30 Minute Free Consultation
          </span>
        </Link>
      </div>
    </section>
  );
};

export default BecomClient;
