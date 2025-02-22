"use client";
import { useState, useEffect } from "react";

export default function CarouselContent({
  images,
  items,
  autoplayInterval = 3000,
}) {
  var images2 = items.map((a) => a.src);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      handleNextClick();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, autoplayInterval]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images2.length) % images2.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images2.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel overflow-hidden">
        <div
          className="carousel-inner h-[640px] flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((image, index) => (
            <div key={index} className="carousel-item flex-shrink-0 w-full">
              {/* <img
                src={image.src}
                alt={image.alt}
                className="mx-auto border-2 border-yellow-600 h-[640px]"
              /> */}
              {items[index].content}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-2 hover:bg-yellow-500 transition-colors duration-300"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-2 hover:bg-yellow-500 transition-colors duration-300"
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
              index === currentIndex ? "bg-yellow-900" : "bg-yellow-200"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
