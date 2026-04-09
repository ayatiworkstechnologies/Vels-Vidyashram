"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Infrastructure",
    description:
      "A well-planned campus designed for safe and effective learning. Modern classrooms, open spaces, and student-friendly facilities. Built to support comfort, focus, and growth at every stage.",
    image: "/cantonment/Infrastructure.png",
    icon: "/thalambur/fav-6.png",
  },
  {
    id: 2,
    title: "Curriculum",
    description:
      "A comprehensive curriculum that balances academics, creativity, and life skills. Aligned with global standards and designed to foster critical thinking, innovation, and holistic development.",
    image: "/cantonment/Curriculum.png",
    icon: "/thalambur/fav-2.png",
  },
  {
    id: 3,
    title: "Art & Craft",
    description:
      "A vibrant art and craft program that encourages creativity, self-expression, and hands-on learning. Providing students with opportunities to explore various mediums and develop their artistic talents.",
    image: "/cantonment/art.png",
    icon: "/thalambur/fav-3.png",
  },
  {
    id: 4,
    title: "Athletics",
    description:
      "A state-of-the-art sports facility that promotes physical fitness, teamwork, and competitive spirit among students.",
    image: "/cantonment/Athletics.png",
    icon: "/thalambur/fav-4.png",
  },
  {
    id: 5,
    title: "Transport",
    description:
      "A reliable and safe transportation system with a fleet of well-maintained buses, GPS tracking, and trained drivers. Ensuring secure and efficient travel for students to and from school.",
    image: "/cantonment/Transport.png",
    icon: "/thalambur/fav-5.png",
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
          <span className="inline-block text-xs font-primary font-medium px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-3">
            Pre KG through 12
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-3 text-gray-900 leading-tight">
            The Motto of the School is Wisdom is Strength.
          </h2>
          <p className="text-gray-500 font-secondary text-sm leading-relaxed">
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

                        <h3 className="text-4xl md:text-5xl font-primary font-bold mb-5 text-gray-900">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 font-secondary text-sm leading-relaxed mb-8 max-w-md">
                          {slide.description}
                        </p>

                        
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