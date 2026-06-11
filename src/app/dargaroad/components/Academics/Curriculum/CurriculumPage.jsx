"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACADEMIC_LEVELS = [
  {
    id: "pre-kg",
    title: "KG – Kinder Kids Kaleidoscope",
    description:
      "Our Kindergarten curriculum focuses on joyful learning through activity-based methods that nurture curiosity, creativity, and confidence in young learners.",
    highlights: [
      {
        label: "Rhymes & Stories",
        text: "Enhances vocabulary, listening comprehension and encourages imagination and participation.",
      },
      {
        label: "Literacy Skills",
        text: "Promotes thinking skills, vocabulary building, reading and writing readiness.",
      },
      {
        label: "Environmental Skills",
        text: "Develops awareness about surroundings and relationship with nature.",
      },
    ],
  },
  {
    id: "xseed-structure",
    title: "GRADE I to V – XSEED METHODOLOGY",
    description:
      "XSEED is an academic solution designed to raise learning levels and build confidence in children through a 5-Step Experiential Learning Method. Concepts are taught through hands-on activities, questioning, application and feedback.",
    structureType: "xseed",
    structure: [
      {
        programme: "Junior Programme",
        grades: "Grade I & II",
        streams: "English, Maths",
      },
      {
        programme: "Middle Programme",
        grades: "Grade III – V",
        streams: "English, Maths, Science, Social Science",
      },
    ],
    notes: [
      "Grade I to III: Second Language – Tamil or Hindi",
      "Grade IV & V: Second Language – Tamil or Hindi or Sanskrit",
      "Grade I to V: Third Language – Basic Tamil for Non Tamil Students and Basic Hindi for Tamil Students",
    ],
  },
  {
    id: "ncert-vi-x",
    title: "GRADE VI to X – NCERT SYLLABUS",
    structureType: "ncert",
    structure: [
      {
        sno: 1,
        grade: "VI - VIII",
        mainSubjects:
          "English, II lang, Maths, Science, Social Studies, III lang",
        additionalSubjects: "Information Technology, Robotics",
      },
      {
        sno: 2,
        grade: "IX & X",
        mainSubjects:
          "English, II lang, Maths, Science, Social Studies, III lang",
        additionalSubjects: "Artificial Intelligence",
      },
    ],
    notes: [
      "Second Language: Options: Hindi / Tamil / Sanskrit",
      "Third Language: Hindi for Second Language Tamil Students",
      "Third Language: Tamil for Second Language Non Tamil (Hindi/Sanskrit) Students",
    ],
  },
  {
    id: "higher-secondary",
    title: "GRADE XI & XII – NCERT SYLLABUS",
    groups: [
      {
        sno: 1,
        group: "First Group",
        subjects:
          "English Core (Compulsory), Mathematics, Physics, Chemistry, Biology",
      },
      {
        sno: 2,
        group: "Second Group",
        subjects:
          "English Core (Compulsory), Mathematics, Physics, Chemistry, Informatics Practices",
      },
      {
        sno: 3,
        group: "Third Group",
        subjects:
          "English Core (Compulsory), Business Studies, Accountancy, Economics, Mathematics",
      },
      {
        sno: 4,
        group: "Fourth Group",
        subjects:
          "English Core (Compulsory), Business Studies, Accountancy, Economics, Informatics Practices",
      },
      {
        sno: 5,
        group: "Fifth Group",
        subjects:
          "English Core (Compulsory), Psychology, Sociology, History, Political Science, Informatics Practices, Business Studies, Economics (Any Four)",
      },
      {
        sno: 6,
        group: "Sixth Group",
        subjects:
          "English Core (Compulsory), Physics, Chemistry, Biology, Informatics Practices",
      },
    ],
    note:
      "Physical Education is a compulsory additional subject for all the above groups.",
  },
  {
    id: "vels-plus",
    title: "GRADE VI to XI – VELS PLUS",
    description:
      "VELS PLUS is an integrated coaching programme aligned with the NCERT syllabus for classes VI to XI. The programme combines regular academics with focused coaching, expert faculty support, and structured assessments to build a strong foundation for academic excellence.",
    highlights: [
      { label: "Pan India Assessments" },
      { label: "A/C Classrooms" },
      { label: "Minimum Class Strength" },
      { label: "Trained Subject Experts" },
      { label: "Study Material & Worksheets" },
      { label: "Digital Classrooms" },
      { label: "Intensive Olympiad Coaching" },
      { label: "Exclusive Lab Facility" },
    ],
  },
];

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState(ACADEMIC_LEVELS[0]);
  const contentTopRef = useRef(null);

  useEffect(() => {
    if (contentTopRef.current) {
      contentTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeTab.id]);

  return (
    <div className="bg-[#fafafa] min-h-screen py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1c1533] mb-6">
            Curriculum
          </h1>
          <p className="text-gray-600 text-lg">
            Academic structure and subject offerings
          </p>
        </header>

        <div ref={contentTopRef} />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <aside className="w-full lg:w-[320px] lg:sticky lg:top-24">
            <nav className="flex flex-col space-y-1">
              {ACADEMIC_LEVELS.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setActiveTab(level)}
                  className="group relative py-6 px-4 text-left"
                >
                  {activeTab.id === level.id && (
                    <motion.div
                      layoutId="activeSideBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"
                    />
                  )}

                  <div
                    className={`absolute inset-0 ${
                      activeTab.id === level.id
                        ? "bg-white shadow-sm"
                        : "group-hover:bg-gray-100/50"
                    }`}
                  />

                  <span
                    className={`relative z-10 text-sm font-bold uppercase tracking-wider ${
                      activeTab.id === level.id
                        ? "text-[#1c1533]"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {level.title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12"
              >
                {activeTab.id !== "higher-secondary" && (
                  <h2 className="text-orange-500 font-bold text-sm uppercase mb-6 tracking-widest">
                    {activeTab.title}
                  </h2>
                )}

                {activeTab.description && (
                  <p className="text-gray-600 leading-relaxed mb-10">
                    {activeTab.description}
                  </p>
                )}

                {activeTab.highlights && (
                  <div className="grid md:grid-cols-2 gap-5 mb-10">
                    {activeTab.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                      >
                        
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {item.label}
                          </h4>
                          {item.text && (
                            <p className="text-gray-500 text-sm mt-1">
                              {item.text}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab.structure && (
                  <div className="mt-8">
                    <h3 className="text-center text-xl font-bold mb-6 uppercase">
                      {activeTab.structureType === "ncert"
                        ? "Subjects Offered"
                        : "Structure of XSEED Methodology"}
                    </h3>

                    <div className="overflow-x-auto">
                      {activeTab.structureType === "ncert" ? (
                        <table className="w-full min-w-[720px] border border-gray-500 text-left text-gray-900">
                          <thead>
                            <tr>
                              <th className="p-3 border border-gray-500 font-bold w-20">
                                s.no
                              </th>
                              <th className="p-3 border border-gray-500 font-bold w-36">
                                Grade
                              </th>
                              <th className="p-3 border border-gray-500 font-bold">
                                Main Subjects Offered
                              </th>
                              <th className="p-3 border border-gray-500 font-bold">
                                Additional Subjects Offered
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {activeTab.structure.map((row) => (
                              <tr key={row.sno}>
                                <td className="p-3 border border-gray-500 align-top font-bold">
                                  {row.sno}
                                </td>
                                <td className="p-3 border border-gray-500 align-top font-bold">
                                  {row.grade}
                                </td>
                                <td className="p-3 border border-gray-500 align-top font-bold leading-relaxed">
                                  {row.mainSubjects}
                                </td>
                                <td className="p-3 border border-gray-500 align-top font-bold leading-relaxed">
                                  {row.additionalSubjects}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <table className="w-full min-w-[640px] border border-gray-300 text-left">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-4 border border-gray-300">
                                Programme
                              </th>
                              <th className="p-4 border border-gray-300">
                                Grades
                              </th>
                              <th className="p-4 border border-gray-300">
                                Knowledge Streams
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {activeTab.structure.map((row, i) => (
                              <tr key={i}>
                                <td className="p-4 border border-gray-300">
                                  {row.programme}
                                </td>
                                <td className="p-4 border border-gray-300">
                                  {row.grades}
                                </td>
                                <td className="p-4 border border-gray-300">
                                  {row.streams}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>

                    {activeTab.notes && activeTab.structureType === "ncert" && (
                      <div className="mt-8 space-y-4 text-gray-800">
                        <p className="font-bold">
                          Second Language :
                          <span className="ml-2 font-semibold">
                            Options : Hindi / Tamil / Sanskrit
                          </span>
                        </p>

                        <div>
                          <p className="font-bold mb-2">Third Language :</p>
                          <p className="ml-6">
                            ➤ Hindi for Second Language Tamil Students
                          </p>
                          <p className="ml-6">
                            ➤ Tamil for Second Language Non Tamil
                            (Hindi/Sanskrit) Students
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab.notes && activeTab.structureType === "xseed" && (
                      <div className="mt-6 space-y-2 text-gray-600">
                        {activeTab.notes.map((note, i) => (
                          <p key={i}>{note}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab.groups && (
                  <div className="mt-8">
                    <h3 className="text-center text-xl font-bold mb-6 uppercase">
                       Groups Offered
                      <span className="block text-sm text-gray-500 mt-2">
                        (For Class XI & XII)
                      </span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[720px] border border-gray-300">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-4 border w-20">S.NO</th>
                            <th className="p-4 border w-48">Group</th>
                            <th className="p-4 border">Subjects</th>
                          </tr>
                        </thead>

                        <tbody>
                          {activeTab.groups.map((row) => (
                            <tr key={row.sno}>
                              <td className="p-4 border">{row.sno}</td>
                              <td className="p-4 border font-medium">
                                {row.group}
                              </td>
                              <td className="p-4 border">{row.subjects}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="mt-6 text-gray-600 font-medium">
                      <span className="font-bold">Note :</span>{" "}
                      {activeTab.note}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}