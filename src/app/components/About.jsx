"use client";

import React, { useEffect, useRef, useState } from "react";

const DESKTOP_IMAGE_SRC = "/bg-3.png";
const MOBILE_BIO_IMAGE_SRC = "/bg-9.png";
const MOBILE_PORTRAIT_SRC = "/chairman.png";

// Native pixel dimensions of the desktop (landscape) photo.
const DESKTOP_IMAGE_WIDTH = 1280;
const DESKTOP_IMAGE_HEIGHT = 510;
const DESKTOP_ASPECT_RATIO = `${DESKTOP_IMAGE_WIDTH} / ${DESKTOP_IMAGE_HEIGHT}`;

// Native pixel dimensions of the mobile bio background photo (bg-9.png).
const MOBILE_IMAGE_WIDTH = 420;
const MOBILE_IMAGE_HEIGHT = 600;
const MOBILE_ASPECT_RATIO = `${MOBILE_IMAGE_WIDTH} / ${MOBILE_IMAGE_HEIGHT}`;

// Native pixel dimensions of the cutout portrait used in the mobile intro card.
const PORTRAIT_IMAGE_WIDTH = 420;
const PORTRAIT_IMAGE_HEIGHT = 375;

const TITLE_BLOCKS = [
  {
    label: "Founder and Chancellor",
    desc:
      "VELS University, Chennai (Vels Institute of Science Technology and Advanced Studies - VISTAS)",
  },
  {
    label: "Chairman",
    desc: "VELS Group of Institutions (India, Singapore, UK and UAE) and Vels Film International Ltd",
  },
  {
    label: "President",
    desc: "Tamil Nadu Olympic Association & Taekwondo Federation of India",
  },
  {
    label: "Member",
    desc: "Hindi Advisory Committee, Ministry of Women and Child Development, Government of India",
  },
];

const BIO_CONTENT = [
  {
    type: "text",
    value:
      "In a world where the journey from humble beginnings to remarkable achievements often feels unattainable, Dr. Ishari K. Ganesh emerges as a beacon of hope and inspiration.",
  },
  {
    type: "text",
    value:
      "Born in 1966 to Ishari Velan and Pushpa, Dr. Ishari K. Ganesh's early life was marked by hardship. Following the untimely passing of his father, the family faced significant financial struggles, compounded by the pressures of rent and tuition fees. However, these challenges ignited his determination. At just 18, he embraced the responsibility of supporting his family, motivated by the belief that he had nothing to lose and everything to gain.",
  },
  {
    type: "text",
    value:
      "Dr. Ishari K. Ganesh's pivotal career shift came when he chose the path of self-employment over immediate financial security. In 1992, he founded Vels College of Pharmacy in Mylapore with just 36 students. This modest beginning set the stage for the Vels Group of Institutions. With a bank loan, he acquired property in Pallavaram, transforming Vels College into a multi-disciplinary educational hub.",
  },
  {
    type: "text",
    value:
      "By 2008, Dr. Ishari K. Ganesh had successfully consolidated his efforts into the University of Vels, which now includes a diverse range of institutions, such as colleges of medicine, engineering, arts, science, and physiotherapy. The Vels Education Group has expanded its reach to manage dental and medical colleges and schools, with a presence extending to Singapore and England. Dr. Ishari K. Ganesh was also a pioneer in introducing marine science courses within India's private sector.",
  },
  {
    type: "text",
    value:
      "His unwavering commitment to accessible education is evident in the numerous scholarships he has established, supporting sports, ex-servicemen, and children of the film industry. These initiatives have empowered students from modest backgrounds, providing them with essential resources to pursue their educational aspirations.",
  },
  { type: "heading", value: "Chairman's Message" },
  { type: "quote", value: "\u201cSky is the limit. Together let us achieve more.\u201d" },
  {
    type: "text",
    value:
      "Guided by my father who inspired me to \u201cDream big, act fast, and think ahead,\u201d we are committed to dreaming bigger, acting faster, and\u2014most importantly\u2014thinking better. This mindset equips us to lead in education, healthcare, and entertainment, setting new benchmarks for excellence.",
  },
  {
    type: "text",
    value:
      "At Vels Group of Institutions, we embody the spirit of this dynamic India across our diverse sectors: education, healthcare, and entertainment. Our mission transcends the creation of outstanding institutions; it is about fostering a brighter future for our country and the world. We are committed to empowering individuals to realize their dreams, take charge of their destinies, and unlock their unique potentials.",
  },
];

