"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  { id: 1, title: "Land & Trust Certificate", pdf: "/thalambur/pdf/Trustandlandcertificate.pdf" },
  { id: 2, title: "CBSE Mandatory Disclosure", pdf: "/thalambur/pdf/Mandatory-Disclosure.pdf" },
  { id: 3, title: "CBSE Affiliation", pdf: "/thalambur/pdf/Affiliation-Extension-2022-2027-VVT.pdf" },
  { id: 4, title: "Self Certification", pdf: "/thalambur/pdf/Self-declaration.pdf" },
  { id: 5, title: "NOC", pdf: "/thalambur/pdf/NOC.pdf" },
  { id: 6, title: "Recognition", pdf: "/thalambur/pdf/RECOGNITION.pdf" },
  { id: 7, title: "Building Safety", pdf: "/thalambur/pdf/05-Building-Safety-Certifiacte.pdf" },
  { id: 8, title: "Fire Safety", pdf: "/thalambur/pdf/fire-safety-certificate.pdf" },
  { id: 9, title: "Sanitary Certificate", pdf: "/thalambur/pdf/sanitary-certificate.pdf" },
  { id: 10, title: "Calendar for Students", pdf: "/thalambur/pdf/academic-calendar-2025-2026.pdf" },
  { id: 11, title: "Fee Structure", pdf: "/thalambur/pdf/09-Fee-Structure.pdf" },
  { id: 12, title: "SMC", pdf: "/thalambur/pdf/10-SMC.pdf" },
  { id: 13, title: "PTA Association", pdf: "/thalambur/pdf/11-PTA.pdf" },
  { id: 14, title: "Board Results", pdf: "/thalambur/pdf/Board-results.pdf" },

];

export default function SchoolInfoPage() {
  const [openPdf, setOpenPdf] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenPdf(null);
    }
    if (openPdf) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [openPdf]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 min-h-screen">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-primary text-[#1c1533]">School Information</h1>
        <div className="flex justify-center mt-4">
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
        </div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg font-secondary">
          Access and download official documentation, certifications, and academic structures.
        </p>
      </div>

      {/* Alternate Grid Design: Text-Focused Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => setOpenPdf({ pdf: it.pdf, title: it.title })}
            className="group relative flex flex-col justify-between items-start p-6 bg-white border border-gray-100 rounded-xl font-secondary shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-200 hover:-translate-y-1 text-left"
          >
            <div className="mb-4">
             
              <h3 className="text-lg font-semibold font-primary text-gray-800 group-hover:text-[#1c1533] transition-colors leading-tight">
                {it.title}
              </h3>
            </div>
            
            <div className="flex items-center font-secondary text-sm font-medium text-orange-500 group-hover:text-orange-600 cursor-pointer">
              View Document
              <svg 
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* PDF Modal */}
      {openPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpenPdf(null)} />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] overflow-hidden z-10">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
              <h3 className="text-xl font-bold text-gray-800 font-primary">{openPdf.title}</h3>

              <div className="flex items-center gap-3">
                <a
                  href={openPdf.pdf}
                  download
                  className="hidden sm:flex items-center px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors font-secondary"
                >
                  Download PDF
                </a>
                <button 
                  onClick={() => setOpenPdf(null)} 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 font-secondary"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="w-full h-full bg-gray-200">
              <iframe
                src={`${openPdf.pdf}#toolbar=0`}
                className="w-full h-full"
                frameBorder="0"
                title={openPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}