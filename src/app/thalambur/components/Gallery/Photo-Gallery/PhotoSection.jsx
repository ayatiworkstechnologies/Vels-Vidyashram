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
    {
      title: "Future-Ready Smart Classrooms",
      description:
        "Every classroom is equipped with AI-enabled interactive panels that transform traditional teaching into immersive learning. Teachers use digital content, simulations, real-time collaboration and multimedia lessons to make concepts easier to understand and more engaging.",
    },
    {
      title: "AI Interactive Learning",
      description:
        "Our AI-powered interactive panels support personalized learning, visual demonstrations, instant assessments and collaborative activities, helping students develop digital literacy and critical thinking skills.",
    },
    {
      title: "STEM & Science Laboratories",
      description:
        "Well-equipped Physics, Chemistry, Biology, Mathematics and Computer laboratories encourage hands-on experimentation and inquiry-based learning.",
    },
    {
      title: "Library",
      description:
        "A modern library with an extensive collection of books, journals and digital resources nurtures reading habits and independent research.",
    },
    {
      title: "Football Turf",
      description:
        "A professionally maintained football turf provides students with excellent training facilities, promoting teamwork, fitness and competitive spirit.",
    },
    {
      title: "Swimming Pool",
      description:
        "Our swimming facility enables students to learn water safety, improve endurance and participate in competitive swimming under trained coaches.",
    },
    {
      title: "Skating Arena",
      description:
        "A dedicated skating rink helps students develop balance, agility, confidence and discipline through structured coaching.",
    },
    {
      title: "Indoor & Outdoor Sports",
      description:
        "Basketball, volleyball, badminton, athletics, yoga and other sports ensure holistic physical development.",
    },
    {
      title: "Performing Arts",
      description:
        "Dedicated music, dance and art studios encourage creativity and self-expression.",
    },
    {
      title: "Safety & Security",
      description:
        "The campus is monitored through CCTV surveillance, trained security personnel, visitor management systems and safe transport with GPS-enabled buses.",
    },
    {
      title: "Healthy Campus",
      description:
        "Spacious play areas, hygienic facilities, clean drinking water and eco-friendly surroundings create a healthy environment for learning.",
    },
  ],

  images: [
    {
      id: 1,
      span: "md:col-span-6 md:row-span-1",
      src: "/thalambur/inf-1.png",
    },
    {
      id: 2,
      span: "md:col-span-3",
      src: "/thalambur/inf-2.png",
    },
    {
      id: 3,
      span: "md:col-span-3",
      src: "/thalambur/inf-3.png",
    },
    {
      id: 4,
      span: "md:col-span-3",
      src: "/thalambur/inf-4.png",
    },
    {
      id: 5,
      span: "md:col-span-3",
      src: "/thalambur/inf-5.png",
    },
    {
      id: 6,
      span: "md:col-span-3",
      src: "/thalambur/inf-6.png",
    },
    {
      id: 7,
      span: "md:col-span-3",
      src: "/thalambur/inf-7.png",
    },
    {
      id: 8,
      span: "md:col-span-3",
      src: "/thalambur/inf-8.png",
    },
    {
      id: 9,
      span: "md:col-span-3",
      src: "/thalambur/inf-9.png",
    },
  ],
};

function Lightbox({ selectedIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/95 p-4"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 text-white transition-colors hover:text-orange-400"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/30 sm:left-6"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/30 sm:right-6"
        aria-label="Next"
      >
        <ChevronRight size={36} />
      </button>

      <img
        src={INFRA_DATA.images[selectedIndex].src}
        className="max-h-[85vh] max-w-full rounded-xl object-contain"
        onClick={(event) => event.stopPropagation()}
        alt={`Infrastructure ${selectedIndex + 1}`}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
        {selectedIndex + 1} / {INFRA_DATA.images.length}
      </div>
    </motion.div>,
    document.body
  );
}

export default function InfrastructurePage() {
  const [activeTab, setActiveTab] = useState("infrastructure");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    setSelectedIndex(
      (previousIndex) =>
        (previousIndex + 1) % INFRA_DATA.images.length
    );
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex(
      (previousIndex) =>
        (previousIndex - 1 + INFRA_DATA.images.length) %
        INFRA_DATA.images.length
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans">
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-xl border border-gray-200 bg-gray-100 p-1 font-primary">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-lg px-6 py-2 text-xs font-bold uppercase transition-all ${
                activeTab === tab ? "text-white" : "text-gray-500"
              }`}
            >
              <span className="relative z-10">{tab}</span>

              {activeTab === tab && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 rounded-lg bg-primary shadow-sm"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "infrastructure" && (
          <motion.div
            key="infra"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8 rounded-3xl border border-slate-100 bg-slate-50 p-7">
            

              <div className="grid gap-x-6 gap-y-6 font-secondary md:grid-cols-2 lg:grid-cols-3">
                {INFRA_DATA.facilities.map((facility, index) => (
                  <motion.div
                    key={facility.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-primary" />

                    <div>
                      <h3 className="mb-2 text-base font-semibold text-gray-900 font-primary">
                        {facility.title}
                      </h3>

                      <p className="m-0 text-sm leading-relaxed text-gray-700">
                        {facility.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid auto-rows-[140px] grid-cols-2 gap-3 md:grid-cols-12">
              {INFRA_DATA.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  onClick={() => setSelectedIndex(index)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={`Infrastructure ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
          <motion.div
            key="awards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center text-gray-500"
          >
            <AwardSection />
          </motion.div>
        )}
      </AnimatePresence>

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