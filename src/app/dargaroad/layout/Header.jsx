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
      { label: "List of Books", href: "/dargaroad/pdf/listofbooks.pdf" },
      { label: "Home Work Policy", href: "/dargaroad/pdf/home-work-policy.pdf" },
      { label: "Annual Report", href: "/dargaroad/pdf/annual-report.pdf" },
      { label: "Strength Details", href: "/dargaroad/pdf/strength.pdf" },
      {
        label: "Teacher Details",
        href: "#",
        submenu: [
          { label: "PGT", href: "/dargaroad/pdf/pgt.pdf" },
          { label: "TGT", href: "/dargaroad/pdf/tgt.pdf" },
          { label: "PRT", href: "/dargaroad/pdf/prt.pdf" },
        ],
      },
    ],
  },
  { label: "Beyond Academics", href: "/dargaroad/beyond-academics" },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      {
        label: "Admission Enquiry",
        href: "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
      },
      {
        label: "Online Fee Payment",
        href: "https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp",
      },
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
      {
        label: "Feedback",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeGTCV8u4EPUh194loksUnxmwutnnKGOo2V1BA8X1fPse9l2Q/viewform",
      },
    ],
  },
  { label: "Contact us", href: "/dargaroad/contact" },
];

const campuses = [
  { label: "Thalambur", href: "/thalambur" },
  { label: "Pallavaram", href: "/pallavaram" },
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
      <div className="w-full sticky top-0 z-40">
        <header className="w-full bg-white shadow-md overflow-visible">
          <div className="bg-[#2B158F] text-white">
            <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-10 h-[54px] flex items-center justify-between">
              <div className="hidden md:flex items-center gap-7 text-[12px] font-semibold">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/thalambur/phone.png" className="w-4 h-4" alt="phone" />
                  <a href="tel:9962506639">99625 06639</a>
                  <span>,</span>
                  <a href="tel:9962506349">99625 06349</a>
                </span>

                <a
                  href="mailto:apply@velsvidyashram.ac.in"
                  className="hidden lg:flex items-center gap-2 whitespace-nowrap"
                >
                  <img src="/thalambur/mail.png" className="w-4 h-4" alt="mail" />
                  apply@velsvidyashram.ac.in
                </a>

                <span className="hidden xl:block whitespace-nowrap">
                  Affiliation No : 1931205
                </span>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <Link
                  href="https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#2B158F] px-4 sm:px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap hover:bg-[#FF8700] hover:text-white transition"
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

          <div className="bg-white">
            <div className="relative w-full max-w-[1500px] mx-auto px-4 lg:px-10 h-[92px] flex items-center justify-center lg:justify-between gap-6">
              <Link href="/dargaroad" className="flex items-center shrink-0">
                <Image
                  src="/dargaroad/logo-dargaroad.png"
                  alt="Vels Vidyashram Darga Road"
                  width={430}
                  height={100}
                  priority
                  className="w-[260px] sm:w-[380px] h-auto object-contain"
                />
              </Link>

              <nav className="hidden lg:block flex-1 min-w-0">
                <ul className="w-full flex items-center justify-end gap-1 xl:gap-2 text-[12px] xl:text-[13px] font-medium">
                  {navItems.map((item) => (
                    <DesktopNavItem key={item.label} item={item} pathname={pathname} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 9998 }}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-[380px] h-full bg-white shadow-2xl transition-transform duration-300 lg:hidden flex flex-col overflow-x-hidden ${
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

        <div className="overflow-y-auto overflow-x-hidden flex-1">
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
        </div>
      </div>
    </>
  );
}

function DesktopNavItem({ item, pathname }) {
  const isActive =
    pathname === item.href ||
    item.submenu?.some(
      (sub) =>
        pathname === sub.href ||
        sub.submenu?.some((child) => pathname === child.href)
    );

  return (
    <li className="relative group shrink-0">
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
        <div className="absolute left-0 top-full pt-4 min-w-[250px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
          <ul className="bg-white shadow-2xl border-t-2 border-[#FF8700] py-2">
            {item.submenu.map((sub) => (
              <li key={sub.label} className="relative group/sub">
                <Link
                  href={sub.href}
                  target={sub.href.startsWith("http") ? "_blank" : undefined}
                  rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between gap-4 px-5 py-3 text-sm transition whitespace-nowrap ${
                    pathname === sub.href
                      ? "text-[#FF8700] font-bold bg-gray-50"
                      : "text-[#2B158F] hover:bg-[#2B158F] hover:text-white"
                  }`}
                >
                  {sub.label}
                  {sub.submenu && <span>›</span>}
                </Link>

                {sub.submenu && (
                  <ul className="absolute left-full top-0 min-w-[190px] bg-white shadow-2xl border-t-2 border-[#FF8700] py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-[9999]">
                    {sub.submenu.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block px-5 py-3 text-sm transition whitespace-nowrap ${
                            pathname === child.href
                              ? "text-[#FF8700] font-bold bg-gray-50"
                              : "text-[#2B158F] hover:bg-[#2B158F] hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function MobileNavItem({ item, pathname, closeMenu }) {
  const isActive =
    pathname === item.href ||
    item.submenu?.some(
      (sub) =>
        pathname === sub.href ||
        sub.submenu?.some((child) => pathname === child.href)
    );

  const [open, setOpen] = useState(isActive);

  return (
    <li className="overflow-x-hidden">
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
          className={`flex-1 min-w-0 px-4 py-4 font-medium transition ${
            isActive ? "text-[#FF8700]" : "text-[#2B158F]"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            type="button"
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
        <ul className="bg-gray-50 py-2 border-t border-b border-gray-100 overflow-x-hidden">
          {item.submenu.map((sub) => (
            <MobileSubItem
              key={sub.label}
              item={sub}
              pathname={pathname}
              closeMenu={closeMenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileSubItem({ item, pathname, closeMenu }) {
  const isActive =
    pathname === item.href ||
    item.submenu?.some((child) => pathname === child.href);

  const [open, setOpen] = useState(isActive);

  return (
    <li className="overflow-x-hidden">
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
          className={`flex-1 min-w-0 px-8 py-3 text-sm transition-all ${
            isActive
              ? "text-[#FF8700] font-bold border-l-4 border-[#FF8700] bg-white"
              : "text-gray-600"
          }`}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`px-5 py-3 text-sm ${
              open ? "text-[#FF8700]" : "text-[#2B158F]"
            }`}
          >
            <span
              className={`inline-block transition-transform ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="bg-white border-l-4 border-[#2B158F]/20 ml-6 my-1 overflow-x-hidden">
          {item.submenu.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={closeMenu}
                className={`block px-8 py-3 text-sm transition ${
                  pathname === child.href
                    ? "text-[#FF8700] font-bold bg-orange-50"
                    : "text-[#2B158F]"
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}