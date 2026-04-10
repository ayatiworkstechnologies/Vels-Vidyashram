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

    // triggerOnce logic: we only update the state if it's currently false
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
            Vels Vidyashram Thalambur
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary text-justify
          ">
            {[
              "Established in 2014, Vels Vidyashram Thalambur aims to provide the High-Quality Education to its students. Within a short span of time, the school has been recognized as one of the best CBSE schools in OMR offering a 360-degree learning environment.",
              "We follow an integrated CBSE syllabus and innovative teaching methodologies that are student-friendly and engaging. This further facilitates the students' ability to develop practical skills through knowledge and understanding. We also instill positive values in our children while nurturing their creativity and analytical abilities.",
              "The school provides a wide variety of co-curricular activities and enrichment programs which give abundant opportunities for students’ overall development.",
              "Since its foundation, the school has been committed to delivering the best educational experience to its students in a structured and supportive environment. Our diverse offerings and character education given to the children has contributed to the development of superbly well-rounded professionals for years.",
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

        {/* RIGHT IMAGE (Desktop Overlay + Mobile Stack) */}
        <div className={`relative w-full h-[350px] sm:h-[450px] lg:h-full transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${
          topVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
        }`}>
          <div className="lg:absolute top-0 right-0 w-full lg:w-[400px] h-full lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl z-30 lg:translate-y-10">
            <Image
              src="/thalambur/ramya-thalambur.png"
              alt="Students"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* ================= CENTER BANNER (The Base) ================= */}
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
      <div ref={bottomRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start relative z-10 pt-16 flex flex-col-reverse lg:grid">
        
        {/* LEFT IMAGE (Desktop Overlay + Mobile Stack) */}
        <div className={`relative w-full h-[350px] sm:h-[450px] lg:h-full transition-all duration-1000 delay-200 mt-10 lg:mt-0 ${
          bottomVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
        }`}>
          <div className="lg:absolute bottom-0 left-0 w-full lg:w-[400px] h-full lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl z-30 lg:-translate-y-10">
            <Image
              src="/thalambur/play.png"
              alt="Classroom"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
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
            We aim to deliver an exceptional educational experience designed to benefit your child in every aspect.
          </p>

          <div className="space-y-8 md:space-y-10">
            {[
              {
                title: "An Engaging Curriculum",
                content: "The curriculum at Vels Vidyashram delivers exceptional learning opportunities through innovative teaching methods. Our school follows international standards that make it one of the top CBSE schools in OMR."
              },
              {
                title: "World-Class Campus",
                content: "We are a leading CBSE school on OMR Road, Chennai, committed to facilitating the holistic development of students."
              },
              {
                title: "Sports and physical well-being",
                content: "With extensive extracurricular activities and a variety of sports facilities, our students experience a vibrant sporting life."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: bottomVisible ? `${index * 150 + 400}ms` : '0ms' }}
              >
                <h4 className="font-primary text-lg md:text-xl font-bold mb-2 text-gray-800">{item.title}</h4>
                <p className="font-secondary text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}