// Where the crossfade between hero and bio finishes on DESKTOP
// (as a fraction of total scroll progress through the desktop section).
const CROSSFADE_END = 0.16;

// On the MOBILE bio card, this fraction of scroll progress is spent on the
// right-to-left slide-in of the text. The remainder scrolls the text
// vertically inside the card so the long copy is fully reachable.
const MOBILE_SLIDE_FRACTION = 0.25;
const MOBILE_SLIDE_START_PERCENT = 100;

function clamp01(n) {
  return Math.min(Math.max(n, 0), 1);
}

function renderBioBlocks(blocks, { headingClass, quoteClass, textClass }) {
  return blocks.map((block, i) => {
    if (block.type === "heading") {
      return (
        <h3 key={i} className={headingClass}>
          {block.value}
        </h3>
      );
    }
    if (block.type === "quote") {
      return (
        <p key={i} className={quoteClass}>
          {block.value}
        </p>
      );
    }
    return (
      <p key={i} className={textClass}>
        {block.value}
      </p>
    );
  });
}

export default function ChancellorProfile() {
  // ---- Desktop (bg-3.png) refs/state — unchanged behavior ----
  const sectionRef = useRef(null);
  const bioWindowRef = useRef(null);
  const bioTextRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [bioMaxScroll, setBioMaxScroll] = useState(0);

  // ---- Mobile bio card (bg-9.png) refs/state — new, independent section ----
  const mobileSectionRef = useRef(null);
  const mobileBioWindowRef = useRef(null);
  const mobileBioTextRef = useRef(null);
  const [mobileProgress, setMobileProgress] = useState(0);
  const [mobileBioMaxScroll, setMobileBioMaxScroll] = useState(0);

  // Measure how far the desktop bio text needs to travel to fully reveal itself.
  useEffect(() => {
    function measure() {
      if (bioTextRef.current && bioWindowRef.current) {
        const max =
          bioTextRef.current.scrollHeight - bioWindowRef.current.clientHeight;
        setBioMaxScroll(Math.max(max, 0));
      }
    }
    measure();
    const raf = requestAnimationFrame(measure);
    const timeout = setTimeout(measure, 300);
    const ro = new ResizeObserver(measure);
    if (bioWindowRef.current) ro.observe(bioWindowRef.current);
    if (bioTextRef.current) ro.observe(bioTextRef.current);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Same measurement, for the mobile bio card.
  useEffect(() => {
    function measure() {
      if (mobileBioTextRef.current && mobileBioWindowRef.current) {
        const max =
          mobileBioTextRef.current.scrollHeight -
          mobileBioWindowRef.current.clientHeight;
        setMobileBioMaxScroll(Math.max(max, 0));
      }
    }
    measure();
    const raf = requestAnimationFrame(measure);
    const timeout = setTimeout(measure, 300);
    const ro = new ResizeObserver(measure);
    if (mobileBioWindowRef.current) ro.observe(mobileBioWindowRef.current);
    if (mobileBioTextRef.current) ro.observe(mobileBioTextRef.current);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Track scroll progress through both sections (whichever is present/visible
  // contributes real height; the hidden one just reports 0 harmlessly).
  useEffect(() => {
    function onScroll() {
      const desktopEl = sectionRef.current;
      if (desktopEl) {
        const rect = desktopEl.getBoundingClientRect();
        const total = desktopEl.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        setProgress(total > 0 ? clamp01(scrolled / total) : 0);
      }

      const mobileEl = mobileSectionRef.current;
      if (mobileEl) {
        const rect = mobileEl.getBoundingClientRect();
        const total = mobileEl.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        setMobileProgress(total > 0 ? clamp01(scrolled / total) : 0);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Desktop crossfade math (unchanged) ----
  const heroProgress = clamp01(progress / CROSSFADE_END);
  const heroOpacity = 1 - heroProgress;
  const heroTranslateY = -heroProgress * 24;
  const bioOpacity = clamp01((progress - 0.05) / (CROSSFADE_END - 0.02));
  const bioSectionProgress = clamp01(
    (progress - CROSSFADE_END) / (1 - CROSSFADE_END)
  );
  const bioTranslateY = -bioSectionProgress * bioMaxScroll;

  // ---- Mobile bio card math: slide in from the right, then scroll ----
  const mobileSlideProgress = clamp01(mobileProgress / MOBILE_SLIDE_FRACTION);
  const mobileScrollProgress = clamp01(
    (mobileProgress - MOBILE_SLIDE_FRACTION) / (1 - MOBILE_SLIDE_FRACTION)
  );
  const mobileTranslateXPercent =
    (1 - mobileSlideProgress) * MOBILE_SLIDE_START_PERCENT;
  const mobileTranslateY = -mobileScrollProgress * mobileBioMaxScroll;

  return (
    <>
      {/* =========================================================
          MOBILE ONLY — intro card, then a separate bio image card.
          ========================================================= */}
      <div className="sm:hidden w-full bg-white">
        {/* Bio card: bg-9.png as background, ALL content (name, titles,
            and every bio paragraph) filled inside the image, slider rail
            outside the image. Pinned while the text slides in from the
            right and then scrolls internally. */}
        <section
          ref={mobileSectionRef}
          className="relative w-full bg-white"
          style={{ height: "420vh" }}
        >
          <div className="sticky top-0 py-4 flex items-center justify-center px-2">
            <div className="relative w-full flex items-stretch gap-2">
              <div
                className="relative flex-1 min-w-0 max-h-[85vh] rounded-[20px] overflow-hidden"
                style={{ aspectRatio: MOBILE_ASPECT_RATIO }}
              >
                <img
                  src={MOBILE_BIO_IMAGE_SRC}
                  alt="Vels University campus"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Full-height scrim so the paragraphs stay readable
                    against the building/lawn photo behind them. */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/65 pointer-events-none" />

                <div
                  ref={mobileBioWindowRef}
                  className="absolute inset-0 overflow-hidden"
                >
                  <div
                    ref={mobileBioTextRef}
                    className="px-6 py-8"
                    style={{
                      transform: `translateX(${mobileTranslateXPercent}%) translateY(${mobileTranslateY}px)`,
                    }}
                  >
                    <h1 className="text-white font-extrabold leading-tight text-xl mb-4">
                      Dr. Ishari K. Ganesh,
                      <br /> M.Com., MBA., M.L., M.Phil., Ph.D.
                    </h1>

                    <div className="space-y-3 mb-6">
                      {TITLE_BLOCKS.map((block) => (
                        <div key={block.label}>
                          <p className="text-orange-400 font-bold uppercase tracking-wide text-[11px]">
                            {block.label}
                          </p>
                          <p className="text-white/90 text-xs mt-0.5">
                            {block.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-orange-400 font-bold uppercase tracking-wide text-xs">
                      Dr. Ishari K. Ganesh
                    </p>
                    <p className="text-white/80 text-xs mt-1 mb-1">
                      Founder &amp; Chancellor, Vels University | Chairman,
                      Vels Group of Institutions
                    </p>

                    {renderBioBlocks(BIO_CONTENT, {
                      headingClass:
                        "text-white font-bold text-lg mt-8 mb-2",
                      quoteClass:
                        "text-orange-300 italic font-semibold text-base my-4",
                      textClass:
                        "text-white/85 text-sm leading-relaxed mb-4",
                    })}
                  </div>
                </div>
              </div>

              {/* Progress rail — outside the image */}
              <div className="relative w-[3px] shrink-0 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full bg-orange-400 rounded-full"
                  style={{ height: `${mobileProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portrait: chairman.png now comes AFTER the bio card, as its
            own standalone block. */}
        <div className="w-full flex items-center justify-center px-4 py-8">
          <img
            src={MOBILE_PORTRAIT_SRC}
            alt="Dr. Ishari K. Ganesh"
            className="w-[100%] h-auto object-contain"
            style={{
              aspectRatio: `${PORTRAIT_IMAGE_WIDTH} / ${PORTRAIT_IMAGE_HEIGHT}`,
            }}
          />
        </div>
      </div>

      {/* =========================================================
          DESKTOP ONLY — original bg-3.png crossfade hero/bio box.
          ========================================================= */}
      <section
        ref={sectionRef}
        className="hidden sm:block relative w-full bg-white"
        style={{ height: "420vh" }}
      >
        <div className="sticky top-0 py-4 sm:py-6 flex items-center justify-center px-2 sm:px-6 md:px-8 bg-white">
          <div className="relative w-full max-w-6xl flex items-stretch gap-2 sm:gap-3 md:gap-4">
            <div
              className="relative flex-1 min-w-0 max-h-[85vh] rounded-[20px] overflow-hidden"
              style={{ aspectRatio: DESKTOP_ASPECT_RATIO }}
            >
              <img
                src={DESKTOP_IMAGE_SRC}
                alt="Vels University campus with Dr. Ishari K. Ganesh"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 top-0 h-1/3 pointer-events-none" />

              {/* HERO VIEW */}
              <div
                className="absolute inset-0 flex flex-col justify-center overflow-y-auto px-10 md:px-14 pt-6 pb-6 pointer-events-none"
                style={{
                  opacity: heroOpacity,
                  transform: `translateY(${heroTranslateY}px)`,
                }}
              >
                <h1 className="text-white font-extrabold leading-tight text-2xl md:text-3xl lg:text-4xl max-w-2xl">
                  Dr. Ishari K. Ganesh,
                  <br /> M.Com., MBA., M.L., M.Phil., Ph.D.
                </h1>

                <div className="mt-5 space-y-3 max-w-xl">
                  {TITLE_BLOCKS.map((block) => (
                    <div key={block.label}>
                      <p className="text-orange-400 font-bold uppercase tracking-wide text-sm">
                        {block.label}
                      </p>
                      <p className="text-white/90 text-sm mt-0.5">
                        {block.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BIO VIEW (revealed on scroll, scrolls internally) */}
              <div
                ref={bioWindowRef}
                className="absolute inset-0 overflow-hidden"
                style={{ opacity: bioOpacity }}
              >
                <div
                  ref={bioTextRef}
                  className="px-10 md:px-16 py-10 md:py-14 max-w-3xl"
                  style={{ transform: `translateY(${bioTranslateY}px)` }}
                >
                  <p className="text-orange-400 font-bold uppercase tracking-wide text-sm">
                    Dr. Ishari K. Ganesh
                  </p>
                  <p className="text-white/80 text-sm mt-1 mb-1">
                    Founder &amp; Chancellor, Vels University | Chairman,
                    Vels Group of Institutions
                  </p>

                  {renderBioBlocks(BIO_CONTENT, {
                    headingClass: "text-white font-bold text-xl mt-8 mb-2",
                    quoteClass:
                      "text-orange-300 italic font-semibold text-lg my-4",
                    textClass: "text-white/85 text-base leading-relaxed mb-4",
                  })}
                </div>
              </div>
            </div>

            {/* Progress rail — outside the image */}
            <div className="relative w-1 shrink-0 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-orange-400 rounded-full"
                style={{ height: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}