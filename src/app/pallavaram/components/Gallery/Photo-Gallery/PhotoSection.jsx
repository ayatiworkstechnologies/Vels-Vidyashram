"use client";
import React, { useState, useEffect } from "react";
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
    "An auditorium “VELS SHIVALAYAA” with huge number of seating capacity."
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
            
            <div className="mb-8 p-7 bg-slate-50 rounded-3xl border border-slate-100">

  {/* Heading */}
  <h2 className="text-xl font-semibold mb-5 tracking-tight font-primary">
    Facilities
  </h2>

  {/* Facilities List */}
  <div className="grid md:grid-cols-3 gap-y-4 gap-x-6 font-secondary">

    {INFRA_DATA.facilities.map((text, i) => (
      <div
        key={i}
        className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
      >
        {/* Correct bullet dot */}
        <span className="mt-[7px] w-2 h-2 bg-primary rounded-full shrink-0" />

        {/* Text line */}
        <p className="m-0">
          {text}
        </p>
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
