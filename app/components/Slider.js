"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
function Slider() {
  const slides = [
    {
      url: "/image/casa-grande.jpg",
    },
    {
      url: "/image/sintuk.jpg",
    },
    {
      url: "/image/manjangan.jpg",
    },
    {
      url: "/image/papringan.jpg",
    },
    {
      url: "/image/iromejan.jpg",
    },
    {
      url: "/image/merapi.jpg",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="h-screen w-full m-auto relative group">
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t via-transparent from-slate-200 to-transparent"></div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover"
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 italic">
        Stay with Style
        </h1>
        <p className="text-lg">Menginap dengan Gaya dan Kenyamanan</p>
        <Link
          href="#features"
          download
          className="px-4 lg:px-6 py-2 mt-5 text-center sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
        >
          Explore Now
        </Link>
        <div className="flex justify-center mt-16">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer mx-1"
            >
              <RxDotFilled
                className={
                  slideIndex === currentIndex
                    ? "text-purple-400"
                    : "text-slate-200"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Slider;
