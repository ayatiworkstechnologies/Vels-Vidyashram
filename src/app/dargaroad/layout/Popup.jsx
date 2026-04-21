'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup 1.5 seconds after landing
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsPopupOpen(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Your regular homepage content here */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-extrabold text-[#333]">Vels Group of Schools</h1>
        <p className="mt-4 text-gray-600">Inspiring Young Minds for a Brighter Tomorrow</p>
      </section>

      {/* POPUP LOGIC */}
      <Modal isOpen={isPopupOpen} onClose={handleClose}>
        <div className="flex flex-col">
          {/* Top Image */}
          <div className="h-[300px] w-full bg-gray-200">
            <img 
              src="/dargaroad/admission-dargaroad.jpeg" 
              alt="School Admission Banner"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text & Action */}
          <div className="p-8 text-center">
            <h2 className="text-[24px] font-bold text-gray-900">
              Admissions Open 2026-27
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
              Limited seats available from Pre-KG to Grade XI. Secure your child's 
              future with our world-class curriculum and infrastructure.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => window.location.href = '/recruitment'}
                className="w-full rounded-lg bg-[#3f2b96] py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Apply for Admission
              </button>
              
              <button 
                onClick={handleClose}
                className="text-[13px] font-medium text-gray-400 hover:text-gray-600"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}