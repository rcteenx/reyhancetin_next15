"use client";

import { useState } from "react";
import Link from "next/link";

import IconComponent from "@/components/ui/IconComponent";

import { StaticPages } from "@/content/data";

export default function Header() {
  const menu = StaticPages.filter((m) => m.id < 4);
  return (
    <header className="mx-auto px-4 md:px-8 lg:px-12 pt-2 max-w-7xl">
      <div className="flex items-center justify-between">
        <Link
          id="home"
          href="/"
          className="gradientTransition z-50 text-indigo"
        >
          {/* <div className="w-10 md:w-16 xl:w-20">
          <img src={smd.siteLogo} alt={smd.title} className="p-0.5" />
        </div> */}
          <h3 className="mt-2 px-2 py-1 font-bold text-left text-base md:text-3xl leading-6 rounded-xl border sm:hidden">
            <IconComponent name="home" size={18} color="#333366" />
          </h3>
          <div className="py-0 sm:py-1 hidden sm:block ">
            <h3 className="my-1 sm:my-2 font-semibold text-left text-base md:text-3xl leading-6  ">
              Reyhan Çetin X
            </h3>
            <p className="mt-1 font-light text-2xs sm:text-lg tracking-tight sm:border-t border-indigo">
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

        <Link
          id="contact"
          href="/iletisim"
          className="gradientTransition z-50 text-indigo"
        >
          <h3 className="mt-2 px-2 py-1 font-bold text-left text-base md:text-3xl leading-6 rounded-xl">
            <IconComponent name="menu" size={18} color="#333366" />
          </h3>
        </Link>
      </div>
    </header>
  );
}
