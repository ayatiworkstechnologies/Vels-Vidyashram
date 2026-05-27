"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <>
      <section className="bg-white px-4 py-8 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center md:mb-12">
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <RevealCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-6 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 font-secondary text-3xl font-bold text-gray-900 md:text-4xl">
            Discover More
          </h2>

          <p className="mb-6 font-secondary text-sm text-gray-500 md:text-base">
            Explore our upcoming events to see more of our vibrant school life.
          </p>

          <Link
            href="/dargaroad/eventsection"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-tertiary px-6 py-3 font-secondary text-sm font-bold text-white transition-colors duration-300 hover:bg-tertiary-dark md:text-base"
          >
            Upcoming Events
          </Link>
        </div>
      </section>
    </>
  );
}

function RevealCard({ item }) {
  return (
    <Link href="/dargaroad/photo-gallery" className="block">
      <motion.article
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        className="group relative h-[340px] w-full cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white font-primary shadow-sm sm:h-[370px] md:h-[400px]"
      >
        {/* Content Box */}
        <motion.div
          className="absolute left-0 top-0 z-20 flex h-[50%] w-full flex-col justify-center bg-tertiary p-5 text-white md:p-6"
          variants={{
            rest: { y: "-100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.h3
            className="font-primary text-lg font-bold text-white md:text-xl"
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
              className="mt-1 text-xs text-gray-300 md:text-sm"
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
              width: "45%",
              height: "40%",
              top: "55%",
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

        {/* Mobile Visible Title + More */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 md:hidden">
          <h3 className="font-primary text-lg font-bold text-white">
            {item.title}
          </h3>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-secondary text-[10px] font-black uppercase tracking-[0.22em] text-gray-900">
            More <span className="text-base leading-none">↗</span>
          </div>
        </div>

        {/* Desktop / Tablet More Button */}
        <motion.div
          className="absolute bottom-5 right-5 z-30 hidden items-center gap-2 md:flex md:bottom-8 md:right-8"
          variants={{
            rest: { opacity: 0, x: 10 },
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