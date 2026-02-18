"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CICTLSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const paragraphs = [
    `Vaels International School is an accredited Centre for Cambridge Assessment International Education (CAIE), in the year 2007 with the number IN868. From 2015 the Cambridge Professional Development Centre at Vaels International School, Injambakkam offers the revamped 'Cambridge International Certificate in Teaching and Learning (CICTL)'. Candidates take credit in achieving distinction in this course.`,
    `Based on the annual review of the Centre done by the Cambridge University, the Centre has been reaccredited to enroll as many outsiders as possible.`,
    `At Vaels now with 16 years of successful implementation of this programme, the centre has witnessed more than 300 candidates procuring Diploma and Certification in Teaching and Learning from Cambridge University.`,
    `The candidates are also enrolled from outside schools with special permission granted by Cambridge!`,
    `At Vaels it is ensured that the teacher’s Professional Development is integrated into the everyday life of the school and teacher-Care is taken to consider teacher’s prior knowledge and experience. This unique training encourages and supports collaboration and innovation.`,
    `As is very typical of Cambridge teacher qualities, this training helps teachers to develop, critically engage with their own theories of learning.`,
  ];

  return (
    /* Added overflow-x-hidden here to prevent horizontal scrolling */
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* --- SECTION 1: THE ACCREDITATION (Split Layout) --- */}
      <section className="relative min-h-screen flex flex-col justify-center py-20">
        {/* Added max-w-full and overflow-hidden to the background text container */}
        <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none max-w-full overflow-hidden">
          <h1 className="text-[15vw] font-bold leading-none whitespace-nowrap">CAMBRIDGE</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/thalambur/cictl-img.jpeg"
                  alt="CICTL Poster"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#1f2b6c] rounded-2xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-12">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 className="text-sm uppercase tracking-[6px] text-blue-600 font-semibold mb-4">Established 2007</h2>
                <h3 className="text-6xl md:text-8xl font-black text-[#1f2b6c] leading-none mb-6">CICTL.</h3>
                <p className="text-xl font-medium text-slate-500 max-w-md">
                  Cambridge International Certificate in Teaching & Learning
                </p>
              </motion.div>

              <div className="space-y-8 relative">
                {/* Vertical Progress Line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200" />
                
                {paragraphs.slice(0, 3).map((text, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="pl-8 relative"
                  >
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#1f2b6c]" />
                    <p className="text-lg text-slate-700 leading-relaxed italic font-serif">
                      "{text}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BENTO GRID CONTENT --- */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Main Title Block */}
            <motion.div 
              variants={fadeInUp} initial="hidden" whileInView="show"
              className="md:col-span-2 bg-[#1f2b6c] p-12 rounded-3xl text-white flex flex-col justify-end min-h-[400px]"
            >
              <h2 className="text-4xl font-bold mb-6">A BRIEF INTRODUCTION OF THE COURSE</h2>
              <div className="h-1 w-20 bg-blue-400 mb-6" />
              <p className="text-blue-100 text-lg leading-relaxed">
                What is the Cambridge International Certificate/ Diploma for Teaching and Learning? Addressing the need for continuing professional development, the Cambridge International Certificate in Teaching and Learning has been designed to help teachers develop skills that will enhance their practice by becoming more resourceful and versatile... (cont.)
              </p>
            </motion.div>

            {/* Sidebar Info Blocks */}
            <div className="space-y-8">
               {paragraphs.slice(3).map((text, i) => (
                 <motion.div 
                  key={i}
                  variants={fadeInUp} initial="hidden" whileInView="show"
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                 >
                   <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                 </motion.div>
               ))}
            </div>

          </div>

          {/* Details Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mt-20 border-t border-slate-200 pt-20">
            
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
              <h4 className="font-bold text-[#1f2b6c] mb-4 text-xl tracking-tight">The Pedagogy</h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex gap-3"><span>•</span> Has been developed by Cambridge in consultation with partners and centres.</li>
                <li className="flex gap-3"><span>•</span> Created with an international audience in mind for globally accepted best practice.</li>
                <li className="flex gap-3"><span>•</span> Offers a flexible modular structure reflecting the teaching cycle.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" className="lg:col-span-2">
              <h4 className="font-bold text-[#1f2b6c] mb-6 text-xl tracking-tight">Course Delivery & Evaluation</h4>
              <div className="columns-1 md:columns-2 gap-8 text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  About CAIE Cambridge Assessment International Education (CAIE) is a part of University of Cambridge and their qualifications are taken in over 150 different countries and are recognized by universities, education providers and employers across the globe. CAIE offers a wide range of academic and professional qualifications for people of all ages and abilities.
                </p>
                <p>
                  The Certification course is ideal for anyone in a teaching or training role who wish to update their skills. It is not limited to one particular subject area or level of education and focuses instead on transferable skills and knowledge that can be used in any teaching or training context.
                </p>
                <p>
                  All candidates are supported by an experienced teacher who acts as a mentor. You will work with a ‘toolkit’ of resources, approaches and ideas which you can apply to your own teaching, as the focus of the Diploma is professional practice.
                </p>
                <p>
                  Each module is assessed by a professional practice assignment, which should be submitted in the form of a portfolio report. You can work with your Centre to identify the most appropriate opportunities to apply the skills and knowledge you have developed.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="inline-block px-8 py-4 bg-slate-50 border border-slate-200 rounded-full text-[#1f2b6c] font-medium"
           >
             Registered CAIE Centre: Vaels International School
           </motion.div>
        </div>
      </section>
    </div>
  );
}