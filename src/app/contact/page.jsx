import Container from "@/components/layout/Container";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

export const metadata = {
  title:
    "Contact - TEES WEATHER | Screen Printing | Embroidery | 3D Puff Solution",

  description:
    "Online Printing Services,custom clothing manufacturer, custom t-shirts, custom caps, custom hoodies, screen printing , embroidery, 3d puff solutions, twill , applique services, promotional products, direct to garment , sublimation",
};

const Contact = () => {
  return (
    <>
      <Container>
        {/* <div className="flex w-full  justify-center items-center">
          <div className=" flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-gray-200 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-black">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-3xl lg:text-5xl text-black font-mirza tracking-wide">
                  Contact Us
                </h1>
                <p className="pt-2 text-black font-libre text-sm">
                  To speak with a Tees Weather expert, provide some information
                  about your organization and we’ll contact you about your
                  needs.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <BsFillTelephoneFill className="text-black text-xl " />
                  <span className="text-black text-xl font-semibold text-mirza">
                    +1 (845) 316 8305
                  </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <AiOutlineMail className="text-black text-xl" />
                  <span className="text-black text-xl font-semibold text-mirza">
                    sales@teesweather.com
                  </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <HiLocationMarker className="text-black text-xl" />
                  <span className="text-black text-md font-semibold text-mirza">
                    130 Brockport Qr suite 276, Toronto, ON M9W 5C8
                  </span>
                </div>

                <div className="flex p-10 gap-6 ">
                  <Image
                    src={"/paypal.png"}
                    alt="paypal"
                    width={128}
                    height={120}
                    className="rounded-full w-16 md:w-20"
                  />
                  <Image
                    src={"/btc.png"}
                    alt="btc"
                    className="bg-white rounded-full w-10 md:w-12"
                    width={62}
                    height={63}
                  />
                </div>
              </div>

              <div className="flex space-x-4 text-lg">
                <a href="https://www.facebook.com" target="_blank">
                  <BsFacebook className="hover:bg-white" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <AiFillInstagram className="hover:bg-white" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <BsTwitter className="hover:bg-white" />
                </a>
              </div>
            </div>
            <div>
              <div className="group bg-gray-600 rounded-xl shadow-lg p-8 md:w-80">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-lg text-white font-mirza">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g John Smith .."
                      className="ring-1 ring-gray-300 w-full rounded-md font-libre px-4 py-2 bg-gray-200  mt-2 outline-none focus:ring-2 focus:ring-black "
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-white font-mirza">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="abc@mail.com"
                      className="ring-1 ring-gray-300 w-full rounded-md font-libre  px-4 py-2 mt-2 bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-white font-mirza">
                      Message
                    </label>

                    <textarea
                      type="email"
                      rows="4"
                      placeholder="Enter Message .."
                      className="ring-1 ring-gray-300 w-full rounded-md font-libre  px-4 py-2 mt-2 bg-gray-200  outline-none border-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <button className="inline-block self-end font-mirza bg-yellow-400 hover:bg-black text-black hover:text-white font-bold rounded-lg px-3 pt-2 uppercase text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          {" "}
          {/* Image Cont */}
          <div className="px-2 lg:px-72 w-full overflow-x-hidden">
            <div className=" bg-[url('/contact.jpg')] mt-32 lg:mt-16 bg-no-repeat bg-contain  min-h-screen lg:h-[180vh] lg:w-screen">
              <div className="py-2 lg:p-6 lg:-ml-72">
                <h2 className="font-mirza -mt-32 lg:mt-0 text-gray-400 font-bold text-[1.4rem]">
                  TEES WEATHER EXPERTS
                </h2>
                <h1 className="ml-4 font-mirza mt-2 lg:mr-[65rem] text-black font-400 text-[2.6rem] lg:text-[3.6rem] leading-10 lg:leading-[3rem]">
                  Our Printing Pros Are Here To Help
                </h1>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="">
            <div className="-mt-[22rem] lg:-mt-[53rem] lg:ml-[60rem] lg:mr-0 px-8 lg:px-0">
              <div className="bg-white p-8 rounded-xl drop-shadow-2xl">
                <p className="font-libre font-normal text-slate-900 tracking-wider  text-sm leading-6">
                  We're ready and waiting to answer all of your questions...
                  Well, all of your product-related questions—please don't try
                  to stump us with questions about quantum physics or
                  differential equations or something.
                </p>
                <p className="mt-2 font-libre font-normal text-slate-900 tracking-wider text-sm leading-6">
                  We can't do your math homework, but we can help guide you
                  toward the product that best fits your budget, order size, and
                  design!
                </p>
                <div className="mt-6">
                  <div>
                    <span className="font-bold">123-393-8745</span>
                  </div>
                  <div>
                    <span className="font-bold flex items-center mt-4">
                      info@teesweather.com <br />
                      sales@teesweather.com
                    </span>
                  </div>
                  <div className="mt-4">
                    <span>Hours:</span>{" "}
                    <span className="font-bold"> 9am - 5pm EST</span>
                    <span className="text-[.8rem]"> weekdays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="lg:w-[36%] lg:-mt-[35rem] lg:pb-6 lg:mb-10 bg-white">
            <div className="px-8 pt-12">
              <div className="text-center">
                <h2 className="font-bold font-mirza text-4xl">
                  Get in touch with us!
                </h2>
                <p className="tracking-wider">
                  You'll receive an email from a real, live human typically
                  within an hour on business days. Our office hours are 9am –
                  5pm EST weekdays.
                </p>
              </div>
              <div>
                <form action="" className="flex flex-col space-y-4 mt-8">
                  <div>
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g John Smith .."
                      className="ring-1 ring-gray-300 w-full  font-libre px-4 py-3 bg-gray-200   outline-none focus:ring-2 focus:ring-black "
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="abc@mail.com"
                      className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Mobile Number
                    </label>

                    <input
                      type="number"
                      placeholder="123-456-7890"
                      className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Oraganization
                    </label>

                    <input
                      type="text"
                      placeholder="Organization name (Optional)"
                      className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Quantity
                    </label>
                    <select
                      className="outline-none focus:outline-none p-2 
                    ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 focus:ring-2 focus:ring-black"
                      value="{selectedValue}"
                      onchange="{handleSelectChange}"
                    >
                      {"{"}genre.map((item, i) =&gt; (
                      <option value="{item}" key="{i}">
                        Less than 50
                      </option>
                      <option value="{item}" key="{i}">
                        50-99
                      </option>
                      <option value="{item}" key="{i}">
                        100-199
                      </option>
                      <option value="{item}" key="{i}">
                        200-499
                      </option>
                      <option value="{item}" key="{i}">
                        500-999
                      </option>
                      <option value="{item}" key="{i}">
                        1000-9,999
                      </option>
                      <option value="{item}" key="{i}">
                        10,000+
                      </option>
                      )){"}"}
                    </select>

                    {/* <input
                    type="text"
                    placeholder="Less than 50"
                    className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-4  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />*/}
                  </div>

                  <div className="pb-8">
                    <label htmlFor="" className="text-lg text-black font-mirza">
                      Message
                    </label>

                    <textarea
                      type="text"
                      rows="4"
                      placeholder="Describe your project"
                      className="ring-1 ring-gray-300 w-full font-libre  px-4 py-3  bg-gray-200  outline-none border-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <button className="inline-block self-center  font-mirza bg-yellow-400 hover:bg-black text-black hover:text-white font-bold rounded-lg px-8 pb-2 pt-4 uppercase text-lg">
                    GET IN TOUCH
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
