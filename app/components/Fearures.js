import React from "react";
import Link from "next/link";
import Image from "next/image";
const Fearures = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Stay with Style, Live in Elegance.
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Eksplor Airstayl dan Temukan Pesona serta Kenyamanan di Setiap
              Sudut
            </p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <div className="w-full p-8 flex max-w-sm mx-auto items-center rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <Image
      src="/image/star.png"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className=" w-24 h-24"
    />
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase font-semibold">Ulasan Positif</h3>
      <span className="text-gray-500 mt-2">1.000+ tamu puas dengan rating 4.8/5</span>
    </div>
  </div>
  
  <div className="w-full p-8 flex max-w-sm mx-auto items-center rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <Image
      src="/image/beach.png"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className=" w-24 h-24"
    />
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase font-semibold">Fasilitas Premium</h3>
      <span className="text-gray-500 mt-2">20+ fasilitas termasuk kolam renang dan spa</span>
    </div>
  </div>
  
  <div className="w-full p-8 flex max-w-sm mx-auto items-center rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <Image
      src="/image/road.png"
      alt=""
      draggable="false"
      width={500}
      height={500}
      className=" w-24 h-24"
    />
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase font-semibold">Akses Mudah</h3>
      <span className="text-gray-500 mt-2">Akses mudah dan dekat ke berbagai fasilitas desa.</span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Fearures;
