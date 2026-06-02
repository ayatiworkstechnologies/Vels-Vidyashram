"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSchool() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [founderVisible, setFounderVisible] = useState(false);
  
  const aboutRef = useRef(null);
  const founderRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const aboutObserver = new IntersectionObserver(([entry]) => {
      setAboutVisible(entry.isIntersecting);
    }, observerOptions);

    const founderObserver = new IntersectionObserver(([entry]) => {
      setFounderVisible(entry.isIntersecting);
    }, observerOptions);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (founderRef.current) founderObserver.observe(founderRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (founderRef.current) founderObserver.unobserve(founderRef.current);
    };
  }, []);

  return (
    <>
      <section ref={aboutRef} className="relative w-full py-16 md:py-32 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            aboutVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: "url('/thalambur/about-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/40 lg:bg-transparent" />
        </div>

        {/* CONTENT CARD */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div className={`bg-white rounded-3xl shadow-xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
            aboutVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            
            {/* LEFT CONTENT */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h2 className={`text-xl md:text-3xl font-primary text-primary leading-snug mb-4 md:mb-6 transition-all duration-1000 delay-500 ${
                aboutVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}>
               Cultivating Excellence at Vels Vidyashram Cantonment
              </h2>

              <p className={`text-sm text-gray-600 font-secondary leading-relaxed mb-4 transition-all duration-1000 delay-700 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
              Vels Vidyashram Cantonment is dedicated to creating an enriching educational environment where students are encouraged to achieve academic success while developing strong personal values. The school fosters a culture of curiosity, innovation, and continuous learning that prepares learners for future challenges.
              </p>

              <p className={`text-sm text-gray-600 font-secondary leading-relaxed mb-6 transition-all duration-1000 delay-900 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
               By combining a robust academic framework with diverse opportunities for exploration and growth, students are equipped with the knowledge, skills, and confidence needed to excel. Our approach emphasizes critical thinking, collaboration, creativity, and responsible decision-making. 
              </p>
              
              <p className={`text-sm text-gray-600 font-secondary leading-relaxed mb-6 transition-all duration-1000 delay-900 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
               Beyond academics, the school promotes holistic development through a wide range of activities that nurture talent, encourage participation, and strengthen essential life skills. Every child is supported in discovering their interests and realizing their full potential. 
               
              </p>
              <p className={`text-sm text-gray-600 font-bold font-secondary leading-relaxed border-t pt-4 transition-all duration-1000 delay-1000 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                  Vels Education Trust continues its legacy of empowering young minds through value-based education and holistic development since 1992. 
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className={`w-full max-w-[260px] lg:w-[260px] shrink-0 order-1 lg:order-2 transition-all duration-1000 delay-600 ${
              aboutVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square lg:aspect-auto hover:scale-105 transition-transform duration-500">
                <Image
                  src="/cantonment/can.png"
                  alt="Students studying"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}