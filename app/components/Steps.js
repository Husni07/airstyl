import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center lg:mt-24 py-8 px-4 xl:gap-16 sm:py-16">
          <div className="md:mt-0 text-left flex flex-col h-full">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Tiga Langkah Menuju Kesuksesan
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Intinya Tetap Menyerah, dan Jangan Semangat. Sleep, wake up, eat
              and repeat.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300">
            <div className="p-2 md:p-4 shadow-lg rotate-12 rounded-lg">
              <Image
                src="/image/base-ap.gif"
                alt=""
                width={500}
                height={500}
                className="rounded-full w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                01.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl md:text-3xl font-semibold">
                Sleep
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                Tetap Menyerah, dan Jangan Semangat. Sleep, wake up, eat and
                repeat.
              </span>
            </div>
          </div>
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300 ml-auto">
            <div className="p-2 md:p-4 shadow-lg -rotate-12 rounded-lg">
              <Image
                src="/image/base-ap.gif"
                alt=""
                width={500}
                height={500}
                className="rounded-full w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                02.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl md:text-3xl font-semibold">
                Wake Up
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                Tetap Menyerah, dan Jangan Semangat. Sleep, wake up, eat and
                repeat.
              </span>
            </div>
          </div>
          <div className="w-fit md:gap-10 p-4 md:p-8 flex items-center overflow-hidden hover:shadow-md hover:rounded-md transition duration-300">
            <div className="p-2 md:p-4 shadow-lg rotate-12 rounded-lg">
              <Image
                src="/image/base-ap.gif"
                alt=""
                width={500}
                height={500}
                className="rounded-full w-32"
              />
            </div>
            <div className="px-2 md:px-5 py-1 md:py-3">
              <h3 className="text-gray-500 md:mb-3 italic text-xl md:text-2xl uppercase font-semibold">
                03.
              </h3>
              <h3 className="mb-1 md:mb-2 uppercase text-2xl md:text-3xl font-semibold">
                Eat & Repeat
              </h3>
              <span className="text-gray-500 text-base md:text-lg">
                Tetap Menyerah, dan Jangan Semangat. Sleep, wake up, eat and
                repeat.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
