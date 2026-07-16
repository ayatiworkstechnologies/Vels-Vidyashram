"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ITEMS = [
  {
    id: 1,
    title: "Land & Trust Certificate",
    pdf: "/thalambur/pdf/01_LAND_CERTIFICATE_2025.pdf",
  },
  {
    id: 2,
    title: "CBSE Mandatory Disclosure",
    pdf: "/thalambur/pdf/Mandatory-Disclosure.pdf",
  },
  {
    id: 3,
    title: "CBSE Affiliation",
    pdf: "/thalambur/pdf/03_CBSE_Affiliation.pdf",
  },
  {
    id: 4,
    title: "Self Certification",
    pdf: "/thalambur/pdf/Self-declaration.pdf",
  },
  {
    id: 5,
    title: "NOC",
    pdf: "/thalambur/pdf/05_NOC2026.pdf",
  },
  {
    id: 6,
    title: "Recognition",
    pdf: "/thalambur/pdf/06_Recoginition.pdf",
  },
  {
    id: 7,
    title: "Building Safety",
    pdf: "/thalambur/pdf/07_BuildingSafety.pdf",
  },
  {
    id: 8,
    title: "Fire Safety",
    pdf: "/thalambur/pdf/08_Fire.pdf",
  },
  {
    id: 9,
    title: "Sanitary Certificate",
    pdf: "/thalambur/pdf/sanitary-certificate.pdf",
  },
  {
    id: 10,
    title: "Calendar for Students",
    pdf: "/thalambur/pdf/10_StudentAcademicCalendar2026-27.pdf",
  },
  {
    id: 11,
    title: "Fee Structure",
    pdf: "/thalambur/pdf/11_Fee.pdf",
  },
  {
    id: 12,
    title: "SMC",
    pdf: "/thalambur/pdf/10-SMC.pdf",
  },
  {
    id: 13,
    title: "PTA Association",
    pdf: "/thalambur/pdf/13_PTA.pdf",
  },
  {
    id: 14,
    title: "Board Results",
    pdf: "/thalambur/pdf/14_Results.pdf",
  },
];

