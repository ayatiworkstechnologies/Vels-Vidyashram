"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const campuses = [
  {
    id: 1,
    name: "Thalambur Campus",
    image: "/thalambur.png",
    href: "/thalambur",
  },
  {
    id: 2,
    name: "Pallavaram Campus",
    image: "/new-mob.png",
    href: "/pallavaram",
  },
  {
    id: 3,
    name: "Darga Road Campus",
    image: "/dargaroad/common-page.jpg",
    href: "/dargaroad",
  },
  {
    id: 4,
    name: "Cantonment Campus",
    image: "/cantonment.png",
    href: "/cantonment",
  },
];

/* =========================
   MOBILE AND TABLET CARD
========================= */

const MobileCard = ({ campus, index, inView }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 25,
            }
      }
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full"
    >
      <Link
        href={campus.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group mx-auto flex w-full max-w-[560px]
          items-center gap-4 rounded-2xl
          border border-gray-100 bg-white p-3
          shadow-[0_10px_35px_rgba(15,23,42,0.08)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]
        "
      >
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
          <Image
            src={campus.image}
            alt={campus.name}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h3 className="text-sm font-bold uppercase leading-tight text-[#152f5c] sm:text-base">
            {campus.name}
          </h3>

          <span className="mt-2 inline-block text-[10px] font-black uppercase tracking-wider text-[#F7931E] sm:text-xs">
            Explore Campus →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

/* =========================
   DESKTOP CARD
========================= */

const DesktopCard = ({ campus, index, phase }) => {
  /*
   * Final card centres:
   * 12.5%, 37.5%, 62.5%, 87.5%
   *
   * This keeps all four cards equally distributed
   * and centred within the available container.
   */
  const finalLeftPosition = `${12.5 + index * 25}%`;

  const variants = {
    initial: {
      left: "50%",
      x: "-50%",
      y: -550,
      opacity: 0,
      scale: 0.9,
    },

    dropped: {
      left: "50%",
      x: "-50%",
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },

    split: {
      left: finalLeftPosition,
      x: "-50%",
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.06,
        type: "spring",
        damping: 24,
        stiffness: 90,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={phase}
      className="
        group absolute top-0
        w-[clamp(205px,20vw,280px)]
      "
      style={{
        zIndex: campuses.length - index,
      }}
    >
      <Link
        href={campus.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="
            relative overflow-hidden
            rounded-[2rem] border-[8px] border-white
            shadow-[0_25px_65px_rgba(15,23,42,0.22)]
            transition-all duration-500
            group-hover:-translate-y-5
            group-hover:shadow-[0_35px_75px_rgba(15,23,42,0.3)]
            xl:rounded-[2.5rem]
            xl:border-[10px]
          "
        >
          <div className="relative aspect-[3/4.5]">
            <Image
              src={campus.image}
              alt={campus.name}
              fill
              sizes="(min-width: 1536px) 280px, (min-width: 1024px) 20vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="
                absolute inset-0 flex flex-col
                justify-end bg-gradient-to-t
                from-[#0a1931]/95 via-[#0a1931]/20
                to-transparent px-4 pb-6 text-center
                xl:px-6 xl:pb-8
              "
            >
              <h3 className="mb-4 text-base font-black uppercase leading-tight text-white xl:text-xl">
                {campus.name}
              </h3>

              <span
                className="
                  mx-auto rounded-full bg-white
                  px-5 py-2 text-[10px] font-black
                  uppercase tracking-wide text-[#0a1931]
                  transition-colors duration-300
                  group-hover:bg-[#F7931E]
                  group-hover:text-white
                  xl:px-6 xl:text-xs
                "
              >
                Explore
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */

export default function CampusSection() {
  const [phase, setPhase] = useState("initial");

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  useEffect(() => {
    let splitTimer;

    if (inView) {
      setPhase("dropped");

      splitTimer = setTimeout(() => {
        setPhase("split");
      }, 850);
    } else {
      setPhase("initial");
    }

    return () => {
      if (splitTimer) {
        clearTimeout(splitTimer);
      }
    };
  }, [inView]);

  return (
    <section
      ref={ref}
      className="
        relative w-full overflow-hidden
        bg-[#fdfaf5] py-14
        md:py-16  lg:py-20
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/section-3.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Heading content */}
      <div
        className="
          relative z-20 mx-auto mb-10
          w-full max-w-7xl px-5 text-center
          sm:px-6 md:mb-14
          lg:mb-20 lg:px-8
        "
      >
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mx-auto max-w-5xl
            text-2xl font-black uppercase
            leading-tight text-secondary
            sm:text-3xl md:text-4xl
            lg:text-[34px]
          "
        >
          Four Campuses. One Vision. Excellence Everywhere.
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mx-auto mt-6 max-w-6xl
            text-center text-sm font-normal
            leading-7 text-[#6B6B6B]
            sm:text-base md:mt-8
            md:text-lg md:leading-8
            lg:mt-10 lg:text-[20px]
            lg:leading-[1.55]
          "
        >
          Vels Vidyashram proudly serves students through four vibrant
          campuses, each committed to delivering the same high standards of
          education, innovation, and holistic development. Every campus is
          equipped with modern infrastructure, advanced learning technologies,
          experienced faculty, and a safe, student-centric environment.
        </motion.p>
      </div>

      {/* Mobile and tablet layout */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:hidden">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-4">
          {campuses.map((campus, index) => (
            <MobileCard
              key={campus.id}
              campus={campus}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="relative z-20 mx-auto hidden w-full max-w-7xl px-6 lg:block xl:px-8">
        <div className="relative mx-auto h-[430px] w-full">
          {campuses.map((campus, index) => (
            <DesktopCard
              key={campus.id}
              campus={campus}
              index={index}
              phase={phase}
            />
          ))}
        </div>
      </div>
    </section>
  );
}