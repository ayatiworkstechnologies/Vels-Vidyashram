"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Thalambur",
    image: "/banner/banner-1.jpg",
    mobileImage: "/banner/banner-1.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Pallavaram",
    image: "/banner/banner-2.png",
    mobileImage: "/banner/mob-2.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Dargaroad",
    image: "/banner/banner-3.png",
    mobileImage: "/banner/mob-3.png",
  },
    {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School - Cantonment",
    image: "/banner/banner-4.png",
    mobileImage: "/banner/mob-4.png",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      
      {/* ================= LOGO OVERLAY (Adaptive) ================= */}
      <div className="absolute top-4 left-1/2 z-50 transform -translate-x-1/2 lg:top-0">
        <div className="bg-transparent  px-4 py-2 lg:px-8 lg:py-2 rounded-full shadow-xl border border-white/20">
          <img 
            src="/logo.jpg" 
            alt="Vels Vidyashram Logo" 
            className="h-10 w-auto md:h-12 lg:h-20 object-contain" 
          />
        </div>
      </div>

      {/* ================= MOBILE BANNER (Up to 1023px) ================= */}
      <div className="lg:hidden">
        <div className="relative h-[80vh] min-h-[500px] max-h-[700px] w-full overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={s.mobileImage || s.image}
                alt={s.subtitle}
                className="h-full w-full object-cover"
              />
              {/* Darker gradient for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 pb-16 text-white text-center">
                <h4 className="mb-2 text-md font-medium tracking-wide uppercase opacity-90 text-white">{s.title}</h4>
                <h1 className="whitespace-pre-line text-white text-xl font-bold leading-tight">
                  {s.subtitle}
                </h1>
                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  className="inline-block mt-8 rounded-full bg-[#F7931E] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform"
                >
                  Admission Open
                </Link>
                
                {/* Mobile Dots */}
                <div className="mt-8 flex justify-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActive(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === active ? "w-8 bg-[#F7931E]" : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP BANNER (1024px and up) ================= */}
      <div className="hidden lg:block">
        <div className="relative h-[720px] w-full overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                  i === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Content Sidebar */}
          <div className="absolute left-0 top-0 z-20 h-full w-[450px] bg-[#F7931E]/95 backdrop-blur-md text-white shadow-2xl flex flex-col justify-center px-12">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-x-12 transition-all duration-700 ${
                  i === active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <h4 className="mb-2 text-2xl font-light opacity-90">{s.title}</h4>
                <h1 className="whitespace-pre-line text-3xl font-bold leading-tight">
                  {s.subtitle}
                </h1>
                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  className="inline-block mt-10 rounded-full bg-[#2B158F] px-10 py-4 text-lg font-semibold font-secondary transition-all hover:bg-[#1e0f63] hover:-translate-y-1 shadow-md"
                >
                  Admission Open
                </Link>

                <div className="mt-20 flex items-center gap-4">
                  <span className="text-xl font-mono font-bold">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-md ${
                          idx === active ? "w-6 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}