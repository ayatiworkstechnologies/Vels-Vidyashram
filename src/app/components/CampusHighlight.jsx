"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const campuses = [
  {
    id: 1,
    name: 'Pallavaram Campus',
    tagline: 'A Center for Progressive Learning',
    description: 'A well-structured campus built for excellence and holistic development. Led by experienced educators and supported by state-of-the-art facilities.',
    image: '/palla.png',
    exploreLink: '/pallavaram',
    admissionLink: 'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
  },
  {
    id: 2,
    name: 'Cantonment Campus',
    tagline: 'A Joyful Start to Learning',
    description: 'A vibrant campus environment designed to foster creativity and early childhood development. Focused on providing a strong foundation.',
    image: '/contonment.png',
    exploreLink: '/cantonment',
    admissionLink: 'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
  },
  {
    id: 3,
    name: 'Thalambur Campus',
    tagline: 'Progressive Learning for a New Generation',
    description: 'A dynamic campus focusing on future-ready skills, academic rigor, and character building. Equipped with modern infrastructure.',
    image: '/thalam.png',
    exploreLink: '/thalambur',
    admissionLink: 'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
  },
  {
    id: 4,
    name: 'Darga Road Campus',
    tagline: 'Excellence Rooted in Care and Values',
    description: 'A campus dedicated to academic achievement and value-based education. Providing a supportive community for students to excel.',
    image: '/darga.png',
    exploreLink: '/dargaroad',
    admissionLink: 'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
  },
];

const CampusCard = ({ campus, index }) => {
  return (
    <div 
      className="sticky top-0 h-screen w-full flex items-center justify-center px-4 md:px-6"
      style={{ zIndex: index + 10 }}
    >
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-stretch min-h-[450px] overflow-hidden md:overflow-visible"
      >
        {/* LEFT SIDE: Image (Responsive behavior) */}
        <div className="w-full md:w-[45%] relative z-20 flex items-center p-0 md:p-0">
          <div className="relative w-full aspect-video md:aspect-[4/3] md:rounded-3xl overflow-hidden md:shadow-2xl md:border-[6px] md:border-white md:-translate-x-12 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={campus.image}
              alt={campus.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="w-full md:w-[55%] flex flex-col">
          <div className="bg-[#F4F4F4] py-4 md:py-5 px-6 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a]">
              {campus.name}
            </h2>
          </div>

          <div className="p-6 md:p-10 flex-grow flex flex-col justify-center">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
              {campus.tagline}
            </h3>
            
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 max-w-[480px]">
              {campus.description}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-auto">
              <Link target="_blank" href={campus.exploreLink} className="flex-1 md:flex-none">
                <button className="w-full bg-[#2b3990] text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-[#1e2766] transition-all shadow-md active:scale-95 text-xs md:text-base cursor-pointer">
                  Explore More
                </button>
              </Link>
              
              <Link href={campus.admissionLink} target="_blank" className="flex-1 md:flex-none">
                <button className="w-full border-2 border-[#2b3990] text-gray-900 px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-sm active:scale-95 text-xs md:text-base cursor-pointer">
                  Admission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function CampusSection() {
  return (
    <section className="relative w-full">
      {/* 1. STICKY BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Image 
            src="/slider.png" 
            alt="background texture"
            fill
            priority
            className="object-cover opacity-40 md:opacity-50"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </div>
      </div>

      {/* 2. OVERLAID CONTENT */}
      <div className="relative z-10">
        {/* Header content */}
        <div className="pt-10 pb-6 px-6 max-w-7xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Explore Our <span className="text-[#2b3990]">Campuses</span>
            </h1>
            <p className="text-gray-600 max-w-3xl text-sm md:text-lg leading-relaxed font-medium mx-auto md:mx-0">
              Pallavaram, Cantonment, Thalambur & Darga Road campuses offer a unified learning experience 
              built on academic excellence and modern infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Stacking Cards Section */}
        <div className="relative">
          {campuses.map((campus, index) => (
            <CampusCard key={campus.id} campus={campus} index={index} />
          ))}
        </div>

      
      </div>
    </section>
  );
}