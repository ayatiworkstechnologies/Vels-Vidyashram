"use client";

import { useState, useRef } from "react";
import Image from "next/image";

/* ================= TABS ================= */
const TABS = ["Infrastructure", "Events", "Awards"];

/* ================= INFRA IMAGES ================= */
const INFRA_IMAGES = [
  "/dargaroad/infra-1.png",
  "/dargaroad/infra-2.png",
  "/dargaroad/infra-3.png",
  "/dargaroad/infra-4.png",
  "/dargaroad/infra-5.png",
];

/* ================= EVENTS DATA ================= */
const EVENTS_DATA = {
  "2025-2026": [
    {
      title: "AARAMBH 2025",
      images: [
        "/dargaroad/infra-1.png",
        "/dargaroad/infra-2.png",
        "/dargaroad/infra-3.png",
        "/dargaroad/infra-4.png",
        "/dargaroad/infra-5.png",
      ],
    },
    {
      title: "Constitution Day Celebration",
      images: [
        "/dargaroad/infra-1.png",
          "/dargaroad/infra-2.png",
          "/dargaroad/infra-3.png",
          "/dargaroad/infra-4.png",
          "/dargaroad/infra-5.png",
      ],
    },
    {
      title: "Vels Plus Expo @ Vels",
      images: [
          "/dargaroad/infra-1.png",
        "/dargaroad/infra-2.png",
        "/dargaroad/infra-3.png",
        "/dargaroad/infra-4.png",
        "/dargaroad/infra-5.png",
      ],
    },
     {
      title: "Vels Plus Expo @ Vels",
      images: [
          "/dargaroad/infra-1.png",
        "/dargaroad/infra-2.png",
        "/dargaroad/infra-3.png",
        "/dargaroad/infra-4.png",
        "/dargaroad/infra-5.png",
      ],
    },
     {
      title: "Vels Plus Expo @ Vels",
      images: [
          "/dargaroad/infra-1.png",
        "/dargaroad/infra-2.png",
        "/dargaroad/infra-3.png",
        "/dargaroad/infra-4.png",
        "/dargaroad/infra-5.png",
      ],
    },
  ],
  "2024-2025": [
    {
      title: "Annual Day Celebration",
      images: [
        "/events/annual-day-1.jpg",
        "/events/annual-day-2.jpg",
      ],
    },
  ],
};

/* ================= EVENT CARD (MINI SLIDER) ================= */
function EventCard({ event }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative h-[210px] overflow-hidden bg-black">
      {/* IMAGE */}
      <Image
        src={event.images[slide]}
        alt={event.title}
        fill
        className="object-cover transition-opacity duration-500"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* TITLE */}
      <div className="absolute bottom-6 left-3 right-3 text-white">
        <p className="text-sm font-medium leading-snug">
          {event.title}
        </p>
        <span className="block mt-1 w-7 h-[2px] bg-orange-500" />
      </div>

      {/* SLIDER INDICATORS */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {event.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-[2px] w-4 transition-all
              ${slide === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState(0);

  /* popup slider */
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  /* events year */
  const [year, setYear] = useState("2025-2026");

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  const openPopup = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* ================= TABS ================= */}
          <div className="relative max-w-6xl mx-auto mb-10">
            <button
              onClick={() => scroll("left")}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8"
            >
              ‹
            </button>

            <button
              onClick={() => scroll("right")}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8"
            >
              ›
            </button>

            <div
              ref={scrollRef}
              className="bg-[#F9F9F9] flex gap-4 overflow-x-auto md:flex-wrap md:justify-center py-6 px-10 rounded-sm scrollbar-hide"
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`min-w-[200px] w-[200px] h-[120px] md:w-[230px] md:h-[65px]
                    shadow-md flex flex-col items-center justify-center
                    ${i === activeTab ? "bg-[#1f1933] text-white" : "bg-white text-black"}`}
                >
                  <p className="font-semibold">{tab}</p>
                  <div
                    className={`mt-3 h-[2px] w-16
                      ${i === activeTab ? "bg-orange-500" : "bg-gray-300"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= INFRASTRUCTURE ================= */}
          {activeTab === 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-6 border-b-2 border-black inline-block">
                Infrastructure
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div
                  onClick={() => openPopup(0)}
                  className="relative w-full h-[420px] cursor-pointer"
                >
                  <Image src={INFRA_IMAGES[0]} alt="" fill className="object-cover" />
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {INFRA_IMAGES.slice(1).map((img, i) => (
                    <div
                      key={i}
                      onClick={() => openPopup(i + 1)}
                      className="relative w-full h-[200px] cursor-pointer"
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ================= EVENTS ================= */}
          {activeTab === 1 && (
            <>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold border-b-2 border-orange-500 inline-block">
                  Events {year}
                </h2>

                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="text-sm border-0 border-b border-gray-400 focus:outline-none cursor-pointer"
                >
                  {Object.keys(EVENTS_DATA).map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {EVENTS_DATA[year].map((event, idx) => (
                  <EventCard key={idx} event={event} />
                ))}
              </div>
            </>
          )}

          {/* ================= AWARDS ================= */}
          {activeTab === 2 && (
            <p className="text-gray-600">Awards content coming soon.</p>
          )}
        </div>
      </section>

      {/* ================= INFRA POPUP SLIDER ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          <div className="relative w-[90vw] h-[65vh]">
            <button
              onClick={() =>
                setCurrent((c) => (c === 0 ? INFRA_IMAGES.length - 1 : c - 1))
              }
              className="absolute left-4 top-1/2 text-orange-400 text-4xl"
            >
              ‹
            </button>

            <Image
              src={INFRA_IMAGES[current]}
              alt=""
              fill
              className="object-contain"
            />

            <button
              onClick={() =>
                setCurrent((c) => (c + 1) % INFRA_IMAGES.length)
              }
              className="absolute right-4 top-1/2 text-orange-400 text-4xl"
            >
              ›
            </button>
          </div>

          <div className="mt-6 flex gap-3 overflow-x-auto">
            {INFRA_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-24 h-16 border-2
                  ${current === i ? "border-orange-500" : "border-transparent"}`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
