"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-1.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-2.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-3.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-4.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-5.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-6.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-7.jpg",
  }
];

export default function BannerSection() {
       const text = "THALAMBUR";
  
  // Different animation directions for each letter
  const animations = ['slideDown', 'slideUp', 'slideLeft', 'slideRight'];
  
  const getAnimation = (index) => {
    return animations[index % 4];
  };
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 700);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  const handleDotClick = (index) => {
    if (index !== active) {
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setIsAnimating(false);
      }, 700);
    }
  };

  return (
    <>
     <section className="w-full">
      <div className="flex flex-col lg:flex-row h-[520px] w-full">

        {/* LEFT ORANGE PANEL - Top to Bottom Animation */}
        <div className="relative bg-[#F7931E] text-white w-full lg:w-[30%] overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
                i === active 
                  ? 'translate-y-0 opacity-100' 
                  : i < active
                  ? 'translate-y-full opacity-0'
                  : '-translate-y-full opacity-0'
              }`}
            >
              <div className="px-8">
                <h4 className="text-3xl mb-2 text-white font-primary">{s.title}</h4>

                <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight whitespace-pre-line font-primary">
                  {s.subtitle}
                </h1>

                <a
                  href="/admissions"
                  className="inline-block mt-6 bg-[#2B158F] px-6 py-2 rounded-full text-md font-medium hover:bg-[#1e0f63] transition-colors font-secondary"
                >
                  Admission
                </a>

                {/* PAGINATION */}
                <div className="mt-16 flex items-center gap-2 ">
                  {/* NUMBER */}
                  <span className="font-medium">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  {/* DASHES */}
                  <div className="flex gap-3">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-[1px] w-8 transition-all duration-300 cursor-pointer ${
                          idx === active ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE - Smooth Left to Right Slide */}
        <div className="relative w-full lg:w-[70%] h-full overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                i === active 
                  ? 'translate-x-0 opacity-100' 
                  : i < active
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={`Banner ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
    {/* <section className="mx-auto text-center  items-center justify-center">
      <style>{`
        @keyframes slideDown {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(-150px); 
          }
          15%, 85% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideLeft {
          0%, 100% { 
            opacity: 0; 
            transform: translateX(150px); 
          }
          15%, 85% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideRight {
          0%, 100% { 
            opacity: 0; 
            transform: translateX(-150px); 
          }
          15%, 85% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideUp {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(150px); 
          }
          15%, 85% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .letter-slideDown {
          animation: slideDown 2.5s ease-in-out infinite;
        }
        
        .letter-slideLeft {
          animation: slideLeft 2.5s ease-in-out infinite;
        }
        
        .letter-slideRight {
          animation: slideRight 2.5s ease-in-out infinite;
        }
        
        .letter-slideUp {
          animation: slideUp 2.5s ease-in-out infinite;
        }
      `}</style>
      
      <h1 className="text-[clamp(44px,8vw,76px)] font-extrabold tracking-[0.15em] uppercase inline-block mt-8 mb-16">
        {text.split("").map((letter, index) => {
          const animationType = animations[index % animations.length];

          return (
            <span
              key={index}
              className={`inline-block letter-${animationType}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage: "linear-gradient(to right, #2f2fa2, #6a4c93, #a35d2c, #f57c00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </h1>
    </section> */}

     
    </>
   
  );
}