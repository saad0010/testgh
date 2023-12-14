import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dbanner } from "@/constants";
const DBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 relative mt-14">
        <Image
          src={"/13.jpg"}
          width={400}
          height={400}
          className="w-full absolute -z-1"
          alt="tees weather"
        />
      </div>
      <div className="absolute  ">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center text-center lg:text-left">
            <div className="w-3/6 md:w-fit lg:w-5/6">
              <h1 className="mt-10 lg:mb-20 sm:mt-8 sm:px-20 md:mt-40 lg:mt-52 text-lg sm:text-[2rem] lg:text-[4rem] sm:leading-10 lg:leading-[6rem]  font-semibold mb-6">
                Unleash Your Creativity Custom Shirt Printing For Every Industry
              </h1>

              <Link
                href="/contact"
                className="bg-black text-white py-2 px-6 lg:ml-20 text-xs lg:text-lg rounded-md  hover:bg-yellow-500 hover:text-black"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        {/* <h1 className="mt-16 text-white text-xl text-center font-semibold">
          Unleash Your Creativity: Custom Shirt Printing For Every Industry
        </h1>
      </div>
      <div className=" flex items-center justify-center gap-4">
        <Link
          href={"/products"}
          className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-purple-700"
        >
          SHOP NOW
        </Link>
      </div> */}
      </div>
    </div>
  );
};

export default DBanner;
