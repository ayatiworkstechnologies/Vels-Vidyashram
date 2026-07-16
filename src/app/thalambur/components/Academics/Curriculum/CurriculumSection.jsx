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
      { label: "Teacher's resource", text: "An Indigenous teacher's resource that directs teachers towards the set objective along with suggested action plan and teaching aids." },
       { label: "Numerical Skills", text: "Numerical skills help students develop a strong understanding of numbers, patterns, measurements, and problem-solving strategies. Through hands-on activities and real-life applications, students build confidence in logical thinking and mathematical reasoning." }
    ],
    images: ["/thalambur/kg.png"] 
  },
{
  id: "primary",
  title: "Primary – Grade I to V",
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
      label: "Grades 3 to 8 – STEAM (Vels Innovation Lab)",
      text:
        "Science, Technology, Engineering, Art & Mathematics are introduced through the STEAM program at the Vels Innovation Lab."
    }
  ]
},

  {
    id: "middle",
    title: "Middle & Secondary Level - Grade VI to X",
    subtitle: "Foundation Course ( Grade VI to IX)",
    description: "FOUNDATION COURSE FROM 6 TO 9 – The Foundation course with extended teaching & additional text material focused in Math & Science prepares & takes the young learners to the core of the basic concepts first and then moves ahead with strengthening advanced concepts. The foundation course aims to strengthen the basics so that they could connect & apply them in the competitive examinations.",
    
    images: ["/thalambur/design.png"]
  },
  {
    id: "high",
    title: "High School – Grade XI to XII",
    subtitle: "XI & XII : Science, Commerce & Humanities Stream (SSCE)",
    description: "At Vels Vidyashram, Thalambur, our Senior Secondary programme(Grades XI & XII) follows the NCERT curriculum prescribed by the Central Board of Secondary Education (CBSE). We offer Science, Commerce, and Humanities streams that empower students to excel academically while preparing them for competitive examinations and higher education. Through experienced faculty, experiential learning, smart classrooms, career guidance, practical exposure, leadership opportunities, and continuous mentoring, we nurture confident, responsible, and future-ready individuals with strong values, critical thinking, creativity with problem-solving skills.",
    images: ["/thalambur/high.jpg"],
    
    
  },
  {
  id: "nios-x-xii",
  title: "NIOS X & XII",
  description:
    "Vels Vidyashram, Thalambur is an accredited study centre of the National Institute of Open Schooling (NIOS), offering Secondary (Class X) and Senior Secondary (Class XII) programmes. NIOS is a national board of education, equivalent to CBSE and CISCE, with a learner-centric approach that provides flexibility in learning, subject choice, and examinations.",

  images: [
    "/thalambur/NIOS_SUBJECTS_OFFERED.jpg",
    "/thalambur/NIOS_WEBSITE_FORMAT.jpg",
  ],

  highlights: [
    {
      label: "Nationally Recognized Board (Equivalent to CBSE & CISCE).",
    },
    {
      label: "Flexible Learning—Study at your own pace with multiple opportunities to appear for exams.",
    },
    {
      label: "Freedom to Choose—Select subjects based on your interests and career.",
    },
    {
      label: "Wide Recognition—Accepted by universities and institutions across India and abroad.",
    },
    {
      label: "Career & Exam Ready—Supports preparation for competitive exams like JEE, NEET, CUET, and more.",
    },
    {
      label: "Personalized Support—Guidance and support from our experienced faculty.",
    },
  ],
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
          <h1 className="text-4xl font-primary font-bold text-[#1c1533] mb-6 tracking-tight">Academic Structure</h1>
          <p className="text-lg font-secondary text-gray-600 leading-relaxed">
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
          className="group relative py-6 px-4 text-left font-primary transition-all duration-300"
        >
          {activeTab.id === level.id && (
            <motion.div
              layoutId="activeSideBar"
              className="absolute left-0 top-0 bottom-0 w-1 font-primary bg-orange-500 z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <div
            className={`absolute inset-0 transition-colors duration-200 ${
              activeTab.id === level.id
                ? "bg-white shadow-sm"
                : "group-hover:bg-gray-100/50"
            }`}
          />

          <span
            className={`relative z-20 text-md font-bold uppercase tracking-wider transition-colors duration-300 ${
              activeTab.id === level.id
                ? "text-[#1c1533]"
                : "text-gray-400 group-hover:text-gray-600 font-secondary"
            }`}
          >
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
          <h2 className="text-orange-500 font-bold font-primary text-sm uppercase mb-3 tracking-[0.2em]">
            {activeTab.title}
          </h2>

          {activeTab.id !== "high" && activeTab.subtitle && (
            <h3 className="text-3xl font-secondary font-bold text-[#1c1533] mb-6 leading-tight">
              {activeTab.subtitle}
            </h3>
          )}

          <p className="text-md font-secondary text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-6 mb-8">
            {activeTab.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activeTab.highlights?.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-bold font-primary text-[#1c1533] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                {item.label}
              </h4>

              <p className="text-gray-500 leading-relaxed font-secondary text-sm">
                {item.text}
              </p>
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
                <img
                  src={img}
                  alt="Academic activity"
                  className="w-full h-auto"
                />
              </motion.div>
            ))}

            {activeTab.id === "high" && activeTab.subtitle && (
              <h3 className="text-2xl md:text-xl font-secondary font-bold text-[#1c1533] mt-5 mb-5 leading-tight">
                {activeTab.subtitle}
              </h3>
            )}
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