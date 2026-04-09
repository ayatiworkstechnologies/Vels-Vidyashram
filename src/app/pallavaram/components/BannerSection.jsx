"use client";
import Link from "next/link";
import Image from "next/image"; // Added for optimized logo rendering
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/pallavaram/banner/banner-1.png",
    mobileImage: "/pallavaram/banner/mob-1.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/pallavaram/banner/banner-2.png",
    mobileImage: "/pallavaram/banner/mob-2.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/pallavaram/banner/banner-3.png",
    mobileImage: "/pallavaram/banner/mob-3.png",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/pallavaram/banner/banner-4.png",
    mobileImage: "/pallavaram/banner/mob-4.png",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      
    

      {/* ================= MOBILE BANNER SEPARATE ================= */}
      <div className="block lg:hidden">
        <div className="relative h-[600px] w-full overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                i === active
                  ? "translate-x-0 opacity-100 z-10"
                  : i < active
                  ? "-translate-x-full opacity-0 z-0"
                  : "translate-x-full opacity-0 z-0"
              }`}
            >
              <img
                src={s.mobileImage || s.image}
                alt={s.subtitle.replace("\n", " ")}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-6 pb-8 pt-20 text-white">
                <h4 className="mb-2 text-[20px] font-primary">
                  {s.title}
                </h4>

                <h1 className="whitespace-pre-line text-[30px] leading-[1.1] font-semibold font-primary">
                  {s.subtitle}
                </h1>

                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 rounded-full bg-[#2B158F] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e0f63] font-secondary"
                >
                  Admission
                </Link>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-1 justify-end gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === active
                            ? "h-[3px] w-10 bg-white"
                            : "h-[3px] w-6 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP BANNER SEPARATE ================= */}
      <div className="hidden lg:block">
        <div className="relative h-[720px] w-full overflow-hidden">
          {/* FULL IMAGE */}
          <div className="absolute inset-0">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === active
                    ? "translate-x-0 opacity-100"
                    : i < active
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.subtitle.replace("\n", " ")}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* LEFT PANEL */}
          {/* Increased mt-40 to clear space for the new bigger logo */}
          <div className="absolute left-0 top-0 z-20 h-full w-[480px] bg-[#F7931E]/90 backdrop-blur-sm text-white">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center transition-all duration-700 ${
                  i === active
                    ? "translate-y-0 opacity-100"
                    : i < active
                    ? "translate-y-full opacity-0"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <div className="px-10 mt-32"> 
                  <h4 className="mb-2 text-3xl font-primary">{s.title}</h4>

                  <h1 className="whitespace-pre-line text-5xl font-semibold leading-tight font-primary">
                    {s.subtitle}
                  </h1>

                  <Link
                    href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 rounded-full bg-[#2B158F] px-8 py-3 text-lg font-medium transition-colors hover:bg-[#1e0f63] font-secondary shadow-lg"
                  >
                    Admission Open
                  </Link>

                  <div className="mt-16 flex items-center gap-3">
                    <span className="font-medium text-lg">
                      {String(active + 1).padStart(2, "0")}
                    </span>

                    <div className="flex gap-3">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-[3px] w-10 transition-all duration-300 ${
                            idx === active ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
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