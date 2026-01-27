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
      <div ref={topRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start relative z-10 pb-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className={`text-3xl font-semibold mb-6 font-primary text-gray-900 transition-all duration-1000 ${
            topVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            Vels Vidyashram Thalambur
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary">
            {[
              "Established in 2014, Vels Vidyashram Thalambur aims to provide the best quality education to its students. Within a short span of time, the school has been recognized as one of the best CBSE schools in OMR offering a 360-degree learning environment to its students.",
              "We follow an integrated CBSE syllabus and innovative teaching methodologies that are student-friendly and engaging. This further facilitates the student's ability to develop practical skills through knowledge and understanding. We also instill positive values in our children along with nurturing their creativity and analytical ability.",
              "The school provides a wide variety of co-curricular activities and enrichment programs which gives abundant opportunities for students for their overall development.",
              "Since its foundation, the school is committed to delivering the best educational experience to its students in a structured and supportive environment. Our diverse offerings and character education given to the children have contributed to the development of superbly well-rounded professionals for years.",
              "We are the best CBSE school in Chennai that is defined by its culture of inclusivity that fosters close relationships between students and teachers, made possible by a small student to teacher ratio. Students are encouraged to push themselves academically while constantly focusing on the school's core values of compassion, determination, honesty, and respect."
            ].map((text, index) => (
              <p 
                key={index}
                className={`transition-all duration-1000 ${
                  topVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT OVERLAPPING IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div className={`absolute top-0 right-0 w-[400px] h-[550px] rounded-2xl overflow-hidden shadow-2xl z-30 translate-y-10 transition-all duration-1000 delay-300 ${
            topVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-20 scale-95'
          }`}>
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
      <div ref={bannerRef} className={`relative w-full h-[450px] md:h-[550px] z-0 transition-all duration-1000 ${
        bannerVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-105'
      }`}>
        <Image
          src="/thalambur/bg-vels.png"
          alt="Vels Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h2 className={`text-3xl md:text-5xl text-white font-primary font-bold drop-shadow-2xl transition-all duration-1000 delay-300 ${
            bannerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Welcome to Vels Vidyashram
          </h2>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div ref={bottomRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start relative z-10 pt-16">
        
        {/* LEFT OVERLAPPING IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div className={`absolute bottom-0 left-0 w-[400px] h-[580px] rounded-2xl overflow-hidden shadow-2xl z-30 -translate-y-10 transition-all duration-1000 delay-200 ${
            bottomVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-20 scale-95'
          }`}>
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
          <h3 className={`text-3xl font-primary font-semibold mb-6 text-gray-900 leading-tight transition-all duration-1000 ${
            bottomVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            Why Vels Vidyashram is the best solution for education?
          </h3>
          <p className={`text-sm text-gray-600 mb-8 font-secondary transition-all duration-1000 delay-200 ${
            bottomVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}>
            We are passionate about bringing out the best from young minds. We aim to deliver the best educational experience which is designed to benefit your child in all ways.
          </p>

          <div className="space-y-10">
            {[
              {
                title: "An engaging curriculum",
                content: "The curriculum at Vels Vidyashram delivers exceptional learning opportunities through innovative teaching methods. Our school follows international standards that make it among the top CBSE schools in OMR."
              },
              {
                title: "Campus",
                content: "We are the best CBSE school in OMR road Chennai that aims to facilitate the holistic development of the students. The campus is equipped with all the latest and modern facilities."
              },
              {
                title: "Sports and physical well-being",
                content: "With extensive extracurricular and a variety of sports facilities, our students will experience a flourishing sporting life here."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  bottomVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <h4 className="font-primary text-xl font-bold mb-2 text-gray-800">{item.title}</h4>
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