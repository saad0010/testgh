import Header from "@/components/layout/Header";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import BecomClient from "@/components/layout/BecomClient";
import Slider from "@/components/layout/Slider";

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"> */
}

export const metadata = {
  icons: {
    icon: [
      {
        type: "image/png",
        url: "/favicon-32x32.png",
        href: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        type: "image/png",
        url: "/favicon-16x16.png",
        href: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },

  title:
    "Tees Weather : CUSTOM CLOTHING MANUFACTURER | PRINTING SERVICES | PERSONALIZED CUSTOM T-SHIRTS",

  description:
    "Online Printing Services,custom clothing manufacturer, custom t-shirts, custom caps, custom hoodies , custom approns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />

        {children}
        <Slider />
        <BecomClient />
        <Footer />
      </body>
    </html>
  );
}
