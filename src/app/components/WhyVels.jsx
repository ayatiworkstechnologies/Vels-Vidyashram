"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Holistic Learning Approach",
    subtitle: "A balanced blend of academics, arts, sports, and life skills.",
    image: "/holy-1.png",
  },
  {
    title: "Sports & Arts Excellence",
    subtitle:
      "Cultivating talents in sports and arts with dedicated coaching and state-of-the-art facilities.",
    image: "/common-page.png",
  },
  {
    title: "Future-Ready Curriculum",
    subtitle:
      "STEM, digital learning, and practical activities preparing students for tomorrow.",
    image: "/holy-3.png",
  },
];

export default function WhyVels() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <h2 className="font-primary text-[32px] font-semibold leading-tight text-[#272d94] md:text-[42px]">
            Why Vels Vidyashram
          </h2>

          <p className="mt-4 font-secondary text-[14px] font-medium text-gray-700 md:text-[16px]">
            Where strong values meet future-ready learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-[24px] bg-[#272d94]"
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden sm:h-[320px] md:h-[300px] lg:h-[400px]">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <div
                  className="absolute inset-x-0 bottom-0 h-28"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, #1d258e 60%, #272d94 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col px-6 pb-8 pt-2 lg:px-7">
                <h3 className="font-primary text-[20px] font-semibold leading-tight text-white lg:text-[24px]">
                  {card.title}
                </h3>

                <p className="mt-3 font-secondary text-[14px] leading-relaxed text-white/80 lg:text-[15px]">
                  {card.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}