"use client";

import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#252B78]">
          Accreditations & Associations
        </h2>

        <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Logo Image */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          max-w-[1100px]
          mx-auto
          overflow-hidden
          rounded-sm
          shadow-sm
        "
      >
        <motion.img
          src="/dargaroad/Icons.png"
          alt="Accreditations & Associations"
          className="w-full h-auto block"
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </motion.div>

    </section>
  );
}