import React from "react";
import { Hero } from "../components/content/Hero";
import Link from "next/link";
import Image from "next/image";
import Features from "../components/content/Features";
import Star from "../components/content/Star";

const image = [
  {
    data: "/image/pesona-sintuk/property.jpg",
  },
  {
    data: "/image/pesona-sintuk/ruang-tengah.jpg",
  },
  {
    data: "/image/pesona-sintuk/ruang-tamu.jpg",
  },
  {
    data: "/image/pesona-sintuk/kamar-tidur.jpg",
  },
  {
    data: "/image/pesona-sintuk/dapur.jpg",
  },
  {
    data: "/image/pesona-sintuk/kamar-mandi.jpg",
  },
  {
    data: "/image/pesona-sintuk/image-1.jpg",
  },
  {
    data: "/image/pesona-sintuk/image-2.jpg",
  },,
];

const page = () => {
  return (
    <main id="hero" className="container pt-24">
      <div className="">
        <Hero image={image} />
        <div className="py-8 md:grid md:grid-cols-3 sm:py-16">
          <div className="flex flex-col h-full col-span-2 text-left md:mt-0">
            <Star />
            <h2 className="mb-1 text-3xl italic font-bold text-purple-400 playfair-display lg:text-4xl sm:text-4xl">
              Villa Pesona sintuk
            </h2>
            <p className="font-medium open-sans text-sm md:w-[70%] flex flex-col">
              Perumahan Pesona Sintuk Bontang No. A8, Kec, Belimbing, Kec.
              Bontang Bar., Kota Bontang, Kalimantan Timur 75321
            </p>
          </div>
          <div className="flex justify-between w-full mt-4 md:justify-normal md:flex-col md:items-end sticky top-4">
            <h2 className="mb-4 text-3xl font-bold text-purple-400 playfair-display lg:text-4xl sm:text-4xl">
              Rp. 990.000
              <span className="text-sm italic text-gray-600"> Per Night</span>
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/"
                target="_blank"
                className="px-6 py-3 text-center text-white transition duration-300 ease-in-out bg-black rounded-full open-sans w-fit hover:shadow-lg hover:opacity-80"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full sm:h-60">
        <div className="flex flex-col items-center justify-center w-full h-full p-6 mx-auto border-t-2 border-b-2 border-gray-300">
          <div className="flex flex-col items-center justify-between w-full p-4 sm:flex-row h-96 sm:h-full">
            <div className="flex flex-col items-center w-full h-32 p-4 border-b-2 border-gray-300 sm:border-b-0 sm:border-r-2">
              <div className="text-5xl font-bold text-gray-800">2</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Bath</div>
            </div>

            <div className="flex flex-col items-center w-full h-32 p-4 border-b-2 border-gray-300 sm:border-b-0 sm:border-r-2">
              <div className="text-5xl font-bold text-gray-800">4,000</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Sqft</div>
            </div>

            <div className="flex flex-col items-center w-full h-32 p-4">
              <div className="text-5xl font-bold text-gray-800">7</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Bed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center gap-8 px-4 py-8 md:grid xl:gap-16 sm:py-16">
        <div className="flex flex-col h-full text-left md:mt-0">
          <h2 className="mb-4 text-3xl font-bold text-purple-400 playfair-display sm:text-4xl">
            About the Property
          </h2>
          <p className="font-medium open-sans text-md text-secondary md:text-lg">
            Villa Pesona sintuk menawarkan pengalaman menginap yang mewah dan
            nyaman dengan berbagai fitur unggulan yang dirancang untuk memenuhi
            kebutuhan semua tamu. Terletak di lokasi strategis, villa ini adalah
            pilihan ideal untuk keluarga besar, kelompok teman, atau pasangan
            yang mencari tempat berlibur yang eksklusif. Villa Pesona sintuk
            adalah pilihan ideal bagi mereka yang menginginkan kombinasi
            kemewahan, kenyamanan, dan fasilitas lengkap. Baik untuk liburan
            santai, perayaan spesial, atau perjalanan bisnis, villa ini
            menyediakan semua yang Anda butuhkan untuk pengalaman menginap yang
            tak terlupakan.
          </p>
        </div>
      </div>
      <Features />
      <section id="Video">
        <div className="container">
          <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
            <div className="flex flex-col h-full text-left md:mt-0">
              <h2 className="mb-4 text-3xl italic font-bold text-purple-400 playfair-display lg:text-4xl sm:text-4xl">
                Visit Location
              </h2>
              <p className="font-medium open-sans text-sm md:w-[70%] flex flex-col">
                Perumahan Pesona Sintuk Bontang No. A8, Kec, Belimbing, Kec.
                Bontang Bar., Kota Bontang, Kalimantan Timur 75321
              </p>
            </div>
            <div className="hidden w-full px-4 md:flex md:justify-end">
              <Link
                href="https://maps.app.goo.gl/hqyKgp4u1CKWiurc9"
                target="_blank"
                className="px-6 py-3 text-center text-white transition duration-300 ease-in-out bg-black rounded-full open-sans w-fit hover:shadow-lg hover:opacity-80"
              >
                Visit Maps
              </Link>
            </div>
          </div>
          <div className="flex px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.801410364225!2d117.4642222!3d0.1668141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a13f050ac7385%3A0x73394d116d750b53!2sHomestay%20Pesona%20Sintuk%20Bontang!5e0!3m2!1sid!2sid!4v1723090813336!5m2!1sid!2sid"
              width={800}
              height={600}
              loading="lazy"
              className="rounded-3xl w-full object-cover md:h-[480px]"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
