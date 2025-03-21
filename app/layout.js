import { Inter } from "next/font/google";
import "./globals.css";

// import GoogleAnalytics from "@/components/GoogleAnalytics";

import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/footer/0-index";

const base = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-base",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language}>
      <body className={`${base.variable} antialiased`}>
        {/* <GoogleAnalytics /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
