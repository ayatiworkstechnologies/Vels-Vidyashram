"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutKkic = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div {...fadeInUp} className="mb-16 border-b border-slate-100 pb-10">
          <h1 className="text-2xl md:text-4xl font-black text-primary mb-8 tracking-tight uppercase font-primary">
            ABOUT KKIC
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 max-w-5xl font-secondary">
            Vels Group of Institutions has always encouraged the teacher and the learners to progressively 
            move forward in quality of content and methodology. There has always been opportunities at 
            the R & D @ Vels for innovations and development of generalizations, principles or theories 
            that will help in employing carefully designed procedures and rigorous analysis.
          </p>
        </motion.div>

        {/* Curriculum Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-indigo-50 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-primary mb-6 leading-tight">
              KINDLEKIDS INTERNATIONAL CURRICULUM ( KKIC )
            </h2>
            <p className="text-lg leading-relaxed text-indigo-950/80 font-secondary mb-6">
              With 15 years of proven research in the field of education, Vels group of schools now 
              proudly owns its own internationally acclaimed unique, broad dynamic- theme based, 
              flexible international pre-primary and primary curriculum called the 
              <span className="font-bold"> KINDLEKIDS INTERNATIONAL CURRICULUM ( KKIC )</span>.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <p className="text-slate-600 leading-relaxed italic font-secondary">
                This has been successfully implemented and has received many covetable awards under 
                Academic Excellence, Teacher Competencies, Skill Development, STEAM education, ICT implementations.
              </p>
            </div>

            {/* Franchise CTA */}
            <div className="bg-indigo-900 p-8 rounded-3xl text-white shadow-2xl">
              <p className="mb-6 text-indigo-100 font-secondary">
                KKIC is now extended as a franchise partner with people interested in starting a new school.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/thalambur/pdf/kkic.pdf" 
                className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full font-bold transition-shadow shadow-lg hover:bg-slate-50"
              >
                KKIC Franchise brochure
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutKkic;