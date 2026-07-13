"use client";

import React, { useEffect, useRef, useState } from "react";

const IMAGE_SRC = "/bg-3.png";

const BIO_CONTENT = [
  {
    type: "text",
    value:
      "In a world where the journey from humble beginnings to remarkable achievements often feels unattainable, Dr. Ishari K. Ganesh emerges as a beacon of hope and inspiration.",
  },
  {
    type: "text",
    value:
      "Born in 1966 to Ishari Velan and Pushpa, Dr. Ishari K. Ganesh's early life was marked by hardship. Following the untimely passing of his father, the family faced significant financial struggles, compounded by the pressures of rent and tuition fees. However, these challenges ignited his determination. At just 18, he embraced the responsibility of supporting his family, motivated by the belief that he had nothing to lose and everything to gain.",
  },
  {
    type: "text",
    value:
      "Dr. Ishari K. Ganesh's pivotal career shift came when he chose the path of self-employment over immediate financial security. In 1992, he founded Vels College of Pharmacy in Mylapore with just 36 students. This modest beginning set the stage for the Vels Group of Institutions. With a bank loan, he acquired property in Pallavaram, transforming Vels College into a multi-disciplinary educational hub.",
  },
  {
    type: "text",
    value:
      "By 2008, Dr. Ishari K. Ganesh had successfully consolidated his efforts into the University of Vels, which now includes a diverse range of institutions, such as colleges of medicine, engineering, arts, science, and physiotherapy. The Vels Education Group has expanded its reach to manage dental and medical colleges and schools, with a presence extending to Singapore and England. Dr. Ishari K. Ganesh was also a pioneer in introducing marine science courses within India's private sector.",
  },
  {
    type: "text",
    value:
      "His unwavering commitment to accessible education is evident in the numerous scholarships he has established, supporting sports, ex-servicemen, and children of the film industry. These initiatives have empowered students from modest backgrounds, providing them with essential resources to pursue their educational aspirations.",
  },
  { type: "heading", value: "Chairman's Message" },
  { type: "quote", value: "\u201cSky is the limit. Together let us achieve more.\u201d" },
  {
    type: "text",
    value:
      "Guided by my father who inspired me to \u201cDream big, act fast, and think ahead,\u201d we are committed to dreaming bigger, acting faster, and\u2014most importantly\u2014thinking better. This mindset equips us to lead in education, healthcare, and entertainment, setting new benchmarks for excellence.",
  },
  {
    type: "text",
    value:
      "At Vels Group of Institutions, we embody the spirit of this dynamic India across our diverse sectors: education, healthcare, and entertainment. Our mission transcends the creation of outstanding institutions; it is about fostering a brighter future for our country and the world. We are committed to empowering individuals to realize their dreams, take charge of their destinies, and unlock their unique potentials.",
  },
];

// Where the crossfade between hero and bio finishes (as a fraction of total scroll progress).
const CROSSFADE_END = 0.16;

function clamp01(n) {
  return Math.min(Math.max(n, 0), 1);
}

