"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GAP = 40;
const AUTO_DELAY = 4000;

// 🔒 EXACT DESIGN SIZE (SCREENSHOT MATCH)
const CARD_WIDTH = 420;
const IMAGE_HEIGHT = 260;

const CIRCULARS = [
  { id: 1, title: "Circular 1", image: "/dargaroad/circular.jpg", pdf: "/dargaroad/pdf/circular-1.pdf" },
  { id: 2, title: "Circular 2", image: "/dargaroad/circular.jpg", pdf: "/dargaroad/pdf/circular-2.pdf" },
  { id: 3, title: "Circular 3", image: "/dargaroad/circular.jpg", pdf: "/dargaroad/pdf/Circular-3.pdf" },
  { id: 4, title: "Circular 4", image: "/dargaroad/circular.jpg", pdf: "/pdfs/circular-4.pdf" },
];

export default function CircularSection() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* RESPONSIVE – ONLY CARD COUNT */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
      setIndex(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = CIRCULARS.length - visibleCards;

  /* AUTO SLIDE */
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_DELAY);
    return () => clearInterval(t);
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Circular
            <span className="block h-[1px] w-14 bg-orange-500 mx-auto mt-2" />
          </h2>
          <p className="mt-3 text-sm">
            Where strong values meet future-ready learning.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* VIEWPORT — KEY FIX HERE */}
          <div className="overflow-x-hidden overflow-y-visible">

            {/* TRACK */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                gap: GAP,
                transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
              }}
            >
              {CIRCULARS.map((item) => (
                <a
                  key={item.id}
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-white
                    shadow-[0_5px_15px_rgba(0,0,0,0.16)]
                    hover:shadow-[0_10px_10px_rgba(0,0,0,0.2)]
                    transition
                    mb-6   /* 👈 gives space for bottom shadow */
                  "
                  style={{
                    width: CARD_WIDTH,
                    flexShrink: 0,
                  }}
                >
                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={CARD_WIDTH}
                    height={IMAGE_HEIGHT}
                    className=""
                  />

                  {/* CONTENT */}
                  <div className="p-6 flex items-center justify-between">
                    <span className="font-semibold">{item.title}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-4">

            {/* PAGINATION */}
            <div className="flex items-center gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setIndex(i)}>
                  {i === index ? (
                    <span className="text-sm font-semibold text-orange-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  ) : (
                    <span className="block w-8 h-[2px] bg-gray-300" />
                  )}
                </button>
              ))}
            </div>

            {/* ARROWS */}
            <div className="hidden sm:flex gap-6 text-orange-500">
              <button onClick={prev}>
                <ChevronLeft />
              </button>
              <button onClick={next}>
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
