'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
      />

      {/* Content */}
      <div className="relative w-auto max-w-[90vw] z-10">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition shadow-lg"
          aria-label="Close Announcement"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src="/thalambur/admission-thalambur.jpeg"
          alt="School Admissions Announcement"
          className="w-full h-auto max-h-[85vh] object-contain border-4 border-[#ffb74d] rounded-xl shadow-2xl"
        />
      </div>
    </div>,
    document.body
  );
}