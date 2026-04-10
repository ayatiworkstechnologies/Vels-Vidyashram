import React from 'react';

const Footer = () => {
  const campuses = [
    { name: "Pallavaram Campus", url: "/pallavaram" },
    { name: "Cantonment Campus", url: "/cantonment" },
    { name: "Thalambur Campus", url: "/thalambur" },
    { name: "Dargaroad Campus", url: "/dargaroad" }
  ];

  return (
    <footer className="w-full px-4 py-8 bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-[#2B2A8C] rounded-[30px] md:rounded-[40px] px-6 py-10 md:px-12 md:py-12 text-white shadow-xl">
        
        {/* Campus Links Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-6 text-center mb-8">
          {campuses.map((campus) => (
            <a
              key={campus.name}
              href={campus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium hover:text-[#F7931E] transition-colors"
            >
              {campus.name}
            </a>
          ))}
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* Copyright Text */}
        <div className="text-center text-[11px] md:text-sm font-light opacity-90 tracking-wide leading-relaxed px-4">
          Copyright ©2026 VelsVidyashram - All right reserved | 
          <span className="block sm:inline sm:ml-1">Designed & Developed by Ayatiworks</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;