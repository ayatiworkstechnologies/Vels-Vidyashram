"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image"; // Added missing import

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Thalambur",
    image: "/thalambur/thalambur-banner-1.png",
    mobileImage: "/mb-1.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Pallavaram",
    image: "/banner/banner-2.png",
    mobileImage: "/banner/mob-2.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Dargaroad",
    image: "/banner/banner-3.png",
    mobileImage: "/banner/mob-3.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Cantonment",
    image: "/banner/banner3.jpg",
    mobileImage: "/banner/banner3.jpg",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-slate-900">
      
      {/* ================= LOGO OVERLAY ================= */}
      <div className="absolute top-4 left-1/2 z-50 transform -translate-x-1/2 lg:top-6">
        {/* Added a subtle background and padding so the logo is readable over any image */}
        <div className="bg-transparent backdrop-blur-sm p-5 rounded-full shadow-2xl border border-white/20 w-fit ">
          <div className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[350px]"> 
            <Image
              src="/logo.jpg"
              alt="Vels Vidyashram"
              width={1600}
              height={345}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out transform ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={s.mobileImage} />
              <img
                src={s.image}
                alt="School Banner"
                className="w-full h-full object-cover object-center lg:object-right-top"
              />
            </picture>
            
            {/* GRADIENT OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-black/70 lg:via-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          </div>
        ))}
      </div>

      {/* 2. FLOATING CONTENT LAYER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="w-full max-w-3xl">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 ${
                i === active 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20 pointer-events-none"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F7931E] text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-[0.2em] uppercase shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {s.title}
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-[1.1] font-primary drop-shadow-2xl">
                {s.subtitle.split('\n').map((line, index) => (
                  <span key={index} className="block mb-1 italic last:not-italic last:text-[#F7931E]">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Action Buttons */}
              <div className="mt-10">
                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  className="inline-block bg-[#2B158F] hover:bg-[#F7931E] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(43,21,143,0.4)] active:scale-95"
                >
                  Admission Open 2026-27
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. NAVIGATION & PAGINATION */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex items-center gap-8">
        {/* Modern Line Pagination */}
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className="group py-4 flex items-center cursor-pointer"
            >
              <div className={`h-[3px] transition-all duration-500 rounded-full ${
                idx === active ? "w-16 bg-[#F7931E]" : "w-6 bg-white/30 group-hover:bg-white/60"
              }`} />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="hidden sm:block text-white/40 font-mono text-lg tracking-tighter">
          <span className="text-white font-bold">{String(active + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Bottom Decorative Mask */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}