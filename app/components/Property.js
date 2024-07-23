import React from "react";
import Image from "next/image";
import Link from "next/link";
const Property = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Semua Properti
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Beberapa properti lain yang kami miliki ada di sini
            </p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/casa.jpg"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                Casa Grande
              </h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/hh.jpg"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                Iromejan
              </h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/home.jpg"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                Papringan
              </h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/manjangan.jpg"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">Manjangan</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/sintuk.jpg"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                Sintuk
              </h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative group">
              <Image
                src="/image/depan-rumah.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg group-hover:scale-105 trasition duration-300"
              />
              <Link
                href="#" 
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">
                Banteng Merah
              </h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
