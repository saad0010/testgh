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
              <h1 className="mt-4  text-light tracking-widest text-xs md:text-md text-center  cursor-pointer">
                {item.desc}
              </h1>
              <div className="my-4 ">
                {/* <div className="flex space-x-1 items-center justify-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p className="text-sm  ">{item.label}</p>
                </div>
                <div className="flex space-x-1 items-center mt-1 justify-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p className="text-sm ">{item.label1}</p>
                </div>
                <div className="flex space-x-1 items-center mt-1 justify-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p className="text-sm ">{item.label2}</p>
                </div> */}
                <Link
                  href={`/services/${item.slug}`}
                  className="flex justify-center"
                >
                  {" "}
                  <button className="flex mt-1 md:mt-4 justify-center text-xs md:text-sm w-[50%] text-white bg-black hover:bg-yellow-400 hover:text-black py-2 rounded shadow-lg">
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
