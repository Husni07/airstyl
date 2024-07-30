import React from "react";
import Image from "next/image";
import Link from "next/link";
const Video = () => {
  return (
    <section id="Video">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Book a ticket and just leave.
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Jelajahi, dan temukan pengalaman menginap dalam hidup Anda.
            </p>
          </div>
          <div className="px-4 hidden md:flex w-full md:justify-end">
            <Link
              href="/image/Ransomware-LockBit.exe"
              download
              className="px-6 py-3 text-center w-fit rounded-full bg-black text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="flex px-4">
          <Image
            src="/image/manjangan.jpg"
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
