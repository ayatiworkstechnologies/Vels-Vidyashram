"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const myImages = [
  { id: 1, path: "/thalambur/centre-1.jpg" },
  { id: 2, path: "/thalambur/centre-2.jpg" },
  { id: 3, path: "/thalambur/centre-3.jpg" },
  { id: 4, path: "/thalambur/centre-4.jpg" },
  { id: 5, path: "/thalambur/centre-5.jpg" },
];

const ProfessionalRedesign = () => {
  return (
    /* Added overflow-hidden to prevent horizontal scroll during animations */
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 md:p-10 font-sans text-white overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: Content Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 z-10"
        >
          <div className="relative p-8 md:p-12 bg-white border border-white/10 rounded-[3rem] shadow-2xl">
            <h1 className="text-4xl font-black leading-tight mb-6 font-primary">
              Centre for <br/>
              <span className="text-primary">
                Professional Development
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-secondary">
              High International Standards of Modern Teaching Methods are imparted and Superior Training and Coaching is done Resulting in the Award of a Unique Certificate viz., <span className="text-primary font-semibold">Professional Certificate for Educators (PCE)</span> offering National and International courses.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-tertiary border border-white/5 hover:border-indigo-500/50 transition-colors group">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-indigo-300 font-primary">VSKILL</h3>
                <p className="text-base font-secondary text-white leading-snug">Professional Certificate for Educators (PCE) accredited by VISTAS National level</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#232A95] transition-colors group">
                <h3 className="text-primary font-primary font-bold text-xl mb-2 group-hover:text-tertiary">CICTL</h3>
                <p className="text-base text-slate-400 leading-snug font-secondary">Cambridge International Certificate for Teaching and Learning for teacher candidates accredited by Cambridge Assessment for International Education at Vaels International School- IN868.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: The Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          /* Added w-full and flex center to ensure cards don't push the container width */
          className="lg:col-span-5 relative flex justify-center w-full"
        >
          <div className="relative group w-full max-w-[380px]">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true, dynamicBullets: true }}
              cardsEffect={{
                slideShadows: true,
                rotate: true,
                perSlideOffset: 12,
                perSlideRotate: 4,
              }}
              /* aspect-[3/4] ensures the height/width ratio you requested */
              className="w-full aspect-[3/4] rounded-[2.5rem]"
            >
              {myImages.map((image) => (
                <SwiperSlide 
                  key={image.id} 
                  className="rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-2xl"
                >
                  <div className="w-full h-full bg-slate-800">
                    <img 
                      src={image.path} 
                      alt={`Professional Development Session ${image.id}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = "/thalambur/centre-1.jpg"; }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        /* Fix for potential overflow from Swiper shadows */
        .swiper {
          overflow: visible !important;
        }
        .swiper-pagination-bullet { background: #6366f1 !important; }
        .swiper-slide-shadow { border-radius: 2.5rem !important; }
        
        /* Ensure the cards effect doesn't create extra width */
        .swiper-cards {
          overflow: visible !important;
        }
      `}</style>
    </div>
  );
};

export default ProfessionalRedesign;