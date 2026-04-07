"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AWARDS_DATA = [
  {
    id: 1,
    title: "Award 01",
    image: "/pallavaram/award-1.jpg",
    desc: "Certificate of appreciation for recognition of Valuable contributions to observations of near-Earth objects and main Belt asteroids in the analysis of image from PAN-STARRS.",
  },
  {
    id: 2,
    title: "Award 02",
    image: "/pallavaram/award-2.jpg",
    desc: "Certificate of participation and appreciation for hosting Sally Ride EarthKAM workshop conducted by Space.",
  },
  {
    id: 3,
    title: "Award 03",
    image: "/pallavaram/award-3.jpg",
    desc: "National School Excellence Award for outstanding commitment and exceptional efforts in promoting curricular education by SCOOLSTARS.",
  },
  {
    id: 4,
    title: "Award 04",
    image: "/pallavaram/award-4.jpg",
    desc: "Our School is recipient of the prestigious International School Award of the BRITISH COUNCIL for three consecutive terms.",
  },
  {
    id: 5,
    title: "Award 05",
    image: "/pallavaram/award-5.jpg",
    desc: "Fit India Movement Certification",
  },
  {
    id: 6,
    title: "Award 06",
    image: "/pallavaram/award-6.jpg",
    desc: "Vels School Team are declared winners of International Soccer Tournament at Kuala Lumpur, Malaysia.",
  },
  {
    id: 7,
    title: "Award 07",
    image: "/pallavaram/award-7.jpg",
    desc: "We are proud that our school Vels Vidyashram ranked No.1 in India under the Top CBSE Parameter for Academic Reputation in a survey conducted by EducationToday.co",
  },
  {
    id: 8,
    title: "Award 08",
    image: "/pallavaram/award-8.jpg",
    desc: "VELS VIDYASHRAM has been ranked No. 3 in Chennai, No.3 in Tamil Nadu and No.15 in India in the INDIAS TOP 20 CBSE SCHOOL by Education Today.",
  },
  {
    id: 9,
    title: "Award 09",
    image: "/pallavaram/award-9.jpg",
    desc: "In partnership with Do It Yourself Academy, DIYA, our students from Vels Vidyashram took part in the world record attempt for the most number of participants in an online coding session.",
  },
];

export default function MinimalistAwards() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white min-h-screen px-4 md:px-6 py-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
          Recognition
        </h1>
        <div className="h-px w-12 bg-gray-200 mx-auto" />
      </header>

      {/* 3-column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {AWARDS_DATA.map((award) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* No Crop Image */}
            <div className="bg-gray-100 p-4 flex items-center justify-center h-[280px]">
              <img
                src={award.image}
                alt={award.title}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                {award.desc}
              </p>

              <button
                onClick={() => setSelected(award)}
                className="inline-flex items-center rounded-full border border-[#2B158F] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2B158F] transition-all duration-300 hover:bg-[#2B158F] hover:text-white"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white hover:bg-black"
              >
                Close ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Large No Crop Image */}
                <div className="bg-gray-100 flex items-center justify-center p-6 min-h-[350px]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-h-[500px] max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#2B158F] mb-3">
                    Award Details
                  </p>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
                    {selected.title}
                  </h2>
                  <p className="text-gray-600 leading-8 text-sm md:text-base">
                    {selected.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}