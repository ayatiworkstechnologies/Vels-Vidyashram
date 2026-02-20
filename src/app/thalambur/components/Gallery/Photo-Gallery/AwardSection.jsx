"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const AWARDS_DATA = {
  awards: [
    {
      title: "Karate",
     
      id: 1,
      images: [
        "/thalambur/karate-1.jpg",
        "/thalambur/karate-2.jpg",
     
      ],
    },
    {
      title: "Archery",
      category: "Science",
      id: 2,
      images: [
        "/thalambur/archery-1.jpg",
        "/thalambur/archery-2.jpg",
 
      ],
    },
    {
      title: "SOF and IOF Gold Medal winners",
      category: "Sports",
      id: 3,
      images: [
        "/thalambur/sof.jpg",
       
      ],
    },
    {
      title: "Swimming Competition",
      category: "Excellence",
      id: 4,
      images: [
        "/thalambur/vv-1.jpg",
        "/thalambur/vv-2.jpg",
       
      ],
    },
    {
      title: "Singhania Leadership Conference",
      category: "Academic",
      id: 5,
      images: [
        "/thalambur/singh.jpg",
   
       
      ],
    },
    {
      title: "Prithun Prasath of Grade 3 won silver medal in Skating which was conducted by Decathlon.",
      category: "Technology",
      id: 6,
      images: [
        "/thalambur/p-1.jpg",
        "/thalambur/p-2.jpg",
       
      ],
    },
    {
      title: "Sangamithrai of grade 3 for performing Silambam continuously for 3 hours",
     
      id: 7,
      images: [
        "/thalambur/san.jpg",
       
      ],
    },
    {
      title: "Sai Sree Rohit- placed 3rd in chengalpat district level chess competition",
      category: "Arts",
      id: 8,
      images: [
        "/thalambur/chess-1.jpg",
        "/thalambur/chess-2.jpg",
        "/thalambur/chess-3.jpg",
        "/thalambur/chess-4.jpg",


      ],
    },
      {
      title: "Lakshana G of VVT who is placed 1st in chengalpat district level chess competition",
      category: "Arts",
      id: 9,
      images: [
        "/thalambur/chess-5.jpg",
        "/thalambur/chess-6.jpg",
        "/thalambur/chess-7.jpg",
        "/thalambur/chess-8.jpg",


      ],
    },
        {
      title: "Council for International American Accreditation",
      category: "Arts",
      id: 10,
      images: [
        "/thalambur/ciaa-1.jpg",
        "/thalambur/ciaa-2.jpg",
        "/thalambur/ciaa-3.jpg",

      ],
    },
            {
      title: "Dynamic school award",
      category: "Arts",
      id: 11,
      images: [
        "/thalambur/dynamic.jpg",
     

      ],
    },
    {
      title: "Green Campus Programme Award",
      category: "Arts",
        id: 12,
      images: [
        "/thalambur/green-1.jpg",
        "/thalambur/green-2.jpg",
        "/thalambur/green-3.png",
      ],
    },
     {
      title: "𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆 𝒊𝒏 𝑬𝒅𝒖-𝑺𝒑𝒐𝒓𝒕𝒔 𝒂𝒏𝒅 𝑺𝒐𝒄𝒊𝒂𝒍 𝑽𝒂𝒍𝒖𝒆 𝑬𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏",
      category: "Arts",
        id: 13,
      images: [
        "/thalambur/ex-1.jpg",
        "/thalambur/ex-2.jpg",
        "/thalambur/ex-3.jpg",
        "/thalambur/ex-4.jpg",
        "/thalambur/ex-5.jpg",
        "/thalambur/ex-6.jpg",
      ],
    },

  ],
};

export default function AwardsGrid() {
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
