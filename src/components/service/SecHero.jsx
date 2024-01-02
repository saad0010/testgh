"use client";
import React from "react";
import Container from "../layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

import FadeIn from "../FadeIn";
import Link from "next/link";

const SecHero = (props) => {
  const heading = props.heading;
  const description = props.description;
  const image = props.image;

  return (
    <>
      <div className="bg-transparent w-full   px-4 relative">
        <Container>
          <div className="text-black grid md:grid-cols-2 gap-4 place-items-center">
            {/* left */}
            <div className="w-full relative flex justify-center items-center gap-6 overflow-hidden">
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* <Image
                  src={image}
                  alt="bannerImg"
                  // Make the image display full width
                  width={500}
                  height={500}
                  priority
                  className="w-100  object-cover "
                /> */}
                <Image
                  src={"/1.jpg"}
                  alt="package"
                  priority
                  width={400}
                  height={400}
                  className="w-[35rem] object-fill"
                />
              </motion.div>
            </div>
            {/* Right */}
            <div className="flex flex-col gap-4 md:gap-6 xl:gap-10">
              <FadeIn>
                <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-mirza lg:pr-24 text-bold">
                  {heading}
                </h1>
              </FadeIn>
              <FadeIn>
                <p className=" text-sm md:text-lg lg:pr-20 font-libre tracking-wide">
                  {description}
                </p>
              </FadeIn>
              <FadeIn>
                <div className="w-full p-4 xl:p-6 bg-white text-sm rounded-3xl flex flex-col lg:flex-row justify-between gap-5">
                  {/* <Link href={"/contact"} className="w-full text-right">
                    {" "}
                    <button className="w-28 px-1 text-[.7rem]   h-8 rounded-md bg-midnigh text-white uppercase font-medium hover:bg-yellow-400 hover:text-black cursor-pointer duration-300">
                      WORK WITH US
                    </button>
                  </Link> */}
                  <Link
                    href={"/screen-printing"}
                    className="w-full text-right lg:pr-10"
                  >
                    <button className="pt-2 px-3 h-10 mr-10   text-[1rem] font-mirza bg-midnigh   text-white uppercase rounded hover:bg-btnyel hover:text-black duration-300 tracking-wide">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SecHero;
