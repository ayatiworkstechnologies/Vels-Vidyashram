"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function OurMottoSection() {
  const [expandedCard, setExpandedCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Vels Vidyashram CBSE School in Chennai",
      text: "Vels Vidyashram took its humble birth in 2018. The founder of the school Dr.Ishari K.Ganesh a great visionary wanted to build up a school with excellence as its watchword in all aspects.",
      image: "/dargaroad/common-page.jpg",
      showButton: true,
    },
    {
      title: "ABOUT US Vels Educational Trust",
      text: "The School was established in 2018 by Vel’s Educational Trust (Regd.)",
      image: "/dargaroad/our-about.jpg",
      showButton: true,
    },
    {
      title: "ACADEMICS From Pre KG to IX & XI Standard",
      text: "Experienced & trained teachers help in maintaining academic excellence and high standards of the school.",
      image: "/dargaroad/our-academic.jpg",
      showButton: true,
    },
    {
      title: "FACILITIES Modern trend in education",
      text: "The school has all the necessary facilities in keeping with the modern trend in education.",
      image: "/dargaroad/our-facility.jpg",
      showButton: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedCard((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* TOP TEXT */}
      <div className="mb-8 md:mb-12">
        <span
          className={`inline-block text-xs font-semibold text-secondary bg-orange-50 px-3 py-1 rounded-full mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          Our motto
        </span>

        <h2
          className={`text-3xl md:text-5xl font-regular font-primary text-gray-900 leading-tight max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          The Motto of the School is <br />
          Wisdom is Strength.
        </h2>
      </div>

      {/* CARDS CONTAINER */}
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-4 h-auto md:h-[420px] transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            isExpanded={expandedCard === index}
            onClick={() => setExpandedCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ title, text, image, showButton, isExpanded, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        shadow-lg border border-gray-100 md:border-none
        h-auto md:h-full
        ${isExpanded ? "md:flex-[2.5]" : "md:flex-1"}
      `}
    >
      {/* MOBILE DESIGN */}
      <div className="flex flex-col md:hidden bg-white">
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 font-primary">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{text}</p>
          {showButton && (
            <button className="inline-flex items-center gap-3 font-semibold text-sm text-gray-900 hover:gap-4 transition-all">
              Learn More
              <span className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center">
                →
              </span>
            </button>
          )}
        </div>
      </div>

      {/* DESKTOP DESIGN */}
      <div className="hidden md:block h-full w-full">
        {isExpanded ? (
          <div className="absolute inset-0 flex bg-gray-100">
            {/* LEFT CONTENT */}
            <div className="w-[58%] p-8 lg:p-10 flex flex-col justify-between gap-6 overflow-hidden">
              <div>
                <h3
                  className={`text-2xl lg:text-[28px] font-bold text-gray-900 mb-4 font-primary leading-[1.2] break-words transition-all duration-700 ${
                    isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  {title}
                </h3>

                <p
                  className={`text-sm text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
                    isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  {text}
                </p>
              </div>

              {showButton && (
                <button
                  className={`inline-flex items-center gap-3 font-semibold text-sm text-gray-900 hover:gap-4 transition-all duration-700 delay-400 ${
                    isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  Learn More
                  <span className="w-10 h-10 rounded-full bg-tertiary text-white flex items-center justify-center">
                    →
                  </span>
                </button>
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`w-[42%] bg-cover bg-center transition-all duration-700 ${
                isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ) : (
          /* COLLAPSED CARD */
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-semibold leading-snug font-primary">
                {title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}