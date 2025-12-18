"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_DELAY = 4000;
const GAP = 32;

// CARD SIZES
const DESKTOP_WIDTH = 320;
const TAB_WIDTH = 300;
const MOBILE_WIDTH = 280;
const IMAGE_HEIGHT = 200;

const CIRCULARS = [
  { id: 1, title: "Know More", image: "/dargaroad/april.jpg", pdf: "/dargaroad/pdf/april-month.pdf" },
  { id: 2, title: "Know More", image: "/dargaroad/may.jpg", pdf: "/dargaroad/pdf/may-month.pdf" },
  { id: 3, title: "Know More", image: "/dargaroad/june.jpg", pdf: "/dargaroad/pdf/june-month.pdf" },
  { id: 4, title: "Know More", image: "/dargaroad/july.jpg", pdf: "/dargaroad/pdf/july-month.pdf" },
  { id: 5, title: "Know More", image: "/dargaroad/August.jpg", pdf: "/dargaroad/pdf/august-month.pdf" },
  { id: 6, title: "Know More", image: "/dargaroad/September.jpg", pdf: "/dargaroad/pdf/september-month.pdf" },
  { id: 7, title: "Know More", image: "/dargaroad/october.jpg", pdf: "/dargaroad/pdf/october-month.pdf" },
  { id: 8, title: "Know More", image: "/dargaroad/november.jpg", pdf: "/dargaroad/pdf/november-month.pdf" },
];

export default function GeneralMessages() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(DESKTOP_WIDTH);
  const [visibleCards, setVisibleCards] = useState(3);

  /* RESPONSIVE */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setCardWidth(MOBILE_WIDTH);
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setCardWidth(TAB_WIDTH);
        setVisibleCards(2);
      } else {
        setCardWidth(DESKTOP_WIDTH);
        setVisibleCards(3);
      }
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Message
            <span className="block h-[1px] w-14 bg-secondary mx-auto mt-2" />
          </h2>
          <p className="mt-3 text-sm">
            Where strong values meet future-ready learning.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* VIEWPORT */}
          <div
            className="overflow-x-hidden overflow-y-visible pt-6 mx-auto"
            style={{
              width: visibleCards === 1 ? cardWidth + 24 : "100%",
              paddingLeft: visibleCards === 1 ? 12 : 0,
              paddingRight: visibleCards === 1 ? 12 : 0,
            }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{
                gap: GAP,
                transform: `translateX(-${index * (cardWidth + GAP)}px)`,
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
                    flex-shrink-0
                    mb-6
                    shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                    hover:shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                    transition
                  "
                  style={{ width: cardWidth }}
                >
                  {/* IMAGE */}
                  <div className="relative" style={{ height: IMAGE_HEIGHT }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className=""
                    />
                  </div>

                  {/* CTA */}
                  <div className="p-5 flex items-center justify-center gap-2 font-semibold text-sm">
                    {item.title} <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <div className="absolute right-0 -bottom-14 hidden sm:flex gap-4 text-secondary">
            <button onClick={() => setIndex((i) => Math.max(i - 1, 0))}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center gap-3 mt-10 justify-center sm:justify-start">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}>
              {i === index ? (
                <span className="text-sm font-semibold text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : (
                <span className="block w-4 h-[2px] bg-gray-300" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
