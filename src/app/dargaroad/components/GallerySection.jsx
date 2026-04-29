"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, title: "Infrastructure", description: "", img: "/dargaroad/in.png" },
  { id: 2, title: "Awards", description: "", img: "/dargaroad/aw.png" },
  { id: 3, title: "Laboratory", description: "", img: "/dargaroad/la.png" },
  { id: 4, title: "Activities", description: "", img: "/dargaroad/ac.png" },
  { id: 5, title: "Sports", description: "", img: "/dargaroad/ba-Sports.jpg" },
  { id: 6, title: "AARAMBH 2025", description: "", img: "/dargaroad/aa.png" },
];

export default function GalleryGrid() {
  return (
    <section className="py-8 md:py-14 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 font-primary rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold mt-4">Life at School</h2>
          <p className="text-gray-500 mt-2 font-secondary text-sm md:text-base">
            Snapshots of learning, events, and joyful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
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
      whileTap="hover"
      animate="rest"
      className="relative w-full bg-white overflow-hidden cursor-pointer font-primary border border-gray-100 rounded-xl shadow-sm"
      style={{ height: "400px" }}
    >
      {/* 1. THE CONTENT BOX */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-tertiary text-white p-5 md:p-6 flex flex-col justify-center z-20"
        style={{ height: "50%" }}
        variants={{
          rest: { y: "-100%" },
          hover: { y: "0%" }
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.h3
          className="text-white text-lg font-primary md:text-xl font-bold"
          variants={{ rest: { opacity: 0, y: -10 }, hover: { opacity: 1, y: 0 } }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-xs md:text-sm mt-1"
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
      <Link href="/dargaroad/photo-gallery" className="absolute bottom-5 right-5 z-30 md:bottom-8 md:right-8">
        <motion.div
          className="flex items-center gap-2 group"
          variants={{
            rest: { opacity: 0, x: 10 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-secondary text-[9px] font-black tracking-[0.2em] text-gray-900 md:text-[10px] md:tracking-[0.3em]">
            MORE
          </span>
          <span className="text-lg text-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:text-xl">
            ↗
          </span>
        </motion.div>
      </Link>

      {/* 4. BACKGROUND FILLER */}
      <div className="absolute inset-0 bg-white -z-10" />
    </motion.div>
  );
}