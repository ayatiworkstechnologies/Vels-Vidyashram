"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    title: "Welcome to",
    subtitle:
      "Vels Vidyashram\nSenior Secondary School - Thalambur",
    image: "/banner/banner-thalambur.png",
    mobileImage: "/banner/m-thalambur.png",
  },
  {
    title: "Welcome to",
    subtitle:
      "Vels Vidyashram\nSenior Secondary School - Dargaroad",
    image: "/banner/banner-darga.jpg",
    mobileImage: "/banner/m-darga.jpg",
  },
  {
    title: "Welcome to",
    subtitle:
      "Vels Vidyashram\nKinder Garten School - Cantonment",
    image: "/banner/banner-conton.png",
    mobileImage: "/banner/m-conton.png",
  },
  {
    title: "Welcome to",
    subtitle:
      "Vels Vidyashram\nSenior Secondary School - Pallavaram",
    image: "/banner/banner-pallavaram.png",
    mobileImage: "/banner/m-pallavaram.png",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((previous) => (previous + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [nextSlide]);

  return (
    <section className="w-full bg-white px-2 pb-4 pt-3 sm:px-4 sm:pb-6 md:px-6 md:pt-4 lg:px-8">
      {/* Logo */}
      <div className="mb-3 flex items-center justify-center sm:mb-4">
        <Image
          src="/logo1.png"
          alt="Vels Vidyashram"
          width={1600}
          height={345}
          priority
          className="h-auto w-[2700px] object-contain lg:w-[23px] lg:w-[750px] lg:w-[300px]"        />
      </div>

      {/* Banner Card */}
      <div className="relative mx-auto h-[430px] w-full max-w-[1536px] overflow-hidden rounded-[12px] bg-slate-900 shadow-[0_5px_15px_rgba(0,0,0,0.22)] sm:h-[500px] md:h-[560px] lg:h-[640px]">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={`${slide.subtitle}-${index}`}
              className={`absolute inset-0 transition-all duration-[1400ms] ease-in-out ${
                index === active
                  ? "scale-100 opacity-100"
                  : "scale-[1.04] opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={slide.mobileImage}
                />

                <img
                  src={slide.image}
                  alt={slide.subtitle.replace("\n", " ")}
                  className="h-full w-full object-cover object-center md:object-center"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-end px-7 pb-16 sm:px-10 sm:pb-20 md:px-14 md:pb-24 lg:px-20 lg:pb-28">
          {slides.map((slide, index) => (
            <div
              key={`content-${index}`}
              className={`absolute bottom-16 left-7 right-7 max-w-[700px] transition-all duration-1000 ease-out sm:bottom-20 sm:left-10 sm:right-auto md:bottom-24 md:left-14 lg:bottom-28 lg:left-20 ${
                index === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-7 opacity-0"
              }`}
            >
              <p className="mb-1 text-[13px] font-medium leading-none text-white/90 drop-shadow-md sm:text-sm md:text-base">
                {slide.title}
              </p>

              <h1 className="whitespace-pre-line text-[23px] font-bold leading-[1.12] tracking-[-0.02em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] sm:text-[30px] md:text-[38px] lg:text-[30px]">
                {slide.subtitle}
              </h1>

              <div className="mt-5 sm:mt-6">
                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#2B158F] px-5 py-2.5 text-[11px] font-semibold text-white shadow-[0_5px_14px_rgba(43,21,143,0.35)] transition-colors duration-300 hover:bg-[#F7931E] sm:min-h-[42px] sm:px-6 sm:text-xs"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-7 z-20 flex items-center gap-2 sm:bottom-5 sm:left-10 md:left-14 lg:left-20">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className="flex h-5 items-center justify-center"
            >
              <span
                className={`block h-[2px] rounded-full transition-all duration-500 ${
                  index === active
                    ? "w-16 bg-[#F7931E]"
                    : "w-7 bg-white/50 hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}