"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ================= DATA CONFIGURATION ================= */
const navItems = [
  { label: "Home", href: "/thalambur" },
  {
    label: "About Us",
    href: "#",
    submenu: [
      { label: "Vision And Mission", href: "/dargaroad/vision-mission" },
      { label: "Our Group", href: "/dargaroad/our-group" },
      { label: "School Information", href: "/dargaroad/school-information" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    submenu: [
      { label: "Curriculum", href: "/dargaroad/curriculum" },
      { label: "Circular", href: "/dargaroad/circular-2025-2026" },
      { label: "Messages", href: "/dargaroad/general-messages" },
    ],
  },
  { label: "Beyond Academics", href: "/dargaroad/beyond-academics" },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      { label: "Admission Enquiry", href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp" },
      { label: "Online Fee Payment", href: "https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp" },
      { label: "Transport", href: "/dargaroad/transport-facilities" },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    submenu: [
      { label: "Photo Gallery", href: "/dargaroad/photo-gallery" },
      { label: "Video Gallery", href: "/dargaroad/video-gallery" },
    ],
  },
  {
    label: "Parent Login",
    href: "#",
    submenu: [
      { label: "Login", href: "https://parent.neverskip.com/" },
      { label: "Feedback", href: "https://docs.google.com/forms/d/e/1FAIpQLSeGTCV8u4EPUh194loksUnxmwutnnKGOo2V1BA8X1fPse9l2Q/viewform" }
    ],
  },
  { label: "Contact us", href: "/dargaroad/contact" },
];

const campuses = [
  { label: "Thalambur", href: "/thalambur" },
  { label: "Pallavaram", href: "/pallavaram" },
  { label: "Cantonment", href: "/cantonment" },
];

/* ================= MAIN HEADER COMPONENT ================= */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  // Prevent background scroll when mobile menu is active
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
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
          
          {/* LEFT - Desktop Contact (Hidden on small mobile) */}
          <div className="hidden md:flex gap-6 items-center text-sm">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <img src="/thalambur/phone.png" className="w-3" alt="phone" />
              <a href="tel:9962506639" className="hover:text-gray-200 transition">99625 06639</a>
              <span>,</span>
              <a href="tel:9962506349" className="hover:text-gray-200 transition">99625 06349</a>
            </span>

            <a href="mailto:apply@velsvidyashram.ac.in" className="hidden lg:flex items-center gap-2 hover:text-gray-200 transition">
              <img src="/thalambur/mail.png" className="w-3" alt="mail" />
              apply@velsvidyashram.ac.in
            </a>
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <Link
              href="https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-white px-3 py-1 text-[10px] sm:text-xs font-bold text-[#2B158F] transition hover:bg-gray-100 sm:px-4"
            >
              Online Fees Payment
            </Link>

            {/* DESKTOP DROPDOWN */}
            <div className="relative group hidden lg:block">
              <button className="bg-white text-[#2B158F] px-4 py-1 rounded-full font-medium text-xs hover:bg-gray-100 transition">
                Other Campus
              </button>
              <div className="absolute right-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                <div className="bg-white shadow-xl border-t-2 border-[#FF8700]">
                  {campuses.map((campus) => (
                    <Link
                      target="_blank"
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

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden p-1 text-2xl focus:outline-none flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
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
      <div className="bg-white flex justify-center py-4 px-4 border-b lg:border-none">
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]"> 
          <Image
            src="/dargaroad/vels-logo.png"
            alt="Vels Vidyashram"
            width={1600}
            height={345}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden z-[110] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      
      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-[380px] h-full bg-white shadow-2xl z-[120] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center bg-[#2B158F] text-white shrink-0">
          <span className="font-bold tracking-wide uppercase text-sm">Navigation</span>
          <button onClick={() => setMobileOpen(false)} className="text-2xl p-1 leading-none">&times;</button>
        </div>

        <div className="overflow-y-auto flex-1">
          {/* MOBILE OTHER CAMPUS DROPDOWN */}
          <div className="border-b">
            <button
              onClick={() => setCampusOpen(!campusOpen)}
              className="w-full px-5 py-4 flex justify-between items-center font-bold text-[#2B158F] bg-gray-50 hover:bg-gray-100 transition"
            >
              Other Campuses
              <span className={`transition-transform duration-300 ${campusOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {campusOpen && (
              <div className="bg-white">
                {campuses.map((c) => (
                  <Link 
                    key={c.label} 
                    href={c.href} 
                    className="block px-8 py-3 text-sm text-[#2B158F] border-b border-gray-50 last:border-0 hover:bg-blue-50" 
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

          {/* Mobile Contact Info Footer */}
          <div className="mt-4 p-5 bg-gray-50 border-t">
            <p className="text-[#2B158F] font-bold text-xs mb-3">CONTACT US</p>
            <div className="space-y-3 text-sm text-gray-600">
               <a href="tel:9962506639" className="flex items-center gap-3">
                 <img src="/thalambur/phone.png" className="w-4 opacity-70" alt="" />
                 99625 06639
               </a>
               <a href="mailto:apply@velsvidyashram.ac.in" className="flex items-center gap-3">
                 <img src="/thalambur/mail.png" className="w-4 opacity-70" alt="" />
                 apply@velsvidyashram.ac.in
               </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================= MOBILE NAV ITEM SUB-COMPONENT ================= */
function MobileNavItem({ item, pathname, closeMenu }) {
  const isActive = pathname === item.href || item.submenu?.some((sub) => pathname === sub.href);
  const [open, setOpen] = useState(isActive);

  return (
    <li className="border-b border-gray-50 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={item.href !== "#" ? closeMenu : () => setOpen(!open)}
          className={`flex-1 px-5 py-4 font-semibold text-[15px] transition-colors ${
            isActive ? "text-[#FF8700]" : "text-[#2B158F]"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            onClick={() => setOpen(!open)}
            className={`px-6 py-4 transition-colors border-l border-gray-100 ${open ? "text-[#FF8700] bg-gray-50" : "text-[#2B158F]"}`}
          >
            <span className={`inline-block transition-transform duration-300 text-xl font-light ${open ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="bg-gray-50/50 py-1 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          {item.submenu.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                onClick={closeMenu}
                className={`block px-10 py-3 text-[14px] transition-all relative ${
                  pathname === sub.href 
                    ? "text-[#FF8700] font-bold bg-white border-l-4 border-[#FF8700]" 
                    : "text-gray-600 hover:text-[#2B158F] hover:pl-11"
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