import React from "react";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";

import { notFound } from "next/navigation";
import Link from "next/link";

import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";

const Card = (props) => {
  const cardData = props.cardData;

  return (
    <Container>
      <div className="min-h-screen bg-transparent flex justify-center  items-center ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-0 md:space-y-0">
          {cardData?.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg--500 px-6 pt-6 pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-500 hover:shadow-purple-950 hover:border-solid"
            >
              <h3 className="mb-3 text-sm md:text-lg text-center font-bold text-slat-400">
                {item.title}
              </h3>
              <div className="relative">
                <Image
                  className="w-full h-52 md:h-60 "
                  src={item.image}
                  alt="Colors"
                  width={200}
                  height={200}
                />
              </div>
              <h1 className="mt-4  text-light tracking-widest text-[.7rem] md:text-md text-center  cursor-pointer">
                {item.desc}
              </h1>
              <div className="my-4 ">
                <Link
                  href={`/services/${item.slug}`}
                  className="flex justify-center"
                >
                  {" "}
                  <button className="flex mt-1 md:mt-4 justify-center text-[.8rem] md:text-sm w-[50%] text-white bg-black hover:bg-yellow-400 hover:text-black py-2 rounded shadow-lg">
                    LEARN MORE{" "}
                    <IoArrowForwardOutline className="ml-2 mt-0.5 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Card;
