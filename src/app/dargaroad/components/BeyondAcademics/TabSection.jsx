"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SpecialFeaturesSection from "./SpecialFeatuesSection";
import ClubActivitiesSection from "./ClubActivitiesSection";
import { FaQuoteLeft } from "react-icons/fa";

/* ================= TAB TITLES ================= */

const TABS = [
  "Activities",
  "Special Features",
  "Club Activities",
  "Cultural and Sports Academy",
];

/* ================= CONTENT ================= */

const CONTENT = {
  Activities: {
    image: "/dargaroad/curriculum.jpg",
    title: "Activities",
    items: [
      {
        heading: "Computer Education",
        paragraphs: [
          "It aims at making students use the computer both as a productive tool and as a means of creativity and self-expression.",
          "The curriculum encompasses technological skills based on themes that are current and meaningful.",
          "The program helps students build a solid foundation of fundamental learning skills and prepares them for the fast-changing technology of today and the future.",
        ],
      },
      {
        heading: "Art & Craft",
        paragraphs: [
          "The techniques of sketching, still-life watercolour, painting and oil painting are taught.",
          "Creativity is emphasized in these activities.",
        ],
      },
      {
        heading: "Objective",
        bullets: [
          "To nurture the artistic talents in students.",
          "To provide students an opportunity to exhibit their artistic talents.",
        ],
      },
      {
        heading: "Life Skills",
        paragraphs: [
          "As children grow, their roles, responsibilities and aspirations change.",
          "This brings about the need for developing new insights in life skills.",
        ],
      },
      {
        heading: "Objective",
        bullets: [
          "To help the child understand that joy of living is a result of holistic development of personality.",
          "To encourage the child to initiate steps that will help him become healthy at the physical, mental and spiritual level.",
        ],
      },
      {
        heading: "Project",
        paragraphs: [
          "Project work is an integral part of the school curriculum which is held class wise to bring out the aesthetic and latent potential of every student.",
        ],
      },
      {
        heading: "Western Music",
        paragraphs: [
          "Notation, sight reading, chords and lead playing in Western Classical light music as well as familiar tunes are focused on.",
        ],
      },
      {
        heading: "Sports & Games",
        paragraphs: [
          "A sound mind in a sound body is ensured by making games compulsory for all students.",
        ],
      },
    ],
    testimonials: [
      {
        title: "Bharatha Natyam",
        text: "Basic foot steps like Thattadavu, Nattadavu, MardhithaAdavu, Korvai etc., and the slokas accompanying the movements of hands and body are taught.",
      },
      {
        title: "Yoga",
        text: "Exercises and postures that benefit different parts of the body are demonstrated and performed.",
      },
      {
        title: "Sloka Recitation",
        text: "Recitation and repetition of slokas in Sanskrit enhance pronunciation and vocabulary.",
      },
      {
        title: "Creative Thinking",
        text: "This nurtures creativity and paves the way for strengthening problem-solving techniques.",
      },
      {
        title: "General Assembly",
        text: "The general assembly is a weekly feature offering varied activities.",
      },
      {
        title: "Vocal Music",
        text: "Carnatic Music is taught in a graded syllabus to preserve our rich heritage.",
      },
    ],
  },

  "Cultural and Sports Academy": {
    image: "/dargaroad/curriculum.jpg",
    title: "Cultural and Sports Academy",
    intro: [
      "The Cultural Academy Classes will be held on all four Saturdays for interested students at a nominal cost.",
      "The students are grouped according to their level of skill and individual training is given.",
      "These classes help children explore new areas and develop their interests.",
    ],
    listLeft: [
      "Bharatha Natyam",
      "Western Music (Keyboard)",
      "Yoga",
      "Western Dance",
    ],
    listRight: ["Vocal Music", "Archery", "Karate", "Chess", "Silambam"],
  },
};

/* ================= COMPONENT ================= */

