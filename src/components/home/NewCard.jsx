import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineRightSquare } from "react-icons/ai";

const NewCard = ({ title, image, p, p1 }) => {
  return (
    <div className=" md:pt-32 lg:pt-10 lg:pb-10 lg:mt-4 pb-4  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden lg:block lg:ml-32 md:mt-52">
          <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-4 px-8">
              <h5 className="mb-2 block font-mirza text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Talk To a Human
              </h5>
              <p className="block font-libre text-sm mt-4 font-light leading-relaxed ">
                Our team of apparel experts are always an email, phone call, or
                even a click away. Seriously, try us
              </p>
            </div>
            <div style={{ alignSelf: "end" }} className="p-3 pt-0 self-end">
              <Link href={"/contact"}>
                <button
                  className="select-none rounded-lg bg-pink-500 py-2 px-2 text-center align-center  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  <AiOutlineRightSquare className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:pl-4">
          <Image
            src={image}
            width={400}
            height={100}
            alt="custom-tshirts"
            className="w-full sm:pl-10 sm:pr-10 sm:pt-6 sm:pb-4 md:p-0 sm:w-11/12   "
          />
        </div>
        <div className="pl-12 w-72 sm:w-96 md:pl-0 lg:pr-12">
          <h3 className="text-bold lg:ml-[-6rem] font-mirza lg:pr-50 lg:mt-4 text-2xl  md:text-4xl lg:text-6xl">
            {title}
          </h3>
          <p className="mt-4 text-sm font-light md:mt-10 font-libre md:text-[.9rem] leading-6">
            {p}
          </p>
          <p className="mt-4 text-sm font-light md:mt-6 font-libre md:text-[.9rem] leading-6">
            {p1}
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="w-66 rounded mt-1 p-3 font-semibold font-libre text-white hover:text-black text-[.6rem] md:text-[.7rem] bg-black hover:bg-yellow-400">
          SEE HOW WE DO IT
        </button>
      </div>
    </div>
  );
};

export default NewCard;
