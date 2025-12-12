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
      <section className="py-12 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {SECTIONS.map((sec, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* IF ODD SECTION → TEXT LEFT, IMAGE RIGHT */}
                {isEven ? (
                  <>
                    {/* TEXT FIRST */}
                    <div className="w-full">
                      <h2 className="text-2xl md:text-3xl font-primary font-primary-bold leading-tight text-gray-900">
                        {(sec.title)}
                      </h2>

                      <div className="mt-3 mb-6">
                        <div className="w-20 h-0.5 bg-secondary" />
                      </div>

                      {sec.subtitle && (
                        <div className="mb-6">
                          <h3 className="text-lg font-secondary text-black mb-3">
                            {sec.subtitle}
                          </h3>
                          <ul className="list-disc pl-5 font-secondary text-sm text-black space-y-2">
                            {sec.bullets?.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.extraTitle && (
                        <div className="mb-6">
                          <h3 className="text-lg font-secondary text-black mb-3">
                            {sec.extraTitle}
                          </h3>
                          <ul className="list-disc pl-5 font-secondary text-sm text-black space-y-2">
                            {sec.extraBullets?.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.paragraph && (
                        <p className="text-sm font-secondary text-black leading-relaxed">
                          {sec.paragraph}
                        </p>
                      )}
                    </div>

                    {/* IMAGE SECOND */}
                    <div className="w-full">
                      <div className="overflow-hidden rounded-md shadow-md">
                        <img
                          src={sec.img}
                          alt={sec.imgAlt}
                          className="w-full h-[420px] object-cover md:h-[480px] lg:h-[520px]"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* DEFAULT: IMAGE LEFT */}
                    <div className="w-full">
                      <div className="overflow-hidden rounded-md shadow-md">
                        <img
                          src={sec.img}
                          alt={sec.imgAlt}
                          className="w-full h-[420px] object-cover md:h-[480px] lg:h-[520px]"
                        />
                      </div>
                    </div>

                    {/* TEXT RIGHT */}
                    <div className="w-full">
                      <h2 className="text-2xl md:text-3xl font-primary font-primary-bold leading-tight text-gray-900">
                        {renderTitleWithBreak(sec.title)}
                      </h2>

                      <div className="mt-3 mb-6">
                        <div className="w-20 h-0.5 bg-orange-500 rounded" />
                      </div>

                      {sec.subtitle && (
                        <div className="mb-6">
                          <h3 className="text-2xl  font-primary font-primary-semibold text-black mb-5">
                            {sec.subtitle}
                          </h3>
                          <ul className="list-disc pl-5 font-secondary text-sm text-black space-y-2">
                            {sec.bullets?.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.extraTitle && (
                        <div className="mb-8">
                          <h3 className="text-2xl  font-primary font-primary-semibold text-gray-800 mb-5">
                            {sec.extraTitle}
                          </h3>
                          <ul className="list-disc pl-5 font-secondary text-sm text-black space-y-2">
                            {sec.extraBullets?.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.paragraph && (
                        <p className="text-sm font-secondary text-black leading-relaxed">
                          {sec.paragraph}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-12 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* STRUCTURE OF XSEED METHODLOGY */}
          <div>
            <h2 className="text-center text-2xl lg:text-3xl font-primary font-primary-bold tracking-tight">
              STRUCTURE OF{" "}
              <span className="text-black">XSEED METHODOLOGY</span>
            </h2>

            <div className="flex justify-center mt-3">
              <div className="w-24 h-[1px] bg-secondary " />
            </div>

            {/* Table container */}
            <div className="mt-8">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3">
                        Programme
                      </th>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3">
                        GROUP
                      </th>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3">
                        SUBJECTS
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {STRUCTURE_ROWS.map((r, idx) => (
                      <tr
                        key={idx}
                        className={
                          r.highlighted
                            ? "bg-secondary text-white"
                            : idx % 2 === 1
                            ? "bg-white"
                            : "bg-white"
                        }
                      >
                        <td
                          className={`px-4 py-3 align-top font-secondary text-sm ${
                            r.highlighted ? "font-semibold" : ""
                          }`}
                        >
                          {r.programme}
                        </td>
                        <td className="px-4 py-3 align-top font-secondary text-sm">
                          {r.group}
                        </td>
                        <td className="px-4 py-3 align-top font-secondary text-sm">
                          {r.subjects}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* GROUPS OFFERED */}
          <div className="pt-8">
            <h3 className="text-center text-3xl font-bold">
              GROUPS OFFERED
            </h3>

             <div className="flex justify-center mt-3">
              <div className="w-24 h-[1px] bg-secondary " />
            </div>
            <p className="text-center font-secondary  text-md text-black mt-2">
              Where strong values meet future-ready learning.
            </p>


            <div className="mt-8">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3 w-16">
                        S.NO
                      </th>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3 w-40">
                        GROUP
                      </th>
                      <th className="bg-primary text-white text-left text-sm font-primary font-primary-bold px-4 py-3">
                        SUBJECTS
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {GROUPS.map((g, i) => (
                      <tr
                        key={i}
                        className={
                          g.highlighted
                            ? "bg-orange-500 text-white"
                            : "bg-white"
                        }
                      >
                        <td className="px-4 py-3 align-top font-secondary text-sm font-medium">
                          {g.sno}
                        </td>
                        <td className="px-4 py-3 align-top font-secondary text-sm font-medium">
                          {g.group}
                        </td>
                        <td className="px-4 py-3 align-top font-secondary text-sm">
                          {g.subjects}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm font-secondary text-black">
                • Note: Physical Education is a compulsory additional subject
                for all the above groups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Helper: insert a line break after the ' – ' dash so titles match your design.
 * If no dash present, returns the whole title as one node.
 */
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
