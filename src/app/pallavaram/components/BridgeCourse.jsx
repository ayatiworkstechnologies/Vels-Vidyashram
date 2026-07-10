"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BridgeCourseBanner() {
  return (
    /*
      Outer section — light/white page background, provides the
      overflow space the girl cutout needs above the card.
    */
    <section className="w-full bg-white py-14 px-4 md:px-8 font-primary">
      <div className="max-w-4xl mx-auto">

        {/*
          Overflow wrapper — must NOT clip overflow so the girl
          can stick out above and to the right of the blue card.
        */}
        <div className="relative">

          {/* ── GIRL CUTOUT ──────────────────────────────────────────
              Positioned absolutely so she sits at the right edge,
              bottom-aligned to the card bottom, and overflows upward.
              z-20 keeps her above the card.
          ─────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="absolute z-20 pointer-events-none select-none"
            style={{
              right: "-12px",   /* slightly outside right edge of card */
              bottom: 0,
              width: "clamp(180px, 28vw, 260px)",
              height: "clamp(220px, 34vw, 320px)",
            }}
          >
            <Image
              src="/pallavaram/course.png"
              alt="Student representative"
              fill
              priority
              sizes="260px"
              className="object-contain object-bottom"
            />
          </motion.div>

          {/* ── BLUE BANNER CARD ──────────────────────────────────── */}
          <div
            className="relative z-10 rounded-[1.6rem] flex flex-row items-stretch overflow-hidden"
            style={{
              background: "#232A95",
              minHeight: "clamp(160px, 20vw, 200px)",
            }}
          >

            {/* ── LEFT BLOCK: heading + tag + button ── */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col justify-center gap-3 pl-7 pr-6 py-7 shrink-0"
              
            >
              {/* Heading */}
              <h2
                className="font-extrabold tracking-[0.1em] font-primary"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
                  color: "#ffffff",
                }}
              >
                Bridge Course<br />Section
              </h2>

              {/* JEE / NEET / CBSE tag */}
              <p
                className="font-semibold tracking-[0.14em] uppercase"
                style={{
                  fontSize: "clamp(9px, 1.1vw, 11px)",
                  color: "rgba(180,190,255,0.9)",
                }}
              >
                JEE&nbsp;/&nbsp;NEET&nbsp;/&nbsp;CBSE
              </p>

              {/* Register Now — white pill button */}
              {/* <button
                className="mt-1 flex items-center gap-2 rounded-full bg-white font-semibold transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] w-max"
                style={{
                  color: "#232A95
                  fontSize: "clamp(11px, 1.3vw, 13px)",
                  padding: "8px 22px",
                }}
              >
                Register Now
                <span aria-hidden="true" style={{ fontSize: "1em" }}>→</span>
              </button> */}
            </motion.div>

            {/* ── MIDDLE BLOCK: Hurry! Admissions Open ── */}
            {/*
              Two thin horizontal rules + stacked text.
              Pushed right toward the girl image.
              Right padding leaves room for the girl (she is ~28% wide).
            */}
            <div
              className="hidden sm:flex flex-1 items-center justify-center"
              style={{ paddingRight: "clamp(160px, 26vw, 240px)" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex flex-col items-start gap-[2px]"
              >
                {/* Top rule + "Hurry!" */}
                <div className="flex items-center gap-2">
                  <div
                    className="shrink-0"
                    style={{ height: "1px", width: "clamp(28px, 4vw, 48px)", background: "rgba(255,255,255,0.35)" }}
                  />
                  <span
                    className="italic font-light text-white font-size-[30px] font-weight-200"
                    
                  >
                    Hurry!
                  </span>
                </div>

                {/* "Admissions" */}
                <span
                  className="font-light  uppercase"
                  style={{ color: "rgba(255,255,255,0.93)", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", lineHeight: 1.15 }}
                >
                  Admissions
                </span>

                {/* "Open" + bottom rule */}
                <div className="flex items-center gap-2 w-full">
                  <span
                    className="font-light  uppercase"
                    style={{ color: "rgba(255,255,255,0.93)", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", lineHeight: 1.15 }}
                  >
                    Open
                  </span>
                  <div
                    className="flex-1 shrink-0"
                    style={{ height: "1px", background: "rgba(255,255,255,0.35)", minWidth: "clamp(20px, 3vw, 40px)" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}