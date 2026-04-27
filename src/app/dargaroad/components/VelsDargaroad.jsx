"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VelsDargaroad() {
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const topObserver = new IntersectionObserver(([entry]) => {
      setTopVisible(entry.isIntersecting);
    }, observerOptions);

    const bannerObserver = new IntersectionObserver(([entry]) => {
      setBannerVisible(entry.isIntersecting);
    }, observerOptions);

    const bottomObserver = new IntersectionObserver(([entry]) => {
      setBottomVisible(entry.isIntersecting);
    }, observerOptions);

    if (topRef.current) topObserver.observe(topRef.current);
    if (bannerRef.current) bannerObserver.observe(bannerRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      if (topRef.current) topObserver.unobserve(topRef.current);
      if (bannerRef.current) bannerObserver.unobserve(bannerRef.current);
      if (bottomRef.current) bottomObserver.unobserve(bottomRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* ================= TOP SECTION ================= */}
      <div
        ref={topRef}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start relative z-10 pb-16"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2
            className={`text-3xl font-semibold mb-6 font-primary text-gray-900 transition-all duration-1000 ${
              topVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Evolve better with us
          </h2>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed font-secondary list-disc pl-5">
            {[
              "At Vels Vidyashram, the focus has always been to empower its students to excel in different walks of life so that they are able to evolve better as global citizens of tomorrow. We are among the top CBSE schools in Chennai that believe in a holistic approach towards the overall development of the child. To make students future-ready, we have now integrated future skills in the curriculum and focusing on:",
              "Excellent communication skills",
              "Innovation and creativity",
              "Sense making",
              "Rational thinking",
              "Power of learning, unlearning and relearning",
              "Problem-solving and computational thinking",
            ].map((text, index) => (
              <li
                key={index}
                className={`transition-all duration-1000 ${
                  topVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT OVERLAPPING IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div
            className={`absolute top-0 right-0 w-[400px] h-[550px] rounded-2xl overflow-hidden shadow-2xl z-30 translate-y-10 transition-all duration-1000 delay-300 ${
              topVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-20 scale-95"
            }`}
          >
            <Image
              src="/dargaroad/evolve.jpg"
              alt="Students"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* ================= CENTER BANNER ================= */}
      <div
        ref={bannerRef}
        className={`relative w-full h-[450px] md:h-[550px] z-0 transition-all duration-1000 ${
          bannerVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <Image
          src="/dargaroad/vels-bg.png"
          alt="Vels Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h2
            className={`text-3xl md:text-5xl text-white font-primary font-bold drop-shadow-2xl transition-all duration-1000 delay-300 ${
              bannerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Welcome to Vels Vidyashram
          </h2>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div
        ref={bottomRef}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start relative z-10 pt-16"
      >
        {/* LEFT IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div
            className={`absolute bottom-0 left-0 w-[400px] h-[580px] rounded-2xl overflow-hidden shadow-2xl z-30 -translate-y-10 transition-all duration-1000 delay-200 ${
              bottomVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-20 scale-95"
            }`}
          >
            <Image
              src="/dargaroad/why-choose.jpg"
              alt="Classroom"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-10">
          <h3
            className={`text-3xl font-primary font-semibold mb-6 text-gray-900 leading-tight transition-all duration-1000 ${
              bottomVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            Why choose us?
          </h3>

          <p
            className={`text-sm text-gray-600 mb-8 font-secondary transition-all duration-1000 delay-200 ${
              bottomVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            What makes us the best school includes:
          </p>

          <ul className="space-y-5 list-disc pl-5">
            {[
              { content: "Safe and secure environment" },
              { content: "Best academics" },
              { content: "Excellent sports facilities" },
              { content: "Best infrastructure" },
              { content: "Highly experienced and talented teaching faculty" },
              { content: "Innovative curriculum" },
              {
                content:
                  "We are the top CBSE school in Chennai that guarantees the improvement and success of the child. We are not just a school but a training ground for life. Drop us your details below for a quick response.",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`font-secondary text-sm text-gray-700 leading-relaxed transition-all duration-1000 ${
                  bottomVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}