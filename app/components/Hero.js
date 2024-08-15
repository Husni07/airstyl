import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Tentang Airstayl
            </h2>
            <p className="font-medium open-sans text-md text-secondary md:text-md">
              Temukan Pesona dan Kenyamanan menginap dengan Airstayl: Stay with
              Style
            </p>
          </div>
        </div>
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
          <div className="flex flex-col h-full text-left md:mt-0">
            <h2 className="mb-4 text-3xl font-bold text-purple-500 playfair-display sm:text-4xl">
              About Airstayl
            </h2>
            <p className="font-medium open-sans text-md text-secondary text-justify md:text-lg">
              Airstayl menyajikan pengalaman menginap yang mewah dan nyaman di
              berbagai properti yang tersebar di lokasi-lokasi pilihan. Mulai
              dari Villa Exclusive Casa Grande dan Villa Pesona Sintuk, hingga
              homestay seperti Griya Merapi, Griya Papringan, Griya Iromejan,
              dan Griya Menjangan, setiap tempat kami dirancang untuk memberikan
              kenyamanan dan privasi maksimal.
            </p>
          </div>
          <Image
            src="/image/casa-grande/property.webp"
            alt="logo"
            loading="lazy"
            width={500}
            height={500}
            className="image w-full rounded-2xl md:rounded-none mt-14 lg:mt-0 md:absolute md:right-0 md:w-[400px] lg:w-[500px] xl:w-[600px] xl:h-[400px] md:rounded-l-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
