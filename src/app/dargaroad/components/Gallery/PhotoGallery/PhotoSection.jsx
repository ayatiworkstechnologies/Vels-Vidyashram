"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import EventsSection from "./EventsSection";
import AwardSection from "./AwardSection";

const CATEGORIES = ["infrastructure", "events", "awards"];

const INFRA_DATA = {
  images: [
    { id: 1, span: "md:col-span-6 md:row-span-1", src: "/dargaroad/infra-1.jpg" },
    { id: 2, span: "md:col-span-3", src: "/dargaroad/pic-2.png" },
    { id: 3, span: "md:col-span-3", src: "/dargaroad/pic-3.jpg" },
    { id: 4, span: "md:col-span-3", src: "/dargaroad/pic-4.jpeg" },
    { id: 5, span: "md:col-span-3", src: "/dargaroad/pic-5.jpeg" },
    { id: 6, span: "md:col-span-3", src: "/dargaroad/pic-6.jpeg" },
    { id: 7, span: "md:col-span-3", src: "/dargaroad/pic-7.jpeg" },
    { id: 8, span: "md:col-span-3", src: "/dargaroad/pic-8.jpeg" },
    { id: 9, span: "md:col-span-3", src: "/dargaroad/pic-9.jpeg" },
    { id: 10, span: "md:col-span-6", src: "/dargaroad/pic-10.jpeg" },
    { id: 11, span: "md:col-span-6", src: "/dargaroad/pic-11.jpeg" },
    { id: 12, span: "md:col-span-6", src: "/dargaroad/pic-12.jpeg" },
    { id: 13, span: "md:col-span-3", src: "/dargaroad/pic-13.jpeg" },
    { id: 14, span: "md:col-span-3", src: "/dargaroad/pic-14.jpeg" },
    { id: 15, span: "md:col-span-3", src: "/dargaroad/pic-15.jpeg" },
    { id: 16, span: "md:col-span-3", src: "/dargaroad/pic-16.jpeg" },
    { id: 17, span: "md:col-span-3", src: "/dargaroad/pic-17.jpeg" },
    { id: 18, span: "md:col-span-3", src: "/dargaroad/pic-18.jpeg" },
    { id: 19, span: "md:col-span-3", src: "/dargaroad/pic-19.jpeg" },
    { id: 20, span: "md:col-span-3", src: "/dargaroad/pic-20.jpg" },
    { id: 21, span: "md:col-span-3", src: "/dargaroad/pic-21.jpg" },
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

        {/* AWARDS */}
        {activeTab === "awards" && (
          <motion.div key="awards" className="text-center py-20 text-gray-500">
            <AwardSection />
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
