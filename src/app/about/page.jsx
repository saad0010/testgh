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
              clas="text-3xl  ml-40 text-black font-semibold"
              title="Who are we?"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <p className="mx-20 text-lg mt-1 text-black  tracking-wider">
                Since 2017, we’ve been trusted for offering comprehensive
                printing solutions from the heart of Toronto.{" "}
                <p className="mt-6">
                  {" "}
                  We are a team of professional and passionate artists who have
                  been providing excellent services since 2008. We are an online
                  screen printing company, on a mission to make printing
                  services easy and flexible. We are a solution for you if you
                  need personalized wearables or other items.
                </p>
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK
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
              <p className="mx-20 text-lg mt-1 text-black  tracking-wider">
                <p>
                  {" "}
                  No matter the size or scope, our mission is to facilitate
                  successful client relationships and provide insights to help
                  organizations build trust through increased credibility and
                  visibility.
                </p>{" "}
                <p className="mt-6">
                  All our clients do is trust us and our designing team takes
                  care of the rest. Through our designing efforts and strategies
                  we jumpstart your growth, upscale your business and bring in
                  lot of leads, conversions and sales leading to profitable
                  outcomes and success stories along your way.
                </p>
                {/* <hr className="mb-8 mt-20 bg-transparent" /> */}
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md  h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK
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
              <p className="mx-20 text-lg mt-4 text-black tracking-wider">
                Tees Weather is a one-stop shop for printing and designing
                services. We believe in perfection, so we are using various
                printing technologies to get the required results. With years of
                experience, our staff can offer top-notch printing services.
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
