import Header from "@/components/layout/Header";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import BecomClient from "@/components/layout/BecomClient";

export const metadata = {
  title:
    "TEES WEATHER : CUSTOM CLOTHING MANUFACTURER | PRINTING SERVICES | PERSONALIZED CUSTOM T-SHIRTS",

  description:
    "Online Printing Services,custom clothing manufacturer, custom t-shirts, custom caps, custom hoodies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />

        {children}
        <BecomClient />
        <Footer />
      </body>
    </html>
  );
}
