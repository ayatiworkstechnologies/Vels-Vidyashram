"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: "/main/dargaroad.jpg",
      mobileImage: "/main/dargaroad-mob.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow (DargaRoad)",
    },
    {
      id: 2,
      image: "/main/thalambur-web.jpg",
      mobileImage: "/main/thalambur-mob-2.jpg",
      heading: "Where Values Meet Future-Ready Learning (Thalambur)",
    },
    {
      id: 3,
      image: "/main/pallavaram.jpg",
      mobileImage: "/main/pallavaram-mob.jpg",
      heading: "Building Confident, Curious Learners (Pallavaram)",
    },
    {
      id: 4,
      image: "/main/cantonment.jpg",
      mobileImage: "/main/cantonment-mob.jpg",
      heading: "Building Confident, Curious Learners (Cantonment)",
    },
  ];

  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // click on pagination
  const goToSlide = (index) => {
    if (swiperRef.current && typeof swiperRef.current.slideTo === "function") {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {/* LOGO */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center justify-center px-2 py-2 rounded-full shadow-lg border border-white/40 bg-white/30 backdrop-blur-md">
            <Image
              src="/main/vels-logo.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[160px] md:w-[240px] h-auto rounded-full"
            />
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false} // keep indexes simple
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${
                    isMobile ? slide.mobileImage : slide.image
                  })`,
                }}
              >
                {/* TEXT + BUTTONS */}
                <div
                  className="absolute left-4 right-4 md:left-10 bottom-20 md:bottom-24 
                  text-white space-y-4 max-w-full md:max-w-xl drop-shadow-lg"
                >
                  <h2
                    className="font-primary font-primary-semibold text-black text-sm sm:text-base md:text-xl 
                    bg-white/90 px-3 py-2 w-fit"
                  >
                    {slide.heading}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="w-fit bg-tertiary text-white py-2 px-5 font-primary font-primary-semibold shadow-md hover:bg-[#2b2070]">
                      Admission
                    </button>

                    <button className="w-fit border border-tertiary text-white py-2 px-5 font-primary font-primary-bold shadow-md hover:bg-[#2b2070]">
                      Online Fees Payment
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT-ALIGNED NUMBER / UNDERSCORE PAGINATION */}
        <div className="absolute bottom-6 left-6 md:left-10 z-40 flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="cursor-pointer text-sm tracking-[0.3em] text-white/80 hover:text-white transition-colors"
            >
              {activeIndex === idx ? String(idx + 1).padStart(2, "0") : "_"}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
