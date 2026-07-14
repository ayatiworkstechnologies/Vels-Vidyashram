"use client";

import React, { useState, useRef, useEffect } from "react";
//import bgTexture from "./bg-2.png";
//import starGroup from "./star-group.png";

const DEFAULT_CATEGORIES = [
  {
    number: "01",
    title: "AI-Integrated Classrooms",
    description:
      "Interactive AI-powered smart classrooms transform learning into an engaging, personalized, and collaborative experience. Students benefit from immersive digital content, intelligent teaching tools, and technology-enabled instruction that enhances understanding and participation.",
  },
  {
    number: "02",
    title: "Artificial Intelligence Education",
    description:
      "AI is seamlessly integrated into the learning journey, introducing students to emerging technologies, machine learning concepts, computational thinking, and responsible digital citizenship from an early age.",
  },
  {
    number: "03",
    title: "STEM Innovation Labs",
    description:
      "Our dedicated STEM Labs encourage students to explore Science, Technology, Engineering, and Mathematics through practical experiments, innovation challenges, and real-world problem-solving experiences.",
  },
  {
    number: "04",
    title: "AI & Robotics Lab",
    description:
      "Students design, build, code, and program intelligent robots while learning automation, coding, electronics, sensors, and engineering concepts. These hands-on experiences develop creativity, innovation, teamwork, and critical thinking.",
  },
  {
    number: "05",
    title: "Future Skills Programme",
    description:
      "Beyond academics, students build essential 21st-century skills including coding, design thinking, communication, collaboration, creativity, analytical reasoning, entrepreneurship, and leadership.",
  },
  {
    number: "06",
    title: "Academic Excellence",
    description:
      "A rigorous CBSE curriculum supported by experienced faculty, personalized mentoring, continuous assessments, and innovative teaching practices ensures every child reaches their full potential.",
  },
  {
    number: "07",
    title: "Holistic Development",
    description:
      "Equal emphasis is placed on academics, sports, arts, leadership, life skills, emotional well-being, and character development to nurture confident and responsible individuals.",
  },
];

export default function VelsWhyChooseSlider({ categories = DEFAULT_CATEGORIES }) {
  const [progress, setProgress] = useState(0); // 0 to 1, driven by scroll
  const [cardsPerView, setCardsPerView] = useState(2);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function updateCardsPerView() {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    }
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    function onScroll() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollableHeight = wrapper.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const raw = -rect.top / scrollableHeight;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const maxIndex = Math.max(0, categories.length - cardsPerView);
  const translatePct = progress * maxIndex * (100 / cardsPerView);
  const wrapperHeight = `${100 + maxIndex * 45}vh`;

  return (
    <div ref={wrapperRef} style={{ height: wrapperHeight, position: "relative" }}>
      <section
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-5 px-6 sm:px-10"
        style={{
          backgroundImage: `url('/bg-2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative star cluster, top-right corner 
        <img
          src={'./star-group.png'}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ top: "4%", right: "6%", width: "250px", height: "220px"  }}
        /> */}
        
        <img
          src="/star-group.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute pointer-events-none select-none"
          style={{
          top: "4%",
          right: "6%",
          width: "250px",
          height: "220px",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f2994a] mb-14">
            Why Choose Vels Vidyashram?
          </h2>

          {/* Scroll-driven sliding window */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${translatePct}%)`,
                transition: "transform 80ms linear",
              }}
            >
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="shrink-0 px-4 sm:px-8"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="relative inline-block">
                    <span
                      className="block font-extrabold text-gray-200 leading-none select-none"
                      style={{ fontSize: "clamp(90px, 11vw, 160px)" }}
                    >
                      {cat.number}
                    </span>
                    <h3
                      className="absolute top-3/4 whitespace-nowrap text-xl sm:text-2xl font-bold text-[#2a2a72]"
                      style={{ left: "65%", transform: "translateY(-30%)" }}
                    >                      
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thin grey/orange progress line, replacing arrow controls */}
          <div className="mt-10 max-w-xs h-px bg-gray-200 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[#f2994a]"
              style={{
                width: `${Math.max(8, progress * 100)}%`,
                transition: "width 80ms linear",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
