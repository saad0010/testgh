import Image from "next/image";
import React from "react";

import tshirt from "../../../public/1.png";
import Container from "../layout/Container";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-8">
      <Container>
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
          <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <Image
              src={tshirt}
              alt=""
              className="w-full rounded-lg"
              height={300}
            />

            <div className="absolute max-w-[470px] sm:ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
              <p className="tex-2xl hidden sm:block">100% Original Fabric</p>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
                Pure Cotton Best Quality
              </h2>
              <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
                $10.6
              </div>
              <div className="flex bg-green-700 hover:bg-green-900 text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[12px] sm:px-6 sm:py-3 cursor-pointer">
                SHOP NOW <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="relative">
            <Image src={tshirt} alt="" className="rounded-lg" height={300} />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Best Yummy Pizza
              </h2>
              <p className="text-grau-500 text-xl pt-4">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                $25
              </div>
              <div className="flex bg-green-700 hover:bg-green-900 text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[12px] sm:px-6 sm:py-3 cursor-pointer">
                SHOP NOW <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
