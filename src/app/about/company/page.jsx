import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" ">
      <div className="bg-[url('/svg1.svg')]  h-auto bg-auto lg:bg-contain  bg-no-repeat bg-right-top  "></div>

      <div className="flex justify-center sm:p-8">
        <div className="w-[42rem]">
          <div className="bg-gray-300 mt-10 p-6 m-10  md:mt-20  md:p-0 md:m-0 lg:h-[30rem]">
            <div className="md:py-12 md:pl-24 md:pr-20  lg:pt-12 lg:pl-28 lg:pr-20 lg:pb-12 md:h-96 lg:h-auto">
              <h3 className="font-mirza pl-4 md:mt-4 lg:mt-0 font-semibold lg:text-[1.2rem] lg:pl-28 text-slate-400">
                OUR COMPANY
              </h3>
              <h1 className="mt-2  font-mirza font-light text-[2.1rem]  md:text-[1.8rem] lg:pl-28 lg:text-[2.5rem] leading-10 md:leading-[2rem] lg:leading-[2.2rem]">
                Printed locally, worn globally.
              </h1>
              <p className="mt-6 md:mt-8  lg:mt-9    font-libre  font-normal text-[.9rem] md:text-[.8rem] lg:pl-28 lg:pr-2  lg:text-[1.2rem] leading-7 md:leading-6">
                Tees weather is a leading fashion retailer offering personalize
                clothing, and accessories for men, women and kids. Since 2017,
                we ve been committed to providing our customers high quality,
                unique and custom Printing, sublimation, embroidery and digital
                Printing facility to all over the world.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[28.5rem] hidden md:block">
          <div className="mt-20  ">
            <Image
              src={"/about.jpg"}
              alt="about tees weather"
              width={500}
              height={500}
              className="object-cover md:h-96 lg:h-[30rem]  h-full"
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-20 lg:pb-20 lg:pl-32 lg:pr-32 text-center">
        <h2 className="font-mirza font-light text-[1.6rem] md:text-[3rem] md:my-8 lg:text-[4rem] leading-7 mx-14 md:mx-20 md:leading-[3rem] lg:leading-[4rem]">
          Shirts are what we make. People are our passion.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="z-10">
          <div className="bg-zinc-900 md:px-10 md:py-10 lg:px-36 lg:py-24 px-10 py-10 mt-8">
            <h3 className="text-white text-center font-normal mb-4  font-mirza text-[3.2rem] md:text-[3rem] lg:text-[3.7rem]">
              Our Purpose
            </h3>

            <h2 className="text-white font-mirza text-center text-[1.8rem] leading-7">
              Tees Weather Exists to Elevate the Everyday
            </h2>
            <p className="mt-4  leading-7 text-white font-libre text-sm">
              We believe that everyone deserves high-quality custom garments and
              personalized merchandise right when they need them. So, we re
              proud to offer our advanced printing services and lightning-fast
              turnaround times to customers. We are capturing our customers
              hearts by delivering excellence and creativity in customized
              apparel. You can design your own t-shirts and hoodies, select your
              t-shirt style, and place an order for it to be printed and
              delivered to you. Thats as easy as customized merchandise printing
              gets!
            </p>
          </div>
        </div>

        <div className="md:-ml-[35%] lg:-ml-[45%] ">
          <div className="lg:p-6 md:pl-52 lg:pl-96 md:pr-20 lg:pr-32 lg:pb-20 p-8  bg-gray-200  md:mt-[22rem] lg:mt-[20rem]">
            <div className="lg:pt-16 lg:px-12">
              <p className="text-black -mb-4 text-center font-mirza text-[1.4rem] lead">
                Create Wow!
              </p>
              <h3 className="mt-10 text-black text-center font-mirza text-[4rem] md:text-[3.4rem] leading-[2rem]">
                Our Values
              </h3>
            </div>

            <div className="flex items-center mt-10">
              <h4 className="text-slate-800 mr-3 font-semibold  text-sm lg:text-lg">
                01
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                6-star experience.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              People are at the heart of what we do. They re how we dot it, and
              how we do it for. We re fueled by the belief that every moment,
              every interaction,and every person matters--everyday. We believe
              that the true joys of life are found not in the tuxedo days, but
              in the t-shirt days--which is why we seek to elevate the everyday
              through superior products & processes.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                02
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Love your neighbor.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We Know that our employees are our most important asset and we aim
              to create a work-life experience unlike any other. We care
              supports, cheerleaders, and helpers to one another. We seek to
              connect on a human-to-human level--not just as worker, but as
              friends.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                03
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Press onward
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We know that hard times will come--and when they do, we band
              together to push through them, confident that this too will pass.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                04
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Team Together.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We put team over self because we know that greatness is a
              collective effort.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                05
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Profit as oxygen.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We do not exist for profit alone, but we do know that it is
              necessary for the company to continue to exist and serve people in
              the way that we do. As such, we are committed to begin an
              efficient, productive, and profitable business.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                06
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Do good.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We believe every day is a God-given gift--and we seek to use our
              time, talents,and resources to have a positive impact on our
              industry, society, and the planet.
            </p>

            <div className=" mt-10 flex items-center">
              <h4 className="text-slate-800 mr-3 font-semibold text-sm lg:text-lg">
                07
              </h4>
              <h2 className="text-black font-libre font-bold text-[1.4rem] lg:text-[1.8rem]">
                Enjoy the journey.
              </h2>
            </div>
            <p className="mt-2  leading-8 text-black font-libre text-sm">
              We believe that the real fun is in the getting there. Although we
              have goals we re trying to accomplish, we seek to enjoy the
              journey to our destination--and all of the laughs,surprises, and
              lessons along the way--as much as the destination itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
