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
      <div className="w-full overflow-x-auto">
        <div
          className="flex space-x-2 md:space-x-4"
          style={{ overflowX: "scroll", scrollbarWidth: "none" }}
        >
          {image.map(({ data }, index) => (
            <div
              key={index}
              className="flex-shrink-0 overflow-hidden rounded-lg"
            >
              <img
                onClick={() => setActive(data)}
                src={data}
                className="object-cover w-24 h-20 transition-transform duration-300 cursor-pointer sm:w-36 hover:scale-105 lg:w-56"
                alt={`gallery-image-${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
