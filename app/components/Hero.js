import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center lg:mb-16">
            <h2 className="font-bold text-purple-400 text-3xl mb-4 sm:text-4xl">
              Tentang Griya Merapi
            </h2>
            <p className="font-medium text-md text-secondary md:text-md">
            Tetap Menyerah, dan Jangan Semangat
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold text-purple-400 text-3xl mb-4 sm:text-4xl">
              About Griya Merapi
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Terletak di kampung yang tenang. Rejodani jauh dari hiruk-pikuk
              kota. Hanya beberapa langkah dari fasilitas desa, Anda dapat
              dengan mudah mengakses Pasar Tradisional, Masjid, Jogging Track,
              Lapangan Bola, dan Lapangan Voli. Nikmati suasana pedesaan yang
              autentik dengan keramahan penduduk setempat yang hangat dan
              bersahabat.
            </p>
          </div>
          <Image
            src="/image/depan-rumah.webp"
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
