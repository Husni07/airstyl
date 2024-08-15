import React from "react";
import Link from "next/link";
import Image from "next/image";
const Fearures = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
          <div className="flex flex-col h-full text-left md:mt-0">
            <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Stay with Style, Live in Elegance.
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Eksplor Airstayl dan Temukan Pesona serta Kenyamanan di Setiap
              Sudut
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div className="flex items-center w-full max-w-sm p-8 mx-auto overflow-hidden transition duration-300 rounded-md shadow-md hover:shadow-xl">
    <Image
      src="/image/star.webp"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className="w-24 h-24 "
    />
    <div className="px-5 py-3">
      <h3 className="font-semibold text-gray-700 uppercase">Ulasan Positif</h3>
      <span className="mt-2 text-gray-500">1.000+ tamu puas dengan rating 4.8/5</span>
    </div>
  </div>
  
  <div className="flex items-center w-full max-w-sm p-8 mx-auto overflow-hidden transition duration-300 rounded-md shadow-md hover:shadow-xl">
    <Image
      src="/image/beach.webp"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className="w-24 h-24 "
    />
    <div className="px-5 py-3">
      <h3 className="font-semibold text-gray-700 uppercase">Fasilitas Premium</h3>
      <span className="mt-2 text-gray-500">20+ fasilitas termasuk kolam renang dan spa</span>
    </div>
  </div>
  
  <div className="flex items-center w-full max-w-sm p-8 mx-auto overflow-hidden transition duration-300 rounded-md shadow-md hover:shadow-xl">
    <Image
      src="/image/road.webp"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className="w-24 h-24 "
    />
    <div className="px-5 py-3">
      <h3 className="font-semibold text-gray-700 uppercase">Akses Mudah</h3>
      <span className="mt-2 text-gray-500">Akses mudah dan dekat ke berbagai fasilitas desa.</span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Fearures;
