import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const isProduction = process.env.NODE_ENV == "production" ? "true" : "false";
const gtmId = process.env.NODE_ENV == "production" ? "GTM-KH9VQ9NG" : "";

import "./globals.css";

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
    template: `%s | ${smd.title}`,
  },
  description: smd.description,
  alternates: {
    canonical: "https://reyhancetin.org.tr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language}>
      <body className={`${base.variable} antialiased`}>
        {isProduction && gtmId && <GoogleTagManager gtmId={gtmId} />}
        {/* <GoogleTagManager gtmId="GTM-KH9VQ9NG" /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
