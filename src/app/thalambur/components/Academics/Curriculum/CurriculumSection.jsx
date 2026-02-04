"use client";

import { useState , useRef , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACADEMIC_LEVELS = [
  {
    id: "pre-kg",
    title: "Pre-KG to UKG",
    subtitle: "KG Curriculum – Kinder Kids Kaleidoscope",
    description: "Enhances vocabulary, improves listening comprehension and social conversations. Encourage imagination and participation.",
    highlights: [
      { label: "Rhymes & Stories", text: "Enhances vocabulary, improves listening comprehension and social conversations. Encourage imagination and participation." },
      { label: "Literacy skills", text: "Promotes thinking skills, asking questions and seeking answers, finding information and forming opinions. Builds vocabulary and reading and writing skills." },
      { label: "Environmental skills", text: "Develops an understanding of the surroundings. To understand the relationship between self, surroundings and nature." },
      { label: "Phonics", text: "Develops phonetic awareness and helps children learn to read using sounds. A tool to decode new works." },
      { label: "Hindi & Tamil", text: "Develops basic learning, speaking, reading and writing skills. Enhances vocabulary and social conversations." },
      { label: "Art & Craft", text: "Improve motor skills, creativity and aesthetic sense. Learns to express emotions and feelings." },
      { label: "Teacher's resource", text: "An Indigenous teacher's resource that directs teachers towards the set objective along with suggested action plan and teaching aids." }
    ],
    images: ["/thalambur/img-1.jpg"] 
  },
{
  id: "primary",
  title: "Primary – Grade I to V",
  subtitle: "Grade 1 to Grade 5",
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
        "English, Science, and Mathematics are introduced as core subjects with activity-based learning to stimulate reading and writing skills."
    },
    {
      label: "Computer Education",
      text:
        "Computer studies are introduced from Grade 1 to ensure computer literacy, which is essential in today’s modern world."
    },
    {
      label: "Mathematics Lab",
      text:
        "Introduced from Grade 1, the Mathematics lab helps students learn concepts through hands-on activities and practical learning."
    },
    {
      label: "Physical Training",
      text:
        "Physical training classes are given to develop fitness and liveliness among students."
    },
    {
      label: "Grades 1 to 5 – Co-Curricular Subjects",
      text:
        "Physical Education, Yoga, Music, Value Education & Life Skills, Library, Computer Science, GK, Art & Craft."
    },
    {
      label: "Grades 3 to 8 – STEAM (Vels Innovation Lab)",
      text:
        "Science, Technology, Engineering, Art & Mathematics are introduced through the STEAM program at the Vels Innovation Lab."
    }
  ]
},

  {
    id: "middle",
    title: "Middle level – Grade VI to X",
    subtitle: "Foundation Course (Grade 6 to 9)",
    description: "FOUNDATION COURSE FROM 6 TO 9 – The Foundation course with extended teaching & additional text material focused in Math & Science prepares & takes the young learners to the core of the basic concepts first and then moves ahead with strengthening advanced concepts. The foundation course aims to strengthen the basics so that they could connect & apply them in the competitive examinations.",
    
    images: ["/thalambur/middle.jpg"]
  },
  {
    id: "high",
    title: "High School – Grade XI to XII",
   
    description: "NIOS – Vels Vidyashram Thalambur is accredited to NIOS – National Institute of Open Schooling that cater to the needs of a heterogeneous group of learners up to pre-degree level. It was started as a project with in-built flexibilities by the Central Board of Secondary Education (CBSE) in 1979. In 1986, the National Policy on Education suggested strengthening of Open School System for extending open learning facilities in a phased manner at secondary level all over the country as an independent system with its own curriculum and examination leading to certification.",
   
    images: ["/thalambur/high.jpg"]
  }
];

export default function AcademicStructure() {
  const [activeTab, setActiveTab] = useState(ACADEMIC_LEVELS[0]);
  
  // This ref will target the top of the content area
  const contentTopRef = useRef(null);

  useEffect(() => {
    // Only scroll if we are on a smaller screen (mobile) 
    // or if the user has scrolled past the header
    if (contentTopRef.current) {
      contentTopRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  }, [activeTab.id]);

  return (
    <div className="bg-[#fafafa] min-h-screen py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1c1533] mb-6 tracking-tight">Academic Structure</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are the best CBSE school in Chennai, providing an excellent learning structure to prepare students for the future through a joyous, experience-led curriculum.
          </p>
        </header>

        {/* This anchor ensures the scroll lands exactly where the layout starts */}
        <div ref={contentTopRef} className="scroll-mt-24" />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <aside className="w-full lg:w-[320px] lg:sticky lg:top-24">
            <nav className="flex flex-col space-y-1">
              {ACADEMIC_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveTab(level)}
                  className="group relative py-6 px-4 text-left transition-all duration-300"
                >
                  {activeTab.id === level.id && (
                    <motion.div
                      layoutId="activeSideBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`absolute inset-0 transition-colors duration-200 ${activeTab.id === level.id ? 'bg-white shadow-sm' : 'group-hover:bg-gray-100/50'}`} />
                  <span className={`relative z-20 text-md font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab.id === level.id ? "text-[#1c1533]" : "text-gray-400 group-hover:text-gray-600"}`}>
                    {level.title}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-12"
              >
                <div className="mb-10">
                  <h2 className="text-orange-500 font-bold text-sm uppercase mb-3 tracking-[0.2em]">{activeTab.title}</h2>
                  <h3 className="text-3xl font-bold text-[#1c1533] mb-6 leading-tight">{activeTab.subtitle}</h3>
                  <p className="text-md text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-6 mb-8">
                    {activeTab.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {activeTab.highlights?.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-bold text-[#1c1533] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {item.label}
                      </h4>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                {activeTab.images && (
                  <div className="grid grid-cols-1 gap-4 mt-8">
                    {activeTab.images.map((img, i) => (
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        key={i} 
                        className="rounded-xl overflow-hidden shadow-md"
                      >
                        <img src={img} alt="Academic activity" className="w-full h-auto " />
                      </motion.div>
                    ))}
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