function PdfModal({ openPdf, onClose, isMobile }) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 flex items-end justify-center p-0 sm:items-center sm:p-5"
      style={{ zIndex: 2147483647 }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close PDF preview"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#160a4d]/80 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className="
          relative z-10 flex h-[92dvh] w-full flex-col
          overflow-hidden rounded-t-2xl bg-white
          sm:h-[86vh] sm:max-w-6xl sm:rounded-2xl sm:shadow-2xl
        "
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pb-1 pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-gray-300" />
        </div>

        {/* Modal header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-[#E5E1F2] bg-white px-4 py-3 sm:px-6 sm:py-4">
          <h3 className="truncate pr-3 font-primary text-base font-bold text-[#2B158F] sm:text-xl">
            {openPdf.title}
          </h3>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={openPdf.pdf}
              download
              className="
                inline-flex items-center justify-center gap-1.5
                rounded-lg bg-[#FF8700] px-3 py-2
                font-secondary text-xs font-semibold text-white
                transition-colors duration-300
                hover:bg-[#E87500]
                sm:px-4 sm:text-sm
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
                />
              </svg>

              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Save</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                flex h-9 w-9 items-center justify-center rounded-full
                text-gray-500 transition-colors duration-300
                hover:bg-[#F2EFFF] hover:text-[#2B158F]
              "
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF preview */}
        <div className="flex-1 overflow-hidden bg-[#F4F2FA]">
          {isMobile ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEE9FF]">
                <svg
                  className="h-8 w-8 text-[#2B158F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2Z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 font-primary text-base font-semibold text-[#2B158F]">
                  {openPdf.title}
                </p>

                <p className="font-secondary text-sm text-gray-500">
                  PDF preview isn&apos;t available on mobile browsers.
                </p>
              </div>

              <div className="flex w-full max-w-xs flex-col gap-3">
                <a
                  href={openPdf.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    rounded-xl bg-[#2B158F] px-5 py-3
                    font-secondary text-sm font-semibold text-white
                    transition-colors duration-300
                    hover:bg-[#24126A]
                  "
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>

                  Open in Browser
                </a>

                <a
                  href={openPdf.pdf}
                  download
                  className="
                    flex items-center justify-center gap-2
                    rounded-xl bg-[#FF8700] px-5 py-3
                    font-secondary text-sm font-semibold text-white
                    transition-colors duration-300
                    hover:bg-[#E87500]
                  "
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
                    />
                  </svg>

                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={`${openPdf.pdf}#toolbar=0`}
              className="h-full w-full border-0"
              title={openPdf.title}
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function MandatorySection() {
  const [openPdf, setOpenPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenPdf(null);
      }
    };

    if (openPdf) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [openPdf]);

  const openDocument = (item) => {
    setOpenPdf({
      title: item.title,
      pdf: item.pdf,
    });
  };

  return (
    <>
      <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
        {/* Top heading */}
        <section
          className="relative overflow-hidden "
          
        >
         
        </section>

        {/* Documents section */}
        <section className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <div className="mx-auto max-w-[860px]">
            <div className="mb-6 text-center">
              <h2
                className="
                  font-primary text-xl font-bold uppercase
                  leading-tight text-[#2B158F]
                  sm:text-2xl md:text-[27px]
                "
              >
                Documents and Information
              </h2>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden border border-[#DDD8ED] md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2B158F] text-white">
                    <th
                      scope="col"
                      className="
                        w-[100px] border-r border-white/40
                        px-4 py-3 text-left
                        font-secondary text-base font-medium
                      "
                    >
                      Sl.No.
                    </th>

                    <th
                      scope="col"
                      className="
                        border-r border-white/40 px-4 py-3
                        text-left font-secondary text-base font-medium
                      "
                    >
                      Information
                    </th>

                    <th
                      scope="col"
                      className="
                        w-[175px] px-4 py-3 text-center
                        font-secondary text-base font-medium
                      "
                    >
                      View Documents
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {ITEMS.map((item, index) => (
                    <tr
                      key={item.id}
                      className="
                        border-b border-[#E5E1F2] bg-white
                        transition-colors duration-200
                        last:border-b-0 hover:bg-[#F8F6FF]
                      "
                    >
                      <td
                        className="
                          border-r border-[#E5E1F2] px-4 py-2.5
                          text-center font-secondary text-[16px]
                          text-gray-900
                        "
                      >
                        {index + 1}
                      </td>

                      <td
                        className="
                          border-r border-[#E5E1F2] px-4 py-2.5
                          font-secondary text-[16px] text-gray-900
                        "
                      >
                        {item.title}
                      </td>

                      <td className="px-4 py-2.5 text-center">
                        <button
                          type="button"
                          onClick={() => openDocument(item)}
                          className="
                            font-secondary text-[16px] font-medium
                            text-[#2B158F] underline
                            decoration-[#2B158F] underline-offset-2
                            transition-colors duration-200
                            hover:text-[#FF8700]
                            hover:decoration-[#FF8700]
                          "
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile table */}
            <div className="overflow-hidden border border-[#DDD8ED] md:hidden">
              <div className="grid grid-cols-[55px_1fr_70px] bg-[#2B158F] text-white">
                <div className="flex items-center justify-center border-r border-white/40 px-1 py-3 font-secondary text-xs font-medium">
                  Sl.No.
                </div>

                <div className="flex items-center border-r border-white/40 px-3 py-3 font-secondary text-xs font-medium">
                  Information
                </div>

                <div className="flex items-center justify-center px-2 py-3 text-center font-secondary text-xs font-medium">
                  View
                </div>
              </div>

              {ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className="
                    grid grid-cols-[55px_1fr_70px]
                    border-b border-[#E5E1F2] bg-white
                    transition-colors duration-200
                    last:border-b-0 hover:bg-[#F8F6FF]
                  "
                >
                  <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm text-gray-900">
                    {index + 1}
                  </div>

                  <div className="flex items-center border-r border-[#E5E1F2] px-3 py-3 font-secondary text-sm leading-5 text-gray-900">
                    {item.title}
                  </div>

                  <div className="flex items-center justify-center px-2 py-3">
                    <button
                      type="button"
                      onClick={() => openDocument(item)}
                      className="
                        font-secondary text-sm font-medium
                        text-[#2B158F] underline
                        decoration-[#2B158F] underline-offset-2
                        transition-colors duration-200
                        hover:text-[#FF8700]
                        hover:decoration-[#FF8700]
                      "
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {mounted && openPdf && (
        <PdfModal
          openPdf={openPdf}
          onClose={() => setOpenPdf(null)}
          isMobile={isMobile}
        />
      )}
    </>
  );
}