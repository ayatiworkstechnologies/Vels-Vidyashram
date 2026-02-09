"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Users } from 'lucide-react';

const routes = [
  "Tirporur", "Egatoor", "Sholinganalur", "Pudhupakkam", "Injambakkam",
  "Perumbakkam", "Kelambakkam", "Medavakkam", "Mambakkam", "Shithalapakkam",
  "Thalambur", "Navalur", "Ponmar", "Padur", "Siruseri", "Natham link road", "Seemenchery"
];

const TransportSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Text - From Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Well organized transport system to ply students to and fro. A safe journey is ensured by well supervised system. Child’s comfort is prioritised and the child is taken care by van assistants.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <ShieldCheck className="text-primary" size={20} /> Well Supervised
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Users className="text-primary" size={20} /> Van Assistants
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Full Route Content (No Internal Scroll) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Routes Covered</h2>
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
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <MapPin size={16} className="text-gray-400 group-hover:text-[#113164]" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#113164] transition-colors cursor-default">
                    {route}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Image/Map Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="/thalambur/map-thalambhur.png" 
              alt="Transport Routes Map" 
              className="w-full h-auto object-cover min-h-[400px]"
            />
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TransportSection;