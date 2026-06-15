"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VelsStaticOverlaySection() {
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  
  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const handleIntersect = (setter) => ([entry]) => {
      if (entry.isIntersecting) {
        setter(true);
      }
    };

    const topObserver = new IntersectionObserver(handleIntersect(setTopVisible), observerOptions);
    const bannerObserver = new IntersectionObserver(handleIntersect(setBannerVisible), observerOptions);
    const bottomObserver = new IntersectionObserver(handleIntersect(setBottomVisible), observerOptions);

    if (topRef.current) topObserver.observe(topRef.current);
    if (bannerRef.current) bannerObserver.observe(bannerRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      if (topRef.current) topObserver.disconnect();
      if (bannerRef.current) bannerObserver.disconnect();
      if (bottomRef.current) bottomObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-10 md:py-20 bg-white overflow-hidden">
      
      {/* ================= TOP SECTION ================= */}
      <div ref={topRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start relative z-10 pb-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className={`text-3xl font-semibold mb-6 font-primary text-gray-900 transition-all duration-1000 ${
            topVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Vels Vidyashram Cantonment
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary text-justify">
            {[
              "Vels Vidyashram Cantonment offers a progressive learning environment designed to nurture academic excellence, personal integrity, and social responsibility. The school is committed to helping students develop into confident individuals who are prepared to meet the demands of a changing world.",
              "Our comprehensive curriculum integrates knowledge, skill development, and experiential learning to ensure students receive a balanced and engaging educational experience. Innovative teaching methodologies encourage active participation, critical thinking, and practical application of concepts.",
              "Students benefit from a variety of co-curricular opportunities that enhance creativity, teamwork, leadership, and self-expression. These experiences complement classroom learning and contribute significantly to overall development.",
              "The school fosters an inclusive and encouraging atmosphere where every learner feels valued and supported. Strong student-teacher relationships, guided mentorship, and a commitment to excellence help create a positive and motivating educational journey.",
              "At Vels Vidyashram Cantonment, learning extends beyond academic achievement, empowering students to become responsible citizens, confident leaders, and lifelong learners with a strong foundation for future success."
            ].map((text, index) => (
              <p 
                key={index}
                className={`transition-all duration-1000 ${
                  topVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: topVisible ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (Curved Corners Grid) */}
        <div className={`relative w-full h-[350px]  sm:h-[450px] lg:h-[550px] transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${
          topVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
        }`}>
          <div className="relative w-full rounded-3xl h-full overflow-hidden">
            <Image
              src="/cantonment/sec-11.png"
              alt="Students"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* ================= CENTER BANNER ================= */}
      <div ref={bannerRef} className={`relative w-full h-[350px] md:h-[550px] z-0 transition-all duration-1000 ${
        bannerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      }`}>
        <Image
          src="/cantonment/bg-vels.png"
          alt="Vels Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 text-center">
          <h2 className={`text-2xl md:text-5xl text-white font-primary font-bold drop-shadow-2xl transition-all duration-1000 delay-300 ${
            bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Welcome to Vels Vidyashram Cantonment
          </h2>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div ref={bottomRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start relative z-10 pt-16">
        
        {/* LEFT IMAGE (Curved Corners Grid) */}
        <div className={`relative w-full h-[350px] sm:h-[450px] lg:h-[580px] transition-all duration-1000 delay-200 mt-10 lg:mt-0 ${
          bottomVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
        }`}>
          <div className="w-full h-full overflow-hidden">
            <Image
              src="/cantonment/sec-22.png"
              alt="Classroom"
              fill
              className="object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-10">
          <h3 className={`text-2xl md:text-3xl font-primary font-semibold mb-6 text-gray-900 leading-tight transition-all duration-1000 ${
            bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            Why Vels Vidyashram is the Best Choice for Education?
          </h3>
          <p className={`text-sm text-gray-600 mb-4 font-secondary transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
           At Vels Vidyashram Cantonment, education goes beyond textbooks. The school focuses on creating a balanced learning environment where students grow academically, socially, emotionally, and morally. With a strong foundation in the CBSE curriculum, experienced faculty, and value-based teaching methods, the school encourages every child to learn with confidence and curiosity.
          </p>
           <p className={`text-sm text-gray-600 mb-6 font-secondary transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          
           The campus provides a supportive atmosphere where children are guided to explore their talents, develop discipline, build leadership qualities, and become responsible individuals. Through academics, co-curricular activities, sports, and life-skill development, Vels Vidyashram Cantonment prepares students to face the future with knowledge, confidence, and strong values.
          </p>
          

          <div className="space-y-8 md:space-y-10">
  {[
    {
      title: "Why Choose Vels Vidyashram?",
      content: [
        "CBSE-based academic excellence",
        "Experienced and dedicated teachers",
        "Student-friendly learning environment",
        "Focus on discipline, values, and character building",
        "Co-curricular and enrichment activities",
        "Sports and physical development",
        "Safe, supportive, and inclusive campus",
        "Holistic development for every child",
      ],
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`transition-all duration-1000 ${
        bottomVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      }`}
      style={{
        transitionDelay: bottomVisible
          ? `${index * 150 + 400}ms`
          : "0ms",
      }}
    >
      <h4 className="font-primary text-lg md:text-xl font-bold mb-4 text-gray-800">
        {item.title}
      </h4>

      <ul className="space-y-3">
        {item.content.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 font-secondary text-sm text-gray-700 leading-relaxed"
          >
            <span className="text-primary mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
          </div>
        </div>
      </div>
    </section>
  );
}