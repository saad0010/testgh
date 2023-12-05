import Banner from "@/components/banner/Banner";
import Clients from "@/components/clients/Clients";
import Card from "@/components/home/Card";
import SecHero from "@/components/service/SecHero";
import Image from "next/image";
import bannerTwo from "../../public/1.png";
import bannerTwo2 from "../../public/22.jpg";
const cardData = [
  {
    id: 1,
    title: "T-Shirts",
    slug: "tshirts",
    desc: "Give Your Apparel the Pro Treatment ",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards!",
    image:
      "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.644798112.1701734241&semt=sph",
  },
  {
    id: 2,
    title: "CAPS",
    slug: "caps",
    desc: "STUNNING DESIGN SERVICES",
    label: "24/7 Support",
    label1: "Fast Delivery",
    label2: "High Standards",
    image:
      "https://img.freepik.com/free-psd/cap-mock-up-front-view_1310-153.jpg?size=626&ext=jpg&ga=GA1.1.644798112.1701734241&semt=sph",
  },
  {
    id: 3,
    title: "HOODIES",
    slug: "hoodie",
    desc: "We'll include the colour code or Pantone number in your artwork approval so you can double-check it before we start manufacturing.",
    label: "24/7 Support",
    label1: " Fast Delivery",
    label2: "High Standards",
    image:
      "https://img.freepik.com/free-psd/psd-white-hoodie-mockup_1409-3755.jpg?size=626&ext=jpg&ga=GA1.1.644798112.1701734241&semt=sph",
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
    <main className="bg-transparent">
      <Banner />

      <Card cardData={cardData} />

      <SecHero
        heading="Style Your Apparel That Makes Statement"
        description="We print variety! Whether you are looking for embroidered clothing, tackle twill apparel, gifts for family or friends, or fashion statements, you have almost limitless options for turning your concepts into desirable items. If you want screen printing, custom embroidery, or 3D puff embroidery for your hats, bags, or shirts, share your ideas with us. We have a specialist who will listen to your ideas and make them happen. "
        image={bannerTwo}
      />
      <Clients />

      <div className="h-px flex-auto mx-20  bg-black" />
    </main>
  );
}
