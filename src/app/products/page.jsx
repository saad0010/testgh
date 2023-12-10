import Banner from "@/components/products/Banner";
import Hero from "@/components/products/Hero";
import Listing from "@/components/products/Listing";
import React from "react";
import { items } from "./newdata.js";
import { notFound } from "next/navigation";
import PageNav from "@/components/layout/PageNav.jsx";

const getData = () => {
  const data = items;
  console.log(data);

  if (data) {
    return data;
  }

  return notFound();
};

const page = () => {
  const data = getData();
  return (
    <>
      <PageNav />

      {/* <Banner /> */}
      <Listing data={data} />
    </>
  );
};

export default page;
