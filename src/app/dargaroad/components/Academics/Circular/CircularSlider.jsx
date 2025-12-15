"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CIRCULARS = [
  {
    id: 1,
    title: "Circular 1",
    image: "/dargaroad/circular.jpg",
    pdf: "/dargaroad/pdf/circular-1.pdf",
  },
  {
    id: 2,
    title: "Circular 2",
    image: "/dargaroad/circular.jpg",
    pdf: "/dargaroad/pdf/circular-2.pdf",
  },
  {
    id: 3,
    title: "Circular 3",
    image: "/dargaroad/circular.jpg",
    pdf: "/dargaroad/pdf/Circular-3.pdf",
  },
  {
    id: 4,
    title: "Circular 4",
    image: "/dargaroad/circular.jpg",
    pdf: "/pdfs/circular-4.pdf",
  },
];

export default function CircularSection() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(420);
  const [visibleCards, setVisibleCards] = useState(3);

  /* RESPONSIVE LOGIC (DESIGN SAFE) */
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setCardWidth(360);
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setCardWidth(380);
        setVisibleCards(2);
      } else {
        setCardWidth(420);
        setVisibleCards(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = CIRCULARS.length - visibleCards;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-primary font-primary-bold inline-block">
            Circular
            <span className="block h-[1px] w-14 bg-secondary mx-auto mt-2" />
          </h2>
          <p className="text-black mt-3 font-secondary font-secondary-regular">
            Where strong values meet future-ready learning.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {CIRCULARS.map((item) => (
              <a
                key={item.id}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[360px] sm:min-w-[380px] lg:min-w-[380px] bg-white shadow-lg overflow-hidden hover:shadow-xl transition block cursor-pointer"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className=""
                  />
                </div>

                <div className="p-6 flex items-center justify-between">
                  <span className="font-primary font-primary-semibold mx-auto">
                    {item.title}
                  </span>
                  <span className="text-lg">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Arrows (Desktop / Tablet only) */}
          <div className="absolute right-0 -bottom-14 hidden sm:flex gap-4">
            <button
              onClick={prev}
              className="text-secondary hover:text-black transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="text-secondary hover:text-black transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Pagination (Number + Dash – UNCHANGED DESIGN) */}
        <div className="flex items-center gap-3 mt-10 justify-center sm:justify-start">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => {
            const isActive = i === index;

            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="group flex items-center justify-center cursor-pointer"
              >
                {isActive ? (
                  <span className="text-sm font-semibold text-orange-500 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : (
                  <span className="block w-4 h-[2px] bg-gray-400 group-hover:w-6 transition-all duration-200" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
