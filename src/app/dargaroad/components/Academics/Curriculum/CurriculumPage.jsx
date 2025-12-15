"use client";

import React, { useState } from "react";

export default function ExtractDesign() {
  const [activeIndex, setActiveIndex] = useState(0);

  const TITLES = [
    "KG Curriculum – <br/> Kinder Kids <br/>kaleidoscope",
    "Grade I to V – <br/> XSEED     <br/> Methodology",
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
      img: "/dargaroad/curriculum.jpg", // replace with your path
      imgAlt: "School courtyard with trees and sunlight",
    },
    {
      title: "Grade I to V – XSEED Methodology",
      paragraph:
        "XSEED is an academic solution designed to raise the level of learning in classrooms and build confidence in children. XSEED follows the proven 5-Step Experiential Learning Method where concepts are taught through hands-on experimentation followed by questioning, application and feedback. This replaces the one-step 'telling' and memorization followed in many traditional classrooms. With XSEED, parents see that their children are confident and ready with the skills required for higher studies and career.",
      img: "/dargaroad/curriculum.jpg", // replace with your path
      imgAlt: "School courtyard - alternate image",
    },
  ];

  const STRUCTURE_ROWS = [
    {
      programme: "Junior Programme",
      group: "Grade I & II",
      subjects: "English, Maths",
    },
    {
      programme: "Middle Programme",
      group: "Grade III – V",
      subjects: "English, Maths, Science, Social Science",
      highlighted: true,
    },
    {
      programme: "Grade I to III:",
      group: "Second Language – Tamil or Hindi",
      subjects: "",
    },
    {
      programme: "Grade IV & V:",
      group: "Second Language – Tamil or Hindi or Sanskrit",
      subjects: "",
    },
    { programme: "FOR VI to XII :", group: "NCERT CURRICULUM", subjects: "" },
    {
      programme: "FOR I to VII:",
      group: "Compulsory Tamil for Non-Tamil students.",
      subjects: "",
    },
  ];

  const GROUPS = [
    {
      sno: "01",
      group: "First Group",
      subjects:
        "English Core (Compulsory) Mathematics, Physics, Chemistry, Biology",
    },
    {
      sno: "02",
      group: "Second Group",
      subjects:
        "English Core (Compulsory) Mathematics, Physics, Chemistry, Informatics Practices",
      highlighted: true,
    },
    {
      sno: "03",
      group: "Third Group",
      subjects:
        "English Core (Compulsory) Business Studies, Accountancy, Economics, Mathematics",
    },
    {
      sno: "04",
      group: "Fourth Group",
      subjects:
        "English Core (Compulsory) Business Studies, Accountancy, Economics, Informatics Practices",
      highlighted: true,
    },
    {
      sno: "05",
      group: "Fifth Group",
      subjects:
        "English Core (Compulsory) Psychology / Sociology / History / Political Science / Informatics Practices / Business Studies / Economics (Any Four)",
    },
    {
      sno: "06",
      group: "Sixth Group",
      subjects:
        "English Core (Compulsory) Physics / Chemistry / Biology / Informatics Practices",
      highlighted: true,
    },
  ];
  return (
    <>
      {/* Top extract / cards */}
      <div className="bg-white px-6 py-8">
        <div className="bg-[#F9F9F9] max-w-6xl mx-auto flex gap-6 flex-wrap justify-center py-8 rounded-sm">
          {TITLES.map((title, i) => {
            const isActive = i === activeIndex;

            return (
              <button
                key={i}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(i)}
                className={`
                  w-[240px] h-[140px]
                  shadow-md
                  flex flex-col items-center justify-center
                  transition-transform duration-200
                  focus:outline-none
                  ${
                    isActive ? "bg-primary text-white" : "bg-white text-black"
                  }
                `}
              >
                <p
                  className="text-center font-primary font-primary-bold text-md px-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: title }}
                />

                <div className="mt-3">
                  <div
                    className={`h-[1px] w-20 rounded-full ${
                      isActive ? "bg-orange-500" : "bg-orange-300"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections */}
     {/* TAB CONTENT */}
<section className="py-12 px-6 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* TAB 0 & 1 → IMAGE + TEXT SECTIONS */}
    {(activeIndex === 0 || activeIndex === 1) && (
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {activeIndex === 0 ? (
          <>
            {/* IMAGE */}
            <div className="w-full">
              <img
                src={SECTIONS[0].img}
                alt={SECTIONS[0].imgAlt}
                className="w-full h-[420px] object-cover rounded-md shadow-md"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-primary font-primary-bold">
                {SECTIONS[0].title}
              </h2>

              <div className="mt-4 mb-6 w-20 h-0.5 bg-secondary" />

              <h3 className="text-lg font-secondary mb-3">
                {SECTIONS[0].subtitle}
              </h3>

              <ul className="list-disc pl-5 text-sm space-y-2">
                {SECTIONS[0].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <h3 className="text-lg font-secondary mt-6 mb-3">
                {SECTIONS[0].extraTitle}
              </h3>

              <ul className="list-disc pl-5 text-sm space-y-2">
                {SECTIONS[0].extraBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-primary font-primary-bold">
                {SECTIONS[1].title}
              </h2>

              <div className="mt-4 mb-6 w-20 h-0.5 bg-secondary" />

              <p className="text-sm leading-relaxed">
                {SECTIONS[1].paragraph}
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full">
              <img
                src={SECTIONS[1].img}
                alt={SECTIONS[1].imgAlt}
                className="w-full h-[420px] object-cover rounded-md shadow-md"
              />
            </div>
          </>
        )}
      </article>
    )}

    {/* TAB 2 → STRUCTURE TABLE */}
    {activeIndex === 2 && (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-primary font-primary-bold">
          STRUCTURE OF XSEED METHODOLOGY
        </h2>

        <div className="flex justify-center mt-3">
          <div className="w-24 h-[1px] bg-secondary" />
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-primary text-white px-4 py-3">Programme</th>
                <th className="bg-primary text-white px-4 py-3">Group</th>
                <th className="bg-primary text-white px-4 py-3">Subjects</th>
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
        </div>
      </div>
    )}

    {/* TAB 3 → GROUPS OFFERED */}
    {activeIndex === 3 && (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-primary font-primary-bold">
          GROUPS OFFERED
        </h2>

        <div className="flex justify-center mt-3">
          <div className="w-24 h-[1px] bg-secondary" />
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-primary text-white px-4 py-3">S.NO</th>
                <th className="bg-primary text-white px-4 py-3">Group</th>
                <th className="bg-primary text-white px-4 py-3">Subjects</th>
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
        </div>
      </div>
    )}

  </div>
</section>


    
    </>
  );
}


function renderTitleWithBreak(title) {
  const split = title.split(" – ");
  if (split.length === 2) {
    return (
      <>
        <span>{split[0]} </span>
        <br />
        <span>{split[1]}</span>
      </>
    );
  }
  return <>{title}</>;
}
