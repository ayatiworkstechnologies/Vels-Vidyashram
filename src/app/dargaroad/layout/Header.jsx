"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-[9999] bg-white shadow">
      {/* ================= TOP BAR ================= */}
      <div className="px-4 py-2">
        <div className="relative max-w-6xl mx-auto flex items-center justify-center">
          <Link href="/" className="mx-auto">
            <Image
              src="/dargaroad/dargaroad-logo.svg"
              alt="Vels Vidyashram"
              width={350}
              height={96}
              priority
              className="w-[200px] sm:w-[260px] lg:w-[350px]"
            />
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden absolute right-0 h-9 w-9 flex items-center justify-center border rounded"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="bg-[#2B158F] text-white hidden lg:block">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-between">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-3 inline-block ${
                    pathname.startsWith(item.href)
                      ? "text-[#F9B233]"
                      : "hover:text-[#F9B233]"
                  }`}
                >
                  {item.label}
                </Link>

                {/* SUBMENU */}
                {item.submenu && openMenu === item.label && (
                  <div className="absolute left-0 top-full mt-0 min-w-[260px] bg-white text-black shadow-lg z-[99999]">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-[#2B158F] hover:text-white"
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
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#2B158F] text-white px-4 py-4">
          {navItems.map((item) => (
            <div key={item.label} className="mb-3">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2"
              >
                {item.label}
              </Link>

              {item.submenu && (
                <div className="pl-4 text-sm text-gray-200">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
