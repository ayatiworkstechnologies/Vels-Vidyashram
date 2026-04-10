"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ================= DATA CONFIGURATION ================= */
const navItems = [
  { label: "Home", href: "/pallavaram" },
  {
    label: "About Us",
    href: "#",
    submenu: [
      { label: "Vision And Mission", href: "/pallavaram/vision-mission" },
      { label: "Our Group", href: "/pallavaram/our-group" },
      { label: "School Information", href: "/pallavaram/school-information" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    submenu: [
      { label: "Curriculum", href: "/pallavaram/curriculum" },
      { label: "Circular", href: "/pallavaram/circulars" },
      { label: "Messages", href: "/pallavaram/message" },
    ],
  },
  { label: "Beyond Academics", href: "/pallavaram/beyond-academics" },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      { label: "Procedure", href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp" },
      { label: "Enquiry", href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp" },
      { label: "Transport", href: "/pallavaram/transport" },
    ],
  },
  {
    label: "R&D@Vels",
    href: "#",
    submenu: [
      { label: "Genesis", href: "/pallavaram/genesis" },
      { label: "About KKIC", href: "/pallavaram/about-kkic" },
      { label: "Centre for Professional Development", href: "/pallavaram/centre-for-professional-development" },
      { label: "VSkill", href: "/pallavaram/vskill" },
      { label: "CICTL", href: "/pallavaram/cictl" },
      { label: "Newsletter", href: "/pallavaram/pdf/Yellow-and-Black-Modern-Light-Bulb-Newsletter.pdf" },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    submenu: [
      { label: "Photo Gallery", href: "/pallavaram/photo-gallery" },
      { label: "Video Gallery", href: "/pallavaram/video" },
    ],
  },
  {
    label: "Parent Login",
    href: "#",
    submenu: [
      { label: "Login", href: "https://parent.neverskip.com/" },
      { label: "Student’s Do’s and Don’t", href: "https://parent.neverskip.com/" },
      { label: "Parent’s Do’s and Don’t", href: "https://parent.neverskip.com/" },
      { label: "PC Do’s", href: "https://parent.neverskip.com/" },
      { label: "Mobile Do’s", href: "https://parent.neverskip.com/" },
    ],
  },
  { label: "Contact us", href: "/pallavaram/contact-us" },
];

const campuses = [
  { label: "Dargaroad", href: "/dargaroad" },
  { label: "Thalambur", href: "/thalambur" },
  { label: "Cantonment", href: "/cantonment" },
];

/* ================= MAIN HEADER COMPONENT ================= */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header className="w-full relative z-[100] bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#2B158F] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          
          {/* LEFT - Desktop Contact (Stays as is) */}
          <div className="hidden md:flex gap-6 items-center text-xs md:text-sm">
            <a href="tel:7824830871" className="flex items-center gap-2 whitespace-nowrap hover:text-white no-underline">
              <img src="/thalambur/phone.png" className="w-3" alt="phone" />
              782 483 0871
            </a>
            <a href="mailto:register@velsvidyashram.ac.in" className="hidden lg:flex items-center gap-2 hover:text-white no-underline">
              <img src="/thalambur/mail.png" className="w-3" alt="mail" />
              register@velsvidyashram.ac.in
            </a>
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center justify-between w-full md:w-auto gap-2 sm:gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp"
              className="bg-white text-[#2B158F] px-3 sm:px-4 py-1.5 rounded-full font-bold text-[10px] sm:text-xs whitespace-nowrap hover:bg-gray-100 transition shadow-sm"
            >
              Online Fees Payment
            </Link>

            {/* Desktop Campus Dropdown (Unchanged) */}
            <div className="relative group hidden lg:block">
              <button className="bg-white text-[#2B158F] px-4 py-1 rounded-full font-medium text-xs hover:bg-gray-100 transition">
                Other Campus
              </button>
              <div className="absolute right-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                <div className="bg-white shadow-xl border-t-2 border-[#FF8700]">
                  {campuses.map((campus) => (
                    <Link
                      key={campus.label}
                      href={campus.href}
                      className="block px-4 py-3 text-[#2B158F] hover:bg-[#2B158F] hover:text-white border-b border-gray-100 last:border-0 transition-colors"
                    >
                      {campus.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-2xl focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV (Unchanged) ================= */}
      <nav className="hidden lg:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center gap-4 xl:gap-10 text-[13px] xl:text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href || item.submenu?.some((sub) => pathname === sub.href);
              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`py-5 inline-block transition-colors border-b-2 ${
                      isActive ? "text-[#FF8700] border-[#FF8700]" : "text-[#2B158F] border-transparent hover:text-[#FF8700]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-1 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                      <ul className="bg-white shadow-2xl border-t-2 border-[#FF8700] py-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className={`block px-5 py-3 transition ${pathname === sub.href ? "bg-gray-50 text-[#FF8700] font-bold" : "text-[#2B158F] hover:bg-[#2B158F] hover:text-white"}`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ================= LOGO ================= */}
      <div className="bg-white flex justify-center py-2 px-2 border-b lg:border-none">
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
          <Image
            src="/pallavaram/pallavaram.jpg"
            alt="Vels Vidyashram"
            width={2880}
            height={672}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden z-[110] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      
      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-[350px] h-full bg-white shadow-2xl z-[120] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center bg-[#2B158F] text-white shrink-0">
          <span className="font-bold uppercase tracking-wider text-sm">Main Menu</span>
          <button onClick={() => setMobileOpen(false)} className="text-2xl leading-none">&times;</button>
        </div>

        <div className="overflow-y-auto flex-1">
          {/* Mobile Campus Accordion */}
          <div className="border-b bg-gray-50">
            <button
              onClick={() => setCampusOpen(!campusOpen)}
              className="w-full px-6 py-4 flex justify-between items-center font-bold text-[#2B158F]"
            >
              Other Campuses
              <span className={`transition-transform duration-300 ${campusOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {campusOpen && (
              <div className="bg-white border-t border-gray-100">
                {campuses.map((c) => (
                  <Link 
                    key={c.label} 
                    href={c.href} 
                    className="block px-10 py-3 text-sm text-[#2B158F] border-b border-gray-50 last:border-0 hover:bg-blue-50" 
                    onClick={() => setMobileOpen(false)}
                  >
                    • {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                closeMenu={() => setMobileOpen(false)}
              />
            ))}
          </ul>

          {/* Mobile Quick Contact */}
          <div className="p-6 mt-4 border-t bg-gray-50 space-y-4">
             <div className="text-[10px] font-bold text-[#2B158F]/60 uppercase">Contact Information</div>
             <a href="tel:7824830871" className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <img src="/thalambur/phone.png" className="w-4 opacity-70" alt="" />
                782 483 0871
             </a>
             <a href="mailto:register@velsvidyashram.ac.in" className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <img src="/thalambur/mail.png" className="w-4 opacity-70" alt="" />
                register@velsvidyashram.ac.in
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================= MOBILE NAV ITEM COMPONENT ================= */
function MobileNavItem({ item, pathname, closeMenu }) {
  const isActive = pathname === item.href || item.submenu?.some((sub) => pathname === sub.href);
  const [open, setOpen] = useState(isActive);

  return (
    <li className="border-b border-gray-50 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={item.href === "#" ? (e) => { e.preventDefault(); setOpen(!open); } : closeMenu}
          className={`flex-1 px-6 py-4 font-semibold transition-colors ${
            isActive ? "text-[#FF8700]" : "text-[#2B158F]"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            onClick={() => setOpen(!open)}
            className={`px-6 py-4 border-l border-gray-100 transition-colors ${open ? "text-[#FF8700] bg-gray-50" : "text-[#2B158F]"}`}
          >
            <span className={`inline-block transition-transform duration-300 text-xl font-light ${open ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="bg-gray-50/50 py-1 border-t border-gray-100 animate-in slide-in-from-top duration-200">
          {item.submenu.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                onClick={closeMenu}
                className={`block px-10 py-3 text-sm transition-all relative ${
                  pathname === sub.href 
                    ? "text-[#FF8700] font-bold border-l-4 border-[#FF8700] bg-white" 
                    : "text-gray-600 hover:text-[#2B158F]"
                }`}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}