"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SCHOOL_DATA = {
  colleges: [
    {
      id: 1,
      title: "Vels University, Pallavaram, Chennai",
      image: "/our-group/vels.png",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title:
        "Mahavir Institute of Medical Sciences, Vikarabad, Hyderabad – Telangana",
      image: "/our-group/maha.png",
      href: "#",
    },
    {
      id: 3,
      title:
        "Meghna Institute of Dental Sciences - Mallaram, Nizamabad campus Telangana",
      image: "/our-group/megha.png",
      href: "http://www.meghnadentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 4,
      title:
        "Sri Venkateswara Dental College & Hospital,Thalambur, Chennai",
      image: "/our-group/sri.png",
      href: "https://www.svdentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 7,
      title: "VELS MEDICAL COLLEGE & HOSPITAL – PERIYAPALAYAM",
      image: "/our-group/vels-medical.png",
      href: "https://velsmedicalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 5,
      title:
        "Venkateswara Nursing College, Thalambur,Chennai Thalambur",
      image: "/our-group/venkat.png",
      href: "http://www.venkateswaranursing.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 6,
      title:
        "Shri ISARI Velan Mission Hospital, Thalambur, Chennai",
      image: "/our-group/velan.png",
      href: "https://www.velanhospital.com/",
      borderColor: "border-primary",
    },
    {
      id: 11,
      title:
        "VELS NURSING COLLEGE-PERIYAPALAYAMVELS MEDICAL COLLEGE & HOSPITAL – PERIYAPALAYAM",
      image: "/our-group/nursing.png",
      href: "https://velnursingcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 9,
      title: "VELS MARITIME STUDIES-THALAMBUR",
      image: "/our-group/maritime.png",
      href: "https://vistas.ac.in/school-of-maritime-studies/",
      borderColor: "border-primary",
    },
    {
      id: 12,
      title: "VELS SCHOOL OF AVIATION-PALLAVARAM",
      image: "/our-group/aviation.png",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 13,
      title: "CTC-LONDON",
      image: "/our-group/ctc.png",
      href: "https://ctc.ac.uk/",
      borderColor: "border-primary",
    },
    {
      id: 14,
      title: "VISTAS-PALLAVARAM",
      image: "/our-group/vistas.png",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
  ],

  schools: [
    {
      id: 1,
      title:
        "Vels Vidyashram (CBSE School), Darga Road Campus,Pallavaram, Chennai",
      image: "/our-group/dar.png",
      href: "https://velsvidyashram.ac.in/dargaroad/",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title:
        "Vels Vidyashram (CBSE School), Thalambur, Chennai",
      image: "/our-group/tha.png",
      href: "https://velsvidyashram.ac.in/thalambur",
      borderColor: "border-primary",
    },
    {
      id: 5,
      title:
        "Vels Vidyashram (CBSE School),Pallavaram, Chennai",
      image: "/our-group/pal.png",
      href: "https://velsvidyashram.ac.in/pallavaram",
      borderColor: "border-primary",
    },
    {
      id: 6,
      title:
        "Vels Vidyashram Kindergarten, Cantonment – Pallavaram, Chennai",
      image: "/our-group/can.png",
      href: "https://velsvidyashram.ac.in/cantonment",
      borderColor: "border-primary",
    },
    {
      id: 3,
      title:
        "Vaels International School, Injambakkam, Chennai",
      image: "/our-group/vaels.png",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 4,
      title:
        "Vels International Pre School – Kindle Kids, Neelankarai, Chennai",
      image: "/our-group/kindle.png",
      href: "http://www.velsinternationalpreschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 7,
      title: "Vels Kinder Kids, Mylapore, Chennai",
      image: "/our-group/kinder.png",
      href: "https://www.velskinderkids.com/index.asp",
      borderColor: "border-primary",
    },
    {
      id: 8,
      title: "BRIGHT LEARNERS DUBAI",
      image: "/our-group/bright.png",
      href: "https://www.brightlearners.ae/",
      borderColor: "border-primary",
    },
    {
      id: 9,
      title:
        "KINDLE KIDS INTERNATIONAL SCHOOL, HINDOO ROAD, SINGAPORE",
      image: "/our-group/kindle-singapore.png",
      href: "https://kindlekids.sg/",
      borderColor: "border-primary",
    },
    {
      id: 10,
      title:
        "KINDLE KIDS INTERNATIONAL SCHOOL, THOMSON ROAD, SINGAPORE",
      image: "/our-group/kindle-international.png",
      href: "https://kindlekids.sg/",
      borderColor: "border-primary",
    },
    {
      id: 11,
      title:
        "Vels International Residential Football School, Navalur, Thazhambur, Chennai",
      image: "/our-group/vels-fc.png",
      href: "https://velsfc.com/",
      borderColor: "border-primary",
    },
    {
      id: 12,
      title:
        "Vels INTERNATIONAL SCHOOL – INJAMBAKKAM & NEELANKARAI",
      image: "/our-group/vaels.jpg",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 17,
      title: "VELS GLOBAL SCHOOL",
      image: "/our-group/vels-global.png",
      href: "/dargaroad/vels-global-school",
      buttonText: "Visit Vels Global School",
      borderColor: "border-primary",
    },
  ],
};

function getCardContent(title) {
  const titleParts = title.split(",");

  return {
    name: titleParts[0]?.trim() || title,
    location: titleParts.slice(1).join(",").trim(),
  };
}

export default function OurGroupSection() {
  const [activeTab, setActiveTab] = useState("colleges");

  return (
    <section className="bg-[#f3f2ef] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 sm:mb-10">
          {["colleges", "schools"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-6 py-2 text-sm font-medium capitalize transition-all duration-300 sm:px-8 ${
                activeTab === tab
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SCHOOL_DATA[activeTab].map((item) => {
            const { name, location } = getCardContent(item.title);
            const isExternalLink = item.href.startsWith("http");

            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[10px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={item.href}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  aria-label={item.title}
                  className="flex h-full flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[1.72/1] w-full overflow-hidden bg-[#dcecff]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className=" transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex min-h-[150px] flex-1 flex-col px-4 pb-5 pt-3">
                    {/* Category Badge */}
                    <span className="mb-2 w-fit rounded-full border border-[#d7d7d7] bg-[#f5f5f5] px-2 py-[3px] text-[9px] font-medium leading-none text-[#555555]">
                      {activeTab === "colleges" ? "University" : "School"}
                    </span>

                    {/* Title */}
                    <h3 className="line-clamp-2 font-primary text-[14px] font-semibold leading-[1.4] text-[#161616] transition-colors duration-300 group-hover:text-primary">
                      {name}
                    </h3>

                    {/* Location */}
                    {location && (
                      <p className="mt-1 line-clamp-2 text-[10px] leading-[1.5] text-[#8a8a8a]">
                        {location}
                      </p>
                    )}

                    {/* Link Text */}
                    <span className="mt-auto w-fit border-b border-[#161616] pb-[2px] pt-4 font-secondary text-[10px] font-semibold uppercase leading-none text-[#161616] transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                      {item.buttonText || "Know More"}
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