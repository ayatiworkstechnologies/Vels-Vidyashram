"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
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
    </footer>
  );
}
