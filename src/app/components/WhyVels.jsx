"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyVels() {
  const items = [
    {
      title: "Holistic Learning Approach",
      subtitle: "A balanced blend of academics, arts, sports, and life skills.",
      image: "/holy-1.png",
    },
    {
      title: "Experienced Faculty Team",
      subtitle: "Dedicated educators nurturing excellence with personalised attention every day.",
      image: "/holy-2.png",
    },
    {
      title: "Future-Ready Curriculum",
      subtitle: "STEM, digital learning, and practical activities preparing students for tomorrow.",
      image: "/holy-3.png",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-primary text-[32px] font-semibold leading-tight text-[#272d94] md:text-[42px]">
            Why Vels Vidyashram
          </h2>
          <p className="mt-4 font-secondary text-[14px] font-medium text-gray-700 md:text-[16px]">
            Where strong values meet future-ready learning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-[24px]"
              style={{ background: "#272d94" }}
            >
              {/* Image Container - Responsive height via aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video md:h-[260px] lg:h-[400px]">
                <motion.img
                  src={itemData.image}
                  alt={itemData.title}
                  className="h-full w-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Seamless Gradient Overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, #1d258e 60%, #272d94 100%)",
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-grow flex-col px-7 pb-8 pt-2">
                <h3 className="font-primary text-[22px] font-semibold leading-tight text-white md:text-[24px]">
                  {itemData.title}
                </h3>

                <p className="mt-3 font-secondary text-[14px] leading-relaxed text-white/80 md:text-[15px]">
                  {itemData.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}