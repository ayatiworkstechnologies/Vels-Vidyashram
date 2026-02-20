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
      { label: "Vision And Mission", href: "/thalambur/vision-mission" },
      { label: "Our Group", href: "/thalambur/our-group" },
      { label: "School Information", href: "/thalambur/school-information" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    submenu: [
      { label: "Curriculum", href: "/thalambur/curriculum" },
      { label: "Scheme of Studies", href: "/thalambur/scheme-of-study" },
      { label: "Assessment Structure", href: "/thalambur/assessment-structure" },
      { label: "Circular", href: "/thalambur/circular" },
      { label: "Messages", href: "/thalambur/general-messages" },
    ],
  },
  { label: "Beyond Academics", href: "/thalambur/beyond-academics" },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      { label: "Procedure", href: "/thalambur/procedure" },
      { label: "Enquiry", href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp" },
      {label: "Online Fee Payment", href: "https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp"},
      { label: "Transport", href: "/thalambur/transport" },
    ],
  },
  {
    label: "R&D@Vels",
    href: "#",
    submenu: [
      { label: "Genesis", href: "/thalambur/genesis" },
      { label: "About KKIC", href: "/thalambur/about-kkic" },
      { label: "Centre for Professional Development", href: "/thalambur/centre-for-professional-development" },
       { label: "VSkill", href: "/thalambur/vskill" },
        { label: "CICTL", href: "/thalambur/cictl" },
      { label: "Newsletter", href: "/thalambur/pdf/newsletter.pdf" },
   
    ],
  },
  {
    label: "Gallery",
    href: "#",
    submenu: [
    
      { label: "Photo Gallery", href: "/thalambur/photo-gallery" },
      { label: "Video Gallery", href: "/thalambur/video" },
    ],
  },
  {
    label: "Parent Login",
    href: "#",
    submenu: [
      { label: "Login", href: "https://parent.neverskip.com/" }
    ],
  },
  { label: "Contact us", href: "/thalambur/contact-us" },
];

const campuses = [
  { label: "Dargaroad", href: "/dargaroad" },
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
      <div className="bg-[#2B158F] text-white text-[10px] sm:text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* LEFT - Desktop Contact */}
          <div className="hidden md:flex gap-6 items-center">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <img src="/thalambur/phone.png" className="w-3" alt="phone" />
              7401 65 7975 / 1975
            </span>
            <span className="hidden lg:flex items-center gap-2 whitespace-nowrap">
              <img src="/thalambur/mail.png" className="w-3" alt="mail" />
              admissions@velsvidyashram.ac.in
            </span>
          </div>

          {/* RIGHT - Responsive Header Links */}
          <div className="flex items-center justify-between w-full md:w-auto gap-2 sm:gap-4">
            <Link href="/thalambur/photo-gallery" className="whitespace-nowrap hover:underline">
              Annual Day Photos 2025
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="#"
                className="bg-white text-[#2B158F] px-2 sm:px-4 py-1 rounded-full font-medium whitespace-nowrap hover:bg-gray-100 transition"
              >
                Online Fees Payment
              </Link>

              {/* DESKTOP DROPDOWN: Other Campus */}
              <div className="relative group hidden lg:block">
                <button className="bg-white text-[#2B158F] px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition">
                  Other Campus
                </button>
                <div className="absolute right-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] pointer-events-none group-hover:pointer-events-auto">
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

              <button
                className="lg:hidden text-2xl sm:text-3xl focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden lg:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center gap-4 xl:gap-10 text-[13px] xl:text-sm font-medium">
            {navItems.map((item) => {
              // HIGHLIGHT LOGIC: Check parent and children
              const isParentActive = pathname === item.href;
              const isSubActive = item.submenu?.some((sub) => pathname === sub.href);
              const isActive = isParentActive || isSubActive;

              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`py-5 inline-block transition-colors border-b-2 ${
                      isActive 
                        ? "text-[#FF8700] border-[#FF8700]" 
                        : "text-[#2B158F] border-transparent hover:text-[#FF8700]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-1 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] pointer-events-none group-hover:pointer-events-auto">
                      <ul className="bg-white shadow-2xl border-t-2 border-[#FF8700] py-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className={`block px-5 py-3 transition ${
                                pathname === sub.href 
                                  ? "bg-gray-50 text-[#FF8700] font-bold" 
                                  : "text-[#2B158F] hover:bg-[#2B158F] hover:text-white"
                              }`}
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
     <div className="bg-white flex justify-center py-2 px-2">
  <div className="max-w-[400px] w-full">
    <Image
  src="/thalambur/3.png"
  alt="Vels Vidyashram"
  width={2880}
  height={670}
  priority
  className="h-full "
/>
  </div>
</div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden z-[110] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[350px] h-full bg-white shadow-2xl z-[120] transition-transform duration-300 lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b shrink-0">
          <span className="font-bold text-[#2B158F]">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="text-2xl">✕</button>
        </div>

        <div className="overflow-y-auto flex-1">
          {/* MOBILE OTHER CAMPUS DROPDOWN */}
          <div className="border-b bg-gray-50/50">
            <button
              onClick={() => setCampusOpen(!campusOpen)}
              className="w-full px-5 py-4 flex justify-between items-center font-bold text-[#2B158F] hover:bg-gray-100 transition"
            >
              Other Campus
              <span className={`transition-transform duration-200 text-xs ${campusOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {campusOpen && (
              <div className="bg-white border-t border-gray-100">
                {campuses.map((c) => (
                  <Link 
                    key={c.label} 
                    href={c.href} 
                    className="block px-10 py-3 text-sm text-[#2B158F] border-b border-gray-50 last:border-0" 
                    onClick={() => {
                      setMobileOpen(false);
                      setCampusOpen(false);
                    }}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="p-2">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                closeMenu={() => setMobileOpen(false)}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

/* ================= MOBILE NAV ITEM SUB-COMPONENT ================= */
function MobileNavItem({ item, pathname, closeMenu }) {
  // HIGHLIGHT LOGIC: Check parent and children
  const isParentActive = pathname === item.href;
  const isSubActive = item.submenu?.some((sub) => pathname === sub.href);
  const isActive = isParentActive || isSubActive;

  // Auto-expand the accordion if an item inside is active
  const [open, setOpen] = useState(isActive);

  return (
    <li className="border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={closeMenu}
          className={`flex-1 px-4 py-4 font-medium transition ${
            isActive ? "text-[#FF8700]" : "text-[#2B158F]"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            onClick={() => setOpen(!open)}
            className={`px-5 py-4 transition-colors ${open ? "text-[#FF8700]" : "text-[#2B158F]"}`}
          >
            <span className={`inline-block transition-transform duration-200 font-bold ${open ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="bg-gray-50 py-2 border-t">
          {item.submenu.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                onClick={closeMenu}
                className={`block px-8 py-3 text-sm transition-all ${
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