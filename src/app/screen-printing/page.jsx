import Card from "@/components/screen/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { items, sser } from "../services/data.js";
import { notFound } from "next/navigation";
import { AiOutlineRightSquare } from "react-icons/ai";

const getData = () => {
  const data = items["services"];

  if (data) {
    return data;
  }

  return notFound();
};

const page = () => {
  const data = getData();
  return (
    <div className="overflow-y-hidden">
      {/* Banner */}
      <div className="relative">
        <Image
          src={"/screenprint.jpg"}
          alt="screen-printing"
          width={400}
          height={400}
          className="w-screen h-[26rem] absolute  -z-10 object-cover"
        />
        <div className="">
          <div className="flex items-center flex-col h-[26rem] bg-slate-900 bg-opacity-50  py-24 ">
            <div className="px-0 lg:px-[20rem] pb-4">
              <h1 className="font-mirza font-normal text-center text-white text-5xl lg:text-6xl leading-[2.5rem] lg:leading-[4rem]">
                Screen Printing How it works.
              </h1>
            </div>
            <div className="ml-4 px-10 lg:px-80 lg:ml-12">
              <p className="text-slate-300 font-libre font-normal text-sm leading-6 lg:text-lg mb-4">
                The process may feel automated on the front end, but behind the
                scenes, theres more to it. Mockup artists, ink mixers, press
                operators, and more are all at work in the screen printing
                process—blending art & science to bring your design to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <Card />

      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[35rem] z-10 hidden lg:block">
            <Image
              src={"/screenprint1.jpg"}
              alt="screen-printing"
              width={400}
              height={400}
              className="h-[50rem] w-[35rem] "
            />
          </div>
          <div className="">
            <div className="bg-gray-100 lg:h-[36rem] lg:-ml-60 lg:mt-28 lg:mr-[28rem]"></div>
            <div className="lg:-mt-[31rem] lg:-ml-20 px-10 lg:px-32">
              <h3 className="font-mirza font-semibold text-md text-slate-400">
                PRODUCTION
              </h3>
              <h2 className="font-mirza text-4xl lg:text-6xl font-normal mt-10">
                Where the ink meets the fabric
              </h2>
              <p className="font-libre font-normal text-sm leading-7 mt-10 ">
                In a beautiful blend of art and science, our team of ink experts
                and press operators use top-of-the-line screen printing
                equipment to perfectly place your design on the t-shirt of your
                choice. Nothing is left to chance as we turn your creations into
                custom shirts you ll absolutely love.
              </p>
            </div>
            <div className=" text-center lg:-ml-20 mt-12 mb-12">
              <Link href={"/contact"}>
                <button className="p-3 text-xs md:text-md font-libre bg-black  text-white uppercase rounded hover:bg-yellow-400 hover:text-black duration-300 tracking-wide">
                  SEE OUR PRINT STYLES
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* hero 1 */}
        <div className="ml-[57.4rem] -mt-28 hidden lg:block">
          <Image
            src={"/screenprint2.jpg"}
            alt="screen-printing"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Banner */}
      <div className="relative mt-20">
        <div className="">
          <Image
            src={"/screenprint3.jpg"}
            alt="screen-printing"
            width={400}
            height={400}
            className="w-screen lg:h-[40rem] absolute  -z-10 object-cover"
          />
        </div>
        <div className="pt-10 lg:px-96  ">
          <div className="flex items-center lg:my-32 flex-col bg-slate-900 bg-opacity-50 lg:py-20  ">
            <div className=" ">
              <h1 className="font-mirza font-normal text-center text-white text-3xl lg:text-5xl leading-[4rem]">
                Behind the scenes
              </h1>
            </div>
            <div className="px-2">
              <p className="text-slate-300 font-libre font-normal text-sm lg:text-lg ">
                Get a glimpse of our screen printing process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="pt-24">
        <div className="bg-gray-200 h-[40rem]">
          <div className="text-center p-10 lg:p-32">
            <h3 className="text-slate-400 font-md font-mirza">
              ADD-ON SERVICES
            </h3>
            <h2 className="text-black mt-4 font-mirza text-4xl lg:text-6xl font-normal">
              The Beauty is in the details
            </h2>
            <p className="font-libre font-normal mt-4 font-sm lg:px-52 text-slate-400">
              Choose from our add-on options to adda retail-quality feel that
              will make your brand stand out.
            </p>
          </div>
        </div>
        <div>
          <div className="-mt-80 lg:-mt-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10 md:pb-0">
            {data
              .filter((item, index) => index < 4)
              .map((item) => (
                <div key={item.id} className="lg:first:mt-20 lg:last:mt-20">
                  <Link href={`/services/${item.slug}`}>
                    <div className="relative flex lg:max-w-[24rem] flex-col  rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                      <div>
                        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                          <Image
                            src={item.image}
                            alt="ui/ux review check"
                            width={400}
                            height={400}
                            className="object-cover rounded-t-xl  w-full h-full"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="block font-mirza text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {item.title}
                          </h4>
                          <p className="mt-3 block font-libre text-sm font-normal leading-relaxed text-gray-700 antialiased">
                            {item.desc}
                          </p>
                        </div>
                        <div className="-mb-5 text-right px-2">
                          <button
                            className="select-none  rounded-md bg-black py-1 px-1 text-center align-center  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            <AiOutlineRightSquare className="text-2xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link href={"/services"}>
            <button className="p-3  text-xs md:text-md font-libre bg-yellow-400   text-black uppercase rounded hover:bg-black hover:text-white duration-300 tracking-wide">
              SEE ALL ADD-ON SERVICES
            </button>
          </Link>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-[13.4rem]">
          <div className="">
            <div className="bg-gray-100 h-0 lg:h-[36rem]  lg:mt-20 lg:ml-52 "></div>
            <div className="lg:-mt-[31rem] lg:-ml-20 px-10 lg:px-24">
              <h3 className="font-mirza font-semibold text-md text-slate-400">
                DELIVERY OPTIONS
              </h3>
              <h2 className="font-mirza text-3xl lg:text-5xl font-normal mt-10">
                Custom screen printing delivered when you need it
              </h2>
              <p className="font-libre lg:pr-20 font-normal text-sm mb-10 md:text-md leading-9 mt-6 ">
                We have three delivery speeds so that your shirts are delivered
                exactly when you need them: Standard 2-week delivery, our 1-week
                Rush option, or our delivered-in-2 days service, Lightning.
              </p>
            </div>
            {/* <div className=" text-center -ml-20 mt-12">
              <Link href={"/contact"}>
                <button className="p-3 text-md font-libre bg-black  text-white uppercase rounded hover:bg-yellow-400 hover:text-black duration-300 tracking-wide">
                  SEE OUR PRINT STYLES
                </button>
              </Link>
            </div> */}
          </div>

          <div className="w-[36rem] z-10 hidden lg:block">
            <Image
              src={"/screenprint4.jpg"}
              alt="screen-printing"
              width={400}
              height={400}
              className="h-[44rem] w-[36rem] "
            />
          </div>
        </div>

        {/* hero 1 */}
        {/* <div className="ml-[57.4rem] -mt-28">
          <Image
            src={"/screenprint2.jpg"}
            alt="screen-printing"
            width={400}
            height={400}
          />
        </div> */}
      </div>

      <div>
        <div className="lg:-mt-32 grid grid-cols-1  lg:grid-cols-5  gap-10 lg:gap-60  lg:ml-60 mb-20  px-10 pb-10 md:pb-0">
          {sser.map((item) => (
            <div key={item.id} className=" lg:w-[15rem]   ">
              <Link href={`/services/${item.slug}`}>
                <div className="relative z-10  lg:w-[14rem] h-[10.4rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div>
                    <div className="px-8 py-4">
                      <h4 className="block font-mirza text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item.title}
                      </h4>
                      <p className="mt-3 block font-libre text-sm font-bold leading-relaxed text-gray-700 antialiased">
                        {item.desc}
                      </p>
                      <p className="mt-3 block font-libre text-xs font-normal leading-relaxed text-gray-700 antialiased">
                        {item.label}
                      </p>
                    </div>
                    <div className=" text-right px-2">
                      <button
                        className="select-none  rounded-md bg-black py-1 px-1 text-center align-center  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        <AiOutlineRightSquare className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/*  Work with people*/}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="grid grid-cols-2">
              <div>
                <Image
                  src={"/w.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full ml-2"
                />
                <Image
                  src={"/w1.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-14 ml-20"
                />
              </div>

              <div>
                <Image
                  src={"/w2.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-8"
                />
                <Image
                  src={"/w3.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-14 ml-20"
                />
              </div>
              <div>
                <Image
                  src={"/w4.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-20 ml-5"
                />
                <Image
                  src={"/w5.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-20"
                />
              </div>

              <div>
                <Image
                  src={"/w6.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10"
                />
                <Image
                  src={"/w7.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-20"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-center px-10 py-20">
              <h2 className="font-semibold font-mirza text-4xl ">
                Work with real people
              </h2>
              <p className="text-sm mt-10 font-libre font-normal leading-8">
                We can walk alongside you every step of the way, informing,
                recommending and advising, or we can remain on the sidelines, at
                the ready to help you when you have a question.
              </p>
              <button
                className="select-none  rounded-md bg-black py-4 px-4 text-center align-center mt-10 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                LIVE CHAT
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2">
              <div>
                <Image
                  src={"/w8.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10"
                />
                <Image
                  src={"/w9.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-20"
                />
              </div>

              <div>
                <Image
                  src={"/w10.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10"
                />
                <Image
                  src={"/w11.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-32"
                />
              </div>
              <div>
                <Image
                  src={"/w12.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-2"
                />
                <Image
                  src={"/w15.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-20"
                />
              </div>

              <div>
                <Image
                  src={"/w16.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10"
                />
                <Image
                  src={"/w14.jpg"}
                  alt="screen printing"
                  width={50}
                  height={50}
                  className="rounded-full mt-10 ml-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
{
  /* <div className="bg-gray-100 -ml-60   mt-28 mr-96">
<div className="ml-96 py-52">
  <h3 className="font-mirza font-semibold">PRODUCTION</h3>
  <h2 className="font-mirza font-semibold">
    Where the ink meets the fabric
  </h2>
  <p className="font-libre font-normal">
    In a beautiful blend of art and science, our team of ink
    experts and press operators use top-of-the-line screen
    printing equipment to perfectly place your design on the
    t-shirt of your choice. Nothing is left to chance as we turn
    your creations into custom shirts you'll absolutely love.
  </p>
</div>
</div> */
}
