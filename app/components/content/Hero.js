"use client";
import React from "react";
export function Hero({ image }) {
  const [active, setActive] = React.useState(image[0].data);
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto duration-300 image w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="hero-image"
          loading="lazy"
        />
      </div>
      <div
        className="w-full overflow-x-auto"
      >
        <div className="flex space-x-2 md:space-x-4">
          {image.map(({ data }, index) => (
            <div key={index} className="flex-shrink-0 rounded-lg overflow-hidden">
              <img
                onClick={() => setActive(data)}
                src={data}
                className="object-cover w-24 sm:w-36 hover:scale-105 duration-300 lg:w-56 h-20 cursor-pointer transition-transform"
                alt={`gallery-image-${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <p className="mx-auto">← →</p> */}
    </div>
  );
}
