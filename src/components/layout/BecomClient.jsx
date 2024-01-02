"use client";

import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FadeIn from "../FadeIn";

const BecomClient = () => {
  return (
    // <div className="h-screen bg-black flex items-center">
    <FadeIn>
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

          <Link href={"/contact"} className="pt-14 pl-6">
            <button className="pt-2 px-2 h-13 md:h-10 mr-10  mt-4 text-[1rem] font-mirza bg-midnigh   text-white uppercase rounded hover:bg-btnyel hover:text-black duration-300 tracking-wide">
              Book A 30 Minute Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </FadeIn>
  );
};

export default BecomClient;
