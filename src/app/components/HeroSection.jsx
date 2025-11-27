"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    { id: 1, image: "/main/Banner-web.jpg", mobileImage: "/main/mob.jpg" },
 
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index) => {
    if (swiperRef.current) swiperRef.current.slideTo(index);
  };

  return (
    <>
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">

        {/* 🔵 CENTER LOGO (Responsive) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center justify-center px-2 py-2  rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] border border-white/40 bg-white/20 backdrop-blur-base">
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
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                {/* LEFT CONTENT — MOBILE FIXED */}
                <div className="absolute left-4 md:left-10 bottom-20 md:bottom-24 text-white space-y-3 md:space-y-4 max-w-[90%] md:max-w-xl drop-shadow-lg">

                  <h2 className="font-primary font-primary-semibold text-black text-base md:text-xl leading-tight bg-white px-2 py-2 md:px-3 md:py-2 w-fit">
                    Inspiring Young Minds for a Brighter Tomorrow
                  </h2>

                  {/* BUTTONS — MOBILE WRAP */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-6">
                    <button className="bg-tertiary text-white py-2 px-5 font-primary font-primary-semibold text-sm md:text-base shadow-md">
                      Admission
                    </button>
                    <button className="border border-tertiary text-white py-2 px-5 font-primary font-primary-bold text-sm md:text-base shadow-md">
                      Online fees Payment
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    
      </div>

      {/* 🔵 BOTTOM BAR — MOBILE RESPONSIVE */}
      <div className="w-full bg-primary text-white py-3">
        <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm md:text-lg font-primary font-primary-medium">

          {/* Admission */}
          <div className="flex items-center gap-2">
            <span>Admission Helpline :</span>
            <Image src="/main/phone.svg" alt="phone" width={18} height={18} />
            <span>78248 30871</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <span>Email :</span>
            <Image src="/main/mail-01.svg" alt="mail" width={18} height={18} />
            <span>register@velsvidyashram.ac.in</span>
          </div>
        </div>
      </div>
    </>
  );
}
