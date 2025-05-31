"use client";
import { useState, useEffect } from "react";

import ReyhanMerhaba from "../reyhan/info/merhaba";
import ReyhanKimim from "../reyhan/info/kim";
import ReyhanGenelTanitim from "../reyhan/info/genel";

import ReyhanCember from "../reyhan/info/cember";
import ReyhanYol from "../reyhan/info/yol";
import ReyhanAtolye from "../reyhan/info/atolye";
import ReyhanGrup from "../reyhan/info/grup";
import Reyhan from "../reyhan/info/reyhan";

export default function ReyhanInfo({ autoplayInterval = 10000 }) {
  var items = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      handleNextClick();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, autoplayInterval]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel overflow-hidden">
        <div
          className="carousel-inner h-[520px] sm:h-[600px] text-yellow-300 flex transition-transform duration-500 text-center w-full "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <ReyhanMerhaba />
          <ReyhanKimim />
          <ReyhanGenelTanitim />
          <ReyhanYol />
          <ReyhanCember />
          {/* Buraya açılımı yazalım.. */}
          <ReyhanAtolye />
          <ReyhanGrup />
          <Reyhan />
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-1 sm:p-2 hover:bg-yellow-500 transition-colors duration-300"
        onClick={handlePrevClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-1 sm:p-2 hover:bg-yellow-500 transition-colors duration-300"
        onClick={handleNextClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div className="carousel-dots p-2 gradientGold rounded-xl flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-700" : "bg-yellow-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
