import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";
import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Image } from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

export const metadata = {
  title:
    "Services - TEES WEATHER | Screen Printing | Embroidery | 3D Puff Solution",

  description:
    "Online Printing Services,custom clothing manufacturer, custom t-shirts, custom caps, custom hoodies, screen printing , embroidery, 3d puff solutions, twill , applique services, promotional products, direct to garment , sublimation",
};

const getData = () => {
  const data = items["services"];

  if (data) {
    return data;
  }

  return notFound();
};

const Services = () => {
  const data = getData();
  return (
    <>
      <Container>
        <div className="min-h-screen bg-transparent flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
            {data.map((item) => (
              <div
                key={item.id}
                className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-300 hover:shadow-black  hover:border-solid"
              >
                <h3 className="mb-3 text-sm text-center font-bold text-indigo-600">
                  {item.title}
                </h3>
                <div className="relative">
                  <img
                    className="w-full h-60 rounded-xl"
                    src={item.image}
                    alt="Colors"
                  />
                </div>
                <h1 className="mt-4 text-gray-800 text-sm text-center font-bold cursor-pointer">
                  {item.desc}
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
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
                    <p className="text-sm">{item.label}</p>
                  </div>
                  <div className="flex space-x-1 items-center mt-1">
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
                    <p className="text-sm">{item.label1}</p>
                  </div>
                  <div className="flex space-x-1 items-center mt-1">
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
                    <p className="text-sm">{item.label2}</p>
                  </div>
                  <Link href={`/services/${item.slug}`}>
                    {" "}
                    <button className="flex  justify-center mt-4 text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                      MORE{" "}
                      <IoArrowForwardOutline className="ml-2 mt-0.5 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="h-px flex-auto mx-20  bg-white" />
    </>
  );
};

export default Services;
