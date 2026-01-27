"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ================= NAV ITEMS ================= */
const navItems = [
  { label: "Home", href: "/thalambur" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Vision And Mission", href: "/thalambur/vision-mission" },
      { label: "Our Group", href: "/thalambur/our-group" },
      { label: "School Information", href: "/thalambur/school-information" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "Curriculum", href: "/thalambur/curriculum" },
      { label: "Academics at a Glance", href: "/thalambur/academics-at-a-glance" },
      { label: "Circular", href: "/thalambur/circular-2025-2026" },
      { label: "Messages", href: "/thalambur/general-messages" },
    ],
  },
  { label: "Beyond Academics", href: "/thalambur/beyond-academics" },
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
      { label: "Facilities", href: "/thalambur/facilities" },
      { label: "Photo Gallery", href: "/thalambur/photo-gallery" },
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
    <header className="w-full relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#2B158F] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT */}
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

          {/* RIGHT */}
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

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

            {/* DESKTOP OTHER CAMPUS */}
            <div className="relative group hidden md:block z-[9999]">
  <button className="bg-white text-[#2B158F] px-4 py-1 rounded-full text-sm font-medium">
    Other Campus
  </button>

  {/* DROPDOWN */}
  <div className="absolute right-0 top-full w-56 bg-white shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition pointer-events-none group-hover:pointer-events-auto">
    <Link
      href="/dargaroad"
      className="block px-4 py-2 bg-[#2B158F] text-white hover:bg-[#24127A]"
    >
      Dargaroad
    </Link>
    <Link
      href="/pallavaram"
      className="block px-4 py-2 text-[#2B158F] hover:bg-gray-100"
    >
      Pallavaram
    </Link>
    <Link
      href="/cantonment"
      className="block px-4 py-2 text-[#2B158F] hover:bg-gray-100"
    >
      Cantonment
    </Link>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden lg:block bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-center gap-16 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`py-4 inline-block transition ${
                      isActive
                        ? "text-[#FF8700]"
                        : "text-[#2B158F] hover:text-[#FF8700]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* DROPDOWN */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full min-w-[260px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-[9999]">
                      <ul className="py-2">
                        {item.submenu.map((sub) => {
                          const subActive = pathname === sub.href;

                          return (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                className={`block px-5 py-2 text-sm transition ${
                                  subActive
                                    ? "bg-[#2B158F] text-white"
                                    : "text-[#2B158F] hover:bg-[#2B158F] hover:text-white"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          );
                        })}
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
      <div className="bg-white py-4 flex justify-center">
        <Image
          src="/dargaroad/dargaroad-logo.svg"
          alt="Vels Vidyashram"
          width={360}
          height={100}
        />
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">

          {/* OTHER CAMPUS */}
          <button
            onClick={() => setCampusOpen(!campusOpen)}
            className="w-full px-4 py-3 flex justify-between font-semibold text-[#2B158F]"
          >
            Other Campus
            <span>{campusOpen ? "−" : "+"}</span>
          </button>

          {campusOpen && (
            <div className="px-6 pb-3 space-y-2 text-sm">
              <Link href="/dargaroad">Dargaroad</Link>
              <Link href="/pallavaram">Pallavaram</Link>
              <Link href="/cantonment">Cantonment</Link>
            </div>
          )}

          {/* NAV ITEMS */}
          <ul className="px-4 py-4 space-y-3">
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
      )}
    </header>
  );
}

/* ================= MOBILE ITEM ================= */
function MobileNavItem({ item, pathname, closeMenu }) {
  const [open, setOpen] = useState(false);

  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <li className="border-b pb-2">
      <div className="flex justify-between">
        <Link
          href={item.href}
          onClick={closeMenu}
          className={isActive ? "text-[#FF8700]" : "text-[#2B158F]"}
        >
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
              <Link
                href={sub.href}
                onClick={closeMenu}
                className={
                  pathname === sub.href
                    ? "text-[#FF8700]"
                    : "text-[#2B158F]"
                }
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
