"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { title } from "framer-motion/client";

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Pallavaram",
    image: "/pallavaram/banner/pallavaram-banner-1.png",
    mobileImage: "/pallavaram/banner/mob-banner-1.png",
  },
  {
    title:"Welcome to",
    subtitle:"Wisdom, Integrity, Excellence\nVels Vidyashram - Pallavaram",
    image: "/pallavaram/banner/pallavaram-banner-2.jpg",
    mobileImage: "/pallavaram/banner/mob-banner-2.jpg",
  },
  {
    title: "Nurturing Excellence",
    subtitle: "Empowering Students\nThrough Holistic Education",
    image: "/pallavaram/banner/pallavaram-banner-3.jpg",
    mobileImage: "/pallavaram/banner/mob-banner-3.jpg",
  },

  {
    title: "Nurturing Excellence",
    subtitle: "Empowering Students\nThrough Holistic Education",
    image: "/pallavaram/banner/banner-2.png",
    mobileImage: "/pallavaram/banner/mob-2.png",
  },
  {
    title: "Global Standards",
    subtitle: "World Class Infrastructure\n& Modern Learning",
    image: "/pallavaram/banner/banner-3.png",
    mobileImage: "/pallavaram/banner/mob-3.png",
  },
  {
    title: "Beyond Academics",
    subtitle: "Developing Talents\nIn Sports and Arts",
    image: "/pallavaram/banner/banner-4.png",
    mobileImage: "/pallavaram/banner/mob-4.png",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <section className="relative w-full h-[550px] md:h-[700px] overflow-hidden bg-slate-900">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out transform ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            {/* Responsive Image Handling */}
            <picture>
              <source media="(max-width: 768px)" srcSet={s.mobileImage || s.image} />
              <img
                src={s.image}
                alt="School Banner"
                className="w-full h-full object-cover object-center"
              />
            </picture>
            
            {/* GRADIENT OVERLAY: Ensuring text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-black/70 lg:via-black/20" />
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
              {/* Animated Badge */}
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

              {/* Action Button */}
              <div className="mt-10">
                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  className="inline-block bg-[#2B158F] hover:bg-[#F7931E] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(43,21,143,0.4)] active:scale-95"
                >
                  Apply Now 2026-27
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

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}