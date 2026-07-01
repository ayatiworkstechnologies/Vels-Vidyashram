"use client";

import Image from "next/image";
import Link from "next/link";

const SCHOOLS = [
  {
    id: 1,
    title: "Vels Global School – ARAKERE",
    image: "/our-group/image-1.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 2,
    title: "Vels Global School – DELHI WORLD PUBLIC SCHOOL – PUNJAB",
    image: "/our-group/image-2.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 3,
    title: "Vels Global School – ARAKERE ",
    image: "/our-group/image-3.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 4,
    title: "Vels Global School – HORAMAVU",
    image: "/our-group/image-4.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 5,
    title: "Vels Global School – HOWRAH",
    image: "/our-group/image-5.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 6,
    title: "Vels Global School -HSR LAYOUT ",
    image: "/our-group/image-6.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 7,
    title: "Vels Global School – KEELKATTALAI",
    image: "/our-group/image-7.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 8,
    title: "Vels Global School – MARTHAHALLI",
    image: "/our-group/image-8.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 9,
    title: "Vels Global School -MEDAVAKKAM",
    image: "/our-group/image-9.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 10,
    title: "Vels Global School – MOGAPPAIR",
    image: "/our-group/image-10.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 11,
    title: "Vels Global School – NANDAMBAKKAM",
    image: "/our-group/image-11.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 12,
    title: "Vels Global School – NERKUNDRAM",
    image: "/our-group/image-12.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 13,
    title: "Vels Global School – NEW TOWN",
    image: "/our-group/image-13.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 14,
    title: "Vels Global School – TAMBARAM",
    image: "/our-group/image-14.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 15,
    title: "Vels Global School – PARIPOORNA PRAGNYA",
    image: "/our-group/image-15.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
];

export default function VelsGlobal() {
  return (
    <section className="bg-[#f3f2ef] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOLS.map((item) => {
            const isExternalLink = item.href.startsWith("http");

            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[12px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  href={item.href}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  aria-label={item.title}
                  className="flex h-full flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[1.72/1] w-full overflow-hidden bg-[#e8eef5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex min-h-[135px] flex-1 flex-col px-4 pb-5 pt-4 sm:px-5">
                    <h3 className="line-clamp-2 font-primary text-[15px] font-semibold leading-[1.45] text-[#171717] transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <span className="mt-auto w-fit border-b border-[#171717] pb-[2px] pt-5 font-secondary text-[10px] font-semibold uppercase leading-none text-[#171717] transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                      {item.buttonText || "Learn More"}
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}