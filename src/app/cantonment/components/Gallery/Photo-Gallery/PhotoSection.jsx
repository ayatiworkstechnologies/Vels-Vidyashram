"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import EventsSection from "./EventsSection";

const CATEGORIES = ["infrastructure", "events"];

const INFRA_DATA = {
 
  images: [
    { id: 1, span: "md:col-span-6 md:row-span-1", src: "/cantonment/infra-1.jpg" },
    { id: 2, span: "md:col-span-3", src: "/cantonment/infra-2.jpg" },
    { id: 3, span: "md:col-span-3", src: "/cantonment/infra-3.jpg" },
    { id: 4, span: "md:col-span-3", src: "/cantonment/infra-4.jpg" },
    { id: 5, span: "md:col-span-3", src: "/cantonment/infra-5.jpg" },
    { id: 6, span: "md:col-span-3", src: "/cantonment/infra-6.jpg" },
    { id: 7, span: "md:col-span-3", src: "/cantonment/infra-7.jpg" },
    { id: 8, span: "md:col-span-3", src: "/cantonment/infra-8.jpg" },
    { id: 9, span: "md:col-span-3", src: "/cantonment/infra-9.jpg" },
    { id: 10, span: "md:col-span-6", src: "/cantonment/infra-10.jpg" },
    { id: 11, span: "md:col-span-6", src: "/cantonment/infra-11.jpg" },

  ]
};

export default function PhotoSection() {
  const [activeTab, setActiveTab] = useState("infrastructure");
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % INFRA_DATA.images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      (prev - 1 + INFRA_DATA.images.length) % INFRA_DATA.images.length
    );
  };

  return (
    <div className="bg-white p-6 max-w-6xl mx-auto font-sans">

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 p-1 rounded-xl border border-gray-200 font-primary">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-xs font-bold uppercase font-primary transition-all rounded-lg ${
                activeTab === tab ? "text-white" : "text-gray-500"
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-primary rounded-lg font-primary shadow-sm"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">

        {/* INFRA */}
        {activeTab === "infrastructure" && (
          <motion.div key="infra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[140px] gap-3">
              {INFRA_DATA.images.map((img, i) => (
                <motion.div
                  key={img.id}
                  onClick={() => setSelectedIndex(i)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className={`relative overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer ${img.span}`}
                >
                  <img src={img.src} className="h-full w-full object-cover group-hover:scale-105 transition" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* EVENTS */}
        {activeTab === "events" && (
          <motion.div key="events" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <EventsSection />
          </motion.div>
        )}

       

      </AnimatePresence>

      {/* INFRA LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 text-white">
              <X size={24} />
            </button>

            <button onClick={handlePrev} className="absolute left-6 text-white">
              <ChevronLeft size={44} />
            </button>

            <button onClick={handleNext} className="absolute right-6 text-white">
              <ChevronRight size={44} />
            </button>

            <img
              src={INFRA_DATA.images[selectedIndex].src}
              className="max-h-[85vh] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
