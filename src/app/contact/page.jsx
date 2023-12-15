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
        <div className="flex w-full  justify-center items-center">
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
        </div>
      </Container>
    </>
  );
};

export default Contact;
