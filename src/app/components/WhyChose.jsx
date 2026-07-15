"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const DEFAULT_CATEGORIES = [
  {
    number: "01",
    title: "AI-Integrated Classrooms",
    description:
      "Interactive AI-powered smart classrooms transform learning into an engaging, personalized, and collaborative experience. Students benefit from immersive digital content, intelligent teaching tools, and technology-enabled instruction that enhances understanding and participation.",
  },
  {
    number: "02",
    title: "Artificial Intelligence Education",
    description:
      "AI is seamlessly integrated into the learning journey, introducing students to emerging technologies, machine learning concepts, computational thinking, and responsible digital citizenship from an early age.",
  },
  {
    number: "03",
    title: "STEM Innovation Labs",
    description:
      "Our dedicated STEM Labs encourage students to explore Science, Technology, Engineering, and Mathematics through practical experiments, innovation challenges, and real-world problem-solving experiences.",
  },
  {
    number: "04",
    title: "AI & Robotics Lab",
    description:
      "Students design, build, code, and program intelligent robots while learning automation, coding, electronics, sensors, and engineering concepts. These hands-on experiences develop creativity, innovation, teamwork, and critical thinking.",
  },
  {
    number: "05",
    title: "Future Skills Programme",
    description:
      "Beyond academics, students build essential 21st-century skills including coding, design thinking, communication, collaboration, creativity, analytical reasoning, entrepreneurship, and leadership.",
  },
  {
    number: "06",
    title: "Academic Excellence",
    description:
      "A rigorous CBSE curriculum supported by experienced faculty, personalized mentoring, continuous assessments, and innovative teaching practices ensures every child reaches their full potential.",
  },
  {
    number: "07",
    title: "Holistic Development",
    description:
      "Equal emphasis is placed on academics, sports, arts, leadership, life skills, emotional well-being, and character development to nurture confident and responsible individuals.",
  },
];

