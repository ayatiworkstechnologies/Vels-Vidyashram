import React from "react";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  const campuses = [
    //{ name: "Pallavaram Campus", url: "/pallavaram" },
    { name: "Cantonment Campus", url: "/cantonment" },
    { name: "Thalambur Campus", url: "/thalambur" },
    { name: "Dargaroad Campus", url: "/dargaroad" },
  ];

  return (
    <footer className="w-full px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto bg-[#2B2A8C] rounded-[30px] md:rounded-[40px] px-6 py-10 md:px-12 md:py-12 text-white shadow-xl">

        {/* Campus Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-6 text-center mb-8">
          {campuses.map((campus) => (
            <Link
              key={campus.name}
              href={campus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium hover:text-[#F7931E] transition-colors"
            >
              {campus.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* Copyright */}
        <div className="text-center text-[11px] md:text-sm font-light opacity-90 tracking-wide leading-relaxed px-4">
          Copyright ©2026 Vels Vidyashram - All Rights Reserved |
          <span className="inline-flex items-center justify-center gap-2 mt-1 sm:mt-0 sm:ml-2">
            Designed & Developed by
            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/ayati-logo-p.png" // Replace with your logo path
                alt="Ayatiworks"
                width={90}
                height={24}
                className="h-10 w-auto"
              />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;