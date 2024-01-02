import Card from "@/components/home/Card";
import SecHero from "@/components/service/SecHero";

import bannerTwo2 from "../../public/effortless.webp";
import Banner from "@/components/home/Banner";
import PnS from "@/components/home/PnS";
import Review from "@/components/home/Review";
import NewCard from "@/components/home/NewCard";
import Slider1 from "@/components/layout/Slider";
import Slider from "@/components/Sliders/Slider";
import BecomClient from "@/components/layout/BecomClient";
import NCard from "@/components/home/NCard";
const cardData = [
  {
    id: 1,
    title: "Custom Patches",
    slug: "patches",
    desc: "Personalized embroidered patches provide a premium appearance without breaking the bank. You have the flexibility to add your personalized patch design on any article of clothing, regardless of its size, shape, or material.Customers can easily obtain the unique patches they want thanks to our step-by-step ordering process.",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards!",
    image: "/customp.jpeg",
  },
  {
    id: 2,
    title: "Custom Embroidery",
    slug: "customembroidery",
    desc: "Use our custom embroidery to uplift your brand’s sophistication. Our skilled makers precisely stitch your designs into high-quality textiles to give them a plush, textured feel. Elegance blends with precision to guarantee that your clothes convey the outstanding quality that is associated with your brand. ",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards",
    image: "/emb.jpg",
  },
  {
    id: 3,
    title: "Custom Printing",
    slug: "printing",
    desc: "Use our custom screen printing service to create an outstanding impression on your customers. We apply vibrant, long-lasting inks to imprint your company's name, images, and messaging onto high-quality textiles. Our state-of-the-art technology guarantees vivid, striking designs that draw in viewers.",
    label: "24/7 Support",
    label1: " Fast Delivery",
    label2: "High Standards",
    image: "/ee.jpg",
  },
  // {
  //   id: 4,
  //   title: "PPC (PAY PER CLICK)",
  //   slug: "ppc",
  //   desc: "CLICK , CONVERT & CONQUER WITH PPC",
  //   label: "INCREASE QUALITY LEADS",
  //   label1: "MORE INBOUND PHONE CALLS",
  //   label2: "GROW YOUR SALES",
  //   image:
  //     "https://img.freepik.com/free-vector/pay-per-click-computer-desktop-with-cursor_107791-1835.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=sph",
  // },
  // {
  //   id: 5,
  //   title: "AFFILIATE MARKETING",
  //   slug: "affiliate",
  //   desc: "DIGITAL MARKETING THAT DRIVES REVENUE",
  //   label: "Get In Touch With Your Client",
  //   label1: "Get Full Sales Supports",
  //   label2: "Leave It To Us",
  //   image:
  //     "https://img.freepik.com/free-vector/hand-drawn-flat-design-affiliate-marketing-infographic_23-2149322238.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=ais",
  // },
  // {
  //   id: 6,
  //   title: "EMAIL MARKETING",
  //   slug: "email",
  //   desc: "Powerful Results with Our Email Marketing Services!",
  //   label: "Campaign Creation",
  //   label1: "Placement Testing",
  //   label2: "Split Testing",
  //   image:
  //     "https://img.freepik.com/free-vector/administrative-staff-sends-emails-company-s-customers-online-with-their-smartphones_1150-65547.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=ais",
  // },
];

const image =
  "https://img.freepik.com/free-photo/business-meeting-about-seo_53876-94826.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=sph";

export default function Home() {
  return (
    <main className="bg-transparent ">
      <Banner />
      <PnS />
      {/* <DBanner /> */}
      <div className="">
        <Slider />
      </div>
      <Review />

      <NCard
        title={"Don't settle for custom shirts no one will wear."}
        image={"/nc.jpg"}
        p1={
          "Tees Weather's library of soft custom shirts, unique print options, and simple order process make it easier than ever to order shirts you'll love and wear proudly."
        }
        p={
          " Your brand is too valuable to print on scratchy, ill-fitting shirts that no one will wear."
        }
        lin={"/screen-printing"}
      />
      <div className=" md:pt-20 lg:pt-0">
        <Card cardData={cardData} />
        <BecomClient />
      </div>
      <NewCard
        title={"Don't settle for  Patches."}
        image={"/a1.jpg"}
        p1={
          "Tees Weather's library of soft custom shirts, unique print options, and simple order process make it easier than ever to order shirts you'll love and wear proudly."
        }
        p={
          " Your brand is too valuable to print on scratchy, ill-fitting shirts that no one will wear."
        }
      />

      <div className="md:pt-10 md:pb-20">
        <SecHero
          heading="Your products—processed, packed and delivered worldwide by Tees Weather"
          description="Print-on-demand eliminates upfront costs and leftover stock by fulfilling products only when your customer places an order. No upfront fees. No minimums. Just effortless fulfillment.  "
          image={bannerTwo2}
        />
        <Slider1 />
      </div>
    </main>
  );
}
