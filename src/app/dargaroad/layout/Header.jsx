"use client";

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
  return (
    <header className="w-full shadow-sm">
      {/* Top white strip with logo */}
      <div className="bg-white flex items-center justify-center py-2">
        <Link href="/">
          <Image
            src="/dargaroad/dargaroad-logo.jpg" // <-- update to your logo path
            alt="Vels Vidyashram"
            width={160}
            height={44}
            className=""
            priority
          />
        </Link>
      </div>

      {/* Purple nav bar */}
      <nav className="bg-[#2B158F] text-white text-md font-primary font-primary-regular">
        <ul className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`relative group py-2`}
            >
              {/* main link */}
              <Link
                href={item.href}
                className="inline-flex items-center px-3 py-2 hover:text-[#F9B233]"
              >
                {item.label}
              </Link>

              {/* orange underline for hover/active effect */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-[#F9B233] transition-transform duration-200 group-hover:scale-x-100" />

              {/* dropdown */}
              {item.submenu && (
                <div className="invisible absolute left-0 top-full z-40 mt-0 w-48 translate-y-1 rounded-none bg-white text-md font-secondary font-secondary-medium text-[#222] opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
      </nav>
    </header>
  );
}
