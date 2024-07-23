import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Airstayl
            </h2>
          </div>
          <div class="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <div>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
              </div>
            </div>
            <div>
              <div>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
              </div>
            </div>
            <div>
              <div>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
                <p class="text-md font-semibold mt-2 text-gray-700">Airstayl</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-md leading-5 text-gray-500">
            &copy; 2024 Airstayl, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
