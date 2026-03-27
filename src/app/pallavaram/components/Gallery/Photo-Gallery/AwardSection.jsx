"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AWARDS_DATA = [
  {
    id: 1,
    image: "/pallavaram/award-1.jpg",
    desc: "Certificate of appreciation for recognition of Valuable contributions to observations of near-Earth objects and main Belt asteroids in the analysis of image from PAN-STARRS.",
  },
  {
    id: 2,
    image: "/pallavaram/award-2.jpg",    
    desc: "Certificate of participation and appreciation for hosting Sally Ride EarthKAM workshop conducted by Space.",
  },
  {
    id: 3,
    image: "/pallavaram/award-3.jpg",
    desc: "National School Excellence Award for outstanding commitment and exceptional efforts in promoting curricular education by SCOOLSTARS.",
  },
    {
    id: 4,
    image: "/pallavaram/award-4.jpg",
    desc: "Our School is recipient of the prestigious International School Award of the BRITISH COUNCIL for three consecutive terms.",
  },
    {
    id: 5,
    image: "/pallavaram/award-5.jpg",
    desc: "Fit India Movement Certification",
  },
    {
    id: 6,
    image: "/pallavaram/award-6.jpg",
    desc: "Vels School Team are declared winners of International Soocer Tournament at kualalumbur, Malaysia.",
  },
    {
    id: 7,
    image: "/pallavaram/award-7.jpg",
    desc: "We are proud that our school ‘Vels Vidyashram ‘Ranked No.1 in India under the Top CBSE Parameter for ‘Academic Reputation` in a survey conducted by EducationToday.co",
  },
    {
    id: 8,
    image: "/pallavaram/award-8.jpg",
    desc: "VELS VIDYASHRAM, has been ranked No. 3 in Chennai, No.3 in Tamilnadu and ranked No.15 in India in the “INDIAS TOP 20 CBSE SCHOOL” by Education Today.",
  },
    {
    id: 9,
    image: "/pallavaram/award-9.jpg",
    desc: "In partnership with Do It Yourself Academy, DIYA, our students from Vels Vidyashram took part in the world record attempt for the most number of participants in an online coding session.",
  },
];

export default function MinimalistAwards() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white min-h-screen  px-6 ">
      {/* Minimal Header */}
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Recognition</h1>
        <div className="h-px w-12 bg-gray-200" />
      </header>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {AWARDS_DATA.map((award) => (
          <motion.div 
            key={award.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelected(award)}
          >
            {/* Image Container - Aspect Ratio 4:3 */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-8">
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">
                {award.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light max-w-md line-clamp-3">
                {award.desc}
              </p>
              <button className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                View Project —
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clean Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center p-6 "
          >
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-10 right-10 text-xs uppercase tracking-widest hover:line-through"
            >
              Close [x]
            </button>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.img 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                src={selected.image} 
                className="w-full grayscale-0 shadow-2xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-4xl font-light mb-6 tracking-tighter">{selected.title}</h2>
                <p className="text-gray-600 leading-loose font-light">
                  {selected.desc}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}