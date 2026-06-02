"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ITEMS = [
  { id: 1, title: "Results", pdf: "/pallavaram/pdf/Result.pdf" },
  { id: 2, title: "Lists of Books", pdf: "/pallavaram/pdf/List-of-Books.pdf" },
  { id: 3, title: "Home Work Policy", pdf: "/pallavaram/pdf/Homework-policy.pdf" },
  { id: 4, title: "Annual Report", pdf: "/pallavaram/pdf/Annual-report.pdf" },
  { id: 5, title: "Teacher Details", pdf: "/pallavaram/pdf/Teacher-Details.pdf" },
  { id: 6, title: "Strength Details", pdf: "/pallavaram/pdf/strength-details.pdf" },
];

export default function MandatorySection() {
  const [openPdf, setOpenPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenPdf(null);
    };

    if (openPdf) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [openPdf]);

  const PdfModal = openPdf ? (
    <div className="fixed inset-0 z-[999999] flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close PDF modal"
        onClick={() => setOpenPdf(null)}
        className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <div className="relative z-10 flex h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:h-[85vh] sm:max-w-5xl sm:rounded-2xl">
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-2 pb-1 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-gray-300" />
        </div>

        {/* Modal Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b bg-white px-4 py-3 sm:px-6 sm:py-4">
          <h3 className="truncate pr-3 text-base font-bold text-gray-800 sm:text-xl">
            {openPdf.title}
          </h3>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={openPdf.pdf}
              download
              className="flex items-center whitespace-nowrap rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600 active:bg-orange-700 sm:px-4 sm:py-2 sm:text-sm"
            >
              <svg
                className="mr-1 h-3.5 w-3.5 sm:mr-1.5 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="hidden sm:inline">Download PDF</span>
              <span className="inline sm:hidden">Save</span>
            </a>

            <button
              type="button"
              onClick={() => setOpenPdf(null)}
              className="rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 active:bg-gray-200 sm:p-2"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 overflow-hidden bg-gray-200">
          {isMobile ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                <svg
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-base font-semibold text-gray-700">
                  {openPdf.title}
                </p>
                <p className="text-sm text-gray-500">
                  PDF preview may not work properly on some mobile browsers.
                </p>
              </div>

              <div className="flex w-full max-w-xs flex-col gap-3">
                <a
                  href={openPdf.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1c1533] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2a1f4a]"
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open in Browser
                </a>

                <a
                  href={openPdf.pdf}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={`${openPdf.pdf}#toolbar=0`}
              className="h-full w-full"
              frameBorder="0"
              title={openPdf.title}
            />
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-20">
        {/* Heading Section */}
        <div className="mx-auto mb-10 max-w-6xl text-center sm:mb-12">
          <h1 className="text-2xl font-bold leading-tight text-[#1c1533] sm:text-3xl md:text-4xl">
            Mandatory Disclosure
          </h1>
          <div className="mt-3 flex justify-center sm:mt-4">
            <div className="h-1 w-16 rounded-full bg-orange-500" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setOpenPdf({ pdf: it.pdf, title: it.title })}
              className="group relative flex w-full flex-col items-start justify-between rounded-xl border border-gray-100 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md active:scale-95 sm:p-5 md:p-6"
            >
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm font-semibold leading-tight text-gray-800 transition-colors group-hover:text-[#1c1533] sm:text-base md:text-lg">
                  {it.title}
                </h3>
              </div>

              <div className="flex items-center text-xs font-medium text-orange-500 group-hover:text-orange-600 sm:text-sm">
                <span className="hidden sm:inline">View Document</span>
                <span className="inline sm:hidden">View</span>
                <svg
                  className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 sm:ml-2 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </section>

      {mounted && createPortal(PdfModal, document.body)}
    </>
  );
}