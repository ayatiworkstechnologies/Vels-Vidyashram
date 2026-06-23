"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const EVENTS_DATA = {
  years: ['2026-2027','2025-2026', '2024-2025'],
  eventsByYear: {
    '2026-2027': [
      { title: "Grade X Results 2026", id: 1, size: 'large', images: ["/thalambur/image-6.png", "/thalambur/image-7.png","/thalambur/image-8.png"] },
      { title: "Tamil New Year Celebration", id: 2, size: 'medium', images: ["/thalambur/image-1.png","/thalambur/image-2.png","/thalambur/image-3.png","/thalambur/image-5.png"] },
      { title: "Grade XII Results 2026", id: 3, size: 'small', images: ["/thalambur/image-13.png","/thalambur/image-14.png","/thalambur/image-15.png"] },
      { title: "Lead Symposium 2026 Day 1", id: 4, size: 'small', images: ["/thalambur/image-16.png","/thalambur/image-17.png","/thalambur/image-18.png","/thalambur/image-19.png","/thalambur/image-20.png","/thalambur/image-21.png","/thalambur/image-22.png"] },
      { title: "Lead Symposium 2026 Day 2", id: 5, size: 'medium', images: ["/thalambur/image-23.png","/thalambur/image-24.png","/thalambur/image-25.png","/thalambur/image-26.png","/thalambur/image-27.png","/thalambur/image-28.png","/thalambur/image-29.png"] },
      { title: "Parent Orientation - Grade X & XII ", id: 6, size: 'medium', images: ["/thalambur/image-9.png","/thalambur/image-10.png","/thalambur/image-11.png","/thalambur/image-12.png"] },
      { title: "Step Orientation", id: 7, size: 'large', images: ["/thalambur/image-30.png","/thalambur/image-31.png","/thalambur/image-32.png","/thalambur/image-33.png","/thalambur/image-34.png"] },
      { title: "First Day at Thalambur", id: 8, size: 'small', images: ["/thalambur/image-5-1.png","/thalambur/image-5-2.png","/thalambur/image-5-3.png","/thalambur/image-5-4.png"] },
      { title: "New Parent Orientation Grade KG To V", id: 9, size: 'large', images: ["/thalambur/image-35.png"] },
      { title: "New Parent Orientation Grade VI To IX", id: 10, size: 'medium', images: ["/thalambur/parent-1.png", "/thalambur/parent-2.png", "/thalambur/parent-3.png", "/thalambur/parent-4.png", "/thalambur/parent-5.png", "/thalambur/parent-6.png", "/thalambur/parent-7.png", "/thalambur/parent-8.png", "/thalambur/parent-9.png", "/thalambur/parent-10.png"] },
      { title: "International Yoga Day", id: 11, size: 'medium', images: ["/thalambur/img-1.png", "/thalambur/img-2.png", "/thalambur/img-3.png", "/thalambur/img-4.png", "/thalambur/img-5.png", "/thalambur/img-6.png", "/thalambur/img-7.png"] },
      { title: "Fathers Day", id: 12, size: 'small', images: ["/thalambur/father-1.png","/thalambur/father-2.png","/thalambur/father-3.png", "/thalambur/father-4.png", "/thalambur/father-5.png"] },
      { title: "Yoga Day", id: 13, size: 'small', images: ["/thalambur/yo-1.png","/thalambur/yo-2.png","/thalambur/yo-3.png","/thalambur/yo-4.png","/thalambur/yo-5.png"] },
    
    ],    
    '2025-2026': [
      { title: "WINNERS OF THE NATIONAL LEVEL ART COMPETITION", id: 1, size: 'large', images: ["/thalambur/winner.jpg"] },
      { title: "No bag day II", id: 2, size: 'medium', images: ["/thalambur/bag-1.jpg","/thalambur/bag-2.jpg","/thalambur/bag-3.jpg","/thalambur/bag-4.jpg","/thalambur/bag-5.jpg","/thalambur/bag-6.jpg","/thalambur/bag-7.jpg"] },
      { title: "Melange 2025", id: 3, size: 'small', images: ["/thalambur/melange-1.jpg","/thalambur/melange-2.jpg","/thalambur/melange-3.jpg","/thalambur/melange-4.jpg","/thalambur/melange-5.jpg","/thalambur/melange-6.jpg","/thalambur/melange-7.jpg","/thalambur/melange-8.jpg","/thalambur/melange-9.jpg","/thalambur/melange-10.jpg"] },
      { title: "Vels Football Club Inauguration", id: 4, size: 'small', images: ["/thalambur/football-1.jpg","/thalambur/football-2.jpg","/thalambur/football-3.jpg","/thalambur/football-4.jpg","/thalambur/football-5.jpg","/thalambur/football-6.jpg","/thalambur/football-7.jpg","/thalambur/football-8.jpg"] },
      { title: "Grade III to V", id: 5, size: 'medium', images: ["/thalambur/grade-1.jpg","/thalambur/grade-2.jpg","/thalambur/grade-3.jpg","/thalambur/grade-4.jpg","/thalambur/grade-5.jpg"] },
      { title: "Diwali Celebration", id: 6, size: 'medium', images: ["/thalambur/diwali-1.jpg","/thalambur/diwali-2.jpg","/thalambur/diwali-3.jpg","/thalambur/diwali-4.jpg","/thalambur/diwali-5.jpg"] },
      { title: "English Language Day", id: 7, size: 'large', images: ["/thalambur/english-1.jpg","/thalambur/english-2.jpg","/thalambur/english-3.jpg"] },
      { title: "Toppers", id: 8, size: 'small', images: ["/thalambur/topper-1.jpg","/thalambur/topper-2.jpg","/thalambur/topper-3.jpg"] },
      { title: "STARS OF VVT -THALAMBUR", id: 9, size: 'small', images: ["/thalambur/star-1.jpeg","/thalambur/star-2.jpg","/thalambur/star-3.jpeg","/thalambur/star-4.jpeg"] },
      { title: "JEE Mains Session 2", id: 10, size: 'small', images: ["/thalambur/jee.jpg"] },
      { title: "Personal Safety Education session for students of Grades I to XII", id: 11, size: 'large', images: ["/thalambur/safe-1.jpg","/thalambur/safe-2.jpg","/thalambur/safe-3.jpg","/thalambur/safe-4.jpg","/thalambur/safe-5.jpg"] },
      { title: "Rakshabhandhan", id: 12, size: 'medium', images: ["/thalambur/raksha-1.jpg","/thalambur/raksha-2.jpg","/thalambur/raksha-3.jpg","/thalambur/raksha-4.jpg","/thalambur/raksha-5.jpg"] },
      { title: "Friendship Day", id: 13, size: 'small', images: ["/thalambur/friend-1.jpeg","/thalambur/friend-2.jpeg","/thalambur/friend-3.jpeg","/thalambur/friend-4.jpeg"] },
      { title: "Blue Day", id: 14, size: 'small', images: ["/thalambur/blue-1.jpg","/thalambur/blue-2.jpg","/thalambur/blue-3.jpg","/thalambur/blue-4.jpg","/thalambur/blue-5.jpg"] },
      { title: "Book Exhibition Reading India Project 2025", id: 15, size: 'medium', images: ["/thalambur/book-1.jpg","/thalambur/book-2.jpg","/thalambur/book-3.jpg","/thalambur/book-4.jpg","/thalambur/book-5.jpg"] },
      { title: "Krishna Jeyanthi", id: 16, size: 'medium', images: ["/thalambur/krishna-1.jpeg","/thalambur/krishna-2.jpeg","/thalambur/krishna-3.jpeg","/thalambur/krishna-4.jpeg"] },
      { title: "Merit Awards PT I", id: 17, size: 'large', images: ["/thalambur/merit-1.jpg","/thalambur/merit-2.jpg","/thalambur/merit-3.jpg"] },
      { title: "STARS OF VVT (JUNE)", id: 18, size: 'small', images: ["/thalambur/vvt-1.jpg","/thalambur/vvt-2.jpg","/thalambur/vvt-3.jpg","/thalambur/vvt-4.jpg"] },
      { title: "India K-12 Awards(IKA) - 2025", id: 19, size: 'small', images: ["/thalambur/india.jpg"] },
      { title: "Ganesh Chaturthi", id: 20, size: 'small', images: ["/thalambur/ganesh-1.jpg","/thalambur/ganesh-2.jpg","/thalambur/ganesh-3.jpg"] },
      { title: "TECHTOPIA", id: 21, size: 'small', images: ["/thalambur/tech-1.jpg","/thalambur/tech-2.jpg","/thalambur/tech-3.jpg","/thalambur/tech-4.jpg","/thalambur/tech-5.jpg","/thalambur/tech-6.jpg","/thalambur/tech-7.jpg"] },
    ],
    '2024-2025': [
      { title: "Parent Orientation", id: 1, size: 'large', images: ["/thalambur/parent-1.jpg","/thalambur/parent-2.jpg"] },
      { title: "TAMIL NEW YEAR CELEBRATION", id: 2, size: 'medium', images: ["/thalambur/tamil-1.png","/thalambur/tamil-2.png","/thalambur/tamil-3.png","/thalambur/tamil-4.png","/thalambur/tamil-5.png","/thalambur/tamil-6.png","/thalambur/tamil-7.png","/thalambur/tamil-8.png"] },
      { title: "World Scholar's Cup", id: 3, size: 'small', images: ["/thalambur/world-1.png","/thalambur/world-2.png","/thalambur/world-3.png","/thalambur/world-4.png"] },
      { title: "EVS CULMINATION II GRADE I", id: 4, size: 'small', images: ["/thalambur/evs-1.jpg","/thalambur/evs-2.jpg","/thalambur/evs-3.jpg","/thalambur/evs-4.jpg","/thalambur/evs-5.jpg","/thalambur/evs-6.jpg"] },
      { title: "EVS CULMINATION II GRADE II", id: 5, size: 'small', images: ["/thalambur/g-1.jpg","/thalambur/g-2.jpg","/thalambur/g-3.jpg","/thalambur/g-4.jpg"] },
    ],
  }
};

