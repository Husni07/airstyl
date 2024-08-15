import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <section id="Steps">
      <div className="container">
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 lg:mt-24 xl:gap-16 sm:py-16">
          <div className="flex flex-col h-full text-left md:mt-0">
            <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              You can stay easier
            </h2>
            <p className="font-medium open-sans text-md text-secondary md:text-lg">
              Pesan tempat Anda hari ini dan nikmati pesona serta kenyamanan
              yang tiada duanya.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="flex items-center p-4 overflow-hidden transition duration-300 w-fit md:gap-10 md:p-8 hover:shadow-md hover:rounded-md">
            <div className="p-2 rounded-lg shadow-lg md:p-4 mr-2 rotate-12">
              <Image
                src="/image/property.webp"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="w-32 -rotate-12"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-lg italic font-semibold text-gray-500 uppercase md:mb-3 lora md:text-2xl">
                01.
              </h3>
              <h3 className="mb-1 text-base font-medium uppercase md:mb-2 lora md:text-2xl">
                Pilih penginapan
              </h3>
              <span className="text-sm text-gray-500 open-sans md:text-lg">
                Temukan tempat yang paling sesuai dengan kebutuhan dan
                preferensi Anda.
              </span>
            </div>
          </div>
          <div className="flex items-center p-4 ml-auto overflow-hidden transition duration-300 w-fit md:gap-10 md:p-8 hover:shadow-md hover:rounded-md">
            <div className="p-2 rounded-lg shadow-lg md:p-4 mr-2 -rotate-12">
              <Image
                src="/image/calendar.webp"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="w-32 rotate-12"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-lg italic font-semibold text-gray-500 uppercase md:mb-3 lora md:text-2xl">
                02.
              </h3>
              <h3 className="mb-1 text-base font-medium uppercase md:mb-2 lora md:text-2xl">
                Pilih Tanggal dan Buat Reservasi
              </h3>
              <span className="text-sm text-gray-500 open-sans md:text-lg">
                Pilih tanggal menginap Anda dan lakukan pemesanan langsung
                melalui contact yang tertera
              </span>
            </div>
          </div>
          <div className="flex items-center p-4 overflow-hidden transition duration-300 w-fit md:gap-10 md:p-8 hover:shadow-md hover:rounded-md">
            <div className="p-2 rounded-lg shadow-lg md:p-4 mr-2 rotate-12">
              <Image
                src="/image/credit-card.webp"
                alt=""
                draggable="false"
                width={500}
                height={500}
                className="w-32 -rotate-12"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3 lg:w-[700px]">
              <h3 className="text-lg italic font-semibold text-gray-500 uppercase md:mb-3 lora md:text-2xl">
                03.
              </h3>
              <h3 className="mb-1 text-base font-medium uppercase md:mb-2 lora md:text-2xl">
                Payment & Confirmation
              </h3>
              <span className="text-sm text-gray-500 open-sans md:text-lg">
                Lakukan pembayaran dan bersiap untuk menikmati pengalaman
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
