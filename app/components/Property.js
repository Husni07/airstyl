import React from "react";
import Image from "next/image";
import Link from "next/link";
const Property = () => {
  return (
    <section id="portfolio" className="pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-purple-400 text-3xl mb-4 sm:text-4xl">
              Semua Properti
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Beberapa properti lain yang kami miliki ada di sini
            </p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative">
              <Image
                src="/image/tv.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">Homestay P</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative">
              <Image
                src="/image/tv.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">Homestay P</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative">
              <Image
                src="/image/tv.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">Man Room</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative">
              <Image
                src="/image/tv.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">P bang</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full relative">
              <Image
                src="/image/tv.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute -z-10 rounded-lg"
              />
              <Link
                href="#"
                className="p-2 px-4 rounded-full bg-purple-500 text-white mx-5 -mb-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                View
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase font-semibold">woman Room</h3>
              <span className="text-gray-500 mt-2">$64,000 USD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
