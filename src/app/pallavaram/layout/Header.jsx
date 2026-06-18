"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [

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
      {label:"Results", href:"/pallavaram/pdf/Result.pdf"},
      {label:"List of Books", href:"/pallavaram/pdf/List-of-Books.pdf"},
      {label: "Home Work Policy", href: "/pallavaram/pdf/Homework-policy.pdf"},
      {label: "Annual Report", href: "/pallavaram/pdf/Annual-report.pdf"},
      {label: "Teacher Details", href: "/pallavaram/pdf/Teacher-Details.pdf"},
      {label: "Strength Details", href: "/pallavaram/pdf/strength-details.pdf"},
    ],
  },
  { label: "Beyond Academics", href: "/pallavaram/beyond-academics" },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      {
        label: "Procedure",
        href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
      },
      {
        label: "Enquiry",
        href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
      },
      { label: "Transport", href: "/pallavaram/transport" },
    ],
  },
  {
    label: "R&D@Vels",
    href: "#",
    submenu: [
      { label: "Genesis", href: "/pallavaram/genesis" },
      { label: "About KKIC", href: "/pallavaram/about-kkic" },
      {
        label: "Centre for Professional Development",
        href: "/pallavaram/centre-for-professional-development",
      },
      { label: "VSkill", href: "/pallavaram/vskill" },
      { label: "CICTL", href: "/pallavaram/cictl" },
      {
        label: "Newsletter",
        href: "/pallavaram/pdf/Yellow-and-Black-Modern-Light-Bulb-Newsletter.pdf",
      },
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
      { label: "Student’s Do’s and Don’t", href: "/pallavaram/pdf/students-dos.pdf" },
      { label: "Parent’s Do’s and Don’t", href: "/pallavaram/pdf/parents-dos.pdf" },
      { label: "PC Do’s", href: "/pallavaram/pdf/pc.pdf" },
      { label: "Mobile Do’s", href: "/pallavaram/pdf/mobile.pdf" },
    ],
  },
  { label: "Contact us", href: "/pallavaram/contact-us" },
];

