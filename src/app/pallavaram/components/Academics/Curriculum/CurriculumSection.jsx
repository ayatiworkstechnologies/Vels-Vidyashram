"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACADEMIC_LEVELS = [
  {
    id: "pre-kg",
    title: "Pre-KG to UKG",
    subtitle: "KG Curriculum – Kinder Kids Kaleidoscope",
    description: [
      "An indigenous, thematic and well-structured high quality school readiness programme for experiential learning.",
      "A well planned and resourceful curriculum to improve the scholastic ability of children which emphasizes children’s learning interest and builds positive values and attitudes.",
      "It enhances self confidence, self-care abilities and gives children opportunity to explore and actively engage to get an enriching experience."
    ],
    highlights: [
      {
        label: "Rhymes & Stories",
        text: [
          "Enhances vocabulary, improves listening comprehension and social conversations.",
          "Encourages imagination and participation."
        ]
      },
      {
        label: "Literacy Skills",
        text: [
          "Promotes thinking skills, asking questions and seeking answers, finding information and forming opinions.",
          "Builds vocabulary and reading and writing skills."
        ]
      },
      {
        label: "Environmental Skills",
        text: [
          "Develops an understanding of the surroundings.",
          "Helps children understand the relationship between self, surroundings and nature."
        ]
      },
      {
        label: "Hindi",
        text: [
          "Develops basic learning, speaking, reading, and writing skills.",
          "Enhances vocabulary and social conversations."
        ]
      },
      {
        label: "Tamil",
        text: [
          "Develops basic learning, speaking, reading and writing skills.",
          "Enhances vocabulary and social conversations."
        ]
      },
      {
        label: "Art & Craft",
        text: [
          "Improves motor skills, creativity and aesthetic sense.",
          "Helps children express emotions and feelings."
        ]
      },
      {
        label: "Phonics",
        text: [
          "Develops phonetic awareness and helps children learn to read using sounds.",
          "Acts as a tool to decode new words."
        ]
      },
      {
        label: "Teachers Resource",
        text:
          "An indigenous teachers resource that directs teachers towards the set objective along with suggested action plan and teaching aids."
      }
    ]
  },

  {
    id: "primary",
    title: "Primary & Middle Grades I to VIII",
    subtitle: "Interdisciplinary Learning Through Themes",
    description: [
      "We bring to every classroom a process of teaching that encapsulates the good teaching practices to facilitate effective and measurable learning."
    ],
    sections: [
      {
        type: "image",
        src: "/pallavaram/themes.jpg",
        alt: "Interdisciplinary Learning Through Themes"
      },
      {
        type: "heading",
        text: "The Learning Processes"
      },
      {
        type: "image",
        src: "/pallavaram/learn-process-1.jpg",
        alt: "The Learning Processes"
      },
      {
        type: "heading",
        text: "Assessment guidelines"
      },
      {
        type: "text",
        text:
          "Assessment can be both pen and paper and activity based. Pen and paper questions may include MCQ’s, Fill in the blanks, Match the following and Long and Short answer type questions. All the questions are analysed on difficulty and cognitive levels. MCQ’s are specially used to provide detailed distractors and misconception analysis."
      },
      {
        type: "heading",
        text: "Home APP"
      },
      {
        type: "text",
        text:
          "The Home App helps extend learning beyond classrooms and involves parents in the learning process. Home App helps learner access in-class videos at home, and practice assessments assigned by the teacher based on concepts taught in class, thereby receiving immediate feedback on it."
      },
      {
        type: "heading",
        text: "Excellence Programme"
      },
      {
        type: "text",
        text:
          "Today’s learners are growing up in a world which is becoming increasingly complex. In fact, it is even difficult to predict the nature of challenges they will be facing twenty years now. Developing higher order cognitive skills that will enable them to deal with these challenges will be most critical. Given this context, the MyPedia programme is the need of the hour, where the parents can be assured of measurable improvement in thinking skills of the learner."
      },
      {
        type: "image",
        src: "/pallavaram/programme-1.jpg",
        alt: "Excellence Programme"
      }
    ]
  },

  {
    id: "middle",
    title: "XI-XII",
    subtitle: "Academic Groups & Subjects",
    table: {
      columns: ["S.NO", "GROUP", "SUBJECTS"],
      rows: [
        {
          sno: "1",
          group: "First Group",
          subjects:
            "English Core (Compulsory), Mathematics, Physics, Chemistry, Biology"
        },
        {
          sno: "2",
          group: "Second Group",
          subjects:
            "English Core (Compulsory), Mathematics, Physics, Chemistry, Informatics Practices"
        },
        {
          sno: "3",
          group: "Third Group",
          subjects:
            "English Core (Compulsory), Business Studies, Accountancy, Economics, Mathematics"
        },
        {
          sno: "4",
          group: "Fourth Group",
          subjects:
            "English Core (Compulsory), Business Studies, Accountancy, Economics, Informatics Practices"
        }
      ],
      note:
        "Note: Physical Education is a compulsory additional subject for all the above groups."
    }
  }
];

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState(ACADEMIC_LEVELS[0]);
  const contentTopRef = useRef(null);

  useEffect(() => {
    if (contentTopRef.current) {
      contentTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [activeTab.id]);

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-[#1c1533]">
            Curriculum
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Vels Vidyashram follows a structured curriculum aligned with NCERT,
            focusing on holistic and interdisciplinary learning.
          </p>
        </header>

        <div ref={contentTopRef} className="scroll-mt-24" />

        <div className="flex flex-col items-start gap-16 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:sticky lg:top-24 lg:w-[320px]">
            <nav className="flex flex-col space-y-1">
              {ACADEMIC_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveTab(level)}
                  className="group relative px-4 py-6 text-left transition-all duration-300"
                >
                  {activeTab.id === level.id && (
                    <motion.div
                      layoutId="activeSideBar"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-orange-500"
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
                    className={`relative text-md font-bold uppercase ${
                      activeTab.id === level.id
                        ? "text-[#1c1533]"
                        : "text-gray-400"
                    }`}
                  >
                    {level.title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 overflow-hidden rounded-2xl border bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12"
              >
                {/* Title */}
                <div className="mb-10">
                  <h2 className="mb-3 text-sm font-bold uppercase text-orange-500">
                    {activeTab.title}
                  </h2>

                  <h3 className="mb-6 text-3xl font-bold text-[#1c1533]">
                    {activeTab.subtitle}
                  </h3>

                  {activeTab.description && (
                    <div className="mb-8 space-y-4 border-l-4 border-gray-100 pl-6">
                      {Array.isArray(activeTab.description) ? (
                        activeTab.description.map((desc, i) => (
                          <p
                            key={i}
                            className="leading-relaxed text-gray-600 italic"
                          >
                            {desc}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600 italic">
                          {activeTab.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Primary tab content sections */}
                {activeTab.sections && (
                  <div className="space-y-10 md:space-y-12">
                    {activeTab.sections.map((section, i) => {
                      if (section.type === "heading") {
                        return (
                          <h4
                            key={i}
                            className="text-lg font-bold text-[#1c1533]"
                          >
                            {section.text}
                          </h4>
                        );
                      }

                      if (section.type === "text") {
                        return (
                          <p
                            key={i}
                            className="text-sm leading-relaxed text-gray-700 md:text-base"
                          >
                            {section.text}
                          </p>
                        );
                      }

                      if (section.type === "image") {
                        return (
                          <div
                            key={i}
                            className="overflow-hidden rounded-xl"
                          >
                            <img
                              src={section.src}
                              alt={section.alt || "Curriculum visual"}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                )}

                {/* KG Highlights */}
                {!activeTab.sections && !activeTab.table && activeTab.highlights && (
                  <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {activeTab.highlights.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="flex items-center gap-2 font-bold text-[#1c1533]">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                          {item.label}
                        </h4>

                        {Array.isArray(item.text) ? (
                          <div className="mt-2 space-y-2">
                            {item.text.map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className="text-sm leading-relaxed text-gray-500"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-1 text-sm text-gray-500">
                            {item.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* XI-XII Table */}
                {activeTab.table && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto rounded-xl border shadow-sm">
                      <table className="w-full border-collapse text-left">
                        <thead className="bg-gradient-to-r from-[#2f8db3] to-[#42b4da] text-white">
                          <tr>
                            {activeTab.table.columns.map((col, i) => (
                              <th
                                key={i}
                                className="px-6 py-4 text-sm font-semibold uppercase tracking-wide"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody className="bg-white">
                          {activeTab.table.rows.map((row, i) => (
                            <tr
                              key={i}
                              className="border-t transition hover:bg-gray-50"
                            >
                              <td className="px-6 py-5 text-base font-medium text-gray-700">
                                {row.sno}
                              </td>
                              <td className="px-6 py-5 text-base font-medium text-gray-800">
                                {row.group}
                              </td>
                              <td className="px-6 py-5 text-base leading-relaxed text-gray-700">
                                {row.subjects}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm italic text-gray-600">
                      {activeTab.table.note}
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