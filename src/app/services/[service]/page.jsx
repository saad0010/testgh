import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Hero from "@/components/service/Hero.jsx";

import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Cards from "@/components/service/Cards.jsx";
import SecHero from "@/components/service/SecHero.jsx";
import Banner from "@/components/service/Banner.jsx";

const getData = (service) => {
  const data = items[service];

  if (data) {
    return data;
  }

  return notFound();
};

const Service = ({ params }) => {
  const data = getData(params.service);
  const dat =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum laboriosam, nulla ea vero sequi obcaecati, tempora amet nisi repudiandae libero reprehenderit sapiente alias cupiditate voluptate. At, distinctio tenetur. Veritatis id asperiores aut architecto ab cumque totam at nulla similique laborum, error sunt reprehenderit facilis dolorum non reiciendis minus corporis.";

  return (
    <>
      <Container>
        {data.map((item) => (
          <Banner
            key={item._id}
            title={item.title}
            label={item.label1}
            p={item.desc}
            p1={item.label}
            image={item.image}
            images={item.images}
          />
        ))}
      </Container>
      {/* <div className="h-px flex-auto mx-20 mt-10 bg-white" /> */}
    </>
  );
};

export default Service;
