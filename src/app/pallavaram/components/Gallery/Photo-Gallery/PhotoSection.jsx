"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import EventsSection from "./EventsSection";
import AwardSection from "./AwardSection";

const CATEGORIES = ["infrastructure", "events", "awards"];

const INFRA_DATA = {
  facilities: [
    "The school has all the necessary facilities in keeping with the modern trend in education. Experienced and trained teachers help in maintaining academic excellence and high standards of the school.",
    "The Campus is surrounded by an inspiring panoramic view of nature with green fields and the Pallavaram hills. The atmosphere is serene with well laid out roads, gardens, avenue of trees and lawns.",
    "A well equipped library with books covering various fields like education, general knowledge, facts, encyclopedias, newspapers, magazines etc",
    "Well equipped laboratories for Physics, Chemistry, Biology, and Computer Science.",
    "Well maintained playgrounds for cricket and football.",
    "The amiable school clinic has a well-equipped exclusive medical dispensary under the control of a fully-qualified diligent nurse.",
    "A conference hall with LCD facilities.",
    "A Play Pen for use by children  from PreKG to Std III.",
    "An auditorium “VELS SHIVALAYAA” with huge number of seating capacity.",
  ],
  images: [
    { id: 1, span: "md:col-span-6 md:row-span-1", src: "/pallavaram/infra-1.jpg" },
    { id: 2, span: "md:col-span-3", src: "/pallavaram/infra-2.jpg" },
    { id: 3, span: "md:col-span-3", src: "/pallavaram/infra-3.jpg" },
    { id: 4, span: "md:col-span-3", src: "/pallavaram/infra-4.jpg" },
    { id: 5, span: "md:col-span-3", src: "/pallavaram/infra-5.jpg" },
    { id: 6, span: "md:col-span-3", src: "/pallavaram/infra-6.jpg" },
    { id: 7, span: "md:col-span-3", src: "/pallavaram/infra-7.jpg" },
    { id: 8, span: "md:col-span-3", src: "/pallavaram/infra-8.jpg" },
    { id: 9, span: "md:col-span-3", src: "/pallavaram/infra-13.jpg" },
    { id: 10, span: "md:col-span-6", src: "/pallavaram/infra-10.jpg" },
    { id: 11, span: "md:col-span-6", src: "/pallavaram/infra-11.jpg" },
    { id: 12, span: "md:col-span-3", src: "/pallavaram/infra-12.jpg" },
    { id: 13, span: "md:col-span-3", src: "/pallavaram/infra-13.jpg" },
    { id: 14, span: "md:col-span-3", src: "/pallavaram/infra-14.jpg" },
    { id: 15, span: "md:col-span-3", src: "/pallavaram/infra-15.jpg" },
    { id: 16, span: "md:col-span-3", src: "/pallavaram/infra-16.jpg" },
    { id: 17, span: "md:col-span-3", src: "/pallavaram/infra-17.jpg" },
    { id: 18, span: "md:col-span-3", src: "/pallavaram/infra-18.jpg" },
    { id: 19, span: "md:col-span-3", src: "/pallavaram/infra-20.jpg" },
    { id: 20, span: "md:col-span-3", src: "/pallavaram/infra-21.jpg" },
    { id: 21, span: "md:col-span-3", src: "/pallavaram/infra-22.jpg" },
  ],
};

export default function PhotoSection() {
  const [activeTab, setActiveTab] = useState("infrastructure");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % INFRA_DATA.images.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + INFRA_DATA.images.length) % INFRA_DATA.images.length
    );
  };

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

  const lightbox =
    mounted && selectedIndex !== null
      ? createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
              style={{ zIndex: 2147483647 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="fixed top-5 right-5 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                style={{ zIndex: 2147483647 }}
                aria-label="Close"
              >
                <X size={26} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                style={{ zIndex: 2147483647 }}
                aria-label="Previous image"
              >
                <ChevronLeft size={38} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                style={{ zIndex: 2147483647 }}
                aria-label="Next image"
              >
                <ChevronRight size={38} />
              </button>

              <motion.img
                src={INFRA_DATA.images[selectedIndex].src}
                className="max-w-[92vw] max-h-[85vh] object-contain rounded-xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                alt=""
              />
            </motion.div>
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <div className="bg-white p-6 max-w-6xl mx-auto font-sans">
        {/* TABS */}
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
          {activeTab === "infrastructure" && (
            <motion.div
              key="infra"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-8 p-7 bg-slate-50 rounded-3xl border border-slate-100">
                <h2 className="text-xl font-semibold mb-5 tracking-tight font-primary">
                  Facilities
                </h2>

                <div className="grid md:grid-cols-3 gap-y-4 gap-x-6 font-secondary">
                  {INFRA_DATA.facilities.map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                    >
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
                      className="h-full w-full object-cover group-hover:scale-105 transition"
                      alt=""
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EventsSection />
            </motion.div>
          )}

          {activeTab === "awards" && (
            <motion.div key="awards" className="text-center py-20 text-gray-500">
              <AwardSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {lightbox}
    </>
  );
}