"use client";

import { motion } from "framer-motion";

export default function Cbse() {
  const items = [
    {
      number: "01",
      title: "About Us  <br /> Vels Educational Trust",
      subtitle:
        "The School was established in 2018 by Vel’s Educational Trust (Regd.)",
    },
    {
      number: "02",
      title: "Academics  <br /> From Pre KG to IX & XI Standard",
      subtitle:
        "Experienced & trained teachers help in maintaining academic excellence and high standards of the school.",
      highlight: true,
    },
    {
      number: "03",
      title: "Facilities  <br /> Modern trend in education",
      subtitle:
        "The school has all the necessary facilities in keeping with the modern trend in education.",
    },
  ];

  return (
    <motion.section
      className="py-10 bg-white relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // 👈 triggers when ~30% of section is in view
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* ========================
          HEADING
      ========================== */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-primary font-primary-bold text-black">
          Vels Vidyashram CBSE School in Chennai
        </h2>

        <div className="w-40 h-[1px] bg-secondary mx-auto mt-2 mb-4" />

        <p className="text-black text-md mt-2 font-secondary md:max-w-4xl mx-auto text-center font-secondary-semibold">
          Vels Vidyashram took its humble birth in 2018. The founder of the
          school Dr.Ishari K.Ganesh a great visionary wanted to build up a
          school with excellence as its watchword in all aspects.
        </p>

        {/* ========================
            FEATURE BOXES
        ========================== */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {items.map((item, index) => {
            const isHighlight = item.highlight;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className={`p-8 transition-all duration-300 ease-out transform
                  ${
                    isHighlight
                      ? "bg-primary shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                      : "bg-primary border border-primary/10"
                  }
                  hover:scale-[1.05] hover:-translate-y-2
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                `}
              >
                {/* Number + Divider */}
                <div className="flex items-center gap-3">
                  <span className="text-secondary text-3xl font-primary font-primary-bold">
                    {item.number}
                  </span>
                  <span
                    className={`h-[1px] w-16 ${
                      isHighlight ? "bg-white" : "bg-white/70"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 text-lg font-primary font-primary-semibold text-left leading-snug ${
                    isHighlight ? "text-white" : "text-white"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                {/* Subtitle */}
                <p
                  className={`mt-6 text-sm font-secondary font-secondary-regular text-left ${
                    isHighlight ? "text-white" : "text-white"
                  }`}
                >
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* MARQUEE – no change */}
      <div className="w-full bg-primary text-white py-2 mt-14 overflow-hidden">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="font-secondary font-secondary-light whitespace-nowrap"
        >
          *NIOS accredited Study Centre 190191 (courses offered: Secondary and
          senior secondary with science subjects) &nbsp;&nbsp;&nbsp; *NIOS
          accredited Study Centre 190191 (courses offered: Secondary and senior
          secondary with science subjects) &nbsp;&nbsp;&nbsp; *NIOS accredited
          Study Centre 190191 (courses offered: Secondary and senior secondary
          with science subjects)
        </marquee>
      </div>
    </motion.section>
  );
}
