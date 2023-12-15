import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="grid grid-cols-1 max-w-screen ">
        <div className="relative xs:h-48 sm:h-80 md:h-[32rem] lg:h-fit xl:h-[81vh]  overflow-hidden">
          <video
            disablepictureinpicture
            autoPlay
            loop
            muted
            playsInline
            className="absolute -z-10    md:w-full   "
          >
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <section className="  py-2 md:py-7 flex  bg-transaprent">
            {/* mx-auto max-w-[33rem] */}
            {/* <div className=" mx-auto max-w-[33rem]">
         
        </div> */}
            <div className=" mx-2 w-6/12 md:mx-10 ">
              <div className="text-center ">
                <p className="text-sm hidden font-libre lg:block lg:mt-20 md:text-xl font-medium  leading-8 text-white">
                  Tees Weather: the # 1 print-on-demand partner
                </p>
                <h1 className="mt-12 font-mirza sm:mt-20 md:mt-1 lg:mt-10 text-[1.2rem] sm:text-[2rem] md:text-[4.2rem] font-semibold leading-[1.5rem] sm:leading-[2.5rem] md:leading-[4rem] tracking-tight text-white">
                  Custom <br /> Apparels & Patches
                </h1>
                <p className="mt-2 hidden font-libre lg:block md:mt-2 lg:mt-10 text-[.8rem] md:text-lg leading-relaxed text-white">
                  Guaranted Accuracy , Quality and Delivery. Tees Weather makes
                  it easy to buy patches & apparels online.
                </p>
                <div className=" flex items-center justify-center gap-4 mt-5 mb-5">
                  <Link
                    href={"/products"}
                    className="transform font-libre rounded bg-yellow-400 hover:bg-black px-2 md:px-5 md:mt-5 py-1 md:py-3  text-[.4rem] md:text-[.9rem] font-[900]  text-black hover:text-white transition-colors "
                  >
                    CONTACT A PRINTING PRO
                  </Link>
                </div>
              </div>
            </div>

            {/* <div classname="flex items-end z-9 w-full bg-transparent  cursor-pointer">
              <div classname="">
                <Image
                  classname=" cursor-pointer"
                  alt="play"
                  src="/play.png"
                  width={25}
                  height={25}
                />
              </div>
            </div> */}
          </section>
        </div>
      </div>

      {/* Services */}
      <div className="px-20  grid grid-cols-1 md:grid-cols-4 group bg-white  shadow-neutral-100 border ">
        <div className=" md:p-10 flex flex-col md:flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={"/s.png"}
            width={100}
            height={100}
            alt="quality apparel"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          <p className=" text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Low Minimums
          </p>
          <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5 font-normal text-black">
            Looking for quality apparel but donit need a large bulk order? Our
            minimum is only 20 units.
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={"/s1.png"}
            width={100}
            height={100}
            alt="products free shipping"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Superior Pricing
          </p>
          <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5  text-black">
            Premium products at an unparalleled value, with competitive pricing
            and free standard shipping*
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col font-mirza items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={"/s2.png"}
            width={100}
            height={100}
            alt="guarantee"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          {/* </span> */}
          <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Unbeatable Guarantee
          </p>
          <p className="mt-2 text-[.6rem] md:text-[.7rem] font-libre leading-2 md:leading-5 text-black">
            No-risk custom apparel with guaranteed accuracy, quality, and
            delivery.
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={"/s3.png"}
            width={100}
            height={100}
            alt="print quality"
            className="object-cover w-8 h-6 md:w-18 md:h-18"
          />
          <p className="text-sm md:text-[1.25rem] font-mirza font-light  text-black mt-3">
            Design Review
          </p>
          <p className="mt-2 text-[.6rem] md:text-[.7rem] font-libre leading-2 md:leading-5 text-black">
            Each order undergoes an in-house art review to guarantee precise
            placement and excellent print quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// <div className="relative mb-20">
//   <div className=" ">
//     <video autoPlay loop muted className="  ">
//       <source
//         src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
//         type="video/mp4"
//         className="-z-1"
//       />
//       Your browser does not support the video tag.
//     </video>
//   </div>
//   <div className="absolute">
//     <h1>Hello WOrld</h1>
//   </div>
// </div>

/* <section className=" py-7 flex items-center justify-center bg-white">
        <div className="mx-auto max-w-[43rem]">
          <div className="  text-center">
            <p className=" text-lg font-medium leading-8 text-slate-600">
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
        </div>
      </section> */
/* <div> */
/* <video
          autoPlay
          loop
          muted
          className=" z-10 w-auto min-w-full min-h-full"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.

        </video> */
/* </div>
    </div> */
