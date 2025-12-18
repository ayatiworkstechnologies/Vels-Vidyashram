"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/dargaroad" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Vision And Mission", href: "/dargaroad/vision-mission" },
      { label: "Our Group", href: "/dargaroad/our-group" },
      { label: "School Information", href: "/dargaroad/school-information" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "Curriculum", href: "/dargaroad/curriculum" },
      { label: "Academics at a Glance", href: "/dargaroad/academics-at-a-glance" },
      { label: "Circular", href: "/dargaroad/circular-2025-2026" },
      { label: "Messages", href: "/dargaroad/general-messages" },
    ],
  },
  { label: "Beyond Academics", href: "/dargaroad/beyond-academics" },
  {
    label: "Admissions",
    href: "/admissions",
    submenu: [
      { label: "Procedure", href: "/admissions/procedure" },
      { label: "Enquiry", href: "/admissions/enquiry" },
      { label: "Transport", href: "/admissions/transport" },
    ],
  },
  {
    label: "R&D@Vels",
    href: "/rnd",
    submenu: [
      { label: "Vels Research Foundation", href: "/rnd/vels-research-foundation" },
      { label: "VELSR", href: "/rnd/velsr" },
      { label: "CICFL", href: "/rnd/cicfl" },
      { label: "Newsletter", href: "/rnd/newsletter" },
      { label: "Central R&D", href: "/rnd/central-rnd" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    submenu: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
    ],
  },
  {
    label: "Parent Login",
    href: "/parent-login",
    submenu: [
      { label: "Login", href: "/parent-login/login" },
      { label: "Do’s and Don’ts", href: "/parent-login/dos-and-donts" },
    ],
  },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white px-4 py-2">
        <div className="relative max-w-6xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="mx-auto flex justify-center">
            <Image
              src="/dargaroad/dargaroad-logo.svg"
              alt="Vels Vidyashram"
              width={350}
              height={96}
              priority
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[350px] h-auto"
            />
          </Link>

          {/* OTHER CAMPUS – DESKTOP */}
          <div className="hidden lg:block absolute right-0">
            <div className="relative group">
              <button className="bg-tertiary text-white text-sm px-5 py-2 rounded-full font-primary font-primary-semibold shadow">
                OTHER CAMPUS
              </button>

              <div className="invisible absolute right-0 mt-2 min-w-[220px] bg-white shadow-lg rounded-md opacity-0 group-hover:visible group-hover:opacity-100 transition z-50">
                <ul className="py-2 text-sm text-[#222]">
                  {["thalambur", "pallavaram", "cantonment"].map((c) => (
                    <li key={c}>
                      <Link
                        href={`/${c}`}
                        className="block px-5 py-2.5 whitespace-nowrap hover:bg-[#2B158F] hover:text-white"
                      >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden absolute right-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2B158F]/40"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="w-5 h-[2px] bg-[#2B158F]" />
              <span className="w-5 h-[2px] bg-[#2B158F]" />
              <span className="w-5 h-[2px] bg-[#2B158F]" />
            </div>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="bg-[#2B158F] text-white text-sm font-primary relative">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="hidden lg:flex justify-between">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link href={item.href} className="px-3 py-3 inline-block hover:text-[#F9B233]">
                  {item.label}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 top-full min-w-[260px] bg-white text-black opacity-0 invisible group-hover:visible group-hover:opacity-100 transition shadow-md z-40">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2.5 whitespace-nowrap hover:bg-[#2B158F] hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2B158F] z-50 border-t border-white/20">
            <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">

              {/* OTHER CAMPUS – MOBILE */}
              <div className="border-b border-white/20 pb-2">
                <button
                  onClick={() => setCampusOpen((v) => !v)}
                  className="w-full flex justify-between items-center text-white font-primary font-primary-semibold py-2"
                >
                  <span>Other Campus</span>
                  <span>{campusOpen ? "−" : "+"}</span>
                </button>

                {campusOpen && (
                  <div className="pl-4 space-y-1 text-sm text-gray-200">
                    <Link href="/thalambur" onClick={() => setMobileOpen(false)} className="block py-1">
                      Thalambur
                    </Link>
                    <Link href="/pallavaram" onClick={() => setMobileOpen(false)} className="block py-1">
                      Pallavaram
                    </Link>
                    <Link href="/cantonment" onClick={() => setMobileOpen(false)} className="block py-1">
                      Cantonment
                    </Link>
                  </div>
                )}
              </div>

              {/* MAIN NAV ITEMS */}
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-white hover:text-[#F9B233]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <div className="pl-4 space-y-1 text-xs text-gray-200">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