export default function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const scrollRef = useRef(null);
  const isHoveringRef = useRef(false);
  const intervalRef = useRef(null);

  const activeTab = TABS[activeIndex];
  const data = CONTENT[activeTab];

  /* ---------- AUTO SCROLL (DESKTOP ONLY – ORIGINAL LOGIC) ---------- */
  useEffect(() => {
    if (activeTab === "Special Features" || activeTab === "Club Activities")
      return;

    const el = scrollRef.current;
    if (!el) return;

    el.scrollTop = 0;

    intervalRef.current = setInterval(() => {
      if (isHoveringRef.current) return;
      const max = el.scrollHeight - el.clientHeight;
      el.scrollTop = el.scrollTop >= max ? 0 : el.scrollTop + 1;
    }, 25);

    return () => clearInterval(intervalRef.current);
  }, [activeTab]);

  return (
    <section>
      {/* ================= TOP TABS (UNCHANGED) ================= */}
      <div className="bg-white px-6 py-8">
        <div className="bg-[#f5f5f5] max-w-6xl mx-auto flex gap-6 flex-wrap justify-center py-8 rounded-sm">
          {TABS.map((title, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setTestimonialIndex(0);
              }}
              className={`w-[240px] h-[70px] shadow-md flex flex-col items-center justify-center
              ${
                i === activeIndex
                  ? "bg-primary font-primary font-primary-bold text-white"
                  : "bg-white hover:scale-[1.02]"
              }`}
            >
              <p className="text-center font-semibold text-[15px] px-4">
                {title}
              </p>
              <div className="mt-3">
                <div className="h-[1px] w-20 bg-secondary" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === "Special Features" && <SpecialFeaturesSection />}
        {activeTab === "Club Activities" && <ClubActivitiesSection />}

        {activeTab !== "Special Features" &&
          activeTab !== "Club Activities" &&
          data && (
            <>
              {/* ================= DESKTOP (UNCHANGED) ================= */}
              <div className="hidden md:block">
                {/* MAIN CONTENT */}
                <div className="grid md:grid-cols-2 gap-12 bg-white p-10">
                  <div className="relative h-[360px] sticky top-24 overflow-hidden">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div
                    ref={scrollRef}
                    onMouseEnter={() => (isHoveringRef.current = true)}
                    onMouseLeave={() => (isHoveringRef.current = false)}
                    className="max-h-[360px] overflow-y-auto pr-6"
                  >
                    <h2 className="text-3xl font-primary font-primary-bold mb-4 border-b border-secondary pb-2 inline-block">
                      {data.title}
                    </h2>

                    {data.intro?.map((p, i) => (
                      <p
                        key={i}
                        className="text-md font-secondary text-black mb-3 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                    {(data.listLeft || data.listRight) && (
                      <div className="grid grid-cols-2 gap-x-10 mt-6">
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {data.listLeft?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {data.listRight?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {data.items?.map((block, i) => (
                      <div key={i} className="mb-6">
                        <h3 className="text-2xl font-primary font-primary-semibold mb-2">
                          {block.heading}
                        </h3>

                        {block.paragraphs?.map((p, j) => (
                          <p
                            key={j}
                            className="text-sm text-black mb-2 leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}

                        {block.bullets && (
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            {block.bullets.map((b, k) => (
                              <li key={k}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* TESTIMONIALS — DESKTOP SLIDER + ARROWS (UNCHANGED) */}
                {activeTab === "Activities" && (
                  <div className="bg-[#f5f5f5] py-16 mt-20">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                      <div>
                        <FaQuoteLeft className="text-5xl text-gray-300 mb-4" />
                        <h3 className="text-4xl font-primary font-primary-bold">
                          What Our <br /> Students & Parents Say
                        </h3>
                        <div className="h-[1px] w-24 bg-secondary my-6" />

                        <div className="flex gap-4 mt-6 text-7xl text-secondary">
                          <button
                            onClick={() =>
                              setTestimonialIndex((i) => Math.max(i - 1, 0))
                            }
                            disabled={testimonialIndex === 0}
                            className="disabled:opacity-30"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() =>
                              setTestimonialIndex((i) =>
                                Math.min(
                                  i + 1,
                                  data.testimonials.length - 3
                                )
                              )
                            }
                            disabled={
                              testimonialIndex >=
                              data.testimonials.length - 3
                            }
                            className="disabled:opacity-30"
                          >
                            ›
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-3 overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{
                            gap: "32px",
                            transform: `translateX(-${
                              testimonialIndex * (260 + 32)
                            }px)`,
                          }}
                        >
                          {data.testimonials.map((item, i) => (
                            <div
                              key={i}
                              className="shrink-0 bg-white px-6 py-7 rounded-md shadow-md"
                              style={{ width: 260, minHeight: 260 }}
                            >
                              <h4 className="font-primary font-primary-semibold text-xl mb-2">
                                {item.title}
                              </h4>
                              <div className="h-[1px] w-20 bg-secondary mb-4" />
                              <p className="text-sm font-secondary text-black leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ================= MOBILE ONLY ================= */}
              <div className="md:hidden">
                <div className="relative w-full h-[220px]">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <div className="bg-white px-4 py-6">
                  <h2 className="text-2xl font-primary font-primary-bold mb-4">
                    {data.title}
                  </h2>

                  {data.intro?.map((p, i) => (
                    <p key={i} className="text-sm mb-3 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {(data.listLeft || data.listRight) && (
                    <div className="mt-4 space-y-4">
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {data.listLeft?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {data.listRight?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.items?.map((block, i) => (
                    <div key={i} className="mt-6">
                      <h3 className="text-lg font-primary font-primary-semibold mb-2">
                        {block.heading}
                      </h3>
                      {block.paragraphs?.map((p, j) => (
                        <p key={j} className="text-sm mb-2">
                          {p}
                        </p>
                      ))}
                      {block.bullets && (
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {block.bullets.map((b, k) => (
                            <li key={k}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* MOBILE TESTIMONIALS */}
                {activeTab === "Activities" && (
                  <div className="bg-[#f5f5f5] px-4 py-10">
                    <FaQuoteLeft className="text-4xl text-gray-300 mb-4" />
                    <h3 className="text-2xl font-primary font-primary-bold mb-6">
                      What Our Students & Parents Say
                    </h3>

                    <div className="space-y-6">
                      {data.testimonials.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-md shadow-md"
                        >
                          <h4 className="text-lg font-primary font-primary-semibold mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
      </div>
    </section>
  );
}
