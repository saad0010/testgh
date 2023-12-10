import React from "react";

import Slider from "../Sliders/Slider";

import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full bg-white">
      <section className="py-7 flex items-center justify-center bg-white">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-slate-600">
              Tees Weather: the # 1 print-on-demand partner
            </p>
            <h1 className="mt-3 text-[3rem] font-semibold leading-[4rem] tracking-tight text-indigo-600/95">
              Custom Printed <br /> Patches & Apparels
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              Guaranted accuracy , quality and delivery. Tees Weather makes it
              easy to buy custom printed patches & apparels online.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href={"/products"}
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-purple-700"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      <Slider />

      {/* Services */}
      <div className="grid mb-40 mt-12 grid-cols-1 md:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="tick"
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z"
                data-name="58  Tick, Basic, Essential, Select"
              ></path>
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Unmatched Quality
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Over 74 million items delivered since 2013
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="delivery"
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M25,12H22V9a3,3,0,0,0-3-3H5A3,3,0,0,0,2,9V23a1,1,0,0,0,1,1H6.18a3,3,0,0,0,5.64,0H22.18a3,3,0,0,0,5.64,0H29a1,1,0,0,0,1-1V17A5,5,0,0,0,25,12ZM9,24a1,1,0,1,1,1-1A1,1,0,0,1,9,24Zm11-2H11.82a3,3,0,0,0-5.64,0H4V19H20Zm0-5H4V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Zm5,7a1,1,0,1,1,1-1A1,1,0,0,1,25,24Zm3-2h-.18a3,3,0,0,0-5.64,0H22V14h1v4a1,1,0,0,0,1,1h4Zm-3-5V14a3,3,0,0,1,3,3Z"></path>
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Fastest in Town
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Only 0.24% of our orders are reshipped
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 2"
              id="support"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 35 35"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M29.07,16.57a1.25,1.25,0,0,1-1.25-1.25V11.79c0-5-4.62-9-10.3-9s-10.3,4.05-10.3,9v3.53a1.25,1.25,0,0,1-2.5,0V11.79C4.72,5.43,10.47.25,17.52.25s12.8,5.18,12.8,11.54v3.53A1.24,1.24,0,0,1,29.07,16.57Z"></path>
              <path d="M25.69 28.33a1.25 1.25 0 0 1-1.25-1.25V15.21A1.25 1.25 0 0 1 25.69 14c4.31 0 7.82 3.23 7.82 7.19S30 28.33 25.69 28.33zm1.25-11.74V25.7A4.86 4.86 0 0 0 31 21.15 4.86 4.86 0 0 0 26.94 16.59zM9.31 28.33c-4.31 0-7.82-3.22-7.82-7.18S5 14 9.31 14a1.25 1.25 0 0 1 1.25 1.25V27.08A1.25 1.25 0 0 1 9.31 28.33zM8.06 16.59A4.86 4.86 0 0 0 4 21.15 4.86 4.86 0 0 0 8.06 25.7z"></path>
              <path d="M25.28,32.4H21.14a1.25,1.25,0,0,1,0-2.5h4.14a2.44,2.44,0,0,0,2.44-2.44v-.55a1.25,1.25,0,1,1,2.5,0v.55A4.94,4.94,0,0,1,25.28,32.4Z"></path>
              <path d="M19,34.75H16.53a3.42,3.42,0,0,1-3.42-3.42v-.14a3.42,3.42,0,0,1,3.42-3.41H19a3.41,3.41,0,0,1,3.41,3.41v.14A3.42,3.42,0,0,1,19,34.75Zm-2.45-4.47a.92.92,0,0,0-.92.91v.14a.92.92,0,0,0,.92.92H19a.92.92,0,0,0,.91-.92v-.14a.91.91,0,0,0-.91-.91Z"></path>
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Live Support
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We are offering our customers round-the-clock live support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
