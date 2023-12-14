"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cat, services } from "@/constants";
import Link from "next/link";
const PnS = () => {
  const [image, setImage] = useState("/add.jpg");
  const [image1, setImage1] = useState(
    "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"
  );

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }
  function handleMouseEnter1(imagePath) {
    return () => {
      setImage1(imagePath);
    };
  }
  function handleMouseLeave() {
    return () => {
      setImage(
        "https://images.unsplash.com/photo-1699412958387-2fe86d46d394?q=80&w=3329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      );
    };
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 ">
      <div className="flex gap-6  justify-center">
        <div className="grid-cols-1">
          <div className="flex-none w-48 relative lg:ml-20">
            <Image
              src={image1}
              alt="Styles"
              className="absolute inset-0 w-full object-fill"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="grid-cols-1">
          <div className=" flex-wrap">
            <h2 className="text-sm md:text-lg ml-4 sm:ml-24 md:ml-10 lg:ml-44 font-semibold text-slate-400">
              Styles
            </h2>
            {cat.map((item) => (
              <ul key={item._id} className="sm:ml-20 md:ml-8">
                <Link href={`/products/${item.slug}`}>
                  <li
                    onMouseEnter={handleMouseEnter1(item.image)}
                    className="mt-4 mr-6 text-center  text-sm md:text-lg lg:ml-32 text-slate-700 hover:text-slate-400 cursor-pointer duration-300 group relative"
                  >
                    {/* <h2
                     className="mt-4 mr-6 hover:text-indigo-700 cursor-pointer duration-300 group relative"
                     key={item._id}
                   >
                     {" "} */}
                    {item.title}

                    <span className="absolute w-full scale-0 group-hover:scale-x-100 scale-y-100 inline-block h-[2px] -bottom-[1px] left-0 bg-yellow-400 duration-500"></span>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-6 sm:mt-10 md:mt-0 justify-center">
        <div className="grid-cols-1 ">
          <h2 className="ml-4 text-sm md:text-lg font-semibold text-slate-400">
            Add-on Services
          </h2>
          <div className=" flex-wrap">
            {services.map((item) => (
              <ul key={item._id} className="md:mr-20">
                <Link href={`/services/${item.slug}`}>
                  <li
                    onMouseEnter={handleMouseEnter(item.image)}
                    className="mt-4 sm:mr-6 md:mr-20 text-center text-sm md:text-lg  text-slate-700 hover:text-slate-400 cursor-pointer duration-300 group relative"
                  >
                    {/* <h2
                    className="mt-4 mr-6 hover:text-indigo-700 cursor-pointer duration-300 group relative"
                    key={item._id}
                  >
                    {" "} */}
                    {item.title}

                    <span className="absolute w-full scale-0 group-hover:scale-x-100 scale-y-100 inline-block h-[2px] -bottom-[1px] left-0 bg-yellow-400 duration-500"></span>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
        <div className="grid-cols-1">
          <div className="flex-none w-48 mr-3 md:mr-32 relative">
            <Image
              src={image}
              alt="Services"
              className="absolute inset-0 w-full  object-cover"
              loading="lazy"
              width={200}
              height={200}
            />

            {/* <div
              // style={{
              //   backgroundImage:
              //     "url('../../');",
              // }}
              className="bg-cover bg-centerd  bg-hero"
            >
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                facere, vitae asperiores iste dolores harum a molestiae aliquam
                sequi neque.
              </h2>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnS;
