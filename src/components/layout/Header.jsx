"use client";

import {
  abt,
  brands,
  collection,
  headerListItem,
  prodSvg,
  services,
  spt,
} from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  IoAddSharp,
  IoArrowBack,
  IoCloseSharp,
  IoMenuOutline,
} from "react-icons/io5";
import { motion, useReducedMotion } from "framer-motion";

import Image from "next/image";
import logo from "../../../public/logo.jpg";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <div className=" w-full lg:h-20 h-16  border-gray-500 px-2  bg-white overflow-x-hidden">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <span
          onClick={() => setShowMenu(true)}
          className="absolute left-14   top-2.6 text-2xl p-4 bg-midnigh hover:bg-btnyel hover:text-black hidden lg:block rounded-full text-white  cursor-pointer duration-300"
        >
          <IoMenuOutline />
        </span>
        {/* Logo */}
        <Link
          href={"/"}
          className="ml-4 lg:ml-40 relative group overflow-hidden"
        >
          <p className="text-[1.8rem] md:text-[2.7rem] lg:-mt-1 font-lobster hover:text-btnyel text-midnigh tracking-widest group-hover:translate-x-0 transition-transform duration-700">
            Tees Weather
          </p>
          {/* <span className="absolute bottom-0 w-full h-[2px] inline-block bg-black -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span> */}
        </Link>

        {/* Logo */}

        {/* Small Logo  */}

        <span
          onClick={() => setShowMenu(true)}
          className="absolute right-6 top-2.5 text-xl p-3 bg-black lg:hidden rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
        >
          <IoMenuOutline />
        </span>

        {/* Mobile Menu */}

        {/* Small Screen Menu */}
        {showMenu && (
          <div className="w-full lg:w-4/5 h-screen fixed top-0 left-0 bg-white z-50 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block">
                <Image
                  src={"/h8.jpg"}
                  alt="tees weather"
                  width={400}
                  height={400}
                  className="w-full "
                />
              </div>
              <div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opactiy: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[100%] h-full bg-white p-4 relative"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-8 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>
                {/* <Link href={"/"} onClick={() => setShowMenu(false)}>
                  <p className="text-[1.8rem] font-semibold font-kalam mt-3 ml-2 text-black mb-4">
                    TEES WEATHER
                  </p>
                </Link> */}
                <ul className="flex flex-col text-gray-300    gap-0">
                  <div className="pt-8 pl-10 lg:pl-32  text-black font-normal font-mirza text-[2.2rem] lg:text-[3rem] leading-[3rem] lg:leading-[4rem]">
                    <li
                      className="cursor-pointer hover:text-yellow-400 flex flex-row "
                      onClick={() => setShowProduct(true)}
                    >
                      Products{" "}
                      {/* <IoAddSharp className="text-yellow-400 " size={50} /> */}
                      <FaPlus
                        className="text-yellow-400 hover:text-black ml-3  mt-[.5rem] "
                        size={22}
                      />
                    </li>

                    {headerListItem.map((item) => (
                      <Link key={item._id} href={item.link}>
                        <li
                          onClick={() => setShowMenu(false)}
                          className="hover:text-yellow-400 cursor-pointer duration-300"
                          key={item._id}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-4 pl-10 lg:pl-32 text-gray-400  font-normal font-mirza text-[1.6rem] lg:text-[1.9rem]">
                    <li
                      className="cursor-pointer hover:text-black flex flex-row "
                      onClick={() => setShowService(true)}
                    >
                      Add-On Services{" "}
                      <FaPlus
                        className="text-yellow-400 ml-2 mt-[.4rem]"
                        size={15}
                      />
                    </li>
                    <li
                      className="cursor-pointer hover:text-black flex flex-row "
                      onClick={() => setShowAbout(true)}
                    >
                      About{" "}
                      <FaPlus
                        className="text-yellow-400 ml-2 mt-[.4rem]"
                        size={15}
                      />
                    </li>

                    <li
                      className="cursor-pointer hover:text-black flex flex-row "
                      onClick={() => setShowSupport(true)}
                    >
                      Support{" "}
                      <FaPlus
                        className="text-yellow-400 ml-2  mt-[.4rem]"
                        size={15}
                      />
                    </li>
                  </div>
                </ul>
                <div className="pl-10 lg:pl-32 w-72 mt-10">
                  <Link
                    onClick={() => setShowMenu(false)}
                    href={"/contact"}
                    className="transform font-mirza  rounded bg-black hover:bg-yellow-400 px-12 md:px-5 md:mt-5 py-3 pt-5  text-[1rem]  font-[900]  text-white hover:text-black transition-colors "
                  >
                    Request Samples
                  </Link>
                </div>
              </div>
              {/* <div className="hidden lg:block">image</div> */}
            </div>
          </div>
        )}
        {/* Small Screen Product Menu */}
        {showMenu && showProduct && (
          <div className="w-full lg:w-4/5 h-screen fixed overflow-y-scroll top-0 left-0 bg-white z-50 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="hidden lg:block">
                <Image
                  src={"/h9.jpg"}
                  alt="tees weather"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opactiy: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[100%] h-full bg-gray-100 py-4  relative"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-8 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>

                <span
                  onClick={() => setShowProduct(false)}
                  className="absolute left-7 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoArrowBack />
                </span>

                <div>
                  <div className="text-center mt-10 text-3xl  font-mirza font-semibold">
                    <h2 className="mb-7"> Our Products</h2>
                  </div>
                  <div className="text-center  ">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:pb-4">
                      {prodSvg.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col h-30 justify-between cursor-pointer   items-center"
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                          <h3 className="font-mirza  text-black mt-2 font-normal  text-2xl">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-black text-center">
                    <div className="grid lg:grid-cols-2 pb-10">
                      <div className="py-10">
                        <h2 className="text-yellow-400">COLLECTIONS</h2>
                        {collection.map((item) => (
                          <Link key={item.id} href={"/products"}>
                            <p className="text-white mt-4">{item.title}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="pb-10 pt-0">
                        <h2 className="text-yellow-400">BRANDS</h2>
                        {brands.map((item) => (
                          <Link key={item.id} href={"/products"}>
                            <p className="text-white mt-4">{item.title}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Small Screen Service Menu */}
        {showMenu && showService && (
          <div className="w-full lg:w-4/5 h-screen fixed  top-0 left-0 bg-white z-50 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block">
                <Image
                  src={"/h4.jpg"}
                  alt="tees weather"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opactiy: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[100%] h-full bg-black py-4 relative"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-8 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>

                <span
                  onClick={() => setShowService(false)}
                  className="absolute left-6 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoArrowBack />
                </span>

                <div className="mt-28 ml-10 lg:ml-32">
                  <h3 className="text-yellow-400 font-libre text-md">
                    Add-on Services
                  </h3>
                  {services.map((item) => (
                    <Link
                      key={item._id}
                      onClick={() => {
                        setShowService(false);
                        setShowMenu(false);
                      }}
                      href={`/services/${item.slug}`}
                    >
                      <h2
                        key={item._id}
                        className="text-white pl-4 font-mirza font-semibold text-3xl leading-[3.5rem]"
                      >
                        {item.title}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Small Screen About Menu */}
        {showMenu && showAbout && (
          <div className="w-full lg:w-4/5 h-screen fixed  top-0 left-0 bg-white z-50 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block">
                <Image
                  src={"/h6.jpg"}
                  alt="tees weather"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opactiy: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[100%] h-full bg-black py-4 relative"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-8 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>

                <span
                  onClick={() => setShowAbout(false)}
                  className="absolute left-6 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoArrowBack />
                </span>

                <div className="mt-28 ml-10 pb-32 lg:ml-32">
                  <h3 className="text-yellow-400 font-libre text-md">About</h3>
                  {abt.map((item) => (
                    <Link
                      key={item.id}
                      href={item.src}
                      onClick={() => {
                        setShowAbout(false);
                        setShowMenu(false);
                      }}
                    >
                      <h2
                        key={item._id}
                        className="text-white pl-4 mt-4 font-mirza font-semibold text-3xl leading-[2.5rem]"
                      >
                        {item.title}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Small Screen Support Menu */}
        {showMenu && showSupport && (
          <div className="w-full lg:w-4/5 h-screen fixed  top-0 left-0 bg-white z-50 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block">
                <Image
                  src={"/h7.jpg"}
                  alt="tees weather"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opactiy: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[100%] h-full bg-black py-4 relative"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-8 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>

                <span
                  onClick={() => setShowSupport(false)}
                  className="absolute left-6 top-5 text-2xl p-3 bg-black rounded-full text-white hover:text-yellow-400 cursor-pointer duration-300"
                >
                  <IoArrowBack />
                </span>

                <div className="mt-28 ml-10 pb-32 lg:pb-0 lg:ml-32">
                  <h3 className="text-yellow-400 font-libre text-md">
                    Support
                  </h3>
                  {spt.map((item) => (
                    <Link
                      key={item.id}
                      href={item.src}
                      onClick={() => {
                        setShowSupport(false);
                        setShowMenu(false);
                      }}
                    >
                      <h2
                        key={item._id}
                        className="text-white pl-4 mt-4 font-mirza font-semibold text-3xl leading-[2.5rem]"
                      >
                        {item.title}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="hidden  lg:inline-flex items-center   gap-8 text-sm uppercase font-semibold tracking-wide">
          <Link href={"/contact"}>
            <button className="pt-2  w-auto px-6  h-12 mr-12  text-[1rem] font-mirza bg-btnyel   text-black uppercase rounded hover:bg-midnigh hover:text-white duration-300 tracking-wide">
              START A QUOTE +
            </button>
          </Link>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
