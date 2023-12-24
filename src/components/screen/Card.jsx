import React from "react";
import { scard } from "@/constants";
import Image from "next/image";

const Card = () => {
  return (
    <div className="px-10 lg:px-52 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-16">
        {scard.map((item) => (
          <div
            key={item._id}
            className="relative flex lg:max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
          >
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-t-md w-full"
              />
            </div>
            <div className="p-6">
              <h4 className="block font-mirza text-[1.7rem] font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.title}
              </h4>
              <p className="mt-3 block font-libre text-sm font-normal leading-relaxed text-gray-700 antialiased">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
