"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";

const allScheduleData = [
  {
    date: "01",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PT1 EXAM STARTS FOR III - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "02",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "I/II/III MID TERM STARTS FOR IX - XII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "03",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PT1 EXAM STARTS FOR I - II",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "04",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "INVESTITURE CEREMONY KG - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "07",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PT1 EXAM ENDS FOR I - II",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "09",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "I/II/III MID TERM ENDS FOR IX - XII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "11",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "INVESTITURE CEREMONY",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "13",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "FIELD TRIP III - V",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "14",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PAPER BAG DAY KG - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "15",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "MARK SUBMISSION FOR PT1 EXAM I - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "16",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PERFORMANCE ANALYSIS I - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "17",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "WORLD'S EMOJI DAY KG TO VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "18",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PTM FOR GRADE I - XII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "18",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "ANNUAL DAY",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "20",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "MAGICAL SEASON WEEK KG - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "20",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PTM REVIEW I - XII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "22",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "CHANDRAYAAN LAUNCH",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "24",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "24",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "VELS VERSATILE INTER SCHOOL SPORTS MEET",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "25",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PARENTS SPORTS MEET",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "25",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PD SESSION IX - XII & I - III",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "27",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "I/II/III MID TERM EXAM STARTS IX - XII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "28",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "NATURE CONSERVATION DAY III - V",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "28",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "PT2 PORTION COMPLETION I - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "29",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "MONTHLY LP REFLECTION",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "30",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "KARGIL DIWAS VI - VIII",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "31",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "DEPT PRESENTATION - MATH",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "31",
    monthTab: "Jul Events",
    monthYear: "July, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
];

export default function EventsSchedule() {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);

  const monthTabs = useMemo(() => {
    return Array.from(
      new Map(
        allScheduleData.map((item) => [
          item.monthTab,
          {
            tab: item.monthTab,
            monthYear: item.monthYear,
          },
        ])
      ).values()
    );
  }, []);

  const [activeTab, setActiveTab] = useState(
    monthTabs[0]?.tab || ""
  );

  const filteredData = useMemo(() => {
    return allScheduleData.filter(
      (item) => item.monthTab === activeTab
    );
  }, [activeTab]);

  const activeMonthYear =
    filteredData[0]?.monthYear ||
    monthTabs.find((item) => item.tab === activeTab)?.monthYear ||
    "";

  const activeMonthName = activeMonthYear
    ? activeMonthYear.split(",")[0]
    : "School";

  const isLeftSideInView = useInView(leftSideRef, {
    once: true,
    amount: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="flex min-h-screen flex-col bg-white lg:flex-row">
      {/* LEFT SIDE */}
      <div
        ref={leftSideRef}
        className="flex flex-col justify-center bg-[#2d3a9d] p-8 text-white sm:p-10 lg:sticky lg:top-0 lg:h-screen lg:w-[35%] lg:p-16"
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={
            isLeftSideInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
        >
          <span className="rounded bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Events
          </span>
        </motion.div>

        <motion.h1
          className="mb-8 text-3xl font-bold leading-tight text-white lg:text-4xl"
          initial={{ opacity: 0, x: -30 }}
          animate={
            isLeftSideInView
              ? { opacity: 1, x: 0 }
              : {}
          }
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {activeMonthName} Events
          <br />
          School Schedule
        </motion.h1>

        <motion.p
          className="mb-10 max-w-md text-sm leading-relaxed text-blue-100/80"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isLeftSideInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Stay updated with important school activities,
          examinations, celebrations and academic events.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isLeftSideInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {["Events", "Exams", "Updates"].map(
            (tag, index) => (
              <motion.span
                key={tag}
                className="rounded border border-white/30 px-3 py-1 text-[11px] uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isLeftSideInView
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={containerRef}
        className="relative bg-gray-50/30 p-5 sm:p-8 lg:w-[65%] lg:p-16 xl:p-20"
      >
        {/* DYNAMIC MONTH TABS */}
        {monthTabs.length > 0 && (
          <motion.div
            className="mb-12 flex items-center gap-2 overflow-x-auto border-b border-gray-200 pb-4 sm:gap-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {monthTabs.map((month, index) => (
              <motion.button
                key={month.tab}
                type="button"
                aria-pressed={activeTab === month.tab}
                onClick={() => setActiveTab(month.tab)}
                className={`relative shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 sm:px-8 sm:text-sm ${
                  activeTab === month.tab
                    ? "text-[#2d3a9d]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {month.tab}

                {activeTab === month.tab && (
                  <motion.div
                    layoutId="activeEventTab"
                    className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#2d3a9d]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}

        <motion.h2
          className="mb-12 text-2xl font-bold text-[#2d3a9d] lg:mb-16 lg:text-3xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Upcoming {activeMonthName} Events
        </motion.h2>

        <div className="relative max-w-3xl">
          {/* TIMELINE BACKGROUND */}
          {filteredData.length > 0 && (
            <div className="absolute bottom-4 left-4 top-4 w-[2px] bg-gray-200 sm:left-8">
              <motion.div
                style={{
                  scaleY,
                  originY: 0,
                }}
                className="h-full w-full bg-[#2d3a9d]"
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="space-y-8 lg:space-y-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {filteredData.length > 0 ? (
                filteredData.map((event, index) => (
                  <TimelineItem
                    key={`${event.monthTab}-${event.date}-${event.title}`}
                    event={event}
                    index={index}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                  <p className="text-sm font-medium text-gray-500">
                    No events are available for this month.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }) {
  const itemRef = useRef(null);

  const isInView = useInView(itemRef, {
    once: true,
    amount: 0.25,
  });

  const animationDelay = Math.min(index * 0.04, 0.3);

  const cardStyles = event.isHighlighted
    ? "border-transparent bg-[#2d3a9d]"
    : "border-gray-100 bg-white";

  const titleStyles = event.isHighlighted
    ? "text-white"
    : "text-gray-900";

  const dateSubTextStyles = event.isHighlighted
    ? "text-white/70"
    : "text-gray-500";

  const dividerStyles = event.isHighlighted
    ? "border-white/20"
    : "border-gray-100";

  const badgeStyles = event.isHighlighted
    ? "bg-white text-[#2d3a9d]"
    : "bg-[#2d3a9d] text-white";

  return (
    <motion.article
      ref={itemRef}
      className="relative pl-12 sm:pl-20"
      initial={{ opacity: 0, x: -35 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.55,
        delay: animationDelay,
      }}
    >
      {/* TIMELINE DOT */}
      <motion.div
        className="absolute left-[9px] top-1/2 z-10 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-[#2d3a9d] bg-white sm:left-[25px]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: animationDelay + 0.1,
        }}
      />

      {/* EVENT CARD */}
      <motion.div
        className={`flex w-full flex-col overflow-hidden rounded-2xl border shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl sm:flex-row ${cardStyles}`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: animationDelay + 0.05,
        }}
      >
        {/* DATE */}
        <div
          className={`flex min-h-[120px] items-center justify-center gap-3 border-b px-6 py-5 sm:min-h-[165px] sm:min-w-[155px] sm:flex-col sm:border-b-0 sm:border-r sm:px-8 sm:py-8 ${dividerStyles}`}
        >
          <motion.span
            className={`font-serif text-4xl font-bold sm:text-5xl ${titleStyles}`}
            initial={{ opacity: 0, y: 15 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.45,
              delay: animationDelay + 0.15,
            }}
          >
            {event.date}
          </motion.span>

          <motion.span
            className={`text-center text-[10px] font-bold uppercase tracking-[0.15em] ${dateSubTextStyles}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.45,
              delay: animationDelay + 0.2,
            }}
          >
            {event.monthYear}
          </motion.span>
        </div>

        {/* EVENT DETAILS */}
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <motion.h3
            className={`mb-4 text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl ${titleStyles}`}
            initial={{ opacity: 0, x: -15 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.45,
              delay: animationDelay + 0.15,
            }}
          >
            {event.title}
          </motion.h3>

          <motion.span
            className={`w-fit rounded px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm ${badgeStyles}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.4,
              delay: animationDelay + 0.25,
            }}
          >
            {event.tag}
          </motion.span>
        </div>
      </motion.div>
    </motion.article>
  );
}