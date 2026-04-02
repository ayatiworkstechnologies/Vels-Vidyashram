"use client";

import { useEffect, useRef } from "react";

const curriculumData = [
  {
    title: "Rhymes and Stories",
    points: [
      "Enhances vocabulary, improves listening comprehension and social conversations.",
      "Encourages imagination and participation.",
    ],
  },
  {
    title: "Tamil",
    points: [
      "Develops basic learning, speaking, reading and writing skills.",
      "Enhances vocabulary and social conversations.",
    ],
  },
  {
    title: "Literacy Skills",
    points: [
      "Promotes thinking skills, asking questions and seeking answers, finding information and forming opinions.",
      "Builds vocabulary and reading and writing skills.",
    ],
  },
  {
    title: "Art & Craft",
    points: [
      "Improves motor skills, creativity and aesthetic sense.",
      "Learns to express emotions and feelings.",
    ],
  },
  {
    title: "Environmental Skills",
    points: [
      "Develops an understanding of the surroundings.",
      "Helps children understand the relationship between self, surroundings and nature.",
    ],
  },
  {
    title: "Phonics",
    points: [
      "Develops phonetic awareness and helps children to learn to read using sounds.",
      "A tool to decode new words.",
    ],
  },
  {
    title: "Hindi",
    points: [
      "Develops basic learning, speaking, reading and writing skills.",
      "Enhances vocabulary and social conversations.",
    ],
  },
  {
    title: "Teachers Resource",
    points: [
      "An indigenous teachers resource that directs teachers towards the set objective along with suggested action plan and teaching aids.",
    ],
  },
];

// Per-card accent colors (bar + dot + number badge)
const cardAccents = [
  { bar: "before:bg-blue-500",    dot: "bg-blue-500",    badge: "bg-blue-50 text-blue-700"   },
  { bar: "before:bg-emerald-500", dot: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700" },
  { bar: "before:bg-pink-500",    dot: "bg-pink-500",    badge: "bg-pink-50 text-pink-700"   },
  { bar: "before:bg-amber-500",   dot: "bg-amber-500",   badge: "bg-amber-50 text-amber-700" },
  { bar: "before:bg-violet-500",  dot: "bg-violet-500",  badge: "bg-violet-50 text-violet-700" },
  { bar: "before:bg-orange-500",  dot: "bg-orange-500",  badge: "bg-orange-50 text-orange-700" },
  { bar: "before:bg-red-500",     dot: "bg-red-500",     badge: "bg-red-50 text-red-700"     },
  { bar: "before:bg-teal-500",    dot: "bg-teal-500",    badge: "bg-teal-50 text-teal-700"   },
];

function CurriculumCard({ item, index }) {
  const cardRef = useRef(null);
  const accent = cardAccents[index % cardAccents.length];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-7");
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 70}ms` }}
      className={[
        "group relative overflow-hidden rounded-2xl bg-white border border-gray-100",
        "p-6 transition-all duration-500 ease-out",
        "opacity-0 translate-y-7",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-200",
        // top bar sweep via pseudo — we use a real div instead (no pseudo in Tailwind without arbitrary)
      ].join(" ")}
    >
      {/* Animated top bar */}
      <span
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl transition-transform duration-400 ease-out group-hover:scale-x-100 ${accent.bar.replace("before:", "")}`}
      />

      {/* Card header */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${accent.badge}`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="font-serif text-[1.05rem] font-bold leading-snug text-gray-900">
          {item.title}
        </h3>
      </div>

      {/* Points */}
      <ul className="space-y-3">
        {item.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span
              className={`mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125 ${accent.dot}`}
            />
            <p className="text-[13.5px] leading-relaxed text-gray-500">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CurriculumSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.remove("opacity-0", "translate-y-5");
      el.classList.add("opacity-100", "translate-y-0");
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center opacity-0 translate-y-5 transition-all duration-700 ease-out mb-12 md:mb-16"
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            KG Curriculum
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Kinder Kids Kaleidoscope
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            An indigenous, thematic and well-structured high quality school
            readiness programme for experiential learning.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            A well planned and resourceful curriculum to improve the scholastic
            ability of children which emphasizes children&apos;s learning
            interest and builds positive values and attitudes.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            It enhances self confidence, self-care abilities and gives children
            opportunity to explore and actively engage to get an enriching
            experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
          {curriculumData.map((item, index) => (
            <CurriculumCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}