"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Laptop, Users, Trophy, Target } from 'lucide-react';

const tabs = [
  { id: 'scheme', label: 'Scheme of Studies', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'method', label: 'Teaching Methodology', icon: <Laptop className="w-5 h-5" /> },
  { id: 'teachers', label: 'Our Teachers', icon: <Users className="w-5 h-5" /> },
  { id: 'sports', label: 'Sports & Games', icon: <Trophy className="w-5 h-5" /> },
];

const SchemeStudies = () => {
  const [activeTab, setActiveTab] = useState('scheme');

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      {/* Tab Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-200"
      >
        <div className="
          flex 
          gap-2 
          overflow-x-auto 
          scrollbar-hide 
          snap-x 
          snap-mandatory
          md:overflow-visible 
          md:flex-wrap 
          md:justify-center
        ">

          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap font-primary snap-center flex-shrink-0 ${
                activeTab === tab.id ? 'text-secondary' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <motion.div
                animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                {tab.icon}
              </motion.div>
              <span className="font-semibold">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Content Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'scheme' && <SchemeContent />}
            {activeTab === 'method' && <MethodologyContent />}
            {activeTab === 'teachers' && <TeachersContent />}
            {activeTab === 'sports' && <SportsContent />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

/* Content Components */

const SchemeContent = () => (
  <div className="space-y-8">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <Card 
        title="Pre-Primary" 
        subtitle="Nursery, LKG, UKG" 
        items={["Honing fine motor skills & gross motor skills", "Enhancing eye hand coordination", "Introduction to basic English language structure", "Acquiring social skills", "Primary basic arithmetic & environment science"]} 
        delay={0}
      />
      <Card 
        title="Primary" 
        subtitle="Classes 1 to 5" 
        items={["English, Second language (Tamil/Hindi), Third language, Maths, Science, SST, Computer Science"]} 
        delay={0.1}
      />
      <Card 
        title="Middle" 
        subtitle="Classes 6 to 9" 
        items={["English, Second language (Tamil/Hindi), Third language, Maths, Science, SST, Computer Science"]} 
        delay={0.2}
      />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="mt-8 p-6 bg-primary text-white rounded-2xl"
    >
      <h3 className="text-xl font-bold mb-4 text-white font-primary">Class 11 Specializations</h3>
      <div className="grid sm:grid-cols-2 gap-4 text-sm opacity-90 font-secondary">
        {[
          { label: "Choice 1:", text: "English, Mathematics, Physics, Chemistry, Biology." },
          { label: "Choice 2:", text: "English, Mathematics, Physics, Chemistry, Information Practices." },
          { label: "Choice 3:", text: "English, Business Studies, Accountancy, Economics, Mathematics" },
          { label: "Choice 4:", text: "English, Business Studies , Accountancy, Economics, Information Practices." },
          { label: "Choice 5:", text: "English, History, Geography, Sociology, Economics, Psychology." },
        ].map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          >
            <strong>{item.label}</strong> {item.text}
          </motion.p>
        ))}
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-4 text-xs italic border-t border-white pt-4 font-secondary"
      >
        * Physical Education is a compulsory additional subject for all the above groups.
      </motion.p>
    </motion.div>
  </div>
);

const MethodologyContent = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl"
  >
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-slate-600 leading-relaxed text-lg mb-8 font-secondary"
    >
      The school offers proven and research based program of XSEED to make the child unafraid and to compete for the 21st century.
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-3xl font-bold text-slate-800 italic mb-6 font-primary"
    >
      What is XSEED?
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-slate-600 leading-relaxed text-lg mb-8 font-secondary"
    >
     XSEED is a proven and research based academic program for schools that builds thinking skills & problem solving confidence in children. <br/>
     XSEED children ask more questions, can write in their own words, like doing word problems in mathematics, can complete their homework on their own, are not afraid to speak-up in English, persist longer in solving problems, and score well on tests. <br/>
     Class VI to XI – The guidelines of national curriculum and framework and CBSE are followed through our innovative teaching methodologies without losing track of CCE pattern.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col md:flex-row justify-center mb-6 gap-4 md:gap-0"
    >
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src="/thalambur/xseed.jpg" 
        alt="XSEED Methodology Diagram" 
        className="w-full md:w-[300px] h-auto md:h-[108px] object-contain" 
      />
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src="/thalambur/xseed-steps.jpg" 
        alt="XSEED Methodology Diagram 2" 
        className="w-full md:w-[300px] h-auto md:h-[222px] md:ml-6 object-contain" 
      />
    </motion.div>
  </motion.div>
);

const TeachersContent = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-slate-800 italic font-primary mb-6"
    >
      What our teachers do?
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-4 font-secondary">
      {[
        "Carry out interactive teaching and learning.",
        "Excellent teaching practice makes students receptive enabling them to think for themselves, be creative and flexible in handling complexity and uncertainty.",
        "Highlight problem-solving ability, together with teamwork and communication.",
        "Make learning relevant and require students to handle complex things and apply their understanding to new contexts.",
        "Encourage self-study and the students take decisions on day-to-day matters. This instills research skills and self- discipline.",
        "Focus on honing students' reflective and analytical skills.",
        "Impart skills needed for working effectively in global environment using information from different sources around the world.",
        "Counsel parents not to pressurize their children for getting grades and to avoid stress for the children/wards and to promote mental ability.",
        "Make teaching learning enjoyable",
      ].map((text, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ x: 5, scale: 1.02 }}
          className="flex gap-3 items-start p-4 bg-white shadow-sm border border-slate-200 rounded-lg"
        >
          <div className="" />
          <p className="text-slate-700 font-medium font-secondary">{text}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SportsContent = () => {
  const sportsData = [
    { name: 'Football', image: '/thalambur/sports-1.jpg' },
    { name: 'Skating', image: '/thalambur/sports-2.jpg' },
    { name: 'Silambam', image: '/thalambur/sports-3.jpg' },
    { name: 'Chess', image: '/thalambur/sports-4.jpg' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sportsData.map((sport, index) => (
          <motion.div 
            key={sport.name} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={sport.image} 
              alt={sport.name} 
              className="h-[170px] w-full md:w-[250px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-bold text-lg font-secondary">{sport.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-secondary"
      >
        The school encourages students to participate in sports activities both in and outside the school. Inter school and inter house tournaments are held every year. <br/>
        The school also has a soccer team at different levels and gives importance to different sporting activities. As a part of the Student enrichment program, we have Skating, Silambam and Foot ball for students. <br/>
        School also encourages indoor games like Chess, Carom, table tennis etc. <br/>
        The school playground is no less important than school lessons. It is on the playground that we learn to face defeat. The school has a very big playground facilitating all the games. <br/>
        Annual Sports day is an essential part of school education.
      </motion.p>
    </motion.div>
  );
};

const Card = ({ title, subtitle, items, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow"
  >
    <motion.h3 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
      className="font-bold text-primary mb-4"
    >
      {title}
    </motion.h3>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
      className="text-sm text-secondary mb-4"
    >
      {subtitle}
    </motion.p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <motion.li 
          key={i} 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 + i * 0.08 }}
          whileHover={{ x: 5 }}
          className="text-sm text-slate-600 flex items-center gap-2"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.4 + i * 0.08, type: "spring" }}
            className="w-1 h-1 bg-primary rounded-full" 
          />
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default SchemeStudies;