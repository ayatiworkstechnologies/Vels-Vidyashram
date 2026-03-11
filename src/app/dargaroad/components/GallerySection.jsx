"use client";
import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, title: "Vels Football Club Inauguration", description: "", img: "/thalambur/vels-football-club-inauguration.png" },
  { id: 2, title: "Awards", description: "", img: "/thalambur/awards.png" },
  { id: 3, title: "Laboratory", description: "", img: "/thalambur/laboratory.png" },
  { id: 4, title: "Activities", description: "", img: "/thalambur/event.png" },
  { id: 5, title: "Sports", description: "", img: "/thalambur/sports.png" },
  { id: 6, title: "Computer Lab", description: "", img: "/thalambur/computer-lab.png" },
];

export default function GalleryGrid() {
  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 font-primary rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold mt-4">Life at School</h2>
          <p className="text-gray-500 mt-2 font-secondary text-sm md:text-base">
            Snapshots of learning, events, and joyful moments.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {galleryItems.map((item) => (
            <RevealCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealCard({ item }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="hover" // Enables the reveal on mobile tap
      animate="rest"
      className="relative h-[350px] sm:h-[400px] md:h-[480px] w-full bg-white overflow-hidden cursor-pointer font-primary border border-gray-100 rounded-xl shadow-sm"
    >
      {/* 1. THE CONTENT BOX */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-tertiary text-white p-6 md:p-8 flex flex-col justify-center z-20"
        style={{ height: "50%" }}
        variants={{
          rest: { y: "-100%" },
          hover: { y: "0%" }
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.h3 
          className="text-white text-xl font-primary md:text-2xl font-bold"
          variants={{ rest: { opacity: 0, y: -10 }, hover: { opacity: 1, y: 0 } }}
        >
          {item.title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 text-xs md:text-sm mt-2"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        >
          {item.description}
        </motion.p>
      </motion.div>

      {/* 2. THE IMAGE */}
      <motion.div
        className="absolute inset-0 z-10 overflow-hidden"
        variants={{
          rest: { 
            width: "100%", 
            height: "100%", 
            top: "0%", 
            left: "0%",
          },
          hover: { 
            width: "45%", 
            height: "40%", 
            top: "55%", 
            left: "5%",
          }
        }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 3. THE "MORE" BUTTON */}
      <motion.div
        className="absolute bottom-6 right-6 md:bottom-12 md:right-10 flex items-center gap-2 group z-30"
        variants={{
          rest: { opacity: 0, x: 10 },
          hover: { opacity: 1, x: 0 }
        }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-gray-900 font-secondary">MORE</span>
        <span className="text-lg md:text-xl text-gray-900 transition-transform duration-300">↗</span>
      </motion.div>

      {/* 4. BACKGROUND FILLER */}
      <div className="absolute inset-0 bg-white -z-10" />
    </motion.div>
  );
}