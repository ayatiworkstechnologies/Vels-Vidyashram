"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ITEMS = [
  {
    id: 1,
    title: "Mandatory Disclosure",
    pdf: "/pallavaram/pdf/mandatory-public-disclosure.pdf",
  },
  {
    id: 2,
    title: "Affiliation",
    pdf: "/pallavaram/pdf/affiliation.pdf",
  },
  {
    id: 3,
    title: "NOC",
    pdf: "/pallavaram/pdf/noc.pdf",
  },
  {
    id: 4,
    title: "Trust",
    pdf: "/pallavaram/pdf/trust.pdf",
  },
  {
    id: 6,
    title: "Recognition",
    pdf: "/pallavaram/pdf/recognition.pdf",
  },
  {
    id: 7,
    title: "Building",
    pdf: "/pallavaram/pdf/building.pdf",
  },
  {
    id: 8,
    title: "Fire",
    pdf: "/pallavaram/pdf/fire.pdf",
  },
  {
    id: 9,
    title: "Sanitary",
    pdf: "/pallavaram/pdf/SANITARY.pdf",
  },
  {
    id: 10,
    title: "Self Certification",
    pdf: "/pallavaram/pdf/self-certificate.pdf",
  },
  {
    id: 11,
    title: "Fee Structure",
    pdf: "/pallavaram/pdf/fee-structure.pdf",
  },
  {
    id: 12,
    title: "Calendar",
    pdf: "/pallavaram/pdf/calendar.pdf",
  },
  {
    id: 13,
    title: "SMC",
    pdf: "/pallavaram/pdf/smc.pdf",
  },
  {
    id: 14,
    title: "PTA",
    pdf: "/pallavaram/pdf/pta.pdf",
  },
  {
    id: 15,
    title: "Results",
    pdf: "/pallavaram/pdf/RESULTS.pdf",
  },
  {
    id: 16,
    title: "Self Affidavit",
    pdf: "/pallavaram/pdf/self-affidavit.pdf",
  },
  {
    id: 17,
    title: "TC Sample",
    pdf: "/pallavaram/pdf/TC-Sample.pdf",
  },
];

