"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InspireSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative py-16 md:py-32 overflow-hidden
             bg-[url('/thalambur/bg.png')]
             bg-cover bg-center bg-no-repeat"
>
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center min-h-[500px]">
        
        {/* LEFT IMAGE - Slide in from left with fade and scale */}
        <div 
          className={`hidden lg:block absolute left-0 top-0 -translate-y-12 xl:-translate-x-10 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-32 scale-90'
          }`}
        >
          <div className="relative w-[260px] h-[220px] xl:w-[300px] xl:h-[260px] rounded-[32px] overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105 transition-transform duration-500">
            <Image
              src="/thalambur/in-1.png"
              alt="Students learning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CENTER CONTENT - Fade up with bounce */}
        <div 
          className={`text-center max-w-xl z-10 transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/thalambur/star.png"
              alt="Inspire icon"
              width={60}
              height={60}
              className={`w-12 h-12 md:w-[60px] md:h-[60px] transition-all duration-700 delay-500 ${
                isVisible 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 rotate-180 scale-50'
              }`}
            />
          </div>

          <h2 className="text-[clamp(28px,5vw,44px)] font-semibold font-primary leading-tight mb-4 text-slate-900">
            Inspiring Young Minds
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-primary font-medium mb-8">
            A place where young minds are nurtured through quality education
            and strong values. We create a supportive environment that inspires
            confidence, curiosity, and growth.
          </p>

          <button className="px-10 py-3 bg-tertiary hover:opacity-90 transition-all text-white rounded-md font-regular font-primary shadow-lg active:scale-95">
            Let&apos;s Go
          </button>
        </div>

        {/* MOBILE/TABLET IMAGES - Staggered fade up */}
        <div 
          className="flex gap-4 mt-12 lg:hidden"
        >
          <div className={`relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-90'
          }`}>
            <Image src="/thalambur/in-1.png" alt="Students" fill className="object-cover" />
          </div>
          <div className={`relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl mt-6 transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-90'
          }`}>
            <Image src="/thalambur/in-2.png" alt="Classroom" fill className="object-cover" />
          </div>
        </div>

        {/* RIGHT IMAGE - Slide in from right with fade and scale */}
        <div 
          className={`hidden lg:block absolute right-0 bottom-0 translate-y-12 xl:translate-x-10 transition-all duration-1000 ease-out delay-100 ${
            isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-32 scale-90'
          }`}
        >
          <div className="relative w-[260px] h-[220px] xl:w-[300px] xl:h-[260px] rounded-[32px] overflow-hidden shadow-2xl rotate-[3deg] hover:rotate-[1deg] hover:scale-105 transition-transform duration-500">
            <Image
              src="/thalambur/in-2.png"
              alt="Students classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}