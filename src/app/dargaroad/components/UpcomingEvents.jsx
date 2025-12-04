"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const exam = {
    day: "03",
    month: "December",
    year: "2025",
    note: "PT3 ends for Std I - VIII",
  };

  const upcomingEvents = [
    { day: "06", month: "November", year: "2025", note: "Club Activities" },
    { day: "13", month: "November", year: "2025", note: "General Assembly" },
    { day: "20", month: "November", year: "2025", note: "Club Activities" },
    { day: "27", month: "November", year: "2025", note: "General Assembly" },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">

       

        

        {/* UPCOMING EVENTS TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 text-center mb-8"
        >
          <h2 className="text-lg md:text-2xl font-primary font-primary-bold text-black">
            Upcoming Events–November
          </h2>
          <div className="w-28 h-[1px] bg-secondary mx-auto mt-2 mb-4" />
        </motion.div>

        {/* EVENTS LIST */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-1"
        >
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="grid grid-cols-[auto_1px_1fr] items-center bg-white text-sm text-black hover:bg-[#231834] hover:text-white transition min-h-[64px]"
            >
              <div className="flex items-center justify-center gap-4 px-5 py-3">
                <Image src="/dargaroad/calendar.svg" alt="calendar" width={22} height={22} />

                <div className="flex items-center gap-2 font-primary font-primary-semibold">
                  <span>{event.day}</span>
                  <span className="text-gray-400">|</span>
                  <span>{event.month}</span>
                  <span className="text-gray-400">|</span>
                  <span>{event.year}</span>
                </div>
              </div>

              <div className="w-[1px] h-[20px] bg-secondary" />

              <div className="flex items-center justify-center px-5 py-2 font-secondary font-secondary-bold">
                {event.note}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
