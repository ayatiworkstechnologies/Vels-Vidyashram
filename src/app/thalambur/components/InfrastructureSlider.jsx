"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Infrastructure",
    description:
      "A well-planned campus designed for safe and effective learning. Modern classrooms, open spaces, and student-friendly facilities. Built to support comfort, focus, and growth at every stage.",
    image: "/thalambur/card.png",
    icon: "/thalambur/fav-6.png",
  },
  {
    id: 2,
    title: "Academics",
    description:
      "Strong academic foundation with innovative teaching methods and individual attention for every student.",
    image: "/thalambur/curriculum.png",
    icon: "/thalambur/fav-2.png",
  },
  {
    id: 3,
    title: "Activities",
    description:
      "Holistic development through sports, arts, and extracurricular programs that nurture creativity and teamwork.",
    image: "/thalambur/step.png",
    icon: "/thalambur/fav-3.png",
  },
  {
    id: 4,
    title: "Technology",
    description:
      "Modern technology integrated into classrooms with smart boards, computer labs, and digital learning resources for enhanced education.",
    image: "/thalambur/laboratories.png",
    icon: "/thalambur/fav-4.png",
  },
  {
    id: 5,
    title: "Community",
    description:
      "A supportive and inclusive community that values diversity, encourages collaboration, and builds lasting friendships.",
    image: "/thalambur/transport.png",
    icon: "/thalambur/fav-5.png",
  },
  {
    id: 6,
    title: "Excellence",
    description:
      "Commitment to excellence in all aspects of education, preparing students for success in their future endeavors and careers.",
    image: "/thalambur/athletics.png",
    icon: "/thalambur/fav-1.png",
  },
];

export default function InfrastructureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate progress through the section
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      ));

      // Map progress to card index
      const newIndex = Math.min(
        Math.floor(scrollProgress * slides.length),
        slides.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     

      {/* Sticky Stacking Cards Section */}
      <section
        ref={sectionRef}
        className="relative"
        style={{
          height: `${slides.length * 100}vh`,
          backgroundImage: 'url(/thalambur/bg-infra.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
         <div className="text-center max-w-xl mx-auto px-4">
          <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-3">
            Pre KG through 12
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 leading-tight">
            The Motto of the School is Wisdom is Strength.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our mission is to impart knowledge with values and ethics. To prepare the younger generation for a better future by improving their capabilities to face the challenges of the outside world.
          </p>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-6 lg:px-12 overflow-hidden">
          <div className="relative w-full max-w-5xl h-[400px]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              
              const scale = isActive ? 1 : 0.95 - (Math.abs(index - activeIndex) * 0.03);
              const translateY = isPast 
                ? -30 * (activeIndex - index) 
                : 15 * (index - activeIndex);
              const opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(index - activeIndex) * 0.15);

              return (
                <div
                  key={slide.id}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: slides.length - Math.abs(index - activeIndex),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {/* Main Card Container */}
                  <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl h-full">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

                    {/* Left Content */}
                    <div className="relative z-10 flex items-center h-full">
                      <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center w-full md:w-1/2">
                        <div className="w-16 h-16 mb-6">
                          <img
                            src={slide.icon}
                            alt={slide.title}
                            className="w-12 h-12"
                          />
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-md">
                          {slide.description}
                        </p>

                        <button className="inline-flex items-center gap-3 font-semibold text-base group w-fit">
                          <span className="text-gray-900">Learn More</span>
                          <span className="w-11 h-11 rounded-full bg-tertiary text-white flex items-center justify-center transition-all group-hover:bg-blue-700 shadow-md">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}