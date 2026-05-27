"use client";

import React, { useRef, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useInView,
} from "framer-motion";

const allScheduleData = [
  {
    date: "19",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "SCHOOL REOPENS AFTER PONGAL",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "19",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "REVISION IX & XI",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "19",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "PREBOARD X & XII STARTS",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "20",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "PT4 STARTS ( I - VIII )",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "20",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "COLOUR WEEK ( KG)",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "20",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "ANNUAL EXAM (IX & XI)",
    tag: "Events",
    isHighlighted: false,
  },

  {
    date: "21",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "HAT DAY ( KG - II)",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "21",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "CSSC EXAM ( X & XII ) EXCHANGE OF MARKS",
    tag: "Events",
    isHighlighted: true,
  },
  {
    date: "22",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "CSSC PERFORMANCE ANALYSIS ( X & XII )",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "23",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "24",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "DEPT PRESENTATION ( BS/ ACC/ ECO )",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "24",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "PD SESSION ( I TO III)",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "24",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "CSSC PTM ( X & XII)",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "26",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "REPUBLIC DAY",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "27",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "BIRDS DAY ( III - VIII)",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "27",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "CSSC PTM REVIEW",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "29",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "CO CURRICULAR CULMINATION - II",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "29",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "PT4 ENDS (I - VIII)",
    tag: "Events",
    isHighlighted: false,
  },

   {
    date: "30",
    monthTab: "Jan Events",
    monthYear: "January, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
  
   {
    date: "01",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "THAI POOSAM",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "02",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "REVISION IX & XI",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "02",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PREBOARD X & XII ENDS",
    tag: "Events",
    isHighlighted: false,
  },
    {
    date: "03",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "SPECTRA",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "03",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "ANNUAL PRACTICALS START ( IX & XI) / SLT MEETING",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "04",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "ANNUAL PRACTICALS START ( IX & XI) / SLT FINAL OPEN DATE(PTM) AND BOOK DISTRIBUTION",
    tag: "Events",
    isHighlighted: false,
  },
 {
    date: "05",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "SCHOOL REOPENS FOR X AND XII (26-27) & EXCHANGE OF MARKS PREBOARD & REVISION 1",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "06",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PERFORMANCE ANALYSIS - PRE BOARD",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "06",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "ROSE DAY KG - II",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "06",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "06",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "XI ANNUAL PRACTICALS END ( IX & XI)",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "06",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "XI ANNUAL PRACTICALS END ( IX & XI)",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "07",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "DEPT MEETING",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "07",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PD SESSION",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "07",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PTM - I - VIII / PROJECT DAY",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "09",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "ANNUAL EXAM IX - XI",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "09",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "CHOCOLATE DAY ( KG-II)",
    tag: "Events",
    isHighlighted: false,
  },
  {
    date: "09",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PTM REVIEW",
    tag: "Events",
    isHighlighted: false,
  },
    {
    date: "10",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PULSES DAY ( III - VIII)",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "11",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "QP SUBMISSION FOR TT2 ( I - VIII)",
    tag: "Events",
    isHighlighted: false,
  },
   {
    date: "12",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PARENT OBSERVATION ( I - VIII) & GA",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "13",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PARENT OBSERVATION ( I - VIII) & MYA",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "16",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "COMMUNITY HELPER WEEK (KG - II )/EMOTION WEEK ( III - VIII )",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "19",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "TT2 PORTION COMPLETION (I TO VIII)",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "20",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "MYA",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "20",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "QP SUBMISSION ANNUAL EXAM IX & XI",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "21",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PD VI - VIII AND CO-CURRICULAR DEPT MEETING",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "25",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "LP REFLECTION",
    tag: "Events",
    isHighlighted: false,
  },
     {
    date: "27",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "NATIONAL SCIENCE DAY ( III - VIII)",
    tag: "Events",
    isHighlighted: false,
  },
       {
    date: "27",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "PERFORMANCE ANALYSIS (IX & XI)",
    tag: "Events",
    isHighlighted: false,
  },
       {
    date: "27",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "DEPT PRESENTATION (MUSIC, ART, GK)",
    tag: "Events",
    isHighlighted: false,
  },
       {
    date: "27",
    monthTab: "Feb Events",
    monthYear: "February, 2026",
    title: "MONTHLY TEST ENDS ( I - VIII) AND MYA",
    tag: "Events",
    isHighlighted: false,
  },
];

export default function EventsSchedule() {
  const [activeTab, setActiveTab] = useState("Jan Events");
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);

  const isLeftSideInView = useInView(leftSideRef, {
    once: true,
    amount: 0.3,
  });

  const filteredData = useMemo(() => {
    return allScheduleData.filter((item) => item.monthTab === activeTab);
  }, [activeTab]);

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
    <section className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* LEFT SIDE */}
      <div
        ref={leftSideRef}
        className="lg:w-[35%] bg-[#2d3a9d] text-white p-10 lg:p-16 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center"
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-white/15 text-white text-[10px] font-bold py-1.5 px-3 rounded uppercase tracking-wider">
            Events
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl lg:text-4xl text-white font-bold leading-tight mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={isLeftSideInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          January Events <br /> and February Events
        </motion.h1>

        <motion.p
          className="text-blue-100/80 text-sm leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Stay updated with key school activities this month.
        </motion.p>

        <motion.div
          className="flex gap-2 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {["Events", "Exams", "Updates"].map((tag, index) => (
            <motion.span
              key={tag}
              className="border border-white/30 text-[11px] px-3 py-1 rounded uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLeftSideInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={containerRef}
        className="lg:w-[65%] p-8 lg:p-20 relative bg-gray-50/30"
      >
        <motion.div
          className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {["Jan Events", "Feb Events"].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "text-[#2d3a9d]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#2d3a9d]"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.h2
          className="text-[#2d3a9d] text-2xl lg:text-3xl font-bold mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {activeTab === "Jan Events"
            ? "Upcoming January Events"
            : "Upcoming February Events"}
        </motion.h2>

        <div className="relative max-w-2xl">
          <div className="absolute left-[20px] lg:left-[45px] top-4 bottom-4 w-[2px] bg-gray-200">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-[#2d3a9d]"
            />
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {filteredData.map((event, index) => (
                  <TimelineItem
                    key={`${activeTab}-${index}`}
                    event={event}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  const textColor = event.isHighlighted ? "!text-white" : "!text-gray-900";
  const subTextColor = event.isHighlighted
    ? "!text-white/70"
    : "!text-gray-500";
  const cardBg = event.isHighlighted ? "bg-[#2d3a9d]" : "bg-white";
  const borderColor = event.isHighlighted
    ? "border-transparent"
    : "border-gray-100";
  const dividerColor = event.isHighlighted
    ? "border-white/20"
    : "border-gray-100";
  const badgeStyles = event.isHighlighted
    ? "bg-white !text-[#2d3a9d]"
    : "bg-[#2d3a9d] !text-white";

  return (
    <motion.div
      ref={itemRef}
      className="flex items-start gap-8 lg:gap-14 relative group mb-10 last:mb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute left-[14.5px] lg:left-[39.5px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#2d3a9d] z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />

      <motion.div
        className={`flex w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border transition-all duration-300 hover:shadow-xl ${cardBg} ${borderColor}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
      >
        <div
          className={`py-8 px-6 lg:px-10 flex flex-col justify-center items-center min-w-[120px] lg:min-w-[160px] border-r ${dividerColor}`}
        >
          <motion.span
            className={`text-5xl font-bold font-serif ${textColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {event.date}
          </motion.span>

          <motion.span
            className={`text-[10px] uppercase tracking-[0.15em] mt-1 font-bold text-center ${subTextColor}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            {event.monthYear}
          </motion.span>
        </div>

        <div className="p-8 flex flex-col justify-center flex-1">
          <motion.h3
            className={`text-xl lg:text-2xl font-bold mb-4 tracking-tight leading-snug ${textColor}`}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {event.title}
          </motion.h3>

          <motion.span
            className={`text-[10px] font-black py-1.5 px-5 rounded w-fit uppercase tracking-widest shadow-sm ${badgeStyles}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          >
            {event.tag}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}