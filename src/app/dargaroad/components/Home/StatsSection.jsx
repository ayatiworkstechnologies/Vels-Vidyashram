"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 2018,
    suffix: "",
    label: "The Year Established",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5M8 11h.01M12 11h.01M16 11h.01"
        />
      </svg>
    ),
  },

  {
    number: 3000,
    suffix: "+",
    label: "Students",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19.5A2.5 2.5 0 016.5 17H20"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19.5A2.5 2.5 0 016.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h7M8 11h5"
        />
      </svg>
    ),
  },

  {
    number: 300,
    suffix: "+",
    label: "Staff",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <circle cx="9" cy="7" r="4" />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 3.5a4 4 0 010 7.5M19 15a4 4 0 013 4v2"
        />
      </svg>
    ),
  },

  {
    number: 2000,
    suffix: "+",
    label: "Alumni",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 10l-10-5L2 10l10 5 10-5z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.5"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 10v6"
        />
      </svg>
    ),
  },

  {
    number: 30,
    suffix: "+",
    label: "Co-Curricular Programmes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l2.2 5.2 5.6.5-4.2 3.7 1.3 5.5-4.9-2.9-4.9 2.9 1.3-5.5-4.2-3.7 5.6-.5L12 3z"
        />
      </svg>
    ),
  },
];


// Counter Component
function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const duration = 1600;
    const steps = 50;
    const increment = value / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}


// Main Component
export default function StatsSection() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="text-center mb-10 sm:mb-12"
      >

      </motion.div>


      {/* Statistics Container */}
      <div className="max-w-[1250px] mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-[#243B82]
            via-[#1769A8]
            to-[#239BD2]
            shadow-[0_15px_40px_rgba(36,59,130,0.22)]
            px-3
            sm:px-5
            lg:px-8
            py-4
            sm:py-6
            lg:py-7
          "
        >

          {/* Decorative Glow */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-64
              h-64
              bg-white/10
              rounded-full
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              w-72
              h-72
              bg-cyan-300/10
              rounded-full
              blur-3xl
              pointer-events-none
            "
          />


          {/* Stats Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {stats.map((stat, index) => (

              <motion.div
                key={stat.label}

                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.95,
                }}

                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }

                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}

                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}

                className={`
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  min-h-[190px]
                  sm:min-h-[210px]
                  lg:min-h-[220px]
                  px-4
                  py-6
                  cursor-pointer
                  rounded-xl
                  transition-all
                  duration-300

                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-white/30"
                      : ""
                  }
                `}
              >

                {/* Hover Background */}
                <div
                  className="
                    absolute
                    inset-2
                    rounded-xl
                    bg-white/[0.07]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                />


                {/* Icon Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                  }}

                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    sm:w-[72px]
                    sm:h-[72px]
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    text-white
                    mb-4
                    shadow-[0_0_0_rgba(255,255,255,0)]
                    group-hover:bg-white/20
                    group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
                    transition-all
                    duration-300
                  "
                >
                  {stat.icon}
                </motion.div>


                {/* Number */}
                <motion.div
                  className="
                    relative
                    z-10
                    text-white
                    text-3xl
                    sm:text-4xl
                    lg:text-[42px]
                    font-extrabold
                    leading-none
                    tracking-tight
                  "
                >
                  <Counter
                    value={stat.number}
                    suffix={stat.suffix}
                    start={isInView}
                  />
                </motion.div>


                {/* Label */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}

                  animate={
                    isInView
                      ? {
                          opacity: 1,
                        }
                      : {}
                  }

                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.35,
                  }}

                  className="
                    relative
                    z-10
                    text-white/90
                    text-xs
                    sm:text-sm
                    font-medium
                    mt-3
                    leading-snug
                    max-w-[180px]
                  "
                >
                  {stat.label}
                </motion.div>


                {/* Bottom Hover Line */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-1/2
                    -translate-x-1/2
                    w-0
                    h-[2px]
                    bg-white
                    group-hover:w-20
                    transition-all
                    duration-300
                  "
                />

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}