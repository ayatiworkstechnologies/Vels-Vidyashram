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

  return ( <>
     <section className="relative py-10 md:py-20 bg-white overflow-hidden">
      
      {/* ================= TOP SECTION ================= */}
      <div ref={topRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start relative z-10 pb-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className={`text-3xl font-semibold mb-6 font-primary text-gray-900 transition-all duration-1000 ${
            topVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Vels Vidyashram Thalambur
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary text-justify">
            {[
              "Established in 2014, Vels Vidyashram Thalambur aims to provide the High-Quality Education to its students. Within a short span of time, the school has been recognized as one of the best CBSE schools in OMR offering a 360-degree learning environment.",
              "We follow an integrated CBSE syllabus and innovative teaching methodologies that are student-friendly and engaging. This further facilitates the students' ability to develop practical skills through knowledge and understanding. We also instill positive values in our children while nurturing their creativity and analytical abilities.",
              "The school provides a wide variety of co-curricular activities and enrichment programs which give abundant opportunities for students’ overall development.",
              "Since its foundation, the school has been committed to delivering the best educational experience to its students in a structured and supportive environment. Our diverse offerings and character education given to the children has contributed to the development of superbly well-rounded professionals over the years.",
              "We are the best CBSE school in Chennai that is defined by its culture of inclusivity that fosters close relationships between students and teachers, made possible by a small student to teacher ratio. Students are encouraged to push themselves academically while constantly focusing on the school's core values of compassion, determination, honesty, and respect."
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
              src="/thalambur/thalm.png"
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
          src="/thalambur/bg-vels.png"
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
        <div
  className={`relative aspect-[2/3] h-[350px] sm:h-[450px] lg:h-[580px] mx-auto lg:mx-0 transition-all duration-1000 delay-200 mt-10 lg:mt-0 ${
    bottomVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
  }`}
>
  <div className="w-full h-full overflow-hidden rounded-2xl">
    <Image
      src="/thalambur/why-choose-1.png"
      alt="Classroom"
      fill
      className="object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
    />
  </div>
</div>
        {/* RIGHT CONTENT */}
        <div className="lg:pl-10">
          <h3 className={`text-2xl md:text-3xl font-primary font-semibold mb-4 text-gray-900 leading-tight transition-all duration-1000 ${
            bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            Why Vels Vidyashram is the Best Choice for Education?
          </h3>

          <p className={`text-sm text-gray-600 mb-8 font-secondary leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            A balanced learning experience — academic excellence, values, innovation, and holistic development — helping every child grow into a confident, responsible global citizen.
          </p>

          <h2 className={`font-primary text-lg md:text-xl font-bold text-gray-900 mb-5 transition-all duration-1000 delay-100 ${
            bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Why Parents Choose Us
          </h2>

          {/* Compact 2x2 category grid instead of 12 stacked lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Academics",
                icon: "📘",
                points: ["CBSE curriculum, experiential learning", "Smart, tech-enabled classrooms", "Science, Math & language labs"],
              },
              {
                title: "Faculty & Care",
                icon: "🧑‍🏫",
                points: ["Qualified, caring faculty", "Individual attention & mentoring", "Safe, secure campus"],
              },
              {
                title: "Skills & Growth",
                icon: "🎯",
                points: ["Communication & life skills", "Leadership & critical thinking", "Career & exam guidance"],
              },
              {
                title: "Life Beyond Class",
                icon: "🎨",
                points: ["Sports & fitness facilities", "Arts, music, dance, theatre", "Value-based global outlook"],
              },
            ].map((group, index) => (
              <div
                key={group.title}
                className={`rounded-xl border border-gray-100 bg-white shadow-sm p-4 transition-all duration-1000 ${
                  bottomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: bottomVisible ? `${index * 120 + 300}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2B158F]/10 text-sm">
                    {group.icon}
                  </span>
                  <p className="font-primary text-sm font-bold text-gray-900">
                    {group.title}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2B158F]" />
                      <p className="font-secondary text-xs md:text-sm leading-snug text-gray-700">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* PARENT WRAPPER — image column now second */}
      <div className="bg-[#F7F8FB] rounded-3xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)] gap-x-10 lg:gap-x-14 gap-y-8 items-start">

        {/* LEFT CONTENT (was right) */}
        <div>
          

          {/* Compact cards — 2-col bullets to reduce overall height */}
          <div className="space-y-4">
            {[
              {
                title: "Engaging Curriculum",
                icon: "📘",
                points: [
                  "Experiential and inquiry-based learning",
                  "CBSE-aligned academic excellence",
                  "Critical thinking and problem-solving",
                  "Technology-integrated classrooms",
                ],
              },
              {
                title: "Vibrant Campus Environment",
                icon: "🌳",
                points: [
                  "Green, spacious, and modern campus",
                  "Safe and secure learning environment",
                  "Interactive classrooms and collaborative spaces",
                  "Well-maintained sports infrastructure",
                ],
              },
              {
                title: "Holistic Development",
                icon: "🎨",
                points: [
                  "Sports and physical fitness",
                  "Arts, music, dance, and cultural activities",
                  "Leadership and personality development",
                  "Community service and social responsibility",
                ],
              },
              {
                title: "Student Support",
                icon: "🤝",
                points: [
                  "Individual attention for every learner",
                  "Academic mentoring and counselling",
                  "Regular parent-teacher communication",
                  "Inclusive and nurturing learning environment",
                ],
              },
            ].map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl bg-white shadow-sm p-4 md:p-5 transition-all duration-1000 ${
                  bottomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: bottomVisible ? `${index * 150 + 300}ms` : "0ms" }}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2B158F]/10 text-sm">
                    {card.icon}
                  </span>
                  <p className="font-primary text-sm md:text-base font-semibold text-gray-900">
                    {card.title}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pl-1">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      <p className="font-secondary text-xs md:text-sm leading-snug text-gray-700">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE (was left) — sticky so it stays in view alongside the longer text column */}
        <div
          className={`relative aspect-[2/3] w-full max-w-[380px] mx-auto lg:mx-0 lg:sticky lg:top-24 transition-all duration-1000 delay-200 ${
            bottomVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
          }`}
        >
          <div className="w-full h-full overflow-hidden rounded-2xl relative">
            <Image
              src="/thalambur/why-choose-2.png"
              alt="Classroom"
              fill
              className="object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-b-2xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-primary text-base font-bold leading-none">
                Vels Vidyashram
              </p>
              <p className="text-white/80 font-secondary text-xs mt-1">
                Thalambur Campus
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
 
  );
}