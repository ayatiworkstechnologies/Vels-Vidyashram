"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Infrastructure",
    description:
      "A well-planned campus designed for safe and effective learning. Modern classrooms, open spaces, and student-friendly facilities. Built to support comfort, focus, and growth at every stage.",
    image: "/pallavaram/new.png",
    icon: "/thalambur/fav-6.png",
    link: "/pallavaram/photo-gallery",
  },
  {
    id: 2,
    title: "Curriculum",
    description:
      "A comprehensive curriculum that balances academics, creativity, and life skills. Designed to foster critical thinking, problem-solving, and a love for learning in a supportive environment.",
    image: "/pallavaram/curri.png",
    icon: "/thalambur/fav-2.png",
    link: "/pallavaram/curriculum",
  },
  {
    id: 3,
    title: "Athletics",
    description:
      "A wide range of sports and physical activities to promote fitness, teamwork, and sportsmanship. State-of-the-art facilities and expert coaching to nurture athletic talent and encourage a healthy lifestyle.",
    image: "/pallavaram/athle.png",
    icon: "/thalambur/fav-3.png",
    link: "/pallavaram/beyond-academics",
  },
  {
    id: 4,
    title: "Transport",
    description:
      "A safe and reliable transportation system with a fleet of modern buses equipped with GPS tracking. Ensuring students' safety and punctuality while providing convenience for parents and guardians.",
    image: "/pallavaram/trans.png",
    icon: "/thalambur/fav-4.png",
    link: "/pallavaram/transport",
  },
  {
    id: 5,
    title: "Digital Classroom",
    description:
      "Digital classrooms equipped with interactive whiteboards, high-speed internet, and multimedia resources. Enhancing the learning experience through technology integration and fostering digital literacy among students.",
    image: "/pallavaram/digi.png",
    icon: "/thalambur/fav-5.png",
    link: "/pallavaram/digital-rooms",
  },
];

function LearnMoreButton({ link }) {
  return (
    <Link href={link} className="group inline-flex items-center gap-4 mt-7">
      <span className="text-[#0F1B4C] font-secondary font-bold text-lg md:text-xl">
        Learn More
      </span>

      <span className="w-14 h-14 md:w-[40px] md:h-[40px] rounded-full bg-[#4A2EA7] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#38208F]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12H19" />
          <path d="M12 5L19 12L12 19" />
        </svg>
      </span>
    </Link>
  );
}

export default function InfrastructureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
        )
      );

      const newIndex = Math.min(
        Math.floor(scrollProgress * slides.length),
        slides.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className="text-center max-w-xl mx-auto px-6 pt-16 pb-10">
        <span className="inline-block text-xs font-primary font-medium px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-3 uppercase tracking-wider">
          Pre KG through 12
        </span>

        <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-3 text-gray-900 leading-tight">
          Why is Vels Vidyashram the best solution for education?
        </h2>

        <p className="text-gray-500 font-secondary text-sm leading-relaxed">
          Our mission is to impart knowledge with values and ethics. To prepare
          the younger generation for a better future by improving their
          capabilities.
        </p>
      </div>

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
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-sm">
                    <img src={slide.icon} alt={slide.title} className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-primary font-bold text-gray-900 mb-3">
                    {slide.title}
                  </h3>

                  <p className="text-gray-600 font-secondary text-sm leading-relaxed">
                    {slide.description}
                  </p>

                  <LearnMoreButton link={slide.link} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .infrastructure-swiper {
            padding-bottom: 40px !important;
          }

          .infrastructure-swiper .swiper-pagination-bullet {
            background: #d1d5db !important;
            opacity: 1 !important;
          }

          .infrastructure-swiper .swiper-pagination-bullet-active {
            background: #ea580c !important;
            width: 24px !important;
            border-radius: 4px !important;
          }
        `}</style>
      </div>

      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{
          height: `${slides.length * 100}vh`,
          backgroundImage: "url(/thalambur/bg-infra.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-12 overflow-hidden">
          <div className="relative w-full max-w-5xl h-[450px]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const distance = Math.abs(index - activeIndex);

              const scale = isActive ? 1 : 0.95 - distance * 0.03;
              const translateY = isPast
                ? -30 * (activeIndex - index)
                : 15 * (index - activeIndex);
              const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.15);

              return (
                <div
                  key={slide.id}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex: slides.length - distance,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl h-full border border-gray-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="relative z-10 flex items-center h-full">
                      <div className="p-14 flex flex-col justify-center w-1/2">
                        <img
                          src={slide.icon}
                          alt={slide.title}
                          className="w-12 h-12 mb-6"
                        />

                        <h3 className="text-5xl font-primary font-bold mb-5 text-gray-900 leading-tight">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 font-secondary text-sm leading-relaxed max-w-md">
                          {slide.description}
                        </p>

                        <LearnMoreButton link={slide.link} />
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