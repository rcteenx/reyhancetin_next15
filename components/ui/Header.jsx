"use client";

import { useState } from "react";
import Link from "next/link";

import smd from "@/content/data/siteMetaData";
import { StaticPages } from "@/content/data";

export default function Header() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreensNavigationClose = () => {
    setIcon(false);
  };
  const menu = StaticPages.filter((m) => m.id < 4);
  return (
    <header className="mx-auto container-p max-w-7xl pt-2 flex items-center justify-between ">
      <Link
        id="platform"
        onClick={handleSmallerScreensNavigationClose}
        href="/"
        className="gradientTransition z-50 text-indigo"
      >
        {/* <div className="w-10 md:w-16 xl:w-20">
          <img src={smd.siteLogo} alt={smd.title} className="p-0.5" />
        </div> */}
        <h3 className="mt-2 px-2 py-0 font-bold text-left text-base md:text-3xl leading-6  bg-slate-100 rounded-xl border sm:hidden">
          RÇ
        </h3>
        <div className="px-2 py-0 sm:py-1 hidden sm:block ">
          <h3 className="my-1 sm:my-2 font-semibold text-left text-base md:text-3xl leading-6  ">
            Reyhan Çetin
          </h3>
          <p className="mt-1 font-light text-2xs sm:text-base tracking-tight sm:border-t border-indigo">
            Bilinç ve Farkındalık Rehberi
          </p>
        </div>
      </Link>
      <nav className="fixed py-1 my-1 md:my-4 px-6 border border-solid border-dark rounded-full font-extralight text-sm md:text-base bg-white bg-opacity-40 top-2 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-50">
        <ul className="flex justify-center items-center space-x-4">
          {menu.map((p) => (
            <li
              key={p.id}
              className={`border-b border-b-white hover:border-b-indigo `}
            >
              <Link href={`/${p.link}`}>{p.title.toLowerCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
