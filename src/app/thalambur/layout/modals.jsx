'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-auto max-w-[90vw]">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-gray-800"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src="/thalambur/thalambur-popup.jpeg"
          alt="School Admissions Announcement"
          className="block max-h-[85vh] w-full rounded-xl border-4 border-[#ffb74d] object-contain shadow-2xl"
        />
      </div>
    </div>,
    document.body
  );
}