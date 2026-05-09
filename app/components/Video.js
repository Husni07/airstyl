import React from "react";
import Image from "next/image";
import Link from "next/link";
const Video = () => {
  return (
    <section id="Video">
      <div className="container">
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
          <div className="flex flex-col h-full text-left md:mt-0">
            <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Book and reservation
            </h2>
            <p className="font-medium open-sans text-md text-secondary md:text-lg">
              Jelajahi, dan temukan pengalaman menginap dalam hidup Anda
            </p>
          </div>
          <div className="hidden w-full px-4 md:flex md:justify-end">
            <Link
              href="/booking"
              className="px-6 py-3 text-center text-white transition duration-300 ease-in-out bg-purple-500 rounded-full open-sans w-fit hover:shadow-lg hover:opacity-80"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="flex px-4">
          <Image
            src="/image/griya-menjangan/property.webp"
            alt=""
            width={1500}
            height={800}
            className="rounded-3xl w-full object-cover md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
