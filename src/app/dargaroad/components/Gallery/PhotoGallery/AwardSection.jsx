"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const AWARDS_DATA = {
  awards: [
    {
      title: "SOF -National Science Olympiad (NSO) – Medal Holders",
     
      id: 1,
      images: [
        "/dargaroad/awards/nso.png",
     
      ],
    },
    {
      title: "Grade 6 -PT4 Proficiency certificate holders",
      id: 2,
      images: [
        "/dargaroad/awards/grade-6-1.png",
        "/dargaroad/awards/grade-6-2.png",
 
      ],
    },
    {
      title: "Grade 5-PT4 Proficiency certificate holders",
      id: 3,
      images: [
        "/dargaroad/awards/grade-5.png",
       
      ],
    },
    {
      title: "Grade 2 -PT4 Proficiency certificate holders",
      category: "Excellence",
      id: 4,
      images: [
        "/dargaroad/awards/grade-2-1.png",
        "/dargaroad/awards/grade-2-2.png",
        "/dargaroad/awards/grade-2-3.png",
        "/dargaroad/awards/grade-2-4.png",
       
      ],
    },
    {
      title: "Grade 1 -PT4 Proficiency certificate holders",
      id: 5,
      images: [
        "/dargaroad/awards/grade-1-1.png",
        "/dargaroad/awards/grade-1-2.png"
       
      ],
    },
    {
      title: "SOF International English Olympiad (IEO) – Medal Holders",
      category: "Technology",
      id: 6,
      images: [
        "/dargaroad/awards/ieo-1.png",
        "/dargaroad/awards/ieo-2.png",
        "/dargaroad/awards/ieo-3.png",

       
      ],
    },
    {
      title: "SOF OLYMPIAD – INTERNATIONAL GENERAL KNOWLEDGE OLYMPIAD(IGKO) MEDAL HOLDERS",
     
      id: 7,
      images: [
        "/dargaroad/awards/igko.png",
       
      ],
    },
    {
      title: "SOF International Commerce Olympiad (ICO) – Medal Holders",
      category: "Arts",
      id: 8,
      images: [
        "/dargaroad/awards/ico.png",

      ],
    },
      {
      title: "Grade 2 – PT 3 merit certificate holders",
      id: 9,
      images: [
        "/dargaroad/awards/grade-pt3-1.png",
        "/dargaroad/awards/grade-pt3-2.png",
        "/dargaroad/awards/grade-pt3-3.png",
        "/dargaroad/awards/grade-pt3-4.png",
        "/dargaroad/awards/grade-pt3-5.png",
      ],
    },
        {
      title: "Women Edupreneur Award at the Times Education Icons 2025-26",
      id: 10,
      images: [
        "/dargaroad/awards/women-1.png",
        "/dargaroad/awards/women-2.png",
        "/dargaroad/awards/women-3.png",

      ],
    },
            {
      title: "Grade 1-PT 3 merit certificate holders",
      id: 11,
      images: [
        "/dargaroad/awards/grade1-pt3-1.png",
        "/dargaroad/awards/grade1-pt3-2.png",
        "/dargaroad/awards/grade1-pt3-3.png",
        "/dargaroad/awards/grade1-pt3-4.png",
     
      ],
    },
    {
      title: "Terminal 1 Proficiency Certificate Holders – Grade 5",
        id: 12,
      images: [
        "/dargaroad/awards/grade5-1.png",
        "/dargaroad/awards/grade5-2.png",
        "/dargaroad/awards/grade5-3.png",
      ],
    },
     {
      title: "Grade 3 – PT 3 merit certificate holders",
        id: 13,
      images: [
        "/dargaroad/awards/grade3-1.png",
        "/dargaroad/awards/grade3-2.png",
     
      ],
    },

  ],
};

export default function AwardSection() {
  const [carouselStates, setCarouselStates] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);

  // Initialize carousel states
  useEffect(() => {
    const states = {};
    AWARDS_DATA.awards.forEach((award) => {
      if (award.images.length > 1) {
        states[award.id] = 0;
      }
    });
    setCarouselStates(states);
  }, []);

  // Auto-advance carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates((prev) => {
        const newStates = { ...prev };
        Object.keys(newStates).forEach((key) => {
          const id = parseInt(key);
          const award = AWARDS_DATA.awards.find((a) => a.id === id);
          if (award && award.images.length > 1) {
            newStates[key] =
              (newStates[key] + 1) % award.images.length;
          }
        });
        return newStates;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCarouselClick = (awardId, direction, e) => {
    e.stopPropagation();
    const award = AWARDS_DATA.awards.find((a) => a.id === awardId);
    if (!award || award.images.length <= 1) return;

    setCarouselStates((prev) => {
      const currentIndex = prev[awardId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % award.images.length
          : (currentIndex - 1 + award.images.length) %
            award.images.length;
      return { ...prev, [awardId]: newIndex };
    });
  };

  // Open lightbox with that award’s images
  const openLightbox = (award) => {
    if (!award.images || award.images.length === 0) return;
    setActiveImages(award.images);
    setSelectedIndex(0);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % activeImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + activeImages.length) %
        activeImages.length
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        {AWARDS_DATA.awards.map((award, i) => {
          const images = award.images || [];
          const hasMultiple = images.length > 1;
          const currentIndex = carouselStates[award.id] || 0;
          const currentImage = images[currentIndex] || images[0];

          return (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-white group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 h-[260px]"
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(award)}
            >
              <div className="relative h-full w-full">
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${award.id}-${currentIndex}`}
                    src={currentImage}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-cover"
                    alt={award.title}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={(e) =>
                        handleCarouselClick(award.id, "prev", e)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) =>
                        handleCarouselClick(award.id, "next", e)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white font-secondary">
                  {award.title}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </button>

            {/* Big image */}
            <div
              className="max-w-5xl w-full h-[65vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImages[selectedIndex]}
                className="max-w-full max-h-full object-contain rounded-xl"
                alt=""
              />
            </div>

            {/* Thumbnails */}
            <div
              className="flex gap-3 mt-6 overflow-x-auto max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {activeImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedIndex === idx
                      ? "border-white"
                      : "border-white/30 opacity-70"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt=""
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
