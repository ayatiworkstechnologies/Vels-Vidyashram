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
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left text-justify">
              <h2 className={`text-xl md:text-3xl font-primary text-primary leading-snug mb-4 md:mb-6 transition-all duration-1000 delay-500 ${
                aboutVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}>
                Shaping Excellence Through Education at Vels 
                Vidyashram Senior Secondary School, Pallavaram
              </h2>

              <p className={`text-sm text-gray-600 text-justify font-secondary leading-relaxed mb-4 transition-all duration-1000 delay-700 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Established with a commitment to delivering quality education, Vels Vidyashram Pallavaram provides a dynamic learning environment where academic excellence and personal growth go hand in hand. The school encourages students to think independently, explore confidently, and develop a lifelong love for learning. 
              </p>

              <p className={`text-sm text-gray-600 text-justify font-secondary leading-relaxed mb-6 transition-all duration-1000 delay-900 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                With a balanced approach to academics, co-curricular engagement, and character development, students are empowered to discover their strengths and pursue their aspirations. Our learner-centric methodology fosters creativity, critical thinking, collaboration, and leadership skills essential for success in today's evolving world.
              </p>
              <p className={`text-sm text-gray-600 text-justify font-secondary leading-relaxed mb-6 transition-all duration-1000 delay-900 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                The school offers diverse opportunities that enrich classroom learning and support the holistic development of every child. Through meaningful experiences and guided mentorship, students are encouraged to grow into confident, responsible, and compassionate individuals. 
              </p>

              <p className={`text-sm text-gray-600 font-bold font-secondary leading-relaxed border-t pt-4 transition-all duration-1000 delay-1000 ${
                aboutVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}>
                Vels Education Trust has been shaping young lives through quality education and strong values since 1992. 
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
                  src="/pallavaram/about.png"
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

      {/* FOUNDER SECTION */}
      {/* <section ref={founderRef} className="w-full py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] md:h-[420px] flex items-center transition-all duration-1000 ${
            founderVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}>

            
            <div
              className={`absolute inset-0 bg-cover bg-right md:bg-center transition-all duration-1000 delay-200 ${
                founderVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
              style={{
                backgroundImage: "url('/thalambur/img-dr.png')",
              }}
            />

          
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

            
            <div className="relative z-10 flex w-full h-full items-end md:items-center p-6 md:px-12">

              
              <div className="max-w-xl text-white">
                <p className={`text-xs md:text-sm leading-relaxed font-secondary text-white/90 mb-6 transition-all duration-1000 delay-500 ${
                  founderVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}>
                  The trust was founded by Dr.Ishari K. Ganesh, a visionary and an eminent educationist, in fond memory of his father Shri. Isari Velan. Vaels Education Trust has always served to take education to all sections of the society. Today, the Vels Group marches successfully beyond 29 years with more than 30,000 students and 36 Institutions.
                </p>

                <h3 className={`text-xl md:text-2xl text-white font-semibold font-primary transition-all duration-1000 delay-700 ${
                  founderVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}>
                  Dr. Ishari K. Ganesh,
                </h3>
                <p className={`text-lg md:text-2xl text-white font-primary opacity-90 transition-all duration-1000 delay-900 ${
                  founderVisible 
                    ? 'opacity-90 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}>
                  M.Com., B.L., Ph. D.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}