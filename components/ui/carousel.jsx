"use client";
import { useState, useEffect } from "react";

export default function Carousel({ images, autoplayInterval = 10000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      handleNextClick();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, autoplayInterval]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="info" className="mb-4 sm:mx-4 pb-4 shadow-xl">
      <div className="container mx-auto p-4 sm:rounded-2x">
        <h3 className="lg:text-xl text-center">Reyhan</h3>
        <div className="relative">
          <div className="carousel overflow-hidden">
            <div
              className="carousel-inner flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item flex-shrink-0 w-full">
                  <img src={image.src} alt={image.alt} className="h-[640px]" />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <div className="carousel-dots flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot mx-1 w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
