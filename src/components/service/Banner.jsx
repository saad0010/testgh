import Image from "next/image";
import React from "react";

const Banner = (props) => {
  const heading = props.title;
  const label = props.label;
  const description = props.p;
  const description1 = props.p1;
  const image = props.image;
  const key = props.key;
  let img = props.images;

  return (
    <div className="">
      <section className="w-screen h-auto md:h-[30rem]">
        <Image
          src={image}
          className="-z-10  object-cover  w-screen lg:w-full md:h-full"
          alt="Image alt text"
          width={400}
          height={400}
        />
      </section>

      <div className="md:px-52 z-10 md:-mt-40 relative">
        <div className="bg-white px-10 py-8 md:px-28 md:py-16 shadow-md rounded-xl border-b-1">
          <h3 className="text-slate-400">ADD-ON SERVICES</h3>
          <h1 className="text-black text-4xl font-mirza lg:text-5xl  mt-8 mb-8">
            {heading}
          </h1>
          <p className="text-slate-700 mt-6 font-libre">{label}</p>
        </div>
      </div>

      <div className="px-8 py-10 lg:px-80 lg:py-20">
        <p className="leading-8 font-libre">
          {description} <br />
          <br /> {description1}
        </p>
        {/* <p className="mt-10 leading-8 font-libre"></p> */}

        {img.map((item) => (
          <div key={item.id} className="mt-24">
            <Image
              src={item.src}
              alt="patches"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid  divide-neutral-200 px-10 md:px-52 mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-slate-200 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                Details
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <h2 className=" text-lg  font-libre text-black">
                  Additional Turnaround Time
                </h2>
                <p className="mt-1 text-md">+1 day</p>

                <h2 className="text-lg  mt-6 font-libre text-black">
                  Bag Size
                </h2>
                <p className="mt-1 text-md">
                  The standard bag size is roughly 10 wide x 12 tall, 1 mil.
                  Hoodie bags are slightly larger, generally 10 wide x 15 tall.
                </p>

                <h2 className="text-lg  mt-6 font-libre text-black">
                  Bag Color Choices
                </h2>
                <p className="mt-1 text-md font-libre">
                  Clear is the only option.
                </p>

                <h2 className="text-lg mt-6 text-black font-libre">
                  Size Stickers
                </h2>
                <p className="mt-1 text-md font-libre">
                  Size stickers on the exterior of the bag is included, but can
                  optional be left off if desired.
                </p>
              </div>
            </section>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex gap-6 justify-left bg-slate-200 p-4 w-full rounded text-gray-600 items-center font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                {" "}
                Pricing
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-4">
                <h2 className="text-xl font-libre ">Price Chart</h2>
              </div>
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Banner;
