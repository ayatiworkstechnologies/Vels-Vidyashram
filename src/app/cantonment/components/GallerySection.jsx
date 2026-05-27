"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Doctor's day", description: "", img: "/cantonment/doc.png" },
  { id: 2, title: "Red day", description: "", img: "/cantonment/red.png" },
  { id: 3, title: "Laboratory", description: "", img: "/cantonment/yellow.png" },
  { id: 4, title: "Activities", description: "", img: "/cantonment/yoga.png" },
  { id: 5, title: "Sports", description: "", img: "/cantonment/blue.png" },
  { id: 6, title: "Vels Organic Sandhai", description: "", img: "/cantonment/sand.png" },
];

export default function GalleryGrid() {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <span className="rounded-full bg-orange-100 px-3 py-1 font-primary text-[10px] font-bold uppercase tracking-wider text-orange-600 md:text-xs">
            Gallery
          </span>

          <h2 className="mt-4 font-secondary text-3xl font-bold text-gray-900 md:text-4xl">
            Life at School
          </h2>

          <p className="mt-2 font-secondary text-sm text-gray-500 md:text-base">
            Snapshots of learning, events, and joyful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
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
    <Link href="/cantonment/photo-gallery" className="block">
      <motion.article
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        className="group relative h-[340px] w-full cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white font-primary shadow-sm sm:h-[380px] md:h-[440px] lg:h-[480px]"
      >
        {/* Content Box */}
        <motion.div
          className="absolute left-0 top-0 z-20 flex h-[48%] w-full flex-col justify-center bg-tertiary p-5 text-white sm:p-6 md:p-8"
          variants={{
            rest: { y: "-100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.h3
            className="font-primary text-xl font-bold text-white md:text-2xl"
            variants={{
              rest: { opacity: 0, y: -10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h3>

          {item.description && (
            <motion.p
              className="mt-2 text-xs text-gray-300 md:text-sm"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3, delay: 0.08 }}
            >
              {item.description}
            </motion.p>
          )}
        </motion.div>

        {/* Image */}
        <motion.div
          className="absolute inset-0 z-10 overflow-hidden rounded-xl"
          variants={{
            rest: {
              width: "100%",
              height: "100%",
              top: "0%",
              left: "0%",
              borderRadius: "12px",
            },
            hover: {
              width: "46%",
              height: "38%",
              top: "56%",
              left: "5%",
              borderRadius: "14px",
            },
          }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Mobile always readable overlay title */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 md:hidden">
          <h3 className="font-primary text-lg font-bold text-white">
            {item.title}
          </h3>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-gray-900">
            More <span className="text-base leading-none">↗</span>
          </div>
        </div>

        {/* Desktop / tablet More Button */}
        <motion.div
          className="absolute bottom-6 right-6 z-30 hidden items-center gap-2 md:flex md:bottom-10 md:right-8"
          variants={{
            rest: { opacity: 0, x: 12 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.35, delay: 0.18 }}
        >
          <span className="font-secondary text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">
            More
          </span>
          <span className="text-xl text-gray-900">↗</span>
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-white" />
      </motion.article>
    </Link>
  );
}