export default function VelsWhyChooseSlider({
  categories = DEFAULT_CATEGORIES,
}) {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const maximumIndex = Math.max(
    0,
    categories.length - cardsPerView
  );

  /**
   * Update card count and vertical scroll distance.
   *
   * The scroll distance is deliberately limited so that large
   * monitors do not produce a huge blank area.
   */
  const updateResponsiveValues = useCallback(() => {
    const width = window.innerWidth;

    let nextCardsPerView = 2;
    let distancePerStep = 75;
    let maximumScrollDistance = 420;

    if (width < 640) {
      nextCardsPerView = 1;
      distancePerStep = 90;
      maximumScrollDistance = 540;
    } else if (width < 768) {
      nextCardsPerView = 1;
      distancePerStep = 85;
      maximumScrollDistance = 500;
    } else if (width < 1024) {
      nextCardsPerView = 2;
      distancePerStep = 80;
      maximumScrollDistance = 440;
    } else if (width < 1440) {
      nextCardsPerView = 2;
      distancePerStep = 75;
      maximumScrollDistance = 400;
    } else {
      nextCardsPerView = 2;
      distancePerStep = 65;
      maximumScrollDistance = 340;
    }

    const nextMaximumIndex = Math.max(
      0,
      categories.length - nextCardsPerView
    );

    const calculatedDistance =
      nextMaximumIndex * distancePerStep;

    setCardsPerView(nextCardsPerView);

    setScrollDistance(
      Math.min(calculatedDistance, maximumScrollDistance)
    );
  }, [categories.length]);

  /**
   * Measure the natural content height.
   */
  const measureSection = useCallback(() => {
    const section = sectionRef.current;

    if (!section) return;

    setSectionHeight(section.offsetHeight);
  }, []);

  useLayoutEffect(() => {
    updateResponsiveValues();
    measureSection();

    const section = sectionRef.current;

    if (!section) return;

    const resizeObserver = new ResizeObserver(() => {
      measureSection();
    });

    resizeObserver.observe(section);

    const handleResize = () => {
      updateResponsiveValues();
      measureSection();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [measureSection, updateResponsiveValues]);

  /**
   * Calculate animation progress from wrapper scroll position.
   */
  const updateScrollProgress = useCallback(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || scrollDistance <= 0) {
      setProgress(0);
      return;
    }

    const wrapperRect = wrapper.getBoundingClientRect();

    const rawProgress = -wrapperRect.top / scrollDistance;

    const clampedProgress = Math.min(
      Math.max(rawProgress, 0),
      1
    );

    setProgress(clampedProgress);
  }, [scrollDistance]);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(
        updateScrollProgress
      );
    };

    updateScrollProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateScrollProgress]);

  /**
   * Move one complete card for every completed index.
   */
  const translatePercentage =
    progress * maximumIndex * (100 / cardsPerView);

  /**
   * Natural section height + only the required short scroll area.
   */
  const wrapperHeight =
    sectionHeight > 0
      ? sectionHeight + scrollDistance
      : "auto";

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{
        height:
          typeof wrapperHeight === "number"
            ? `${wrapperHeight}px`
            : wrapperHeight,
      }}
    >
      <section
        ref={sectionRef}
        className="
          sticky top-0 w-full overflow-hidden
          px-4 py-10
          sm:px-6 sm:py-12
          md:px-10 md:py-14
          lg:px-12 lg:py-16
          xl:px-16 xl:py-16
          2xl:py-18
        "
        style={{
          backgroundImage: "url('/bg-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative stars */}
        <img
          src="/star-group.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute right-[4%] top-[4%]
            hidden h-auto w-[140px] select-none
            md:block
            lg:w-[180px]
            xl:w-[210px]
            2xl:w-[230px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Heading */}
          <h2
            className="
              mb-8 text-2xl font-bold leading-tight text-[#F2994A]
              sm:mb-9 sm:text-3xl
              md:mb-10 md:text-4xl
              lg:mb-12
            "
          >
            Why Choose Vels Vidyashram?
          </h2>

          {/* Slider viewport */}
          <div className="w-full overflow-hidden">
            <div
              className="flex will-change-transform"
              style={{
                transform: `translate3d(-${translatePercentage}%, 0, 0)`,
              }}
            >
              {categories.map((category, index) => (
                <article
                  key={`${category.number}-${index}`}
                  className="
                    box-border shrink-0 px-1
                    sm:px-3
                    md:px-4
                    lg:px-6
                    xl:px-8
                  "
                  style={{
                    width: `${100 / cardsPerView}%`,
                  }}
                >
                  <div className="w-full">
                    {/* Number and title */}
                    <div className="relative pb-3 sm:pb-4">
                      <span
                        className="
                          block select-none font-extrabold
                          leading-none text-gray-200
                        "
                        style={{
                          fontSize: "clamp(76px, 8vw, 140px)",
                        }}
                      >
                        {category.number}
                      </span>

                      <h3
                        className="
                          absolute bottom-0 left-[18%]
                          max-w-[80%]
                          text-lg font-bold leading-tight
                          text-[#2A2A72]

                          sm:left-[22%]
                          sm:max-w-[77%]
                          sm:text-xl

                          md:left-[24%]
                          md:max-w-[74%]
                          md:text-2xl

                          lg:left-[27%]
                          lg:max-w-[70%]

                          xl:left-[25%]
                          xl:text-[26px]
                        "
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-5 max-w-lg text-sm leading-6
                        text-gray-500

                        sm:mt-6
                        sm:text-[15px]
                        sm:leading-7

                        md:mt-7

                        lg:text-base
                        lg:leading-8
                      "
                    >
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-full sm:mt-9 md:mt-10">
            <div
              className="
                relative h-1 w-full overflow-hidden
                rounded-full bg-[#E7ECF3]
              "
            >
              <div
                className="
                  absolute inset-y-0 left-0
                  rounded-full bg-[#F28C00]
                  will-change-[width]
                "
                style={{
                  width: `${progress * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}