"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACADEMIC_LEVELS = [
  {
    id: "pre-kg",
    title: "KG Curriculum – Kinder Kids kaleidoscope",
    subtitle: "KG Curriculum – Kinder Kids Kaleidoscope",
    description:
      "Enhances vocabulary, improves listening comprehension and social conversations. Encourages imagination and participation.",
    highlights: [
      {
        label: "Rhymes & Stories",
        text: "Enhances vocabulary, improves listening comprehension and social conversations. Encourages imagination and participation.",
      },
      {
        label: "Literacy Skills",
        text: "Promotes thinking skills, asking questions and seeking answers, finding information and forming opinions. Builds vocabulary, reading and writing skills.",
      },
      {
        label: "Environmental Skills",
        text: "Develops an understanding of the surroundings and the relationship between self, surroundings and nature.",
      },
      {
        label: "Phonics",
        text: "Develops phonetic awareness and helps children learn to read using sounds. It is a tool used to decode new words.",
      },
      {
        label: "Hindi & Tamil",
        text: "Develops basic speaking, reading and writing skills. Enhances vocabulary and social conversations.",
      },
      {
        label: "Art & Craft",
        text: "Improves motor skills, creativity and aesthetic sense. Helps children express emotions and feelings.",
      },
      {
        label: "Teacher's Resource",
        text: "An indigenous teacher's resource that directs teachers towards the set objective, along with a suggested action plan and teaching aids.",
      },
      {
        label: "Numerical Skills",
        text: "Numerical skills help students develop a strong understanding of numbers, patterns, measurements and problem-solving strategies. Through hands-on activities and real-life applications, students build confidence in logical thinking and mathematical reasoning.",
      },
    ],
    // images: ["/thalambur/kg.png"],
  },

  {
  id: "primary",
  title: "Grade I to V – XSEED Methodology",
  subtitle: "Grade I to Grade V",
  description:
    "As students move to the primary level from the pre-primary level, we introduce them to the core subjects English, Science, and Mathematics. A wide range of classroom activities is used to stimulate reading and writing in students.\n\nFrom Grade 1, we introduce the study of computers to our children as we all know that computer literacy is essential in today’s modern world to succeed. Students are also introduced to the Mathematics lab from grade 1, which helps them learn the concepts via doing. Physical training classes are also given to develop fitness and liveliness.",
  highlights: [
    {
      label: "X SEED Methodology (as per NCERT syllabus)",
      text:
        "X-SEED is a complete school solution focused on better teaching and improved learning performance. It aims at building clear concepts, improving the fluency in English and superior outcomes. X SEED brings best practices into every classroom so that, “All children Learn Better”."
    },
    {
      label: "Core Subjects",
      text:
        "English, Mathematics, Science, and Social Science are introduced as core subjects through activity-based and experiential learning approaches that strengthen reading, writing, analytical, and problem-solving skills while fostering curiosity and a deeper understanding of the world around them."
    },
    {
      label: "Computer Education",
      text:
        "Computer studies are introduced from Grade I to ensure computer literacy, which is essential in today’s modern world."
    },
    {
      label: "Mathematics Lab",
      text:
        "Introduced from Grade I, the Mathematics lab helps students learn concepts through hands-on activities and practical learning."
    },
    {
      label: "Physical Training",
      text:
        "Physical training classes are given to develop fitness and liveliness among students."
    },
    {
      label: "Grades I to V – Co-Curricular Subjects",
      text:
        "Physical Education, Yoga, Music, Value Education & Life Skills, Library, Computer Science, GK, Art & Craft."
    },
    {
      label: "Grades 3 to 8 – ROBOTIC LAB",
      text:
        "Robotics education has been an integral part of our school’s commitment to fostering innovation, creativity, and problem-solving skills among students."
    }
  ]
},

 {
    id: "middle",
    title: "GRADE VI to X – NCERT SYLLABUS",
    subtitle: "Foundation Course ( Grade VI to IX)",
    description: "FOUNDATION COURSE FROM 6 TO 9 – The Foundation course with extended teaching & additional text material focused in Math & Science prepares & takes the young learners to the core of the basic concepts first and then moves ahead with strengthening advanced concepts. The foundation course aims to strengthen the basics so that they could connect & apply them in the competitive examinations.",
    
    images: ["/work-1.png"]
  },

 {
    id: "high",
    title: "GRADE XI & XII -  NCERT SYLLABUS",
    subtitle: "XI & XII : Science, Commerce & Humanities Stream (SSCE)",
 
    images: ["/group.png"],
    
    
  },

  {
    id: "vels-plus",
    title: "GRADE VI to XI – VELS PLUS",
      images: ["/grade.png"],
  },

  {
    id: "nios-x-xii",
    title: "NIOS X & XII",
    description:
      "NIOS – Vels Vidyashram Dargaroad is accredited to NIOS – National Institute of Open Schooling that cater to the needs of a heterogeneous group of learners up to pre-degree level. It was started as a project with in-built flexibilities by the Central Board of Secondary Education (CBSE) in 1979. In 1986, the National Policy on Education suggested strengthening of Open School System for extending open learning facilities in a phased manner at secondary level all over the country as an independent system with its own curriculum and examination leading to certification. NIOS is a national board like CBSE and CISCE. It is an open-learning institution for school-level courses and functions as an examining and certifying authority. The NIOS curriculum is available for Classes X and XII.",
    highlights: [
      {
        label:
          "NIOS offers a competitive percentile system and supports students preparing for IIT-JEE.",
      },
      {
        label:
          "NIOS helps students prepare for other professional courses.",
      },
      {
        label:
          "Students can select subjects according to their preferences.",
      },
      {
        label:
          "NIOS conducts Class X and XII examinations twice a year, during April–May and September–October.",
      },
      {
        label:
          "On-demand examinations are held throughout the year for student convenience.",
      },
    ],
  },

  {
    id: "inclusive-programme",
    title: "INCLUSIVE PROGRAMME",
    description:
      "Our inclusive programme provides structured academic and learning support for children with diverse educational needs.",
    highlights: [
      {
        label: "KARE",
        text: "We embrace inclusive education by offering specialised support for children with diverse needs, ensuring every child learns and thrives through personalised adaptations in our teaching practices.",
      },
      {
        label: "Resource Room",
        text: "Our school has special educators trained by the Madras Dyslexia Association to support children with learning difficulties.",
      },
    ],
  },
];

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState(ACADEMIC_LEVELS[0]);

  const contentTopRef = useRef(null);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    contentTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeTab.id]);

  return (
    <section className="min-h-screen bg-[#fafafa] px-4 py-14 sm:px-6 md:py-20 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mb-10 max-w-3xl md:mb-16">
          <h1 className="mb-5 font-primary text-3xl font-bold tracking-tight text-[#1c1533] sm:text-4xl">
            Curriculum
          </h1>

          <p className="font-secondary text-base leading-relaxed text-gray-600 sm:text-lg">
            Academic structure and subject offerings
          </p>
        </header>

        <div ref={contentTopRef} className="scroll-mt-24" />

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:sticky lg:top-24 lg:w-[320px] lg:shrink-0">
            <nav className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:space-y-1 lg:overflow-visible lg:pb-0">
              {ACADEMIC_LEVELS.map((level) => {
                const isActive = activeTab.id === level.id;

                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setActiveTab(level)}
                    aria-pressed={isActive}
                    className="group relative min-w-[230px] overflow-hidden px-4 py-6 text-left font-primary transition-all duration-300 lg:min-w-0"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSideBar"
                        className="absolute inset-y-0 left-0 z-20 w-1 bg-orange-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`absolute inset-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-white shadow-sm"
                          : "group-hover:bg-gray-100/50"
                      }`}
                    />

                    <span
                      className={`relative z-10 block text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-[#1c1533]"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      {level.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main className="w-full min-w-0 flex-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="p-5 sm:p-8 md:p-12"
              >
                {/* Tab heading */}
                <div className="mb-10">
                  <h2 className="mb-3 font-primary text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                    {activeTab.title}
                  </h2>

                  {activeTab.subtitle && (
                    <h3 className="mb-6 font-secondary text-2xl font-bold leading-tight text-[#1c1533] md:text-3xl">
                      {activeTab.subtitle}
                    </h3>
                  )}

                  {activeTab.description && (
                    <p className="whitespace-pre-line border-l-4 border-gray-100 pl-6 font-secondary text-base italic leading-8 text-gray-600">
                      {activeTab.description}
                    </p>
                  )}
                </div>

                {/* Highlights */}
                {activeTab.highlights?.length > 0 && (
                  <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                    {activeTab.highlights.map((item, index) => (
                      <article
                        key={`${activeTab.id}-highlight-${index}`}
                        className="space-y-2"
                      >
                        <h4 className="flex items-start gap-3 font-primary font-bold leading-6 text-[#1c1533]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                          <span>{item.label}</span>
                        </h4>

                        {item.text && (
                          <p className="pl-[18px] font-secondary text-sm leading-7 text-gray-500">
                            {item.text}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                )}

                {/* Images */}
                {activeTab.images?.length > 0 && (
                  <div className="mb-12 grid grid-cols-1 gap-5">
                    {activeTab.images.map((image, index) => (
                      <motion.div
                        key={`${activeTab.id}-image-${index}`}
                        whileHover={{
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="w-full overflow-hidden rounded-xl bg-gray-100 shadow-md"
                      >
                        <Image
                          src={image}
                          alt={`${activeTab.title} academic activity`}
                          width={1200}
                          height={800}
                          priority={activeTab.id === "pre-kg" && index === 0}
                          sizes="(max-width: 1024px) 100vw, 760px"
                          className="h-auto w-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Structure tables */}
                {activeTab.structure?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-6 text-center font-primary text-lg font-bold uppercase text-[#1c1533] sm:text-xl">
                      {activeTab.structureType === "ncert"
                        ? "Subjects Offered"
                        : "Structure of XSEED Methodology"}
                    </h3>

                    <div className="overflow-x-auto">
                      {activeTab.structureType === "ncert" ? (
                        <table className="w-full min-w-[720px] border-collapse border border-gray-300 font-secondary text-gray-800">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="w-20 border border-gray-300 p-4 text-left font-primary">
                                S.No
                              </th>

                              <th className="w-36 border border-gray-300 p-4 text-left font-primary">
                                Grade
                              </th>

                              <th className="border border-gray-300 p-4 text-left font-primary">
                                Main Subjects Offered
                              </th>

                              <th className="border border-gray-300 p-4 text-left font-primary">
                                Additional Subjects Offered
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {activeTab.structure.map((row) => (
                              <tr key={row.sno}>
                                <td className="border border-gray-300 p-4 align-top font-semibold">
                                  {row.sno}
                                </td>

                                <td className="border border-gray-300 p-4 align-top font-semibold">
                                  {row.grade}
                                </td>

                                <td className="border border-gray-300 p-4 align-top leading-7">
                                  {row.mainSubjects}
                                </td>

                                <td className="border border-gray-300 p-4 align-top leading-7">
                                  {row.additionalSubjects}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <table className="w-full min-w-[640px] border-collapse border border-gray-300 font-secondary text-gray-800">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="border border-gray-300 p-4 text-left font-primary">
                                Programme
                              </th>

                              <th className="border border-gray-300 p-4 text-left font-primary">
                                Grades
                              </th>

                              <th className="border border-gray-300 p-4 text-left font-primary">
                                Knowledge Streams
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {activeTab.structure.map((row, index) => (
                              <tr
                                key={`${activeTab.id}-structure-${index}`}
                              >
                                <td className="border border-gray-300 p-4">
                                  {row.programme}
                                </td>

                                <td className="border border-gray-300 p-4">
                                  {row.grades}
                                </td>

                                <td className="border border-gray-300 p-4">
                                  {row.streams}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>

                    {/* Notes */}
                    {activeTab.notes?.length > 0 && (
                      <div className="mt-7 space-y-3 font-secondary text-gray-700">
                        {activeTab.notes.map((note, index) => (
                          <p
                            key={`${activeTab.id}-note-${index}`}
                            className="flex items-start gap-3 leading-7"
                          >
                            <span className="mt-1 font-bold text-orange-500">
                              ➤
                            </span>

                            <span>{note}</span>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Higher-secondary groups */}
                {activeTab.groups?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-6 text-center font-primary text-lg font-bold uppercase text-[#1c1533] sm:text-xl">
                      Groups Offered

                      <span className="mt-2 block font-secondary text-sm font-medium normal-case text-gray-500">
                        For Classes XI & XII
                      </span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[720px] border-collapse border border-gray-300 font-secondary text-gray-800">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="w-20 border border-gray-300 p-4 text-left font-primary">
                              S.No
                            </th>

                            <th className="w-48 border border-gray-300 p-4 text-left font-primary">
                              Group
                            </th>

                            <th className="border border-gray-300 p-4 text-left font-primary">
                              Subjects
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {activeTab.groups.map((row) => (
                            <tr key={row.sno}>
                              <td className="border border-gray-300 p-4 align-top">
                                {row.sno}
                              </td>

                              <td className="border border-gray-300 p-4 align-top font-semibold">
                                {row.group}
                              </td>

                              <td className="border border-gray-300 p-4 align-top leading-7">
                                {row.subjects}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {activeTab.note && (
                      <p className="mt-6 border-l-4 border-orange-500 bg-orange-50 px-5 py-4 font-secondary font-medium leading-7 text-gray-700">
                        <span className="font-primary font-bold text-[#1c1533]">
                          Note:
                        </span>{" "}
                        {activeTab.note}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}