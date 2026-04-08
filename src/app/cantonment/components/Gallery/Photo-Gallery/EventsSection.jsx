"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const EVENTS_DATA = {
  years: ["2022-2023"],
  eventsByYear: {
    "2022-2023": [
      {
        title: "Blue Day",
        id: 1,
        size: "medium",
        images: [
          "/cantonment/blue-1.png",
          "/cantonment/blue-2.png",
          "/cantonment/blue-3.png",
          "/cantonment/blue-4.png",
          "/cantonment/blue-5.png",
          "/cantonment/blue-6.png",
          "/cantonment/blue-7.png",
        ],
      },
      {
        title: "Doctor's Day",
        id: 2,
        size: "medium",
        images: [
          "/cantonment/doc1.png",
          "/cantonment/doc2.png",
          "/cantonment/doc3.png",
          "/cantonment/doc4.png",
          "/cantonment/doc5.png",
          "/cantonment/doc6.png",
          "/cantonment/doc7.png",
          "/cantonment/doc8.png",
        ],
      },
      {
        title: "Healthy and Junk Food",
        id: 3,
        size: "small",
        images: [
          "/cantonment/health1.png",
          "/cantonment/health2.png",
          "/cantonment/health3.png",
          "/cantonment/health4.png",
          "/cantonment/health5.png",
          "/cantonment/health6.png",
          "/cantonment/health7.png",
          "/cantonment/health8.png",
          "/cantonment/health9.png",
          "/cantonment/health10.png",
          "/cantonment/health11.png",
          "/cantonment/health12.png",
        ],
      },
      {
        title: "Red Day",
        id: 4,
        size: "small",
        images: [
          "/cantonment/red1.png",
          "/cantonment/red2.png",
          "/cantonment/red3.png",
          "/cantonment/red4.png",
          "/cantonment/red5.png",
          "/cantonment/red6.png",
          "/cantonment/red7.png",

        ],
      },
      {
        title: "Vels Organic Sandhai",
        id: 5,
        size: "medium",
        images: [
          "/cantonment/sandhai1.jpg",
          "/cantonment/sandhai2.jpg",
          "/cantonment/sandhai3.jpg",
          "/cantonment/sandhai4.jpg",
          "/cantonment/sandhai5.jpg",
        ],
      },
      {
        title: "Yellow Day",
        id: 6,
        size: "medium",
        images: [
          "/cantonment/yellow1.jpg",
          "/cantonment/yellow2.jpg",
          "/cantonment/yellow3.jpg",
          "/cantonment/yellow4.jpg",
          "/cantonment/yellow5.jpg",
          "/cantonment/yellow6.jpg",
          "/cantonment/yellow7.jpg",
          

        ],
      },
      {
        title: "Yoga Day",
        id: 7,
        size: "large",
        images: [
          "/cantonment/yoga1.png",
          "/cantonment/yoga2.png",
          "/cantonment/yoga3.png",
          "/cantonment/yoga4.png",
          "/cantonment/yoga5.png",
          "/cantonment/yoga6.png",
          "/cantonment/yoga7.png",
          "/cantonment/yoga8.png",
          "/cantonment/yoga9.png",
          "/cantonment/yoga10.png",
          "/cantonment/yoga11.png",
          "/cantonment/yoga12.png",
          "/cantonment/yoga13.png",
          "/cantonment/yoga14.png",
          "/cantonment/yoga15.png",
          "/cantonment/yoga16.png",
          "/cantonment/yoga17.png",
          "/cantonment/yoga18.png",
        ],
      },
  
   
    ],
  },
};

export default function EventsSection() {
  const [selectedYear, setSelectedYear] = useState(EVENTS_DATA.years[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [carouselStates, setCarouselStates] = useState({});
  const [activeEventImages, setActiveEventImages] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const states = {};
    Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
      yearEvents.forEach((event) => {
        if (event.images && event.images.length > 1) {
          states[event.id] = 0;
        }
      });
    });
    setCarouselStates(states);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates((prev) => {
        const newStates = { ...prev };

        Object.keys(newStates).forEach((key) => {
          const id = parseInt(key);
          let foundEvent = null;

          Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
            const match = yearEvents.find((e) => e.id === id);
            if (match) foundEvent = match;
          });

          if (foundEvent?.images?.length > 1) {
            newStates[key] = (newStates[key] + 1) % foundEvent.images.length;
          }
        });

        return newStates;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openLightbox = (event) => {
    if (!event.images || event.images.length === 0) return;
    setActiveEventImages(event.images);
    setSelectedIndex(0);
  };

  const handleCarouselClick = (eventId, direction, e) => {
    e.stopPropagation();

    const event = EVENTS_DATA.eventsByYear[selectedYear]?.find(
      (item) => item.id === eventId
    );

    if (!event || !event.images || event.images.length <= 1) return;

    setCarouselStates((prev) => ({
      ...prev,
      [eventId]:
        direction === "next"
          ? (prev[eventId] + 1) % event.images.length
          : (prev[eventId] - 1 + event.images.length) % event.images.length,
    }));
  };

  const events = EVENTS_DATA.eventsByYear[selectedYear] || [];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-8 max-w-[1400px] mx-auto min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
          Event Gallery
        </h2>

        <div className="relative w-full sm:w-48" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold shadow-sm hover:border-blue-500 transition-colors"
          >
            {selectedYear}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl z-20 overflow-hidden"
              >
                {EVENTS_DATA.years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                      selectedYear === year
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-50 text-slate-600"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {events.map((event) => {
          const images = event.images || [];
          const hasMultiple = images.length > 1;
          const currentIndex = carouselStates[event.id] || 0;
          const currentImage = images[currentIndex] || images[0];

          return (
            <motion.div
              layout
              key={event.id}
              onClick={() => openLightbox(event)}
              className={`relative overflow-hidden rounded-2xl bg-white group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300
                ${
                  event.size === "large"
                    ? "sm:col-span-2 aspect-[16/10] md:aspect-[16/7]"
                    : "col-span-1 aspect-[4/3]"
                }
              `}
            >
              <div className="relative h-full w-full">
                <motion.img
                  key={`${event.id}-${currentIndex}`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  src={currentImage}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {hasMultiple && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "prev", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "next", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  {event.categoryTitle && (
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {event.categoryTitle}
                    </span>
                  )}
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (prev) =>
                      (prev - 1 + activeEventImages.length) %
                      activeEventImages.length
                  );
                }}
                className="hidden md:flex absolute left-[-60px] text-white/50 hover:text-white"
              >
                <ChevronLeft size={48} />
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src={activeEventImages[selectedIndex]}
                alt="Selected Event"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (prev) => (prev + 1) % activeEventImages.length
                  );
                }}
                className="hidden md:flex absolute right-[-60px] text-white/50 hover:text-white"
              >
                <ChevronRight size={48} />
              </button>
            </div>

            <div
              className="flex gap-2 mt-8 overflow-x-auto pb-4 max-w-full no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {activeEventImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all ${
                    selectedIndex === idx
                      ? "border-blue-500 scale-105"
                      : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}