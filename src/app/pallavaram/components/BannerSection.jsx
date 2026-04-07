"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-1.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-2.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-3.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-4.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-5.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-6.jpg",
  },
  {
    title: "Welcome to",
    subtitle: "Vels Vidyashram\nSenior Secondary School",
    image: "/thalambur/banner-7.jpg",
  },
];

export default function BannerSection() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 700);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    if (index !== active) {
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setIsAnimating(false);
      }, 700);
    }
  };

  return (
    <section className="w-full">
      {/* MOBILE LAYOUT (YOUR ORIGINAL) */}
      <div className="flex flex-col lg:hidden h-[520px] w-full">

        {/* LEFT PANEL */}
        <div className="relative bg-[#F7931E] text-white w-full overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
                i === active
                  ? "translate-y-0 opacity-100"
                  : i < active
                  ? "translate-y-full opacity-0"
                  : "-translate-y-full opacity-0"
              }`}
            >
              <div className="px-8">
                <h4 className="text-3xl mb-2 text-white font-primary">
                  {s.title}
                </h4>

                <h1 className="text-3xl font-semibold text-white leading-tight whitespace-pre-line font-primary">
                  {s.subtitle}
                </h1>

                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 rounded-full bg-[#2B158F] px-6 py-2 text-md font-medium transition-colors hover:bg-[#1e0f63] font-secondary"
                >
                  Admission
                </Link>

                <div className="mt-16 flex items-center gap-2">
                  <span className="font-medium">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="flex gap-3">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-[1px] w-8 transition-all duration-300 ${
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

        {/* IMAGE */}
        <div className="relative w-full h-full overflow-hidden">
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
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (OVERLAP VERSION) */}
      <div className="hidden lg:block relative h-[620px] w-full overflow-hidden">

        {/* FULL IMAGE */}
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active
                  ? "translate-x-0 opacity-100"
                  : i < active
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* OVERLAP PANEL */}
        <div className="absolute left-0 top-0 h-full w-[430px] bg-[#F7931E]/90 backdrop-blur-sm text-white z-20">

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
              <div className="px-8">

                <h4 className="text-3xl mb-2 text-white font-primary">
                  {s.title}
                </h4>

                <h1 className="text-4xl font-semibold text-white leading-tight whitespace-pre-line font-primary">
                  {s.subtitle}
                </h1>

                <Link
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 rounded-full bg-[#2B158F] px-6 py-2 text-md font-medium transition-colors hover:bg-[#1e0f63] font-secondary"
                >
                  Admission
                </Link>

                <div className="mt-16 flex items-center gap-2">
                  <span className="font-medium">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="flex gap-3">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-[1px] w-8 transition-all duration-300 ${
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
    </section>
  );
}