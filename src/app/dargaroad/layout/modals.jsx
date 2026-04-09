'use client';

import { useState, useEffect } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* 1. Backdrop (Clicking this still closes the modal) */}
      <div 
        className="absolute inset-0" 
        onClick={() => setIsOpen(false)} 
      />

      {/* 2. Content Container (No extra white background here) */}
      <div className="relative w-auto max-w-[90vw] overflow-visible">
        
        {/* Close Button - Optimized for floating on an image */}
        <button 
          onClick={() => setIsOpen(false)}
          /* Increased z-index, added a round dark background so it's visible on any image */
          className="absolute -top-3 -right-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white/80 hover:bg-black hover:text-white transition-all shadow-lg"
          aria-label="Close Announcement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 3. The Image Component (Dynamic Size + Custom Border) */}
        <img 
          src="/dargaroad/admission-dargaroad.jpeg" 
          alt="School Admissions Announcement" 
        
          className="w-full h-auto max-h-[85vh] object-contain border-4 border-[#ffb74d] rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}