// ── Portal Lightbox ───────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
      style={{ zIndex: 99999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <div
        className="relative w-full max-w-6xl h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
        <button
          onClick={onPrev}
          className="hidden md:flex absolute left-[-60px] text-white/50 hover:text-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={48} />
        </button>

        <motion.img
          key={index}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src={images[index]}
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
          alt="Selected Event"
        />

        {/* Next */}
        <button
          onClick={onNext}
          className="hidden md:flex absolute right-[-60px] text-white/50 hover:text-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div
        className="flex gap-2 mt-8 overflow-x-auto pb-4 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onNext(idx)} // handled via parent setter
            className={`flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all ${
              index === idx ? "border-primary scale-105" : "border-transparent opacity-40 hover:opacity-100"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {index + 1} / {images.length}
      </div>
    </motion.div>,
    document.body
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function EventsGallery() {
  const [selectedYear, setSelectedYear]         = useState("2025-2026");
  const [selectedIndex, setSelectedIndex]       = useState(null);
  const [activeEventImages, setActiveEventImages] = useState([]);
  const [carouselStates, setCarouselStates]     = useState({});
  const [isDropdownOpen, setIsDropdownOpen]     = useState(false);
  const [mounted, setMounted]                   = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  // Init carousel state with unique IDs (fixed duplicate IDs in original data)
  useEffect(() => {
    const states = {};
    Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
      yearEvents.forEach((event) => {
        if (event.images?.length > 1) states[event.id] = 0;
      });
    });
    setCarouselStates(states);
  }, []);

  // Auto-advance carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          const id = parseInt(key);
          let event = null;
          Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
            const found = yearEvents.find((e) => e.id === id);
            if (found) event = found;
          });
          if (event?.images?.length > 1) {
            next[key] = (next[key] + 1) % event.images.length;
          }
        });
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  const openLightbox = (event) => {
    if (!event.images?.length) return;
    setActiveEventImages(event.images);
    setSelectedIndex(0);
  };

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handlePrev  = useCallback(() =>
    setSelectedIndex((p) => (p - 1 + activeEventImages.length) % activeEventImages.length),
  [activeEventImages.length]);
  const handleNext  = useCallback((idx) =>
    setSelectedIndex(typeof idx === "number" ? idx : (p) => (p + 1) % activeEventImages.length),
  [activeEventImages.length]);

  const handleCarouselClick = (eventId, direction, e) => {
    e.stopPropagation();
    const event = EVENTS_DATA.eventsByYear[selectedYear].find((ev) => ev.id === eventId);
    if (!event?.images || event.images.length <= 1) return;
    setCarouselStates((prev) => ({
      ...prev,
      [eventId]: direction === "next"
        ? (prev[eventId] + 1) % event.images.length
        : (prev[eventId] - 1 + event.images.length) % event.images.length,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-8 max-w-[1400px] mx-auto min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Event Gallery</h2>

        <div className="relative w-full sm:w-48" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold shadow-sm hover:border-primary transition-colors"
          >
            {selectedYear}
            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
                style={{ zIndex: 100 }}
              >
                {EVENTS_DATA.years.map((year) => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setIsDropdownOpen(false); }}
                    className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                      selectedYear === year ? "bg-primary text-white" : "hover:bg-blue-50 text-slate-600"
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {EVENTS_DATA.eventsByYear[selectedYear].map((event) => {
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
                ${event.size === "large" ? "sm:col-span-2 aspect-[16/10] md:aspect-[16/7]" : "col-span-1 aspect-[4/3]"}
              `}
            >
              <div className="relative h-full w-full">
                <motion.img
                  key={`${event.id}-${currentIndex}`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  src={currentImage}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={event.title}
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

      {/* Lightbox — Portal on document.body */}
      {mounted && selectedIndex !== null && (
        <AnimatePresence>
          <Lightbox
            images={activeEventImages}
            index={selectedIndex}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </AnimatePresence>
      )}
    </div>
  );
}