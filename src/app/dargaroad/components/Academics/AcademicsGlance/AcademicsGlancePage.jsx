"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  {
    id: 1,
    title: "Results",
    icon: "/dargaroad/pdf/results.png",
    pdf: "/dargaroad/pdf/Mandatory-disclosure.pdf",
  },
  {
    id: 2,
    title: "Lists of Books",
    icon: "/dargaroad/pdf/list-of-books.png",
    pdf: "/dargaroad/pdf/listofbooks.pdf",
  },
  {
    id: 3,
    title: "Home Woerk Policy",
    icon: "/dargaroad/pdf/home-work-policy.png",
    pdf: "/dargaroad/pdf/HOMEWORK-POLICY.pdf",
  },
  {
    id: 4,
    title: "Annual Report",
    icon: "/dargaroad/pdf/annual-report.png",
    pdf: "/dargaroad/pdf/Annual-report.pdf",
  },
  {
    id: 5,
    title: "Strength Details",
    icon: "/dargaroad/pdf/strength-details.png",
    pdf: "/dargaroad/pdf/strength.pdf",
  },
  {
    id: 6,
    title: "Teacher Details",
    icon: "/dargaroad/pdf/teacher-details.png",
    pdf: "/dargaroad/pdf/teacher.pdf",
  },

];


export default function AcademicsGlancePage() {
  const [openPdf, setOpenPdf] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenPdf(null);
    }
    if (openPdf) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openPdf]);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-primary font-primary-bold">Academics at a Glance</h1>
        <div className="flex justify-center mt-3">
          <div className="w-24 h-[1px] bg-secondary" />
        </div>
        <p className="text-md text-black mt-4">Where strong values meet future-ready learning.</p>
      </div>

      {/* Grid - keep desktop layout unchanged; adjust mobile to single column / full-width cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => setOpenPdf({ pdf: it.pdf, title: it.title })}
            aria-label={it.title}
            className={
              "group bg-white shadow-sm overflow-hidden transition duration-200 transform hover:scale-[1.01] hover:bg-[#1c1533] flex flex-col " +
              "w-full sm:w-[240px] h-auto sm:h-[240px] max-w-xs"
            }
          >
            {/* Icon area */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center transition duration-200 group-hover:bg-[#1c1533] p-6 sm:p-0 cursor-pointer">
              <img
                src={it.icon}
                alt=""
                className="max-h-28 max-w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <div className="px-4 py-3 flex items-center justify-between bg-white transition duration-200 cursor-pointer">
              <span className="text-sm text-black mx-auto font-medium truncate">{it.title}</span>
              <span className="text-secondary text-xl">→</span>
            </div>
          </button>
        ))}
      </div>

      {/* PDF Modal */}
      {openPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-4">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpenPdf(null)} />

          {/* Modal content - keep desktop width but make mobile friendly */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden z-10 sm:rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-white sticky top-0 z-20">
              <h3 className="text-lg font-medium">{openPdf.title}</h3>

              <div className="flex items-center gap-2">
                <a
                  href={openPdf.pdf}
                  download
                  className="px-3 py-1 rounded bg-orange-500 text-white text-sm hover:bg-orange-600"
                >
                  Download
                </a>

                <a
                  href={openPdf.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded border text-sm hover:bg-gray-100"
                >
                  Open New Tab
                </a>

                <button onClick={() => setOpenPdf(null)} className="p-2 rounded hover:bg-gray-100" aria-label="Close">
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="w-full h-full bg-gray-100">
              {/* On mobile the iframe uses the remaining viewport height so it displays nicely */}
              <iframe
                src={openPdf.pdf}
                className="w-full h-full"
                style={{ height: "calc(100vh - 64px)" }}
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
