"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Users } from 'lucide-react';

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const routes = [
  "Pammal", "Pozhichalur", "Pallavaram", "Chrompet", "Keelkattalai",
  "Madipakkam", "Zamin Pallavaram", "Tambaram", "Perungalathur", "Mudichur",
  "Kolapakkam", "Kovilambakkam", "Nanmangalam", "Sembakkam", "Selaiyur", "Thoraipakkam", "Anakaputhur"
];

// ✅ Slider images
const images = [
  "/pallavaram/Bus.jpg",
  "/pallavaram/transport1.jpg",
  "/pallavaram/transport2.jpg"
];

const TransportSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto font-secondary">
            Well organized transport system to ply students to and fro. A safe journey is ensured by well supervised system. Child’s comfort is prioritised and the child is taken care by van assistants.
          </p>

          <div className="flex justify-center gap-8 pt-4 font-secondary">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <ShieldCheck className="text-primary" size={20} /> Well Supervised
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Users className="text-primary" size={20} /> Van Assistants
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight font-primary">
                Routes Covered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {routes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50">
                    <MapPin size={16} className="text-gray-400 group-hover:text-[#113164]" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#113164]">
                    {route}
                  </span>
                </motion.div>
              ))}
             
            </div>
                          <h2 className="text-2xl font-bold text-gray-900 tracking-tight font-primary">
                Contact
              </h2>
             <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto font-secondary">
            Mr.Babu(Transport Incharge)- +91 98843 44866
          </p>
          </div>

          {/* ✅ Right Side: Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500 }}
              loop={true}
              pagination={{ clickable: true }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Transport ${index}`}
                    className="w-full object-cover"
                    style={{ height: "345px", maxWidth: "600px" }} // ✅ size control
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TransportSection;