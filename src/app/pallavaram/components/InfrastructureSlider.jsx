"use client";
import { useState, useEffect, useRef } from "react";
// Swiper imports for mobile
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Infrastructure",
    description: "A well-planned campus designed for safe and effective learning. Modern classrooms, open spaces, and student-friendly facilities. Built to support comfort, focus, and growth at every stage.",
    image: "/pallavaram/infrastructure.png",
    icon: "/thalambur/fav-6.png",
  },
  {
    id: 2,
    title: "Academics",
    description: "Strong academic foundation with innovative teaching methods and individual attention for every student.",
    image: "/pallavaram/academic-1.png",
    icon: "/thalambur/fav-2.png",
  },
  {
    id: 3,
    title: "Activities",
    description: "Holistic development through sports, arts, and extracurricular programs that nurture creativity and teamwork.",
    image: "/pallavaram/activities-1.png",
    icon: "/thalambur/fav-3.png",
  },
  {
    id: 4,
    title: "Technology",
    description: "Modern technology integrated into classrooms with smart boards, computer labs, and digital learning resources for enhanced education.",
    image: "/pallavaram/technology.png",
    icon: "/thalambur/fav-4.png",
  },
  {
    id: 5,
    title: "Community",
    description: "A supportive and inclusive community that values diversity, encourages collaboration, and builds lasting friendships.",
    image: "/pallavaram/community.png",
    icon: "/thalambur/fav-5.png",
  },
  {
    id: 6,
    title: "Excellence",
    description: "Commitment to excellence in all aspects of education, preparing students for success in their future endeavors and careers.",
    image: "/pallavaram/excellence.png",
    icon: "/thalambur/fav-1.png",
  },
];

export default function InfrastructureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Disable scroll calculation on mobile to save performance
      if (!sectionRef.current || window.innerWidth < 1024) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      ));

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
    <div className="w-full">
      {/* --- Unified Header Section --- */}
      <div className="text-center max-w-xl mx-auto px-6 pt-16 pb-10">
        <span className="inline-block text-xs font-primary font-medium px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-3 uppercase tracking-wider">
          Pre KG through 12
        </span>
        <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-3 text-gray-900 leading-tight">
          Why is Vels Vidyashram the best solution for education?
        </h2>
        <p className="text-gray-500 font-secondary text-sm leading-relaxed">
          Our mission is to impart knowledge with values and ethics. To prepare the younger generation for a better future by improving their capabilities.
        </p>
      </div>

      {/* --- MOBILE VIEW: SWIPER SLIDER (Visible < 1024px) --- */}
      <div className="block lg:hidden px-4 pb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="infrastructure-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="h-56 w-full relative">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-sm">
                    <img src={slide.icon} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-primary font-bold text-gray-900 mb-3">{slide.title}</h3>
                  <p className="text-gray-600 font-secondary text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Swiper Custom Styling */}
        <style jsx global>{`
          .infrastructure-swiper .swiper-pagination-bullet-active {
            background: #EA580C !important;
            width: 24px !important;
            border-radius: 4px !important;
          }
          .infrastructure-swiper { padding-bottom: 40px !important; }
        `}</style>
      </div>

      {/* --- DESKTOP VIEW: STICKY STACKING (Visible >= 1024px) --- */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{
          height: `${slides.length * 100}vh`,
          backgroundImage: 'url(/thalambur/bg-infra.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-12 overflow-hidden">
          <div className="relative w-full max-w-5xl h-[450px]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const scale = isActive ? 1 : 0.95 - (Math.abs(index - activeIndex) * 0.03);
              const translateY = isPast ? -30 * (activeIndex - index) : 15 * (index - activeIndex);
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
                  <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl h-full border border-gray-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
                    <div className="relative z-10 flex items-center h-full">
                      <div className="p-14 flex flex-col justify-center w-1/2">
                        <img src={slide.icon} alt={slide.title} className="w-12 h-12 mb-6" />
                        <h3 className="text-5xl font-primary font-bold mb-5 text-gray-900 leading-tight">
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
    </div>
  );
}