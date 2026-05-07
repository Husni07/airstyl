// app/[slug]/page.js
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import propertiesData from "../../data/properties.json";
import { Hero } from "../../components/content/Hero";
import Features from "../../components/content/Features";
import Star from "../../components/content/Star";

const PropertyPage = ({ params }) => {
  // Temukan data properti berdasarkan slug di URL
  const property = propertiesData.find((item) => item.slug === params.slug);

  if (!property) {
    return notFound(); // Jika URL ga cocok file json, return halaman 404
  }

  // Map array image ke objek sesuai kebutuhan props <Hero />
  const propertyImages = property.images.map((img) => ({ data: img }));

  return (
    <main id="hero" className="container pt-24">
      <div className="">
        <Hero image={propertyImages} />
        <div className="py-8 md:grid md:grid-cols-3 sm:py-16">
          <div className="flex flex-col h-full col-span-2 text-left md:mt-0">
            <Star />
            <h2 className="mb-1 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              {property.name}
            </h2>
            <p className="font-medium open-sans text-sm md:w-[70%] flex flex-col">
              {property.address}
            </p>
          </div>
          <div className="flex justify-between w-full mt-4 md:justify-normal md:flex-col md:items-end sticky top-4">
            <h2 className="mb-4 text-3xl font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Rp. {property.price}
              <span className="text-sm italic text-gray-600"> Per Night</span>
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href={`https://wa.me/${property.whatsapp}`}
                target="_blank"
                className="px-6 py-3 text-center text-white transition duration-300 ease-in-out bg-purple-500 rounded-full open-sans w-fit hover:shadow-lg hover:opacity-80"
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
              <div className="text-5xl font-bold text-gray-800">
                {property.bath}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600">Bath</div>
            </div>

            <div className="flex flex-col items-center w-full h-32 p-4 border-b-2 border-gray-300 sm:border-b-0 sm:border-r-2">
              <div className="text-5xl font-bold text-gray-800">
                {property.sqft}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600">Sqft</div>
            </div>

            <div className="flex flex-col items-center w-full h-32 p-4">
              <div className="text-5xl font-bold text-gray-800">
                {property.bed}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600">Bed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center gap-8 px-4 py-8 md:grid xl:gap-16 sm:py-16">
        <div className="flex flex-col h-full text-left md:mt-0">
          <h2 className="mb-4 text-3xl font-bold text-purple-500 playfair-display sm:text-4xl">
            About the Property
          </h2>
          <p className="font-medium open-sans text-md text-secondary text-justify md:text-lg">
            {property.description}
          </p>
        </div>
      </div>
      <Features />
      <section id="Video">
        <div className="container">
          <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
            <div className="flex flex-col h-full text-left md:mt-0">
              <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
                Visit Location
              </h2>
              <p className="font-medium open-sans text-sm md:w-[70%] flex flex-col">
                {property.address}
              </p>
            </div>
            <div className="hidden w-full px-4 md:flex md:justify-end">
              <Link
                href={property.mapsLink}
                target="_blank"
                className="px-6 py-3 text-center text-white transition duration-300 ease-in-out bg-black rounded-full open-sans w-fit hover:shadow-lg hover:opacity-80"
              >
                Visit Maps
              </Link>
            </div>
          </div>
          <div className="flex px-4">
            <iframe
              src={property.mapsEmbed}
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

export async function generateStaticParams() {
  return propertiesData.map((property) => ({
    slug: property.slug,
  }));
}

export default PropertyPage;
