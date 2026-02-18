'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full mt-10 pb-[45px] md:pb-0">
      
      {/* =========================================================
          STICKY ADMISSION SIDE TAB (Visible on all devices)
          ========================================================= */}
      <a
        href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex items-center"
      >
        <div className="bg-[#39278F] text-white px-3 py-6 rounded-l-lg shadow-xl hover:bg-[#2B158F] transition-all duration-300 cursor-pointer">
          <span 
            className="block text-sm  tracking-widest font-secondary"
            style={{ writingMode: 'vertical-rl' }}
          >
            Admission
          </span>
        </div>
      </a>

      {/* TOP LINKS AREA */}
      <div className="bg-[#F5F5F5] py-6">
        {/* ROW 1 */}
        <div className="flex flex-wrap justify-center gap-15 text-sm font-primary font-primary-semibold text-black mb-4">
          <a href="/thalambur/curriculum" className="hover:text-primary transition">Academics</a>
          <a href="/thalambur/procedure" className="hover:text-primary transition">Admissions</a>
          <a href="/dargaroad/recruitment" className="hover:text-primary transition">Recruitment</a>
          <a href="/thalambur/our-group" className="hover:text-primary transition">Our Group</a>
          <a href="/thalambur/mandatory-disclosure" className="hover:text-primary transition">Mandatory Disclosure</a>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-black mt-10">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/thalambur/vision-mission" className="hover:text-primary transition">About Us</a>
          <a href="/thalambur/contact-us" className="hover:text-primary transition">Contact Us</a>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-3">
            <SocialIcon href="https://facebook.com/..." src="/dargaroad/facebook.svg" label="Facebook" />
            <SocialIcon href="https://instagram.com/..." src="/dargaroad/instagram.svg" label="Instagram" />
            <SocialIcon href="https://youtube.com/..." src="/dargaroad/youtube.svg" label="YouTube" />
            <SocialIcon href="https://wa.me/..." src="/dargaroad/whatsapp.svg" label="WhatsApp" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#39278F] py-3 text-center">
        <p className="text-white text-sm font-medium px-4">
          Copyright ©2025 VelsVidyashram – All right reserved | Designed & Developed by Ayatiworks
        </p>
      </div>

      {/* MOBILE BOTTOM NAVIGATION (Phone only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex divide-x">
          <button
            onClick={() => window.open('https://erp.vistas.ac.in/...', '_blank')}
            className="flex-1 py-4 flex items-center justify-center gap-2 bg-[#FF8700] text-white text-sm font-bold uppercase"
          >
            <Image src="/main/mail-01.svg" alt="enquiry" width={18} height={18} />
            Enquiry Now
          </button>
          <a
            href="tel:9962506639"
            className="flex-1 py-4 flex items-center justify-center gap-2 bg-[#2B158F] text-white text-sm font-bold uppercase"
          >
            <Image src="/main/phone.svg" alt="call" width={18} height={18} />
            Call Now
          </a>
        </div>
      </div>
    </footer>
  );
}

// Helper component for social icons to keep code clean
function SocialIcon({ href, src, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label={label}>
      <Image src={src} alt={label} width={36} height={36} />
    </a>
  );
}