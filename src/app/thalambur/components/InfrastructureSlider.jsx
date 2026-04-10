"use client";
import { useState, useEffect, useRef } from "react";
// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Infrastructure",
    description: "A well-planned campus designed for safe and effective learning. Modern classrooms, open spaces, and student-friendly facilities.",
    image: "/thalambur/infra-1.png",
    icon: "/thalambur/fav-6.png",
  },
  {
    id: 2,
    title: "Curriculum",
    description: "Comprehensive curriculum that balances academics, creativity, and critical thinking aligned with global standards.",
    image: "/thalambur/curriculum-1.png",
    icon: "/thalambur/fav-2.png",
  },
  {
    id: 3,
    title: "Activities",
    description: "Holistic development through sports, arts, and extracurricular programs that nurture creativity and teamwork.",
    image: "/thalambur/activity-2.png",
    icon: "/thalambur/fav-3.png",
  },
  {
    id: 4,
    title: "Athletics",
    description: "State-of-the-art sports facilities and a strong athletics program that promotes physical fitness and sportsmanship.",
    image: "/thalambur/athletic-1.png",
    icon: "/thalambur/fav-4.png",
  },
  {
    id: 5,
    title: "Step",
    description: "A supportive and inclusive community that values diversity, encourages collaboration, and builds lasting friendships.",
    image: "/thalambur/step-1.png",
    icon: "/thalambur/fav-5.png",
  },
  {
    id: 6,
    title: "Laboratories",
    description: "Well-equipped science and computer labs that provide hands-on learning experiences and foster innovation.",
    image: "/thalambur/lab-1.png",
    icon: "/thalambur/fav-1.png",
  },
];

export default function InfrastructureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Desktop Scroll Logic (only runs on screens > 1024px)
  useEffect(() => {
    const handleScroll = () => {
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
      {/* --- SHARED HEADER --- */}
      <div className="text-center max-w-xl mx-auto px-6 pt-16 pb-10">
        <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-3 uppercase tracking-wider">
          Pre KG through 12
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 leading-tight">
          Why Vels Vidyashram is the Best Choice?
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Our mission is to impart knowledge with values and ethics and to prepare the younger generation.
        </p>
      </div>

      {/* --- MOBILE SLIDER (Visible only on Mobile/Tablet) --- */}
      <div className="block lg:hidden px-4 pb-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="infrastructure-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
                <div className="h-56 w-full relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl shadow-md">
                    <img src={slide.icon} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{slide.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Bullet Styling */}
        <style jsx global>{`
          .infrastructure-swiper .swiper-pagination-bullet-active {
            background: #EA580C !important;
            width: 24px;
            border-radius: 4px;
          }
          .infrastructure-swiper {
            padding-bottom: 50px !important;
          }
        `}</style>
      </div>

      {/* --- DESKTOP STACKING CARDS (Visible only on Desktop) --- */}
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
                        <h3 className="text-5xl font-bold mb-5 text-gray-900 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-md">
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