"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function VelocityText() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  /* -------- SKEW (SOFTER ON MOBILE) -------- */
  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["25deg", "-25deg"] // reduced from 45deg
  );

  const skewX = useSpring(skewXRaw, {
    mass: 2,
    stiffness: 300,
    damping: 40,
  });

  /* -------- X MOVEMENT (RESPONSIVE) -------- */
  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -2500] // reduced from -4000
  );

  const x = useSpring(xRaw, {
    mass: 2,
    stiffness: 300,
    damping: 40,
  });

  return (
    <section
      ref={targetRef}
      className="relative bg-white text-neutral-950 py-16 md:py-24"
    >
      <div className="sticky top-16 md:top-0 flex items-center overflow-hidden">
        <motion.p
          style={{ skewX, x }}
          className="
            origin-bottom-left whitespace-nowrap uppercase font-secondary font-bold text-[#CCCCCC]
            text-3xl leading-[0.9]
            sm:text-4xl
            md:text-6xl md:leading-[0.85]
            lg:text-7xl
          "
        >
          Welcome to Vels Vidyashram, Thalambur where learning, values, and
          excellence come together.
        </motion.p>
      </div>
    </section>
  );
}
