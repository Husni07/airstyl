"use client";
import React from "react";
export function Hero({ image }) {
  const [active, setActive] = React.useState(image[0].data);
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto transition-all duration-300 image w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {image.map(({ data }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(data)}
              src={data}
              className="object-cover object-center w-full h-20 rounded-lg cursor-pointer image md:h-28"
              alt="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
