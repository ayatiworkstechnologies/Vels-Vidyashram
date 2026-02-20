"use client";
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';

const allScheduleData = [
  {
    date: "10",
    monthYear: "january, 2026",
    title: "PTM FOR IX-XII",
    tag: "Events",
    isHighlighted: false
  },
  {
    date: "12",
    monthYear: "january, 2026",
    title: "PONGAL CELEBRATION",
    tag: "Events",
    isHighlighted: true
  },
  {
    date: "19",
    monthYear: "january, 2026",
    title: "SCHOOL REOPENS AFTER PONGAL",
    tag: "Events",
    isHighlighted: false
  },
  {
    date: "24",
    monthYear: "january, 2026",
    title: "UNIT TEST - III BEGINS",
    tag: "Exams",
    isHighlighted: true
  },
  {
    date: "26",
    monthYear: "january, 2026",
    title: "REPUBLIC DAY CELEBRATION",
    tag: "Events",
    isHighlighted: true
  },
  {
    date: "28",
    monthYear: "january, 2026",
    title: "PRACTICAL EXAMS FOR XII",
    tag: "Exams",
    isHighlighted: false
  }
];

export default function EventsSchedule() {
  const [activeTab, setActiveTab] = useState("Events");
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const isLeftSideInView = useInView(leftSideRef, { once: false, amount: 0.3 });

  const filteredData = useMemo(() => {
    return allScheduleData.filter(item => item.tag === activeTab);
  }, [activeTab]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      
      {/* LEFT SIDE: STICKY CONTENT */}
      <div ref={leftSideRef} className="lg:w-[35%] bg-[#2d3a9d] text-white p-10 lg:p-16 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-secondary text-white text-[10px] font-bold py-1.5 px-3 rounded uppercase tracking-wider font-primary">
            Events And Examinations
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl lg:text-4xl text-white font-primary font-bold leading-tight mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={isLeftSideInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          January Events <br /> and Examinations
          Schedule
        </motion.h1>
        
        <motion.p 
          className="text-blue-100/80 text-sm font-secondary leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Stay updated with key school activities this month. 
        </motion.p>
        
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftSideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {["Events", "Exams", "Updates"].map((tag, index) => (
            <motion.span 
              key={tag} 
              className="border border-white/30 text-[11px] px-3 py-1 rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLeftSideInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE: SCROLLING CONTENT */}
      <div ref={containerRef} className="lg:w-[65%] p-8 lg:p-20 relative bg-gray-50/30">
        
        <motion.div 
          className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {["Events", "Exams"].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 text-sm font-primary font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab ? "text-[#2d3a9d]" : "text-gray-400 hover:text-gray-600"
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] font-primary left-0 right-0 h-[3px] bg-[#2d3a9d]"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.h2 
          className="text-[#2d3a9d] text-2xl lg:text-3xl font-primary font-bold mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Upcoming {activeTab} - January
        </motion.h2>

        <div className="relative max-w-2xl">
          <div className="absolute left-[20px] lg:left-[45px] top-4 bottom-4 w-[2px] bg-gray-200">
            <motion.div style={{ scaleY, originY: 0 }} className="w-full h-full bg-[#2d3a9d]" />
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
                  <TimelineItem key={`${activeTab}-${index}`} event={event} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ event, index }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.5 });

  const textColor = event.isHighlighted ? "!text-white" : "!text-gray-900";
  const subTextColor = event.isHighlighted ? "!text-white/70" : "!text-gray-500";
  const cardBg = event.isHighlighted ? "bg-[#2d3a9d]" : "bg-white";
  const borderColor = event.isHighlighted ? "border-transparent" : "border-gray-100";
  const dividerColor = event.isHighlighted ? "border-white/20" : "border-gray-100";
  const badgeStyles = event.isHighlighted ? "bg-white !text-[#2d3a9d]" : "bg-[#2d3a9d] !text-white";

  return (
    <motion.div 
      ref={itemRef}
      className="flex items-start gap-8 lg:gap-14 relative group mb-10 last:mb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      
      <motion.div 
        className="absolute left-[14.5px] lg:left-[39.5px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#2d3a9d] z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />

      <motion.div 
        className={`flex w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border transition-all duration-300 hover:shadow-xl ${cardBg} ${borderColor}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
      >
        
        {/* DATE BLOCK */}
        <div className={`py-8 px-6 lg:px-10 flex flex-col justify-center items-center min-w-[120px] lg:min-w-[160px] border-r ${dividerColor}`}>
          <motion.span 
            className={`text-5xl font-bold font-serif ${textColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {event.date}
          </motion.span>
          <motion.span 
            className={`text-[10px] uppercase tracking-[0.15em] mt-1 font-bold text-center ${subTextColor}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            {event.monthYear}
          </motion.span>
        </div>

        {/* CONTENT BLOCK */}
        <div className="p-8 flex flex-col justify-center flex-1">
          <motion.h3 
            className={`text-xl lg:text-2xl font-bold mb-4 tracking-tight leading-snug ${textColor}`}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {event.title}
          </motion.h3>
          <motion.span 
            className={`text-[10px] font-black py-1.5 px-5 rounded w-fit uppercase tracking-widest shadow-sm ${badgeStyles}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          >
            {event.tag}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}