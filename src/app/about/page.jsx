import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";
import React from "react";
import aboutImg from "../../../public/about.webp";
import ab1 from "../../../public/ab1.png";
import ab2 from "../../../public/ab2.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-6">
          <FadeIn>
            <Title
              clas="text-3xl  ml-40 text-white font-semibold"
              title="Who are we?"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <p className="mx-20 text-lg mt-1 text-white  tracking-wider">
                Since 2017, we’ve been trusted for offering comprehensive
                digital marketing solutions from the heart of Toronto.{" "}
                <p className="mt-6">
                  {" "}
                  Our services cover search engine optimization, pay-per-click
                  advertising or website design or development our team has got
                  it all covered backed up with years of experience, research
                  and hardwork.
                </p>
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK TO US
                  </button>
                </Link>
              </p>
              <Image
                src={aboutImg}
                alt="bannerImg"
                className="max-w-xs rounded-full mr-20"
              />
            </div>
            <div className="h-px flex-auto mx-20 mt-20  bg-white" />
          </FadeIn>
        </div>

        <div className="flex flex-col mt-10 gap-6 bg-transparent">
          <FadeIn>
            <Title
              clas="text-3xl  ml-60 text-white font-semibold"
              title="Our Mission Is To Make Your Life Simple"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col  md:flex-row items-start gap-10">
              <Image
                src={ab1}
                alt="bannerImg"
                className="max-w-xs ml-20 mt-4 rounded"
              />
              <p className="mx-20 text-lg mt-1 text-white  tracking-wider">
                <p>
                  {" "}
                  No matter the size or scope, our mission is to facilitate
                  successful client relationships and provide insights to help
                  organizations build trust through increased credibility and
                  visibility.
                </p>{" "}
                <p className="mt-6">
                  All our clients do is trust us and our digital marketing team
                  takes care of the rest. Through our marketing efforts and
                  strategies we jumpstart your growth, upscale your business and
                  bring in lot of leads, conversions and sales leading to
                  profitable outcomes and success stories along your way.
                </p>
                {/* <hr className="mb-8 mt-20 bg-transparent" /> */}
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md  h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK TO US
                  </button>
                </Link>
              </p>
            </div>
            <div className="h-px flex-auto mx-20 mt-20 bg-white" />
          </FadeIn>
        </div>

        <div className="flex flex-col mt-20 gap-6">
          <FadeIn>
            <Title
              clas="text-3xl  ml-40 text-white font-semibold"
              title="We deliver ROI-Focused Digital Marketing Solution"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <p className="mx-20 text-lg mt-4 text-white tracking-wider">
                Digital Tech Services is one of the best marketing agencies
                based in Canada that offers customized growth oriented marketing
                solutions to help business gain digital exposure and competitive
                edge so they can garner the interest of their customers and
                achieve their strategic goals and mission easily.
              </p>
              <Image
                src={ab2}
                alt="bannerImg"
                className="max-w-xs mr-20 rounded mt-4"
              />
            </div>
            <div className="h-px flex-auto mx-20 mt-20  bg-white" />
          </FadeIn>
        </div>
      </Container>
    </>
  );
};

export default About;
