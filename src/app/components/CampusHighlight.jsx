"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CampusHighlight() {
  const campuses = [
    {
      name: "Pallavaram Campus",
      tagline: "A Center for Progressive Learning",
      description:
        "A well-structured campus built for excellence and holistic development. Led by experienced educators and supported by state-of-the-art facilities. Ensuring a safe, nurturing, and inspiring environment for learners.",
      image: "/main/pallavaram-large.jpg",
      exploreUrl: "/pallavaram",
      admissionUrl: "#",
    },

    {
      name: "Cantonment Campus",
      tagline: "Education Beyond The Classroom",
      description:
        "Blending academics, activities, and values for balanced development. Designed to help students explore, learn, and excel confidently.",
         image: "/main/thalambur-large.jpg",
     
      exploreUrl: "#",
      admissionUrl: "#",
    },
        {
      name: "Thalambur Campus",
      tagline: "Safe. Supportive. Student-Centric.",
      description:
        "A secure campus where every child feels valued and encouraged. Holistic learning backed by modern facilities and dedicated faculty.",
      image: "/main/cantonment-large.jpg",
      exploreUrl: "#",
      admissionUrl: "#",
    },
    {
      name: "Darga Road Campus",
      tagline: "Excellence In Every Step",
      description:
        "Guided by experienced educators who focus on individual progress. A structured system that ensures consistent academic improvement.",
      image: "/main/dargaroad-large.jpg",
      exploreUrl: "#",
      admissionUrl: "#",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const campus = campuses[activeIndex];

  const changeSlide = (nextIndex) => {
    if (nextIndex === activeIndex) return;

    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % campuses.length;
      changeSlide(next);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, campuses.length]);

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-none overflow-visible">
            {/* Desktop right gradient background */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[68%] bg-[#F5F5F5]" />

            {/* Mobile full bg */}
            <div className="md:hidden absolute inset-0 bg-[#F5F5F5] -z-10" />

            <div
              className={`relative flex flex-col md:flex-row gap-10 md:gap-12 
              px-6 md:px-10 py-8 md:py-12 transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* TEXT FIRST ON MOBILE | TEXT SECOND ON DESKTOP */}
              <div className="md:w-[58%] flex flex-col justify-center order-1 md:order-2">
                <h2 className="font-primary font-primary-semibold text-2xl md:text-3xl text-black tracking-tight">
                  {campus.name}
                </h2>

                <div className="w-30 h-[1px] bg-secondary my-3" />

                <h3 className="font-primary font-primary-bold text-xl md:text-2xl text-black mb-4">
                  {campus.tagline}
                </h3>

                <p className="font-secondary font-secondary-regular text-sm md:text-[15px] text-black/80 leading-relaxed max-w-xl">
                  {campus.description}
                </p>

                <div className="mt-8 flex gap-4 flex-wrap">
                  <Link
                    href={campus.exploreUrl}
                    className="px-6 py-2.5 text-sm font-primary font-primary-semibold text-white bg-tertiary border border-tertiary hover:bg-[#2b2070] transition"
                  >
                    Explore More
                  </Link>

                  <Link
                    href={campus.admissionUrl}
                    className="px-6 py-2.5 text-sm font-primary-semibold text-tertiary bg-white border border-tertiary hover:bg-[#f2ebff] transition"
                  >
                    Admission
                  </Link>
                </div>
              </div>

              {/* IMAGE SECOND ON MOBILE | IMAGE FIRST ON DESKTOP */}
              <div className="md:w-[42%] flex justify-center md:justify-start order-2 md:order-1">
                <div className="relative w-full max-w-[420px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                  <Image
                    src={campus.image}
                    alt={campus.name}
                    width={485}
                    height={485}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* PAGINATION */}
              <div className="absolute left-12 bottom-2 flex items-center gap-3 text-xs font-secondary-regular text-tertiary mt-4 z-10">
                {campuses.map((_, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => changeSlide(index)}
                      className="group cursor-pointer flex items-center justify-center"
                    >
                      {isActive ? (
                        <span className="font-primary-bold text-tertiary tracking-wider cursor-pointer group-hover:opacity-80">
                          {String(activeIndex + 1).padStart(2, "0")}
                        </span>
                      ) : (
                        <span className="block w-4 h-[1px] bg-tertiary cursor-pointer group-hover:w-6 transition-all duration-200"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-tertiary py-3">
        <div className="text-center text-white text-md md:text-md sm:text-base font-primary font-primary-medium tracking-wide">
          Copyright © 2025 VelsVidyashram – All rights reserved | Designed &
          Developed by Ayatiworks
        </div>
      </footer>
    </>
  );
}