const campuses = [
  { label: "Dargaroad", href: "/dargaroad" },
  { label: "Thalambur", href: "/thalambur" },
  { label: "Cantonment", href: "/cantonment" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="w-full sticky top-0" style={{ zIndex: 40 }}>
        <header className="w-full bg-white shadow-md overflow-x-clip">
          {/* TOP BAR */}
          <div className="bg-[#2B158F] text-white">
            <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-10 h-[54px] flex items-center justify-between">
              <div className="hidden md:flex items-center gap-7 text-[12px] font-semibold">
                <a
                  href="tel:7824830871"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <img src="/thalambur/phone.png" className="w-4 h-4" alt="phone" />
                  782 483 0871
                </a>

                <a
                  href="mailto:register@velsvidyashram.ac.in"
                  className="hidden lg:flex items-center gap-2 whitespace-nowrap"
                >
                  <img src="/thalambur/mail.png" className="w-4 h-4" alt="mail" />
                  register@velsvidyashram.ac.in
                </a>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <Link
                  href="https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#2B158F] px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap hover:bg-[#FF8700] hover:text-white transition"
                >
                  Online Fees Payment
                </Link>

                <div className="relative hidden lg:block group">
                  <button className="border border-white/40 text-white px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap hover:bg-white hover:text-[#2B158F] transition">
                    Other Campus
                  </button>

                  <div className="absolute right-0 top-full pt-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                    <div className="bg-white shadow-xl border-t-2 border-[#FF8700]">
                      {campuses.map((campus) => (
                        <Link
                          key={campus.label}
                          href={campus.href}
                          className="block px-5 py-3 text-[#2B158F] hover:bg-[#2B158F] hover:text-white border-b border-gray-100 last:border-0"
                        >
                          {campus.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden text-white text-3xl leading-none"
                  aria-label="Open menu"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* LOGO + MENU ROW */}
          <div className="bg-white">
            <div className="relative w-full max-w-[1500px] mx-auto px-4 lg:px-10 h-[92px] flex items-center justify-center lg:justify-between gap-6">
              <Link href="/pallavaram" className="flex items-center shrink-0">
                <Image
                  src="/pallavaram/logo-pallavaram.png"
                  alt="Vels Vidyashram Pallavaram"
                  width={430}
                  height={100}
                  priority
                  className="w-[260px] sm:w-[360px] h-auto object-contain"
                />
              </Link>

              <nav className="hidden lg:block flex-1 min-w-0">
                <ul className="w-full flex items-center justify-end gap-1 xl:gap-2 text-[12px] xl:text-[13px] font-medium">
                  {navItems.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      item.submenu?.some((sub) => pathname === sub.href);

                    return (
                      <li
                        key={item.label}
                        className="relative group shrink-0"
                        style={{ isolation: "isolate" }}
                      >
                        <Link
                          href={item.href}
                          className={`px-2.5 xl:px-3 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                            isActive
                              ? "bg-[#FF8700] text-white shadow-[0_5px_15px_rgba(255,135,0,0.35)]"
                              : "text-gray-500 hover:text-[#FF8700] hover:bg-orange-50"
                          }`}
                        >
                          {item.label}
                        </Link>

                        {item.submenu && (
                          <div
                            className="absolute left-0 top-full pt-4 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                            style={{ zIndex: 9999 }}
                          >
                            <ul className="bg-white shadow-2xl border-t-2 border-[#FF8700] py-2">
                              {item.submenu.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    target={sub.href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                      sub.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className={`block px-5 py-3 text-sm transition ${
                                      pathname === sub.href
                                        ? "text-[#FF8700] font-bold bg-gray-50"
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
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 9998 }}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 w-[82%] sm:w-[360px] h-full bg-white shadow-2xl transition-transform duration-300 lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="p-5 flex justify-between items-center bg-[#2B158F] text-white">
          <span className="font-bold">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-2xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="border-b bg-gray-50">
            <button
              onClick={() => setCampusOpen(!campusOpen)}
              className="w-full px-5 py-4 flex justify-between items-center font-bold text-[#2B158F]"
            >
              Other Campus
              <span className={`transition-transform ${campusOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {campusOpen && (
              <div className="bg-white border-t divide-y">
                {campuses.map((campus) => (
                  <Link
                    key={campus.label}
                    href={campus.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-10 py-3 text-sm text-[#2B158F]"
                  >
                    {campus.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="p-2 divide-y divide-gray-100">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                closeMenu={() => setMobileOpen(false)}
              />
            ))}
          </ul>

          <div className="p-6 mt-4 border-t bg-gray-50 space-y-3">
            <p className="text-[10px] font-bold text-[#2B158F] uppercase opacity-60">
              Contact Information
            </p>

            <a
              href="tel:7824830871"
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <img src="/thalambur/phone.png" className="w-4 opacity-70" alt="" />
              782 483 0871
            </a>

            <a
              href="mailto:register@velsvidyashram.ac.in"
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <img src="/thalambur/mail.png" className="w-4 opacity-70" alt="" />
              register@velsvidyashram.ac.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ item, pathname, closeMenu }) {
  const isActive =
    pathname === item.href ||
    item.submenu?.some((sub) => pathname === sub.href);

  const [open, setOpen] = useState(isActive);

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={
            item.submenu
              ? (e) => {
                  e.preventDefault();
                  setOpen(!open);
                }
              : closeMenu
          }
          className={`flex-1 px-4 py-4 font-medium transition ${
            isActive ? "text-[#FF8700]" : "text-[#2B158F]"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            onClick={() => setOpen(!open)}
            className={`px-5 py-4 transition-colors ${
              open ? "text-[#FF8700]" : "text-[#2B158F]"
            }`}
          >
            <span
              className={`inline-block transition-transform duration-200 font-bold ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="bg-gray-50 py-2 border-t border-b border-gray-100">
          {item.submenu.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                target={sub.href.startsWith("http") ? "_blank" : undefined}
                rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={closeMenu}
                className={`block px-8 py-3 text-sm transition-all ${
                  pathname === sub.href
                    ? "text-[#FF8700] font-bold border-l-4 border-[#FF8700] bg-white"
                    : "text-gray-600"
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