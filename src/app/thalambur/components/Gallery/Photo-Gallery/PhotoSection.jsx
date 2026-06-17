"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import EventsSection from "./EventsSection";
import AwardSection from "./AwardSection";

const CATEGORIES = ["infrastructure", "events", "awards"];

const INFRA_DATA = {
  facilities: [
    "The school has all the necessary facilities in keeping with the modern trend in education. Experienced and trained teachers help in maintaining academic excellence and high standards of the school.",
    "Well equipped laboratories for Physics, Chemistry, Biology, Maths, Computer Science and English.",
    "A library with appropriate ambience for reading & a resourceful librarian to ignite reading",
    "Two well maintained playgrounds for cricket and football.",
    "A conference hall with LCD facilities.",
    "A Play Pen for use by children from Pre KG to Std. III."
  ],
  images: [
    { id: 1, span: "md:col-span-6 md:row-span-1", src: "/thalambur/infra1.jpg" },
    { id: 2, span: "md:col-span-3", src: "/thalambur/infra2.jpg" },
    { id: 3, span: "md:col-span-3", src: "/thalambur/infra3.jpg" },
    { id: 4, span: "md:col-span-3", src: "/thalambur/infra4.jpg" },
    { id: 5, span: "md:col-span-3", src: "/thalambur/infra5.jpg" },
    { id: 6, span: "md:col-span-3", src: "/thalambur/infra6.jpg" },
    { id: 7, span: "md:col-span-3", src: "/thalambur/infra7.jpg" },
    { id: 8, span: "md:col-span-3", src: "/thalambur/infra8.jpg" },
    { id: 9, span: "md:col-span-3", src: "/thalambur/infra13.jpg" },
    { id: 10, span: "md:col-span-6", src: "/thalambur/infra10.jpg" },
    { id: 11, span: "md:col-span-6", src: "/thalambur/infra11.jpg" },
    { id: 12, span: "md:col-span-6", src: "/thalambur/infra12.jpg" }
  ]
};

// ── Portal Lightbox ───────────────────────────────────────────────────────────
function Lightbox({ selectedIndex, onClose, onPrev, onNext }) {
  // Stable keyboard handler
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/95 p-4"
      style={{ zIndex: 99999 }}
      onClick={onClose} // click backdrop to close
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/30 p-2 rounded-full transition"
        aria-label="Previous"
      >
        <ChevronLeft size={44} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/30 p-2 rounded-full transition"
        aria-label="Next"
      >
        <ChevronRight size={44} />
      </button>

      {/* Image */}
      <img
        src={INFRA_DATA.images[selectedIndex].src}
        className="max-h-[85vh] rounded-xl object-contain"
        onClick={(e) => e.stopPropagation()}
        alt={`Infrastructure ${selectedIndex + 1}`}
      />

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {selectedIndex + 1} / {INFRA_DATA.images.length}
      </div>
    </motion.div>,
    document.body // ← escapes all stacking contexts
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function InfrastructurePage() {
  const [activeTab, setActiveTab]       = useState("infrastructure");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted]           = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  const handleNext  = useCallback(() => setSelectedIndex((p) => (p + 1) % INFRA_DATA.images.length), []);
  const handlePrev  = useCallback(() => setSelectedIndex((p) => (p - 1 + INFRA_DATA.images.length) % INFRA_DATA.images.length), []);
  const handleClose = useCallback(() => setSelectedIndex(null), []);

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

      {/* Tab Content */}
      <AnimatePresence mode="wait">

        {/* INFRASTRUCTURE */}
        {activeTab === "infrastructure" && (
          <motion.div key="infra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className="mb-8 p-7 bg-slate-50 rounded-3xl border border-slate-100">
              <h2 className="text-xl font-semibold mb-5 tracking-tight font-primary">Facilities</h2>
              <div className="grid md:grid-cols-3 gap-y-4 gap-x-6 font-secondary">
                {INFRA_DATA.facilities.map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="mt-[7px] w-2 h-2 bg-primary rounded-full shrink-0" />
                    <p className="m-0">{text}</p>
                  </div>
                ))}
              </div>
            </div>

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
                  <img
                    src={img.src}
                    alt={`Infrastructure ${i + 1}`}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
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
          <motion.div key="awards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20 text-gray-500">
            <AwardSection />
          </motion.div>
        )}

      </AnimatePresence>

      {/* Lightbox — Portal renders on document.body, above everything */}
      {mounted && selectedIndex !== null && (
        <AnimatePresence>
          <Lightbox
            selectedIndex={selectedIndex}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </AnimatePresence>
      )}

    </div>
  );
}