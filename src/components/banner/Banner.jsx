"use client";
import React from "react";
import Container from "../layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerOne from "../../../public/bannerOne1.webp";
import bannerTwo from "../../../public/2.jpeg";
import bannerThree from "../../../public/bannerThree1.webp";
import FadeIn from "../FadeIn";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="bg-transparent w-full  px-4 relative">
        <Container>
          <div className="text-black grid md:grid-cols-2 gap-20 place-items-center">
            {/* left */}
            <div className="flex flex-col gap-6 xl:gap-10">
              <FadeIn>
                <h1 className="text-2xl ml-10 lg:text-3xl xl:text-3xl font-semibold">
                  You dream it, We Print it
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-xl ml-10 tracking-wide">
                  Get creative and spruce up your style with customized
                  T-Shirts, Polos, Hoodies, Jackets, and other promotional items
                  from Tees Weather to make it stand out.
                </p>
              </FadeIn>
              <FadeIn>
                <div className="w-[50%] p-6 xl:p-8 ml-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                  {/* <Link
                    // className="w-full h-12 justify-center  rounded-xl   bg-black text-white uppercase font-medium hover:bg-green-950 cursor-pointer duration-300"
                    href={"/contact"}
                  >
                    <h3 className="items-center"> WORK WITH US</h3>
                  </Link> */}
                  <Link href={"/contact"} className="w-full">
                    {" "}
                    <button className="w-full h-12 rounded-xl bg-purple-700 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                      GET A QUOTE
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            {/* Right */}
            <div className="w-full relative flex justify-center items-center gap-6">
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white rounded-2xl"
              >
                <Image
                  src={bannerOne}
                  alt="bannerImg"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-7 ">
                <motion.div
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={bannerTwo}
                    alt="bannerImg"
                    className="w-52 rounded-2xl object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={bannerThree}
                    alt="bannerImg"
                    className="w-52 rounded-2xl bg-white object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
