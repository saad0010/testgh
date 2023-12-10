import Image from "next/image";
import React from "react";
import { AiOutlineRightSquare } from "react-icons/ai";

const NewCard = ({ title, image, p, p1 }) => {
  return (
    <div className="pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:block md:mt-40">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Talk To a Human
              </h5>
              <p className="block font-sans text-base mt-8 font-light leading-relaxed text-inherit antialiased">
                Our team of apparel experts are always an email, phone call, or
                even a click away. Seriously, try us
              </p>
            </div>
            <div style={{ alignSelf: "end" }} className="p-6 pt-0 self-end">
              <button
                className="select-none rounded-lg bg-pink-500 py-2 px-2 text-center align-center  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <AiOutlineRightSquare className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={image}
            width={400}
            height={100}
            alt="custom-tshirts"
            className="w-full p-10 md:p-0 md:w-11/12  "
          />
        </div>
        <div className="pl-12 pr-12 md:pl-0 md:pr-12">
          <h3 className="text-bold md:ml-[-6rem] md:pr-50 md:mt-4 text-3xl md:text-6xl">
            {title}
          </h3>
          <p className="mt-4 text-sm font-light md:mt-10 md:text-xl">{p}</p>
          <p className="mt-4 text-sm font-light md:mt-10 md:text-xl">{p1}</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="w-66 rounded-md mt-5 p-3 font-semibold text-white text-sm md:text-md bg-slate-600 hover:bg-indigo-400">
          SEE HOW WE DO IT
        </button>
      </div>
    </div>
  );
};

export default NewCard;
