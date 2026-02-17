"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GenesisSection = () => {
  // Animation variants for reusability
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Main Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-primary font-black text-slate-900 tracking-tight">
            GENESIS OF <span className="text-primary">R&D @ VELS</span>
          </h2>
       
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: The Context (Genesis) */}
          <motion.div 
            {...fadeInUp}
            className="group bg-white border border-slate-200 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
             
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  The present day demands of holistic development of a child (economic, social and technological changes), poses enormous challenges for the existing school systems, especially for the teaching forces in urban areas, developing/ developed countries.
                </p>
                <p>
                  In other sectors of society, the help is sought from the R & D for guidance / support / scaffolding.  <span className="text-indigo-900 font-semibold italic">(in most of the states, the state itself is supporting the schools)</span>.
                </p>
                <p>
                    There are very few schools with R & D team for quick fixes to increase advanced productivity at various stages on scales. (Seeking, nurturing and inspiring educational break through), thus making way for introducing R & D at Vels.
                </p>
                <p>This is a pioneering attempt to incorporate all issues of academic interest by all the stake holders in the field of education.</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-50  rounded-full group-hover:scale-150 transition-transform duration-700" />
          </motion.div>

          {/* Card 2: The Definition (Mission) */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-indigo-900 text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-2xl md:text-3xl text-white font-bold">What is R&D @ VELS?</h3>
              </div>
              
              <p className="text-indigo-100 text-xl leading-relaxed mb-8">
                It is to  <span className="text-white font-medium underline underline-offset-8 decoration-indigo-400">expand the frontiers</span> of human understanding and improve our society as a whole. Gather new knowledge leading to new products and process.
              </p>

             
            </div>

            {/* Subtle animated light orb */}
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"
            />
          </motion.div>

        </div>

      
      </div>
    </section>
  );
};

export default GenesisSection;