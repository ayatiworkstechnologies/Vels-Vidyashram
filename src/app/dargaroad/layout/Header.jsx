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

  return (
    <header className="w-full shadow-sm">

      {/* ------------------------------------------------ */}
      {/* TOP LOGO BAR — CENTER LOGO ON DESKTOP           */}
      {/* ------------------------------------------------ */}
      <div className="bg-white flex items-center justify-between md:justify-center px-4 py-2 relative">

        {/* Center Logo */}
        <Link href="/" className="flex items-center mx-auto">
          <Image
            src="/dargaroad/dargaroad-logo.jpg"
            alt="Vels Vidyashram"
            width={170}
            height={50}
            priority
          />
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          className="md:hidden absolute right-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2B158F]/40 text-[#2B158F]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span className="block w-5 h-[2px] bg-[#2B158F]" />
            <span className="block w-5 h-[2px] bg-[#2B158F]" />
            <span className="block w-5 h-[2px] bg-[#2B158F]" />
          </div>
        </button>
      </div>

      {/* ------------------------------------------------ */}
      {/* DESKTOP NAVIGATION BAR                          */}
      {/* ------------------------------------------------ */}
      <nav className="relative bg-[#2B158F] text-white text-sm md:text-md font-primary font-primary-regular">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="hidden md:flex items-center justify-between gap-4">

            {navItems.map((item) => (
              <li key={item.label} className="relative group py-2">

                {/* Main Item */}
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 hover:text-[#F9B233]"
                >
                  {item.label}
                </Link>

                {/* Hover underline */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-[#F9B233] transition-transform duration-200 group-hover:scale-x-100" />

                {/* Desktop dropdown */}
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

        {/* ------------------------------------------------ */}
        {/* MOBILE DROPDOWN MENU                           */}
        {/* ------------------------------------------------ */}
        {mobileOpen && (
          <div className="md:hidden absolute inset-x-0 top-full z-40 bg-[#2B158F] border-t border-white/20">

            <ul className="flex flex-col px-4 py-3 space-y-2 max-h-[75vh] overflow-y-auto">

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
