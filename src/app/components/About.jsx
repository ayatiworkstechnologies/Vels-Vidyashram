"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const DESKTOP_IMAGE_SRC = "/bg-3.png";
const MOBILE_IMAGE_SRC = "/bg-9.png";
const MOBILE_PORTRAIT_SRC = "/chairman.png";

const TITLE_BLOCKS = [
  {
    label: "Founder and Chancellor",
    desc:
      "VELS University, Chennai (Vels Institute of Science Technology and Advanced Studies - VISTAS)",
  },
  {
    label: "Chairman",
    desc:
      "VELS Group of Institutions (India, Singapore, UK and UAE) and Vels Film International Ltd",
  },
  {
    label: "President",
    desc:
      "Tamil Nadu Olympic Association & Taekwondo Federation of India",
  },
  {
    label: "Member",
    desc:
      "Hindi Advisory Committee, Ministry of Women and Child Development, Government of India",
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
      "By 2008, Dr. Ishari K. Ganesh had successfully consolidated his efforts into the University of Vels, which now includes a diverse range of institutions, such as colleges of medicine, engineering, arts, science, and physiotherapy. The Vels Education Group has expanded its reach to manage dental and medical colleges and schools, with a presence extending to Singapore and England.",
  },
  {
    type: "text",
    value:
      "His unwavering commitment to accessible education is evident in the numerous scholarships he has established, supporting sports, ex-servicemen, and children of the film industry.",
  },
  {
    type: "heading",
    value: "Chairman's Message",
  },
  {
    type: "quote",
    value: "“Sky is the limit. Together let us achieve more.”",
  },
  {
    type: "text",
    value:
      "Guided by my father who inspired me to “Dream big, act fast, and think ahead,” we are committed to dreaming bigger, acting faster, and—most importantly—thinking better.",
  },
  {
    type: "text",
    value:
      "At Vels Group of Institutions, we embody the spirit of this dynamic India across education, healthcare, and entertainment. Our mission is to empower individuals to realize their dreams and unlock their unique potential.",
  },
];

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function renderBioBlocks(blocks) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === "heading") {
      return (
        <h3
          key={key}
          className="
            mb-3 mt-8
            break-words
            text-lg font-bold leading-tight text-white
            sm:text-xl
          "
        >
          {block.value}
        </h3>
      );
    }

    if (block.type === "quote") {
      return (
        <p
          key={key}
          className="
            my-4
            break-words
            text-base font-semibold italic leading-relaxed
            text-orange-300
            sm:text-lg
          "
        >
          {block.value}
        </p>
      );
    }

    return (
      <p
        key={key}
        className="
          mb-4
          break-words
          text-sm leading-6 text-white/90
          sm:text-base sm:leading-7
        "
      >
        {block.value}
      </p>
    );
  });
}

