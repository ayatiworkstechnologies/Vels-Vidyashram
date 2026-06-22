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
            Vels Vidyashram Pallavaram
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary text-justify">
            {[
              "Founded with a vision to nurture well-rounded learners, Vels Vidyashram Pallavaram provides a progressive educational experience that blends academic excellence with character development. The school creates an environment where students are encouraged to learn, explore, and grow with confidence.",
              "Our curriculum is designed to promote intellectual curiosity, practical understanding, and meaningful engagement. Through innovative teaching practices and experiential learning opportunities, students develop essential life skills while strengthening their academic foundations.",
              "A wide range of co-curricular and enrichment activities ensures that every child receives opportunities to discover talents, pursue interests, and achieve personal growth beyond the classroom.",
              "The school remains committed to fostering a culture of inclusivity, respect, and responsibility. Guided by dedicated educators and supported by a vibrant learning community, students are prepared to become capable individuals ready to excel in higher education and beyond.",
              "At Vels Vidyashram Pallavaram, education extends beyond textbooks, helping learners develop integrity, resilience, leadership qualities, and a strong sense of purpose for the future."
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
        <div className={`relative w-full h-[350px] sm:h-[450px] lg:h-[550px] transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${
          topVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
        }`}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/pallavaram/palla-1.png"
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
          src="/pallavaram/banner/new-banner.png"
          alt="Vels Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 text-center">
          <h2 className={`text-2xl md:text-5xl text-white font-primary font-bold drop-shadow-2xl transition-all duration-1000 delay-300 ${
            bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Welcome to Vels Vidyashram
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
              src="/pallavaram/palla-2.png"
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
          <p className={`text-sm text-gray-600 mb-8 font-secondary transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            At Vels Vidyashram Pallavaram, learning is designed to inspire young minds and help students achieve their full potential. The school combines academic excellence with practical learning, creativity, communication skills, and value-based education to shape confident and responsible learners.
          </p>
          <p className={`text-sm text-gray-600 mb-8 font-secondary transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            With a well-structured CBSE curriculum, modern teaching practices, and a nurturing school environment, students are encouraged to think independently, participate actively, and develop the skills needed for future success. From classroom learning to sports, cultural activities, and personal development, Vels Vidyashram Pallavaram offers a complete educational experience for every child.
          </p>

<div className="space-y-8 md:space-y-10">
  {[
    {
      title: "Key Highlights",
      points: [
        "Strong CBSE curriculum",
        "Modern and engaging teaching methods",
        "Focus on academic and personal growth",
        "Qualified and caring faculty",
        "Co-curricular learning opportunities",
        "Sports, creativity, and activity-based development",
        "Safe and child-friendly environment",
        "Preparation for future-ready learning",
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
      <h4 className="font-primary text-lg md:text-xl font-bold mb-3 text-gray-800">
        {item.title}
      </h4>

      <ul className="space-y-2">
        {item.points.map((point, idx) => (
          <li
            key={idx}
            className="font-secondary text-sm text-gray-700 leading-relaxed flex items-start"
          >
            <span className="mr-2 text-primary">•</span>
            {point}
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