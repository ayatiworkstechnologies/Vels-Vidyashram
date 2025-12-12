"use client";

import { useState, useEffect } from "react";

const ITEMS = [
  {
    id: 1,
    title: "Mandatory Disclosure",
    icon: "/dargaroad/pdf/mandatory-disclosure.png",
    pdf: "/dargaroad/pdf/Mandatory-disclosure.pdf",
  },
  {
    id: 2,
    title: "Affiliations",
    icon: "/dargaroad/pdf/affliation.png",
    pdf: "/dargaroad/pdf/AFFILIATION.pdf",
  },
  {
    id: 3,
    title: "NOC",
    icon: "/dargaroad/pdf/noc.png",
    pdf: "/dargaroad/pdf/NOC.pdf",
  },
  {
    id: 4,
    title: "Trust",
    icon: "/dargaroad/pdf/trust.png",
    pdf: "/dargaroad/pdf/TRUST.pdf",
  },
  {
    id: 5,
    title: "Building",
    icon: "/dargaroad/pdf/building.png",
    pdf: "/dargaroad/pdf/Building.pdf",
  },
  {
    id: 6,
    title: "Fire",
    icon: "/dargaroad/pdf/fire.png",
    pdf: "/dargaroad/pdf/fire-certificate.pdf",
  },
  {
    id: 7,
    title: "Sanitary",
    icon: "/dargaroad/pdf/sanitary.png",
    pdf: "/dargaroad/pdf/sanitary-certificate.pdf",
  },
  {
    id: 8,
    title: "FEE structure",
    icon: "/dargaroad/pdf/fee-structure.png",
    pdf: "/dargaroad/pdf/fee-structure.pdf",
  },
  {
    id: 9,
    title: "Calendar",
    icon: "/dargaroad/pdf/calendar.png",
    pdf: "/dargaroad/pdf/academic-calendar.pdf",
  },
  {
    id: 10,
    title: "SMC",
    icon: "/dargaroad/pdf/smc.png",
    pdf: "/dargaroad/pdf/Smc.pdf",
  },
  {
    id: 11,
    title: "Recognition",
    icon: "/dargaroad/pdf/recognition.png",
    pdf: "/dargaroad/pdf/Recognition.pdf",
  },
  {
    id: 12,
    title: "PTA",
    icon: "/dargaroad/pdf/pta.png",
    pdf: "/dargaroad/pdf/PTA.pdf",
  },
  {
    id: 13,
    title: "Result",
    icon: "/dargaroad/pdf/results.png",
    pdf: "/dargaroad/pdf/staff-details.pdf",
  },
  {
    id: 14,
    title: "Self Darga Road",
    icon: "/dargaroad/pdf/self-darga.png",
    pdf: "/dargaroad/pdf/Self-DargaRoad.pdf",
  },
  {
    id: 15,
    title: "Self Affidavit",
    icon: "/dargaroad/pdf/self.png",
    pdf: "/dargaroad/pdf/self-affidavit.pdf",
  },
  {
    id: 16,
    title: "Tc Sample",
    icon: "/dargaroad/pdf/tc.png",
    pdf: "/dargaroad/pdf/Transfer-Certificate-2023-2024.pdf",
  },
  {
    id: 17,
    title: "Land Certificate",
    icon: "/dargaroad/pdf/land-certificate.png",
    pdf: "/dargaroad/pdf/land-certificate.pdf",
  },
];


export default function SchoolInfoPage() {
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
        <h1 className="text-2xl md:text-4xl font-primary font-primary-bold">School Information</h1>
        <p className="text-sm text-gray-500 mt-2">Where strong values meet future-ready learning.</p>
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
            <div className="flex-1 bg-gray-50 flex items-center justify-center transition duration-200 group-hover:bg-[#1c1533] p-6 sm:p-0">
              <img
                src={it.icon}
                alt=""
                className="max-h-28 max-w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <div className="px-4 py-3 flex items-center justify-between bg-white transition duration-200">
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
