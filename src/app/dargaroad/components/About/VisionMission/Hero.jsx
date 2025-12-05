"use client";

import Image from "next/image";

export default function Hero() {
  const slide = {
    image: "/dargaroad/darga-web3.jpg",
    mobileImage: "/dargaroad/darga-mob3.jpg",
    heading: "Inspiring Young Minds for a Brighter Tomorrow",
  };

  return (
    <>
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {/* SINGLE IMAGE */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${typeof window !== "undefined" && window.innerWidth < 768 ? slide.mobileImage : slide.image})`,
          }}
        >
          {/* TEXT OVERLAY */}
          <div className="absolute left-4 right-4 md:left-10 bottom-20 md:bottom-24 text-white space-y-4 max-w-full md:max-w-xl drop-shadow-lg">
            <h2 className="font-primary font-primary-semibold text-black text-sm sm:text-base md:text-xl bg-white/90 px-3 py-2 w-fit">
              {slide.heading}
            </h2>
          </div>
        </div>
      </div>   
    </>
  );
}
