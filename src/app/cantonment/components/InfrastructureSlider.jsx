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
    image: "/cantonment/Infrastructure.png",
    icon: "/cantonment/fav-6.png",
    link: "/cantonment/photo-gallery",
  },
  {
    id: 2,
    title: "Curriculum",
    description:
      "A comprehensive curriculum that balances academics, creativity, and life skills. Aligned with global standards and designed to foster critical thinking, innovation, and holistic development.",
    image: "/cantonment/Curriculum.png",
    icon: "/cantonment/fav-2.png",
    link: "/cantonment/our-curriculum",
  },
  {
    id: 3,
    title: "Art & Craft",
    description:
      "A vibrant art and craft program that encourages creativity, self-expression, and hands-on learning. Providing students with opportunities to explore various mediums and develop their artistic talents.",
    image: "/cantonment/art.png",
    icon: "/cantonment/fav-3.png",
    link: "/cantonment/beyond-academics",
  },
  {
    id: 4,
    title: "Athletics",
    description:
      "A state-of-the-art sports facility that promotes physical fitness, teamwork, and competitive spirit among students.",
    image: "/cantonment/Athletics.png",
    icon: "/cantonment/fav-4.png",
    link: "/cantonment/beyond-academics",
  },
  {
    id: 5,
    title: "Transport",
    description:
      "A reliable and safe transportation system with a fleet of well-maintained buses, GPS tracking, and trained drivers. Ensuring secure and efficient travel for students to and from school.",
    image: "/cantonment/Transport.png",
    icon: "/cantonment/fav-5.png",
    link: "/cantonment/transport",
  },
];

function LearnMoreButton({ link }) {
  return (
    <Link href={link} className="group inline-flex items-center gap-4 mt-7 w-fit">
      <span className="text-[#0F1B4C] font-secondary font-bold text-lg md:text-xl">
        Learn More
      </span>

      <span className="w-[40px] h-[40px] rounded-full bg-[#4A2EA7] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#38208F]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
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
      {/* Header */}
      <div className="text-center max-w-xl mx-auto px-6 pt-16 pb-10">
        <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-3 text-gray-900 leading-tight">
          The Motto of the School is Wisdom is Strength.
        </h2>

        <p className="text-gray-500 font-secondary text-sm leading-relaxed">
          Our mission is to impart knowledge with values and ethics. To prepare
          the younger generation for a better future by improving their
          capabilities.
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="block lg:hidden px-4 pb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="cantonment-infra-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="h-52 w-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl shadow-sm">
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
          .cantonment-infra-swiper {
            padding-bottom: 40px !important;
          }

          .cantonment-infra-swiper .swiper-pagination-bullet {
            background: #d1d5db !important;
            opacity: 1 !important;
          }

          .cantonment-infra-swiper .swiper-pagination-bullet-active {
            background: #ea580c !important;
            width: 20px !important;
            border-radius: 4px !important;
          }
        `}</style>
      </div>

      {/* Desktop Sticky Section */}
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