import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import BecomClient from "@/components/layout/BecomClient";

export const metadata = {
  title: "Digital Tech Services : Digital Marketing Agency",

  description: "Digital Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-purple-700 via-violet-900 to-neutral-900">
        <Header />

        {children}
        <BecomClient />
        <Footer />
      </body>
    </html>
  );
}
