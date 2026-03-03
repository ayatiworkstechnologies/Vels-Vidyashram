"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "vision",
      imagePath: "/dargaroad/vision.jpg",
      title: "Our Vision",
      accent: "border-blue-500",
      bgGradient: "from-blue-50",
      text: <>
      The Best CBSE School in Pallavaram, Chennai that ensures a holistic development of all the students and empowers them to embrace learning to achieve their personal best and build their emotional, social and physical well-being.
       <span className="block mt-4 font-bold text-lg text-primary">
            Wisdom is Strength
          </span>
      </>
    },
    {
      id: "mission",
      imagePath: "/dargaroad/mission.jpg",
      title: "Our Mission",
      accent: "border-amber-500",
      bgGradient: "from-amber-50",
      text: (
        <>
          <span className="block mb-4">
            The school with its well-qualified, trained, experienced team of passionate teachers, engaging teaching-learning approaches, clubbed with excellent infrastructure, tech-integration and enthusiastic parent involvement makes young learners achieve a holistic development and excellence in their chosen fields.
          </span>
          <span>
            By imparting quality education, the school helps the students blossom into happy, mature, responsible, active global citizens with human values and ensure that the students are ready to face the challenges of the future world.
          </span>
        </>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 bg-white overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-40">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Side with Floating Frame */}
              <div className="relative w-full lg:w-1/2 group">
                <div className={`absolute -inset-4 border-2 ${card.accent} rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center space-x-4">
                  <span className={`w-12 h-[2px] ${card.accent.replace('border-', 'bg-')}`} />
                  <h3 className="text-2xl md:text-3xl font-primary font-black tracking-tight text-slate-900 uppercase">
                    {card.title}
                  </h3>
                </div>
                
                <div className={`p-8 md:p-10 rounded-3xl bg-gradient-to-br ${card.bgGradient} to-transparent border border-white shadow-xl shadow-slate-200/40`}>
                  <div className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium italic font-secondary">
                    {card.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}