export default function ChancellorProfile() {
  const sectionRef = useRef(null);
  const textWindowRef = useRef(null);
  const textContentRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [maxTextScroll, setMaxTextScroll] = useState(0);

  const measureContent = () => {
    const textWindow = textWindowRef.current;
    const textContent = textContentRef.current;

    if (!textWindow || !textContent) {
      return;
    }

    const visibleHeight = textWindow.clientHeight;
    const fullContentHeight = textContent.scrollHeight;

    const calculatedScrollDistance = Math.max(
      fullContentHeight - visibleHeight,
      0,
    );

    setMaxTextScroll(calculatedScrollDistance);
  };

  useLayoutEffect(() => {
    measureContent();
  }, []);

  useEffect(() => {
    const frameOne = requestAnimationFrame(() => {
      measureContent();

      requestAnimationFrame(() => {
        measureContent();
      });
    });

    const delayedMeasurement = setTimeout(() => {
      measureContent();
    }, 500);

    const resizeObserver = new ResizeObserver(() => {
      measureContent();
    });

    if (textWindowRef.current) {
      resizeObserver.observe(textWindowRef.current);
    }

    if (textContentRef.current) {
      resizeObserver.observe(textContentRef.current);
    }

    window.addEventListener("resize", measureContent);

    return () => {
      cancelAnimationFrame(frameOne);
      clearTimeout(delayedMeasurement);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureContent);
    };
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const sectionRect = section.getBoundingClientRect();

        const totalScrollableDistance = Math.max(
          section.offsetHeight - window.innerHeight,
          1,
        );

        const travelledDistance = Math.max(-sectionRect.top, 0);

        const nextProgress = clamp(
          travelledDistance / totalScrollableDistance,
        );

        setProgress(nextProgress);
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  /*
   * The text starts moving after a small entry pause
   * and reaches the exact bottom before the section ends.
   */
  const textProgress = clamp((progress - 0.04) / 0.91);

  const textTranslateY = -(textProgress * maxTextScroll);

  // Give the pinned card enough travel for its actual text instead of
  // multiplying very tall desktop viewports by a fixed 460vh.
  const sectionScrollDistance = Math.max(
    Math.ceil(maxTextScroll * 2.25),
    1600,
  );

  return (
    <>
    {/* Mobile chairman portrait */}
      <div
        className="
          flex w-full
          items-center justify-center
          bg-white
          px-4 py-8 pb-2
          sm:hidden
        "
      >
        <img
          src={MOBILE_PORTRAIT_SRC}
          alt="Dr. Ishari K. Ganesh"
          className="
            h-auto w-auto
            max-w-[420px]
            object-contain
          "
        />
      </div>
      <section
        ref={sectionRef}
        className="relative w-full bg-white"
        style={{
          height: `calc(100svh + ${sectionScrollDistance}px)`,
        }}
      >
        <div
          className="
            sticky top-0
            flex h-screen w-full
            items-center justify-center
            overflow-hidden
            px-3 py-5
            sm:px-6 sm:py-6
            lg:px-10
          "
        >
          <div
            className="
              flex h-[82svh] w-full
              max-w-[1920px]
              items-stretch
              gap-3
              sm:h-[min(80svh,760px)]
              md:gap-4
            "
          >
            {/* Main card */}
            <article
              className="
                relative min-w-0 flex-1
                overflow-hidden
                rounded-[24px]
                bg-slate-700
                shadow-[0_25px_80px_rgba(15,23,42,0.16)]
                md:rounded-[30px]
              "
            >
              {/* Background image */}
              <picture className="absolute inset-0 block h-full w-full">
                <source
                  media="(max-width: 639px)"
                  srcSet={MOBILE_IMAGE_SRC}
                />

                <img
                  src={DESKTOP_IMAGE_SRC}
                  alt="Dr. Ishari K. Ganesh"
                  onLoad={measureContent}
                  className="
                    h-full w-full
                    object-cover object-center
                    sm:scale-[1.15]
                  "
                />
              </picture>

              {/*
                Transparent readability layer.
                This is not a solid black background.
              */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-y-0 left-0
                  w-full
                  bg-gradient-to-r
                  from-slate-950/85
                  via-slate-900/55
                  to-slate-900/20
                  sm:w-[75%]
                  sm:from-slate-950/80
                  sm:via-slate-900/45
                  sm:to-transparent
                  md:w-[72%]
                  lg:w-[68%]
                "
              />

              {/* Subtle top and bottom fades */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-0 top-0 z-10
                  h-16
                  bg-gradient-to-b
                  from-slate-950/25
                  to-transparent
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 z-10
                  h-16
                  bg-gradient-to-t
                  from-slate-950/25
                  to-transparent
                "
              />

              {/* Clipping window */}
              <div
                ref={textWindowRef}
                className="
                  absolute inset-0 z-20
                  overflow-hidden
                  rounded-[inherit]
                "
              >
                {/* Moving text content */}
                <div
                  ref={textContentRef}
                  className="
                    box-border
                    w-full max-w-full
                    overflow-hidden
                    px-5 pb-10 pt-8
                    sm:w-[68%]
                    sm:max-w-[68%]
                    sm:px-10 sm:pb-12 sm:pt-10
                    md:w-[65%]
                    md:max-w-[65%]
                    md:px-12 md:py-12
                    lg:w-[63%]
                    lg:max-w-[63%]
                    lg:px-16
                    xl:px-20
                  "
                  style={{
                    transform: `translate3d(0, ${textTranslateY}px, 0)`,
                    willChange: "transform",
                  }}
                >
                  {/* Profile heading */}
                  <header className="pb-8">
                    <h1
                      className="
                        max-w-2xl
                        break-words
                        text-2xl font-extrabold leading-tight
                        text-white
                        sm:text-3xl
                        md:text-4xl
                        lg:text-[44px]
                      "
                    >
                      Dr. Ishari K. Ganesh,
                      <br />
                      <span className="inline-block">
                        M.Com., MBA., M.L., M.Phil., Ph.D.
                      </span>
                    </h1>
                  </header>

                  {/* Designations */}
                  <div
                    className="
                      space-y-5
                      border-t border-white/30
                      pb-9 pt-7
                    "
                  >
                    {TITLE_BLOCKS.map((block) => (
                      <div
                        key={block.label}
                        className="min-w-0 max-w-2xl"
                      >
                        <p
                          className="
                            break-words
                            text-xs font-bold uppercase
                            tracking-wide text-orange-400
                            sm:text-sm
                          "
                        >
                          {block.label}
                        </p>

                        <p
                          className="
                            mt-1
                            break-words
                            text-xs leading-relaxed text-white
                            sm:text-sm
                          "
                        >
                          {block.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Biography */}
                  <div className="border-t border-white/30 pt-8">
                    <p
                      className="
                        break-words
                        text-xs font-bold uppercase
                        tracking-wide text-orange-400
                        sm:text-sm
                      "
                    >
                      Dr. Ishari K. Ganesh
                    </p>

                    <p
                      className="
                        mb-7 mt-1
                        break-words
                        text-xs leading-relaxed text-white/90
                        sm:text-sm
                      "
                    >
                      Founder &amp; Chancellor, Vels University |
                      Chairman, Vels Group of Institutions
                    </p>

                    {renderBioBlocks(BIO_CONTENT)}
                  </div>

                  {/*
                    Bottom spacing ensures the final paragraph
                    remains completely visible inside the card.
                  */}
                  <div
                    aria-hidden="true"
                    className="h-10 sm:h-14"
                  />
                </div>
              </div>

              {/* Mobile scroll hint */}
              <div
                className="
                  pointer-events-none
                  absolute bottom-4 right-4 z-30
                  flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-3 py-1.5
                  text-[10px] font-semibold uppercase
                  tracking-[0.12em] text-white/90
                  backdrop-blur-md
                  sm:hidden
                "
              >
                <span>Scroll</span>

                <span
                  className="
                    block h-1.5 w-1.5
                    rounded-full bg-orange-400
                  "
                />
              </div>
            </article>

            {/* Scroll progress indicator */}
            <div
              className="
                relative
                w-[4px] shrink-0
                overflow-hidden
                rounded-full
                bg-slate-200
                md:w-[5px]
              "
            >
              <div
                className="
                  absolute left-0 top-0
                  w-full
                  rounded-full
                  bg-orange-400
                "
                style={{
                  height: `${progress * 100}%`,
                  willChange: "height",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
