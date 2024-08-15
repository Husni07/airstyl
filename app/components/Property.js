import React from "react";
import Image from "next/image";
import Link from "next/link";
const Property = () => {
  return (
    <section id="property">
      <div className="container">
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
          <div className="flex flex-col h-full text-left md:mt-0">
            <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Semua Properti
            </h2>
            <p className="font-medium lora text-md text-secondary md:text-lg">
              Beberapa properti lain yang kami miliki ada di sini
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/casa-grande/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="villa-casa-grande"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Villa casa Grande
              </h3>
              <span className="mt-2 text-gray-500">Rp. 449.000</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/pesona-sintuk/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="pesona-sintuk"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Villa pesona sintuk
              </h3>
              <span className="mt-2 text-gray-500">Rp. 449.000</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/griya-merapi/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="griya-merapi"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Griya Merapi
              </h3>
              <span className="mt-2 text-gray-500">Rp. 249.000</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/griya-papringan/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="griya-papringan"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Griya Papringan
              </h3>
              <span className="mt-2 text-gray-500">Rp. 449.000</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/griya-iromejan/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="griya-iromejan"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Griya Iromejan
              </h3>
              <span className="mt-2 text-gray-500">Rp. 449.000</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div className="relative flex items-end justify-end w-full h-56 group">
              <Image
                src="/image/griya-menjangan/property.webp"
                alt=""
                width={1500}
                height={800}
                className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
              />
              <Link
                href="griya-menjangan"
                className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Lihat
              </Link>
            </div>
            <div className="px-5 py-3">
              <h3 className="font-semibold text-gray-700 uppercase open-sans">
                Griya Menjangan
              </h3>
              <span className="mt-2 text-gray-500">Rp. 449.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
