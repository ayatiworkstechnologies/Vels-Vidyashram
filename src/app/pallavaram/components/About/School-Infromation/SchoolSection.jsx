"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  { id: 1, title: "Mandatory Disclosure", pdf: "/pallavaram/pdf/mandatory-public-disclosure.pdf" },
  { id: 2, title: "Affliation", pdf: "/pallavaram/pdf/affiliation.pdf" },
  { id: 3, title: "NOC", pdf: "/pallavaram/pdf/noc.pdf" },
  { id: 4, title: "Trust", pdf: "/pallavaram/pdf/trust.pdf" },
  { id: 6, title: "Recognition", pdf: "/pallavaram/pdf/recognition.pdf" },
  { id: 7, title: "Building", pdf: "/pallavaram/pdf/building.pdf" },
  { id: 8, title: "Fire", pdf: "/pallavaram/pdf/fire.pdf" },
  { id: 9, title: "Sanitary", pdf: "/pallavaram/pdf/SANITARY.pdf" },
  { id: 10, title: "Self Certification", pdf: "/pallavaram/pdf/self-certificate.pdf" },
  { id: 11, title: "Fee Structure", pdf: "/pallavaram/pdf/fee-structure.pdf" },
  { id: 12, title: "Calendar", pdf: "/pallavaram/pdf/calendar.pdf" },
  { id: 13, title: "SMC", pdf: "/pallavaram/pdf/smc.pdf" },
  { id: 14, title: "PTA", pdf: "/pallavaram/pdf/pta.pdf" },
  { id: 15, title: "Results", pdf: "/pallavaram/pdf/RESULTS.pdf" },
  { id: 16, title: "Self Affidavit", pdf: "/pallavaram/pdf/self-affidavit.pdf" },
  { id: 17, title: "Tc Sample", pdf: "/pallavaram/pdf/TC-Sample.pdf" },
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
      document.body.classList.add("pdf-modal-open");
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("pdf-modal-open");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("pdf-modal-open");
    };
  }, [openPdf]);

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-20 min-h-screen">

      {/* Inject global style to hide floating widgets when modal is open */}
      <style>{`
        body.pdf-modal-open *:not([data-pdf-modal]) {
          --tw-shadow: none;
        }
        body.pdf-modal-open .fixed:not([data-pdf-modal]),
        body.pdf-modal-open [style*="position: fixed"]:not([data-pdf-modal]),
        body.pdf-modal-open [style*="position:fixed"]:not([data-pdf-modal]) {
          visibility: hidden !important;
          pointer-events: none !important;
        }
        body.pdf-modal-open [data-pdf-modal],
        body.pdf-modal-open [data-pdf-modal] * {
          visibility: visible !important;
          pointer-events: auto !important;
        }
      `}</style>

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
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => setOpenPdf({ pdf: it.pdf, title: it.title })}
            className="group relative flex flex-col justify-between items-start p-4 sm:p-5 md:p-6 bg-white border border-gray-100 rounded-xl font-secondary shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-200 hover:-translate-y-1 active:scale-95 text-left w-full"
          >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold font-primary text-gray-800 group-hover:text-[#1c1533] transition-colors leading-tight">
                {it.title}
              </h3>
            </div>

            <div className="flex items-center font-secondary text-xs sm:text-sm font-medium text-orange-500 group-hover:text-orange-600 cursor-pointer">
              <span className="hidden sm:inline">View Document</span>
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

      {/* PDF Modal — data-pdf-modal marks all modal elements so they stay visible */}
      {openPdf && (
        <div
          data-pdf-modal
          className="fixed inset-0 flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ zIndex: 99999 }}
        >
          {/* Backdrop */}
          <div
            data-pdf-modal
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenPdf(null)}
          />

          {/* Modal — bottom sheet on mobile, centered dialog on sm+ */}
          <div
            data-pdf-modal
            className="relative bg-white w-full rounded-t-2xl h-[92dvh] sm:rounded-2xl sm:shadow-2xl sm:max-w-5xl sm:h-[85vh] overflow-hidden flex flex-col"
            style={{ zIndex: 100000 }}
          >
            {/* Drag handle (mobile only) */}
            <div data-pdf-modal className="flex justify-center pt-2 pb-1 sm:hidden">
              <div data-pdf-modal className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Modal Header */}
            <div data-pdf-modal className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-white flex-shrink-0">
              <h3 data-pdf-modal className="text-base sm:text-xl font-bold text-gray-800 font-primary truncate pr-3">
                {openPdf.title}
              </h3>

              <div data-pdf-modal className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  data-pdf-modal
                  href={openPdf.pdf}
                  download
                  className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-orange-500 text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 active:bg-orange-700 transition-colors font-secondary whitespace-nowrap"
                >
                  <svg data-pdf-modal className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span data-pdf-modal className="hidden sm:inline">Download PDF</span>
                  <span data-pdf-modal className="inline sm:hidden">Save</span>
                </a>

                <button
                  data-pdf-modal
                  onClick={() => setOpenPdf(null)}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500"
                  aria-label="Close"
                >
                  <svg data-pdf-modal className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div data-pdf-modal className="flex-1 bg-gray-200 overflow-hidden">
              {isMobile ? (
                <div data-pdf-modal className="flex flex-col items-center justify-center h-full gap-5 px-6 text-center">
                  <div data-pdf-modal className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <svg data-pdf-modal className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div data-pdf-modal>
                    <p data-pdf-modal className="text-gray-700 font-semibold text-base mb-1">{openPdf.title}</p>
                    <p data-pdf-modal className="text-gray-500 text-sm">PDF preview isn't available on mobile browsers.</p>
                  </div>
                  <div data-pdf-modal className="flex flex-col gap-3 w-full max-w-xs">
                    <a
                      data-pdf-modal
                      href={openPdf.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1c1533] text-white text-sm font-semibold hover:bg-[#2a1f4a] transition-colors"
                    >
                      <svg data-pdf-modal className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open in Browser
                    </a>
                    <a
                      data-pdf-modal
                      href={openPdf.pdf}
                      download
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                    >
                      <svg data-pdf-modal className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  data-pdf-modal
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