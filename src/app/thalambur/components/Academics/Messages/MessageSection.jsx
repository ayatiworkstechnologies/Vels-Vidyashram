"use client";
import React, { useState } from 'react';

const MessageSection = () => {
  // 1. Organized data by year
  const allReports = {
    '2025': [
      { month: 'January', link: '/thalambur/message/jan-2025.pdf' },
      { month: 'February', link: '/thalambur/message/feb-2025.pdf' },
      { month: 'March', link: '/thalambur/message/mar-2025.pdf' },
      { month: 'April', link: '/thalambur/message/april-2025.pdf' },
      { month: 'July', link: '/thalambur/message/july-2025.pdf' },
      { month: 'August', link: '/thalambur/message/aug-2025.pdf' },
      { month: 'September', link: '/thalambur/message/sep-2025.pdf' },
      { month: 'October', link: '/thalambur/message/oct-2025.pdf' },
      { month: 'December', link: '/thalambur/message/dec-2025.pdf' },
    ],
    '2024': [
      { month: 'April', link: '/thalambur/message/april-2024.pdf' },
      { month: 'May', link: '/thalambur/message/may-2024.pdf' },
      { month: 'June', link: '/thalambur/message/june-2024.pdf' },
      { month: 'September', link: '/thalambur/message/sep-2024.pdf' },
      { month: 'October', link: '/thalambur/message/oct-2024.pdf' },
      { month: 'November', link: '/thalambur/message/nov-2024.pdf' },
    ],
  };

  // 2. State to handle year selection
  const [selectedYear, setSelectedYear] = useState('2025');

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Year Dropdown */}
        <header className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter transition-all font-primary">
              {selectedYear}
            </h1>
            <p className="text-slate-500 mt-2 font-medium">Monthly Archive & Reports</p>
          </div>

          {/* Custom Styled Dropdown */}
          <div className="relative group min-w-[160px]">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-secondary">
              Select Year
            </label>
            <div className="relative">
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 px-4 pr-10 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#232A95] focus:border-transparent cursor-pointer transition-all hover:border-[#232A95] font-secondary"
              >
                <option value="2025">Year 2025</option>
                <option value="2024">Year 2024</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allReports[selectedYear].map((report, index) => (
            <a
              key={`${selectedYear}-${index}`}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State (Optional) */}
        {allReports[selectedYear].length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-secondary">No reports found for this year.</p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MessageSection;