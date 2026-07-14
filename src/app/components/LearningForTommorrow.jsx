import React from "react";

/**
 * LearningBanner
 * ──────────────
 * Matches the "Learning for Tomorrow" UI from the screenshot:
 *  • Deep-blue rounded card (border-radius 40px) with max-w-[1380px]
 *  • Left half  → dark blue gradient overlay + text + Register button
 *  • Right half → student photo(s) cut-in at the right edge, slight circular crop on far-right image
 *  • Mobile: stacks vertically, image hidden or shown below text
 *
 * Replace the src values with your actual asset paths.
 */

const LearningBanner = () => {
  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      {/* ── Outer card ───────────────────────────────────────────── */}
      <div
        className="
          relative mx-auto w-full max-w-[1200px]
          overflow-hidden rounded-[40px]
          bg-[#2E3192]
          min-h-[320px] md:min-h-[380px]
          flex flex-col md:flex-row
        "
      >
        {/* ── Background corridor image (full bleed, left side) ─── */}
        <img
          src="/bg-5.png"
          alt=""
          aria-hidden="true"
          className="
            absolute inset-0 h-full w-full object-cover
            object-left opacity-60
          "
        />

        {/* ── Blue-to-transparent gradient overlay ────────────────
              Covers the left ~60% so text is always readable        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #2E3192 0%, #2E3192 45%, rgba(46,49,146,0.80) 62%, rgba(46,49,146,0) 80%)",
          }}
        />

        {/* ── Text content ────────────────────────────────────────── */}
        <div
          className="
            relative z-10
            flex flex-col justify-center
            px-7 py-10
            md:w-[55%] md:px-14 md:py-12
            lg:px-20
          "
        >
          <h1
            className="
              text-[1.75rem] font-bold leading-snug tracking-tight text-white
              sm:text-3xl md:text-4xl lg:text-[2.6rem]
            "
          >
            Learning for Tomorrow
          </h1>

          <p
            className="
              mt-4 max-w-[520px] text-[0.9rem] leading-relaxed text-white/90
              sm:text-[0.95rem] md:mt-5 md:text-[1.05rem]
            "
          >
            Our learning ecosystem is designed to prepare students for careers
            that may not even exist today. Through AI-powered education,
            Robotics, STEM exploration, project-based learning, innovation
            challenges, and experiential learning, students develop curiosity,
            confidence, and future-ready skills.
          </p>

          <a
            href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
            className="
              mt-8 inline-flex w-fit
              items-center justify-center
              rounded-full bg-white
              px-9 py-3.5
              text-[0.95rem] font-semibold text-[#2E3192]
              transition-all duration-200
              hover:bg-white/90 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2E3192]
              md:mt-10 md:px-10 md:py-4 md:text-base
            "
          >
            Register
          </a>
        </div>

        {/* ── Student images ───────────────────────────────────────
              Two images placed in the right column.
              • First student  : left-of-pair, visible from mid-md up
              • Second student : right-edge, slightly "popping out" with
                                 a full-height circle crop to match screenshot  */}
        <div
          className="
            relative z-10
            hidden md:flex
            md:w-[45%]
            items-flex-end justify-end
            self-stretch
          "
        >
          {/* Inner student (left of pair) */}
          <div
            className="
              absolute bottom-0
              right-[clamp(160px,23%,260px)]
              h-[92%]
              overflow-hidden
            "
            style={{ width: "clamp(160px, 20%, 230px)" }}
          >
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningBanner;