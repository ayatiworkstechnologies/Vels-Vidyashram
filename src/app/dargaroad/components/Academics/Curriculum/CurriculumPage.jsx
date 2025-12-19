"use client";

import React, { useState, useRef } from "react";

export default function ExtractDesign() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 220; // card width + gap
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const TITLES = [
    "KG Curriculum – <br/> Kinder Kids <br/>kaleidoscope",
    "Grade I to V – <br/> XSEED <br/> Methodology",
    "STRUCTURE OF <br/> XSEED <br/> METHODOLOGY",
    "GROUPS OFFERED",
  ];

  const SECTIONS = [
    {
      title: "KG Curriculum – Kinder Kids kaleidoscope",
      subtitle: "Rhymes and Stories",
      bullets: [
        "Enhances vocabulary, improves listening comprehension and social conversations",
        "Encourages imagination and participation",
      ],
      extraTitle: "Literacy Skills",
      extraBullets: [
        "To promote thinking skills, asking questions and seeking answers, finding information and forming opinions",
        "Builds vocabulary and reading and writing skills",
      ],
      img: "/dargaroad/curriculum.jpg",
    },
    {
      title: "Grade I to V – XSEED Methodology",
      paragraph:
        "XSEED is an academic solution designed to raise the level of learning in classrooms and build confidence in children.",
      img: "/dargaroad/curriculum.jpg",
    },
  ];

  const STRUCTURE_ROWS = [
    { programme: "Junior Programme", group: "Grade I & II", subjects: "English, Maths" },
    {
      programme: "Middle Programme",
      group: "Grade III – V",
      subjects: "English, Maths, Science, Social Science",
      highlighted: true,
    },
    { programme: "Grade I to III:", group: "Second Language – Tamil or Hindi", subjects: "" },
    { programme: "Grade IV & V:", group: "Second Language – Tamil or Hindi or Sanskrit", subjects: "" },
  ];

  const GROUPS = [
    {
      sno: "01",
      group: "First Group",
      subjects: "English Core, Mathematics, Physics, Chemistry, Biology",
    },
    {
      sno: "02",
      group: "Second Group",
      subjects:
        "English Core, Mathematics, Physics, Chemistry, Informatics Practices",
      highlighted: true,
    },
    {
      sno: "03",
      group: "Third Group",
      subjects:
        "English Core, Business Studies, Accountancy, Economics, Mathematics",
    },
  ];

  return (
    <>
      {/* ================= TABS ================= */}
      <div className="bg-white px-4 py-6">
        <div className="relative max-w-6xl mx-auto">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center"
          >
            ›
          </button>

          {/* SCROLLABLE TABS */}
          <div
            ref={scrollRef}
            className="
              bg-[#F9F9F9]
              flex gap-4
              overflow-x-auto
              md:flex-wrap md:justify-center
              py-6 px-10
              rounded-sm
              scrollbar-hide
              scroll-smooth
            "
          >
            {TITLES.map((title, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    min-w-[200px] w-[200px] h-[120px]
                    md:w-[240px] md:h-[140px]
                    shadow-md
                    flex flex-col items-center justify-center
                    transition-all
                    ${isActive ? "bg-primary text-white" : "bg-white text-black"}
                  `}
                >
                  <p
                    className="text-center font-primary font-primary-bold text-sm md:text-md px-4 leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div className="mt-3 h-[1px] w-16 md:w-20 bg-orange-500 rounded-full" />
                </button>
              );
            })}
          </div>
        </div>

       
      </div>

      {/* ================= CONTENT ================= */}
      <section className="py-12 px-4 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {(activeIndex === 0 || activeIndex === 1) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {activeIndex === 0 ? (
                <>
                  <img
                    src={SECTIONS[0].img}
                    alt=""
                    className="w-full h-[420px] object-cover rounded-md shadow-md"
                  />

                  <div>
                    <h2 className="text-3xl font-primary font-primary-bold">
                      {SECTIONS[0].title}
                    </h2>
                    <div className="w-20 h-[2px] bg-secondary my-4" />

                    <h3 className="mb-3">{SECTIONS[0].subtitle}</h3>

                    <ul className="list-disc pl-5 text-sm space-y-2">
                      {SECTIONS[0].bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    <h3 className="mt-6 mb-3">{SECTIONS[0].extraTitle}</h3>

                    <ul className="list-disc pl-5 text-sm space-y-2">
                      {SECTIONS[0].extraBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-3xl font-primary font-primary-bold">
                      {SECTIONS[1].title}
                    </h2>
                    <div className="w-20 h-[2px] bg-secondary my-4" />
                    <p className="text-sm leading-relaxed">
                      {SECTIONS[1].paragraph}
                    </p>
                  </div>

                  <img
                    src={SECTIONS[1].img}
                    alt=""
                    className="w-full h-[420px] object-cover rounded-md shadow-md"
                  />
                </>
              )}
            </div>
          )}

          {activeIndex === 2 && (
            <table className="w-full mt-8 border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3">Programme</th>
                  <th className="px-4 py-3">Group</th>
                  <th className="px-4 py-3">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {STRUCTURE_ROWS.map((r, i) => (
                  <tr
                    key={i}
                    className={r.highlighted ? "bg-secondary text-white" : ""}
                  >
                    <td className="px-4 py-3">{r.programme}</td>
                    <td className="px-4 py-3">{r.group}</td>
                    <td className="px-4 py-3">{r.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeIndex === 3 && (
            <table className="w-full mt-8 border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3">S.No</th>
                  <th className="px-4 py-3">Group</th>
                  <th className="px-4 py-3">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((g, i) => (
                  <tr
                    key={i}
                    className={g.highlighted ? "bg-orange-500 text-white" : ""}
                  >
                    <td className="px-4 py-3">{g.sno}</td>
                    <td className="px-4 py-3">{g.group}</td>
                    <td className="px-4 py-3">{g.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
}