export default function ChancellorProfile() {
  const sectionRef = useRef(null);
  const bioWindowRef = useRef(null);
  const bioTextRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [bioMaxScroll, setBioMaxScroll] = useState(0);

  // Measure how far the bio text needs to travel to fully reveal itself.
  useEffect(() => {
    function measure() {
      if (bioTextRef.current && bioWindowRef.current) {
        const max =
          bioTextRef.current.scrollHeight - bioWindowRef.current.clientHeight;
        setBioMaxScroll(Math.max(max, 0));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Track scroll progress through the section.
  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = total > 0 ? clamp01(scrolled / total) : 0;
      setProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroProgress = clamp01(progress / CROSSFADE_END);
  const heroOpacity = 1 - heroProgress;
  const heroTranslateY = -heroProgress * 24;

  const bioOpacity = clamp01((progress - 0.05) / (CROSSFADE_END - 0.02));
  const bioSectionProgress = clamp01(
    (progress - CROSSFADE_END) / (1 - CROSSFADE_END)
  );
  const bioTranslateY = -bioSectionProgress * bioMaxScroll;

  const overlayOpacity = 0.55 + progress * 0.3;

  return (
    // Tall wrapper gives us room to scroll through while the box stays pinned.
    <section ref={sectionRef} className="relative w-full" style={{ height: "420vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-3 sm:px-6 md:px-8">
        <div className="relative w-full max-w-6xl h-[82vh] md:h-[640px] rounded-[26px] md:rounded-[32px] overflow-hidden shadow-2xl bg-slate-900">
          {/* Background photo */}
          <img
            src={"bg-3.png"}
            alt="Vels University campus with Dr. Ishari K. Ganesh"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark gradient overlay, deepens slightly as you scroll */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(6,12,26,0.95) 0%, rgba(6,12,26,0.6) 40%, rgba(6,12,26,0.18) 68%, rgba(6,12,26,0.05) 100%)",
              opacity: overlayOpacity,
            }}
          />

          {/* HERO VIEW */}
          <div
            className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 pointer-events-none"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${heroTranslateY}px)`,
            }}
          >
            <h1 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl">
              Dr. Ishari K. Ganesh,
              <br className="hidden sm:block" /> M.Com., MBA., M.L., M.Phil., Ph.D.
            </h1>

            <div className="mt-6 space-y-4 max-w-xl">
              <div>
                <p className="text-orange-400 font-bold uppercase tracking-wide text-sm sm:text-base">
                  Founder and Chancellor
                </p>
                <p className="text-white/90 text-xs sm:text-sm mt-1">
                  VELS University, Chennai (Vels Institute of Science Technology and
                  Advanced Studies - VISTAS)
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-bold uppercase tracking-wide text-sm sm:text-base">
                  Chairman
                </p>
                <p className="text-white/90 text-xs sm:text-sm mt-1">
                  VELS Group of Institutions (India, Singapore, UK and UAE) and Vels
                  Film International Ltd
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-bold uppercase tracking-wide text-sm sm:text-base">
                  President
                </p>
                <p className="text-white/90 text-xs sm:text-sm mt-1">
                  Tamil Nadu Olympic Association &amp; Taekwondo Federation of India
                </p>
              </div>
              <div>
                <p className="text-orange-400 font-bold uppercase tracking-wide text-sm sm:text-base">
                  Member
                </p>
                <p className="text-white/90 text-xs sm:text-sm mt-1">
                  Hindi Advisory Committee, Ministry of Women and Child Development,
                  Government of India
                </p>
              </div>
            </div>

            <span className="pointer-events-none mt-8 self-start rounded-full bg-white/15 backdrop-blur px-5 py-2 text-white text-sm font-medium border border-white/30">
              Scroll
            </span>
          </div>

          {/* BIO VIEW (revealed on scroll, scrolls internally) */}
          <div
            ref={bioWindowRef}
            className="absolute inset-0 overflow-hidden"
            style={{ opacity: bioOpacity }}
          >
            <div
              ref={bioTextRef}
              className="px-6 sm:px-10 md:px-16 py-10 md:py-14 max-w-3xl"
              style={{
                transform: `translateY(${bioTranslateY}px)`,
              }}
            >
              <p className="text-orange-400 font-bold uppercase tracking-wide text-xs sm:text-sm">
                Dr. Ishari K. Ganesh
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1 mb-6">
                Founder &amp; Chancellor, Vels University | Chairman, Vels Group of
                Institutions
              </p>

              {BIO_CONTENT.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h3
                      key={i}
                      className="text-white font-bold text-lg sm:text-xl mt-8 mb-2"
                    >
                      {block.value}
                    </h3>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <p
                      key={i}
                      className="text-orange-300 italic font-semibold text-base sm:text-lg my-4"
                    >
                      {block.value}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-white/85 text-sm sm:text-base leading-relaxed mb-4"
                  >
                    {block.value}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Progress rail: grey track, orange fill grows with scroll */}
          <div className="absolute right-3 md:right-5 top-6 bottom-6 w-[3px] md:w-1 bg-white/25 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-orange-400 rounded-full"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}