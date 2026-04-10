"use client";

import { motion } from "framer-motion";

export default function WhyVels() {
  const items = [
    {
      title: "Holistic Learning Approach",
      subtitle:
        "A balanced blend of academics, arts, sports, and life skills.",
      image: "/holy-1.png",
    },
    {
      title: "Experienced Faculty Team",
      subtitle:
        "Dedicated educators nurturing excellence with personalised attention every day.",
      image: "/holy-2.png",
    },
    {
      title: "Future-Ready Curriculum",
      subtitle:
        "STEM, digital learning, and practical activities preparing students for tomorrow.",
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
    <section className="bg-white py-8 ">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-primary text-[32px] font-semibold leading-none text-primary md:text-[36px]">
            Why Vels Vidyashram
          </h2>
          <p className="mt-5 font-secondary text-[13px] font-medium text-black md:text-[15px]">
            Where strong values meet future-ready learning.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[20px]"
              style={{ background: "#272d94" }}
            >
              {/* Image — top portion, fades into blue below */}
              <div className="relative h-[220px] overflow-hidden md:h-[230px] lg:h-[426px]">
                <motion.img
                  src={itemData.image}
                  alt={itemData.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/*
                  Seamless fade: image fades into the card's background colour.
                  Starts transparent at the top of the overlay, fully opaque
                  (#272d94) at the very bottom — no separate panel, no line.
                */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[55px]"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, #1d258e 55%, #272d94 100%)",
                  }}
                />
              </div>

              {/* Text content — sits directly on the card background */}
              <div className="px-6 pb-7 pt-5">
                <h3 className="font-primary text-[22px] font-semibold leading-[1.25] text-white">
                  {itemData.title}
                </h3>

                <p className="mt-4 max-w-[92%] font-secondary text-[14px] leading-[1.5] text-white/90">
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