export default function MandatorySection() {
  const [openPdf, setOpenPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenPdf(null);
      }
    };

    if (openPdf) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openPdf]);

  const handleOpenPdf = (item) => {
    setOpenPdf({
      title: item.title,
      pdf: item.pdf,
    });
  };

  const handleClosePdf = () => {
    setOpenPdf(null);
  };

  const pdfModal =
    mounted && openPdf
      ? createPortal(
          <div
            className="fixed inset-0 flex items-end justify-center p-0 sm:items-center sm:p-5"
            style={{ zIndex: 2147483647 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close PDF preview"
              onClick={handleClosePdf}
              className="absolute inset-0 cursor-default bg-[#160a4d]/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <div
              className="
                relative flex h-[93dvh] w-full flex-col overflow-hidden
                rounded-t-2xl bg-white shadow-2xl
                sm:h-[88vh] sm:max-w-6xl sm:rounded-2xl
              "
              style={{ zIndex: 2147483647 }}
            >
              {/* Mobile drag handle */}
              <div className="flex justify-center pb-1 pt-2 sm:hidden">
                <span className="h-1 w-10 rounded-full bg-gray-300" />
              </div>

              {/* Modal header */}
              <div className="flex flex-shrink-0 items-center justify-between border-b border-[#E5E1F2] bg-white px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F2EFFF] sm:flex">
                    <svg
                      className="h-5 w-5 text-[#2B158F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2Z"
                      />
                    </svg>
                  </div>

                  <h3 className="truncate pr-2 font-primary text-base font-bold text-[#2B158F] sm:text-xl">
                    {openPdf.title}
                  </h3>
                </div>

                <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
                  <a
                    href={openPdf.pdf}
                    download
                    className="
                      inline-flex items-center justify-center gap-1.5
                      rounded-full bg-[#FF8700] px-3 py-2
                      font-secondary text-xs font-semibold text-white
                      shadow-sm transition-all duration-300
                      hover:-translate-y-0.5 hover:bg-[#E87500]
                      hover:shadow-md
                      sm:px-5 sm:text-sm
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
                    <span className="sm:hidden">Download</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleClosePdf}
                    aria-label="Close"
                    className="
                      flex h-9 w-9 items-center justify-center rounded-full
                      text-gray-500 transition-all duration-300
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

              {/* PDF content */}
              <div className="flex-1 overflow-hidden bg-[#F7F5FF]">
                {isMobile ? (
                  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EEE9FF]">
                      <svg
                        className="h-10 w-10 text-[#2B158F]"
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

                    <h4 className="mb-2 font-primary text-lg font-bold text-[#2B158F]">
                      {openPdf.title}
                    </h4>

                    <p className="mb-7 max-w-sm font-secondary text-sm leading-6 text-gray-500">
                      Open this document in your browser or download the PDF to
                      your device.
                    </p>

                    <div className="flex w-full max-w-xs flex-col gap-3">
                      <a
                        href={openPdf.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-center gap-2 rounded-full
                          bg-[#2B158F] px-5 py-3
                          font-secondary text-sm font-semibold text-white
                          shadow-sm transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-[#24126A]
                          hover:shadow-md
                        "
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 10l4.553-4.553a1.5 1.5 0 00-2.121-2.121L12.88 7.879M14 4h-4a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                          />
                        </svg>

                        Open PDF
                      </a>

                      <a
                        href={openPdf.pdf}
                        download
                        className="
                          flex items-center justify-center gap-2 rounded-full
                          bg-[#FF8700] px-5 py-3
                          font-secondary text-sm font-semibold text-white
                          shadow-sm transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-[#E87500]
                          hover:shadow-md
                        "
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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
                    src={`${openPdf.pdf}#toolbar=0&navpanes=0`}
                    title={openPdf.title}
                    className="h-full w-full border-0"
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
        {/* Mandatory Disclosure Banner */}
        <section
          className="relative overflow-hidden "
          
        >
          
        </section>

        {/* Documents section */}
        <section className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <div className="mx-auto max-w-[860px]">
            <div className="mb-6 text-center sm:mb-7">
              <h2
                className="
                  font-primary text-xl font-bold uppercase
                  leading-tight text-[#2B158F]
                  sm:text-2xl md:text-[27px]
                "
              >
                Documents and Information
              </h2>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#FF8700]" />
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-sm border border-[#DDD8ED] shadow-[0_10px_35px_rgba(43,21,143,0.08)] md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2B158F] text-white">
                    <th
                      scope="col"
                      className="
                        w-[100px] border-r border-white/30
                        px-4 py-3.5 text-left
                        font-secondary text-base font-semibold
                      "
                    >
                      Sl.No.
                    </th>

                    <th
                      scope="col"
                      className="
                        border-r border-white/30
                        px-4 py-3.5 text-left
                        font-secondary text-base font-semibold
                      "
                    >
                      Information
                    </th>

                    <th
                      scope="col"
                      className="
                        w-[175px] px-4 py-3.5 text-center
                        font-secondary text-base font-semibold
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
                        group border-b border-[#E5E1F2] bg-white
                        transition-colors duration-200
                        last:border-b-0 hover:bg-[#F7F5FF]
                      "
                    >
                      <td
                        className="
                          border-r border-[#E5E1F2] px-4 py-3
                          text-center font-secondary text-[16px]
                          font-medium text-[#2B158F]
                        "
                      >
                        {index + 1}
                      </td>

                      <td
                        className="
                          border-r border-[#E5E1F2] px-4 py-3
                          font-secondary text-[16px] text-[#4D4A58]
                        "
                      >
                        {item.title}
                      </td>

                      <td className="px-4 py-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleOpenPdf(item)}
                          className="
                            inline-flex items-center justify-center gap-1.5
                            font-secondary text-[16px] font-semibold
                            text-[#2B158F] underline
                            decoration-[#2B158F]
                            underline-offset-4
                            transition-all duration-200
                            hover:text-[#FF8700]
                            hover:decoration-[#FF8700]
                          "
                        >
                          View

                          <svg
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile table */}
            <div className="overflow-hidden rounded-sm border border-[#DDD8ED] shadow-[0_8px_25px_rgba(43,21,143,0.08)] md:hidden">
              {/* Mobile table header */}
              <div className="grid grid-cols-[55px_1fr_72px] bg-[#2B158F] text-white">
                <div className="flex items-center justify-center border-r border-white/30 px-1 py-3.5 font-secondary text-xs font-semibold">
                  Sl.No.
                </div>

                <div className="flex items-center border-r border-white/30 px-3 py-3.5 font-secondary text-xs font-semibold">
                  Information
                </div>

                <div className="flex items-center justify-center px-2 py-3.5 text-center font-secondary text-xs font-semibold">
                  View
                </div>
              </div>

              {/* Mobile table rows */}
              {ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className="
                    grid grid-cols-[55px_1fr_72px]
                    border-b border-[#E5E1F2] bg-white
                    transition-colors duration-200
                    last:border-b-0 hover:bg-[#F7F5FF]
                  "
                >
                  <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm font-medium text-[#2B158F]">
                    {index + 1}
                  </div>

                  <div className="flex items-center border-r border-[#E5E1F2] px-3 py-3 font-secondary text-sm leading-5 text-[#4D4A58]">
                    {item.title}
                  </div>

                  <div className="flex items-center justify-center px-2 py-3">
                    <button
                      type="button"
                      onClick={() => handleOpenPdf(item)}
                      className="
                        font-secondary text-sm font-semibold
                        text-[#2B158F] underline
                        decoration-[#2B158F]
                        underline-offset-4
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

      {pdfModal}
    </>
  );
}