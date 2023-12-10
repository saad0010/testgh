"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const PageNav = () => {
  const pathname = usePathname();
  let parts = pathname.split("/");
  let paths = parts.filter((str) => str !== "");

  console.log(paths);
  return (
    <div className="w-full text-left">
      <nav aria-label="breadcrumb" className="block w-full">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
          <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
            <Link className="opacity-60" href={"/"}>
              <span>HOME</span>
            </Link>
            {/* <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span> */}
          </li>
          {paths?.map((item) => (
            <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
              <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                /
              </span>
              <Link href={`/${item}`} className="opacity-60">
                <span>{item?.toLocaleUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default PageNav;
