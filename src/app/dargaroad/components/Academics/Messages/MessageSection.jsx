"use client";

import React, { useState } from "react";

const MessageSection = () => {

  /* ================= REPORT DATA ================= */

  const allReports = {

    "2026": [
      { month: "January", link: "/dargaroad/pdf/January-2026.pdf" },
      { month: "February", link: "/dargaroad/pdf/February-2026.pdf" },
      { month: "March", link: "/dargaroad/pdf/march-message.pdf" },
    ],

    "2025": [
      { month: "April", link: "/dargaroad/pdf/april-2025.pdf" },
      { month: "May", link: "/dargaroad/pdf/may-2025.pdf" },
      { month: "June", link: "/dargaroad/pdf/june-2025.pdf" },
      { month: "July", link: "/dargaroad/pdf/july-2025.pdf" },
      { month: "August", link: "/dargaroad/pdf/august-2025.pdf" },
      { month: "September", link: "/dargaroad/pdf/september-2025.pdf" },
      { month: "October", link: "/dargaroad/pdf/october-2025.pdf" },
      { month: "November", link: "/dargaroad/pdf/november-2025.pdf" },
      { month: "December", link: "/dargaroad/pdf/december-2025.pdf" },
    ],

  };

  /* ================= DEFAULT YEAR ================= */

  const [selectedYear, setSelectedYear] = useState("2026");

  return (

    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 pb-8 mb-10">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight font-primary">
              {selectedYear}
            </h1>

            <p className="text-slate-500 mt-2 font-medium">
              Monthly Archive & Reports
            </p>

          </div>

          {/* RIGHT DROPDOWN */}
          <div className="relative min-w-[180px]">

            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Select Year
            </label>

            <div className="relative">

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 px-4 pr-10 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#232A95] focus:border-transparent cursor-pointer transition-all hover:border-[#232A95]"
              >

                {Object.keys(allReports).map((year) => (
                  <option key={year} value={year}>
                    Year {year}
                  </option>
                ))}

              </select>

              {/* ARROW */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">

                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>

              </div>

            </div>

          </div>

        </div>

        {/* ================= REPORT GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {allReports[selectedYear].map((report, index) => (

            <a
              key={`${selectedYear}-${index}`}
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:border-[#232A95] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >

              {/* TEXT */}
              <div>

                <span className="text-xl font-bold text-slate-800 group-hover:text-[#232A95] transition-colors">
                  {report.month}
                </span>

              </div>

              {/* PDF ICON */}
              <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">

                <svg
                  className="w-6 h-6 text-slate-400 group-hover:text-[#232A95] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />

                </svg>

              </div>

            </a>

          ))}

        </div>

        {/* ================= EMPTY STATE ================= */}

        {allReports[selectedYear].length === 0 && (

          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200 mt-8">

            <p className="text-slate-400">
              No reports found for this year.
            </p>

          </div>

        )}

      </div>

    </div>

  );
};

export default MessageSection;