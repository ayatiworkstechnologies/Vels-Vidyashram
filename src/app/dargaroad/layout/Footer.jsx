'use client';

import Image from 'next/image';

export default function Footer () {
  return (
    <footer className="w-full mt-10 pb-[45px] md:pb-0">
      {/* TOP LINKS AREA */}
      <div className="bg-[#F5F5F5] py-6">
        {/* ROW 1 */}
        <div className="flex flex-wrap justify-center gap-15 text-sm font-primary font-primary-semibold text-black mb-4">
          <a href="/academics" className="hover:text-primary transition">
            Academics
          </a>
          <a href="/admissions" className="hover:text-primary transition">
            Admissions
          </a>
          <a href="/recruitment" className="hover:text-primary transition">
            Recruitment
          </a>
          <a href="/our-group" className="hover:text-primary transition">
            Our Group
          </a>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-black mt-10">
          <a href="/" className="hover:text-primary transition">
            Home
          </a>
          <a href="/about-us" className="hover:text-primary transition">
            About Us
          </a>
          <a href="/contact-us" className="hover:text-primary transition">
            Contact Us
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-black mt-4">
          {/* SOCIALS (inline row under phone) */}
          <ul className="space-y-2">
            <li>
              <div className="mt-2 flex items-center gap-3">
                {/* Each anchor uses your icon in public/icons. Replace filenames as needed. */}
                <a
                  href="https://www.facebook.com/VelsVidyashramPallavaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-105 transition"
                  aria-label="Facebook"
                >
                  <Image
                    src="/dargaroad/facebook.svg"
                    alt="Facebook"
                    width={48}
                    height={48}
                  />
                </a>

                <a
                  href="https://www.instagram.com/velsvidyashraminsta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-105 transition"
                  aria-label="Instagram"
                >
                  <Image
                    src="/dargaroad/instagram.svg"
                    alt="Instagram"
                    width={48}
                    height={48}
                  />
                </a>

                <a
                  href="https://www.youtube.com/channel/UChcEkcp64pMD3LfXf4sWFtA?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-105 transition"
                  aria-label="YouTube"
                >
                  <Image
                    src="/dargaroad/youtube.svg"
                    alt="YouTube"
                    width={48}
                    height={48}
                  />
                </a>

                <a
                  href="https://wa.me/99625 06639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-105 transition"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/dargaroad/whatsapp.svg"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#39278F] py-3 text-center">
        <p className="text-white text-sm font-medium">
          Copyright ©2025 VelsVidyashram – All right reserved | Designed &
          Developed by Ayatiworks
        </p>
      </div>
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 items-center gap-3">
        <button
          onClick={() =>
            window.open (
              'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
              '_blank'
            )}
          className="bg-white text-black text-sm px-3 py-1 font-primary font-primary-semibold shadow hover:bg-gray-100"
        >
          Admissions Open | Apply Now
        </button>

        <button
          onClick={() =>
            window.open (
              'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
              '_blank'
            )}
          className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100"
        >
          <Image
            src="/dargaroad/icon-1.png"
            alt="Admissions"
            width={42}
            height={42}
          />
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
        <div className="flex divide-x">
          {/* Enquiry */}
          <button
            onClick={() =>
              window.open (
                'https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp',
                '_blank'
              )}
            className="flex-1 py-3 flex items-center justify-center gap-2 bg-tertiary text-white text-sm font-primary font-primary-semibold"
          >
            <Image
              src="/main/mail-01.svg"
              alt="enquiry"
              width={18}
              height={18}
            />
            Enquiry Now
          </button>

          {/* Call */}
          <a
            href="tel:9962506639"
            className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary text-white text-sm font-primary font-primary-semibold"
          >
            <Image src="/main/phone.svg" alt="call" width={18} height={18} />
            Call Now
          </a>
        </div>
      </div>
    </footer>
  );
}
