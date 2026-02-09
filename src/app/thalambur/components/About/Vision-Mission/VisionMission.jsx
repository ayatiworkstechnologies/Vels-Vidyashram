"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function VisionMission() {
  const [activeCard, setActiveCard] = useState(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer to trigger the background animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const cards = [
    {
      id: "vision",
      iconPath: "/thalambur/vision.webp",
      title: "Vision",
      text: "It is our Vision to create a dynamic gateway for the future generation and for them to imagine, innovate and realise their own revolutions along the way.",
    },
    {
      id: "mission",
      iconPath: "/thalambur/mission.webp",
      title: "Mission",
      text: "We wish to walk at the same pace as the ever-changing world. Orchids prepare students to adapt and excel through an inspiring and challenging environment. We believe in our student's holistic development in the most exciting way.",
    },
  ];

  return (
    <>
      <section
        ref={aboutRef}
        className="relative w-full py-16 md:py-32 overflow-hidden"
      >
        {/* Background Layer */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
            aboutVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: "url('/thalambur/bg-2.jpg')",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/60 lg:bg-white/20" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-500 border border-gray-200 hover:border-blue-400 overflow-hidden ${
                activeCard === card.id
                  ? "scale-105 shadow-2xl -rotate-1"
                  : "hover:scale-102"
              }`}
              style={{
                animation: aboutVisible 
                  ? `slideIn 0.6s ease-out ${index * 0.2}s backwards` 
                  : "none",
              }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(card.id)}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-500 ${
                  activeCard === card.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className={`absolute w-32 h-32 bg-blue-400/20 rounded-full blur-2xl transition-all duration-700 ${
                    activeCard === card.id ? "top-0 right-0 scale-150" : "-top-16 -right-16"
                  }`}
                />
                <div
                  className={`absolute w-32 h-32 bg-purple-400/20 rounded-full blur-2xl transition-all duration-700 ${
                    activeCard === card.id ? "bottom-0 left-0 scale-150" : "-bottom-16 -left-16"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`relative w-16 h-16 mx-auto mb-6 transition-all duration-500 ${
                    activeCard === card.id ? "animate-bounce-gentle" : "group-hover:scale-110"
                  }`}
                >
                  <Image
                    src={card.iconPath}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3
                  className={`text-3xl font-bold text-gray-800 text-center mb-4 transition-all duration-500 ${
                    activeCard === card.id ? "text-blue-600" : ""
                  }`}
                >
                  {card.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Shimmer effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-1000 ${
                  activeCard === card.id ? "animate-shimmer" : "translate-x-[-200%]"
                }`}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-200%) skewX(-20deg); }
            100% { transform: translateX(200%) skewX(-20deg); }
          }

          .animate-bounce-gentle {
            animation: bounce-gentle 2s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 1.5s infinite;
          }

          .hover\:scale-102:hover {
            transform: scale(1.02);
          }
        `}</style>
      </section>
    </>
  );
}