import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertiesData from "../data/properties.json";

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
          {propertiesData.map((property) => (
            <div
              key={property.slug}
              className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md"
            >
              <div className="relative flex items-end justify-end w-full h-56 group">
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  width={1500}
                  height={800}
                  className="absolute duration-300 rounded-lg -z-10 group-hover:scale-105 trasition"
                />
                <Link
                  href={`/properties/${property.slug}`}
                  className="p-2 px-4 mx-5 -mb-4 text-white bg-purple-500 rounded-full open-sans hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
                >
                  Lihat
                </Link>
              </div>
              <div className="px-5 py-3">
                <h3 className="font-semibold text-gray-700 uppercase open-sans">
                  {property.name}
                </h3>
                <span className="mt-2 text-gray-500">Rp. {property.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
