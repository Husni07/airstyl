import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <section id="Steps">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              How the Stages Work
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Pesan tempat Anda hari ini dan nikmati pesona serta kenyamanan
              yang tiada duanya.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300">
            <div className="p-2 md:p-4 shadow-lg rotate-12 rounded-lg">
              <Image
                src="/image/property.png"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="-rotate-12 w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                01.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl font-medium">
                Pilih penginapan
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                Temukan tempat yang paling sesuai dengan kebutuhan dan
                preferensi Anda.
              </span>
            </div>
          </div>
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300 ml-auto">
            <div className="p-2 md:p-4 shadow-lg -rotate-12 rounded-lg">
              <Image
                src="/image/calendar.png"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="rotate-12 w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                02.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl font-medium">
                Pilih Tanggal dan Buat Reservasi
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                Pilih tanggal menginap Anda dan lakukan pemesanan langsung
                melalui contact yang tertera
              </span>
            </div>
          </div>
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300">
            <div className="p-2 md:p-4 shadow-lg rotate-12 rounded-lg">
              <Image
                src="/image/credit-card.png"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="-rotate-12 w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                03.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl font-medium">
                Payment & Confirmation
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                lakukan pembayaran dan bersiap untuk menikmati pengalaman
                menginap yang luar biasa di Airstayl
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
