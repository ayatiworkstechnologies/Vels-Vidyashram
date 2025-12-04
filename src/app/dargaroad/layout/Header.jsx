"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Leadership & Legacy", href: "/about/leadership-and-legacy" },
      { label: "Our Group", href: "/about/our-group" },
      { label: "School Information", href: "/about/school-information" },
    ],
  },

  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Circular", href: "/academics/circular" },
      { label: "Homework", href: "/academics/homework" },
      { label: "Scholastic Resources", href: "/academics/resources" },
    ],
  },

  { label: "Beyond Academics", href: "/beyond-academics" },

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
      {
        label: "Vels Research Foundation",
        href: "/rnd/vels-research-foundation",
      },
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
  const [campusOpen, setCampusOpen] = useState(false); // mobile "Other Campus"

  return (
    <header className="w-full shadow-sm">
      {/* TOP LOGO BAR + OTHER CAMPUS + HAMBURGER */}
      <div className="bg-white px-4 py-2">
        <div className="relative max-w-6xl mx-auto flex items-center justify-center">
          {/* Center logo */}
          <Link href="/" className="flex items-center mx-auto">
            <Image
              src="/dargaroad/dargaroad-logo.svg"
              alt="Vels Vidyashram"
              width={350}
              height={96}
              priority
            />
          </Link>

          {/* OTHER CAMPUS - desktop only */}
          <div className="hidden md:block absolute right-0">
            <div className="relative group">
              {/* Hover button */}
              <button
                type="button"
                className="bg-tertiary text-white text-xs md:text-sm px-5 py-2 rounded-full 
                           font-primary font-primary-semibold tracking-wide shadow cursor-pointer"
              >
                OTHER CAMPUS
              </button>

              {/* Hover dropdown */}
              <div
                className="invisible opacity-0 absolute right-0 mt-2 w-52 bg-white shadow-lg 
                           rounded-md overflow-hidden z-50 transition-all duration-150
                           group-hover:visible group-hover:opacity-100 group-hover:translate-y-1"
              >
                <ul className="py-2 text-left text-sm font-secondary font-secondary-regular text-[#222]">
                  <li>
                    <Link
                      href="/thalambur"
                      className="block px-5 py-2 hover:bg-[#2B158F] hover:text-white"
                    >
                      Thalambur
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pallavaram"
                      className="block px-5 py-2 hover:bg-[#2B158F] hover:text-white"
                    >
                      Pallavaram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cantonment"
                      className="block px-5 py-2 hover:bg-[#2B158F] hover:text-white"
                    >
                      Cantonment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HAMBURGER - mobile only */}
          <button
            type="button"
            className="md:hidden absolute right-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2B158F]/40 text-[#2B158F]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block w-5 h-[2px] bg-[#2B158F]" />
              <span className="block w-5 h-[2px] bg-[#2B158F]" />
              <span className="block w-5 h-[2px] bg-[#2B158F]" />
            </div>
          </button>
        </div>
      </div>

      {/* DESKTOP NAV BAR */}
      <nav className="relative bg-[#2B158F] text-white text-sm md:text-md font-primary font-primary-regular">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="hidden md:flex items-center justify-between gap-4">
            {navItems.map((item) => (
              <li key={item.label} className="relative group py-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 hover:text-[#F9B233]"
                >
                  {item.label}
                </Link>

                {/* underline */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-secondary transition-transform duration-200 group-hover:scale-x-100" />

                {/* dropdown */}
                {item.submenu && (
                  <div className="invisible absolute left-0 top-full z-40 mt-0 w-56 translate-y-1 rounded-none bg-white text-sm font-secondary font-secondary-medium text-[#222] opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="py-1">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-3 py-2 hover:bg-[#2B158F] hover:text-white"
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

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden absolute inset-x-0 top-full z-40 bg-[#2B158F] border-t border-white/20">
            <ul className="flex flex-col px-4 py-3 space-y-2 max-h-[75vh] overflow-y-auto">
              {/* OTHER CAMPUS - mobile accordion */}
              <li className="text-sm">
                <button
                  onClick={() => setCampusOpen((prev) => !prev)}
                  className="w-full flex justify-between items-center py-2 text-white font-primary font-primary-semibold"
                >
                  <span>Other Campus</span>
                  <span className="text-lg">{campusOpen ? "−" : "+"}</span>
                </button>

                {campusOpen && (
                  <ul className="pl-4 border-l border-white/15 space-y-1 mb-2 mt-1">
                    <li>
                      <Link
                        href="/thalambur"
                        className="block py-1 text-xs text-gray-100 hover:text-[#F9B233]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Thalambur
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pallavaram"
                        className="block py-1 text-xs text-gray-100 hover:text-[#F9B233]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Pallavaram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cantonment"
                        className="block py-1 text-xs text-gray-100 hover:text-[#F9B233]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Cantonment
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Existing nav items */}
              {navItems.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    className="block py-2 text-white hover:text-[#F9B233]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <ul className="pl-4 border-l border-white/15 space-y-1 mb-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block py-1 text-xs text-gray-100 hover:text-[#F9B233]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
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
      </nav>
    </header>
  );
}
