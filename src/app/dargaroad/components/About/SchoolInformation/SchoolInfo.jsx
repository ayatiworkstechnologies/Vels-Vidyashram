"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  { id: 1, title: "Mandatory Disclosure", pdf: "/dargaroad/pdf/Mandatory-disclosure.pdf" },
  { id: 2, title: "Affiliations", pdf: "/dargaroad/pdf/AFFILIATION.pdf" },
  { id: 3, title: "NOC", pdf: "/dargaroad/pdf/NOC.pdf" },
  { id: 4, title: "Trust", pdf: "/dargaroad/pdf/TRUST.pdf" },
  { id: 5, title: "Building", pdf: "/dargaroad/pdf/Building.pdf" },
  { id: 6, title: "Fire", pdf: "/dargaroad/pdf/fire-certificate.pdf" },
  { id: 7, title: "Sanitary", pdf: "/dargaroad/pdf/sanitary-certificate.pdf" },
  { id: 8, title: "FEE structure", pdf: "/dargaroad/pdf/fee-structure.pdf" },
  { id: 9, title: "Calendar", pdf: "/dargaroad/pdf/academic-calendar.pdf" },
  { id: 10, title: "SMC", pdf: "/dargaroad/pdf/Smc-new.pdf" },
  { id: 11, title: "Recognition", pdf: "/dargaroad/pdf/Recognition.pdf" },
  { id: 12, title: "PTA", pdf: "/dargaroad/pdf/PTA - 2026-27.pdf" },
  { id: 13, title: "Result", pdf: "/dargaroad/pdf/result-new.pdf" },
  { id: 14, title: "Self Darga Road", pdf: "/dargaroad/pdf/Self-DargaRoad.pdf" },
  { id: 15, title: "Self Affidavit", pdf: "/dargaroad/pdf/self-affidavit.pdf" },
  { id: 16, title: "Tc Sample", pdf: "/dargaroad/pdf/Transfer-Certificate-2023-2024.pdf" },
  { id: 17, title: "Land Certificate", pdf: "/dargaroad/pdf/land-certificate.pdf" },
];

export default function SchoolInfoPage() {
  const [openPdf, setOpenPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenPdf(null);
    }
    if (openPdf) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [openPdf]);

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-20 min-h-screen">

      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-primary text-[#1c1533] leading-tight">
          School Information
        </h1>
        <div className="flex justify-center mt-3 sm:mt-4">
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
        </div>
        <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg font-secondary px-2">
          Access and download official documentation, certifications, and academic structures.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => setOpenPdf({ pdf: it.pdf, title: it.title })}
            className="group relative flex flex-col justify-between items-start p-4 sm:p-5 md:p-6 bg-white border border-gray-100 rounded-xl font-secondary shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-200 hover:-translate-y-1 active:scale-95 active:shadow-sm text-left w-full"
          >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold font-primary text-gray-800 group-hover:text-[#1c1533] transition-colors leading-tight">
                {it.title}
              </h3>
            </div>

            <div className="flex items-center font-secondary text-xs sm:text-sm font-medium text-orange-500 group-hover:text-orange-600 cursor-pointer">
              <span className="hidden xs:inline sm:inline">View Document</span>
              <span className="inline sm:hidden">View</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1"
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
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenPdf(null)}
          />

          {/* Modal Container */}
          <div
            className="
              relative bg-white z-10 w-full
              /* Mobile: bottom sheet style */
              rounded-t-2xl h-[92dvh]
              /* sm+: centered dialog */
              sm:rounded-2xl sm:shadow-2xl sm:max-w-5xl sm:h-[85vh]
              overflow-hidden flex flex-col
            "
          >
            {/* Drag handle (mobile only) */}
            <div className="flex justify-center pt-2 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-white flex-shrink-0">
              <h3 className="text-base sm:text-xl font-bold text-gray-800 font-primary truncate pr-3">
                {openPdf.title}
              </h3>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href={openPdf.pdf}
                  download
                  className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-orange-500 text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 active:bg-orange-700 transition-colors font-secondary whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden xs:inline sm:inline">Download</span>
                  <span className="inline xs:hidden sm:hidden">Save</span>
                </a>

                <button
                  onClick={() => setOpenPdf(null)}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 bg-gray-200 overflow-hidden">
              {isMobile ? (
                /* On mobile, iframes often fail — show a friendly open/download prompt */
                <div className="flex flex-col items-center justify-center h-full gap-5 px-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold font-primary text-base mb-1">{openPdf.title}</p>
                    <p className="text-gray-500 font-secondary text-sm">PDF preview isn't available on mobile browsers.</p>
                  </div>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <a
                      href={openPdf.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1c1533] text-white text-sm font-semibold font-secondary hover:bg-[#2a1f4a] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open in Browser
                    </a>
                    <a
                      href={openPdf.pdf}
                      download
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white text-sm font-semibold font-secondary hover:bg-orange-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${openPdf.pdf}#toolbar=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  title={openPdf.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}