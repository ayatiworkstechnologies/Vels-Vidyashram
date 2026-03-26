"use client";
import React from "react";

const MessageSection = () => {
  // ✅ Only one year data
  const reports = [
    { month: "July", link: "/pallavaram/message/July-Month-Glimpses.pdf" },
    { month: "August", link: "/pallavaram/message/August-month-message.pdf" },
    { month: "September", link: "/pallavaram/message/September-Month-Message.pdf" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter font-primary">
            2023
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Monthly Archive & Reports
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, index) => (
            <a
              key={index}
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:border-[#232A95] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800 group-hover:text-[#232A95] transition-colors font-secondary">
                  {report.month}
                </span>
              </div>

              {/* PDF Icon */}
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

        {/* Empty State */}
        {reports.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-secondary">
              No reports available.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default MessageSection;