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
      { label: "Facilities", href: "/dargaroad/facilities" },
      { label: "Photo Gallery", href: "/dargaroad/photo-gallery" },
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  return (
    <header className="w-full">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#2B158F] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT (DESKTOP PHONE + MAIL) */}
          <div className="hidden md:flex gap-6">
            <span className="flex items-center gap-2">
              <img src="/thalambur/phone.png" className="w-3" />
              7401 65 7975 / 7401 65 1975
            </span>
            <span className="flex items-center gap-2">
              <img src="/thalambur/mail.png" className="w-3" />
              admissions@velsvidyashram.ac.in
            </span>
          </div>

          {/* RIGHT (MOBILE + DESKTOP ACTIONS) */}
          <div className="flex items-center gap-3 ml-auto">

            <Link href="#" className="whitespace-nowrap">
              Annual Day Photos 2025
            </Link>

            <Link
              href="#"
              className="bg-white text-[#2B158F] px-4 py-1 rounded-full font-medium whitespace-nowrap"
            >
              Online Fees Payment
            </Link>

            {/* HAMBURGER (MOBILE ONLY – BESIDE ONLINE) */}
            <button
              className="md:hidden text-3xl leading-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

            {/* DESKTOP OTHER CAMPUS */}
            <div className="relative group hidden md:block">
              <button className="bg-white text-[#2B158F] px-4 py-1 rounded-full text-sm font-medium">
                Other Campus
              </button>
              <div className="absolute right-0 top-full mt-1 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <Link href="/dargaroad" className="block px-4 py-2 bg-[#2B158F] text-white">Dargaroad</Link>
                <Link href="/pallavaram" className="block px-4 py-2 text-[#2B158F]">Pallavaram</Link>
                <Link href="/cantonment" className="block px-4 py-2 text-[#2B158F]">Cantonment</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden lg:block bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-center gap-16 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="py-4 inline-block text-[#2B158F]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= LOGO ================= */}
      <div className="bg-white py-4 flex justify-center">
        <Image src="/dargaroad/dargaroad-logo.svg" alt="logo" width={360} height={100} />
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">

          {/* OTHER CAMPUS DROPDOWN */}
          <button
            onClick={() => setCampusOpen(!campusOpen)}
            className="w-full px-4 py-3 flex justify-between font-semibold text-[#2B158F]"
          >
            Other Campus
            <span>{campusOpen ? "−" : "+"}</span>
          </button>

          {campusOpen && (
            <div className="px-6 pb-3 space-y-2 text-sm">
              <Link href="/thalambur">Dargaroad</Link>
              <Link href="/pallavaram">Pallavaram</Link>
              <Link href="/cantonment">Cantonment</Link>
            </div>
          )}

          {/* NAV ITEMS */}
          <ul className="px-4 py-4 space-y-3">
            {navItems.map((item, i) => (
              <MobileNavItem
                key={i}
                item={item}
                pathname={pathname}
                closeMenu={() => setMobileOpen(false)}
              />
            ))}
          </ul>

        </div>
      )}

    </header>
  );
}

function MobileNavItem({ item, pathname, closeMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b pb-2">
      <div className="flex justify-between">
        <Link href={item.href} onClick={closeMenu} className="text-[#2B158F]">
          {item.label}
        </Link>
        {item.submenu && (
          <button onClick={() => setOpen(!open)}>
            {open ? "−" : "+"}
          </button>
        )}
      </div>

      {item.submenu && open && (
        <ul className="ml-3 mt-2 text-sm space-y-1">
          {item.submenu.map((sub) => (
            <li key={sub.label}>
              <Link href={sub.href} onClick={closeMenu}>
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
