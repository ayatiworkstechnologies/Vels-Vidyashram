"use client";

import React, { useState } from 'react';
import { BookOpen, Quote, Mail, Phone, CheckCircle2, Award, ShieldCheck, Zap } from 'lucide-react';

export default function VSkillFinalRedesign() {
  const [activeTab, setActiveTab] = useState('courses');

  const syllabusObjectives = [
    "A research-based PD, on the Kolb’s experiential learning theory, forms the core principle of the certificate",
    "Observe and understand the principles of teaching – learning",
    "Apply the new learning to the existing knowledge and adapt better practice",
    "Reflect and analyse their own instructional practices based on the new learning",
    "Translate new knowledge into plans and actions for instructional changes",
    "Continue to refine the instructional practice",
    "Work and learn collaboratively"
  ];

  return (
    <div className="bg-white min-h-screen font-primary text-slate-900 selection:bg-indigo-100">
      
      {/* --- SECTION 1: EXACT CONTENT EXTRACTED --- */}
      <header className="max-w-6xl mx-auto px-6 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-indigo-950 tracking-tighter mb-2">VSKILL</h1>
          <div className="flex justify-center gap-1.5 text-indigo-900 text-lg">
            <span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Exact Paragraph 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg leading-relaxed text-slate-700">
                <span className="font-bold text-indigo-900">V Skill Centre for Professional Development</span> has 15-year-old history in developing competent and qualified educators to run a Centre for Professional Development for Teachers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This venture was formed by a team of experienced, qualified and knowledgeable professionals and backed up by a board of R & D members of Vels Group of Institutions.
              </p>
            </div>
           
          </div>

          {/* Exact Paragraph 3 & 4 */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <p className="text-slate-600 leading-relaxed mb-6">
              The <span className="font-bold italic text-indigo-900 text-lg">V SKILL</span> spells <span className="font-bold italic text-indigo-900 text-lg">QUALITY</span>. It is highly regarded for its contribution in the academic field, especially in Chennai city. The PCE offered by V SKILL will not only be a pioneering effort for qualifying the teachers, but it facilitates all other institutions to depute their best teachers to get trained here. This course comes out with a Certification which may well be recognised by the institutions of repute throughout the Nation. The teachers at some point of time in their academic career would have to complete such a course for their career Progression.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium border-l-4 border-[#232A95] pl-6">
              This Professional Development effort, very <span className="font-bold">uniquely attempted</span> by the <span className="font-bold">V Skill – Centre for Professional Development</span> is a path breaking venture welcomed by Educators and Academicians alike including Vels Group of Institutions. This hands-on and in-house course will help Skill Development at any stage for the teachers with experience and is developed in accordance with emphasis placed on Continuous Professional Development for teachers under NEP 2020.
            </p>
          </div>

          {/* Exact Paragraph 5 */}
          <div className="relative overflow-hidden bg-indigo-900 text-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-200">
            <div className="relative z-10">
              <p className="leading-relaxed mb-4 text-indigo-100">
                The ever-changing syllabi and its contours need continuous upgradation. The materials and course content designed by experienced senior hands in this field is sure to help fulfil the objectives for which the course is being launched. The infra structure, gadgets and all material support is liberally flowing from the philanthropic minded Management of the VELS.
              </p>
              <h3 className="text-2xl font-bold tracking-wide text-white">
                The uptake of competencies, skill upgradation and development of teaching prowess would definitely result in a <span className="text-secondary">“LEARNERS DELIGHT”</span> environment.
              </h3>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>
        </div>
      </header>

      {/* --- SECTION 2: TABS (SAME LOGIC, UNIQUE DESIGN) --- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* Glassmorphism Tab Bar */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'courses' 
                ? 'bg-white text-indigo-900 shadow-lg scale-105' 
                : 'text-slate-500 hover:text-[#232A95]'
              }`}
            >
              <BookOpen size={20} /> Courses Offered
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center gap-3 px-10 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'testimonials' 
                ? 'bg-white text-indigo-900 shadow-lg scale-105' 
                : 'text-slate-500 hover:text-[#232A95]'
              }`}
            >
              <Quote size={20} /> Testimonials VSkill
            </button>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="min-h-[500px]">
          {activeTab === 'courses' ? (
            <div className="grid lg:grid-cols-12 gap-8 items-stretch animate-in fade-in zoom-in-95 duration-700">
  
  {/* Left Column: Core Principle Focal Point (4/12 columns) */}
  <div className="lg:col-span-5 flex flex-col">
    <div className="relative h-full bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-[3rem] p-10 overflow-hidden group shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full -ml-24 -mb-24 blur-3xl" />

      <div className="relative z-10 flex flex-col ">
        <div className="">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={14} className="text-amber-400" /> Syllabus Aims & Objectives
          </div>
          <h3 className="text-4xl font-bold text-white leading-tight mb-6">
            Click Here to View
          </h3>
         
        </div>

        <div className="mt-2">
          <button className="w-full py-4 bg-white text-indigo-900 rounded-2xl font-black hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-indigo-950/50">
             VSkill Brochure 
            <CheckCircle2 size={20} className="group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column: Objectives Grid (7/12 columns) */}
  <div className="lg:col-span-7 flex flex-col justify-center">
    <div className="grid gap-3">
      {syllabusObjectives.map((text, i) => (
        <div 
          key={i} 
          className="group flex items-center gap-6 p-1 pr-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#232A95] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
        >
          {/* Circular Number Badge */}
          <div className="h-14 w-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#232A95] transition-colors duration-300">
            <span className="text-indigo-950 font-black text-lg group-hover:text-white transition-colors">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          
          <p className="text-slate-700 font-bold leading-snug group-hover:text-indigo-950 transition-colors">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>

</div>
          ) : (
           <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700 max-w-full mx-auto">
  
  {/* Top Section: Natural Size Image Container */}
  <div className="relative group inline-block">
    <div className="bg-white p-3 rounded-[1rem] border border-slate-200 shadow-2xl transition-all duration-500 hover:shadow-indigo-100/50 overflow-hidden">
      <div className="relative rounded-[2.2rem] overflow-hidden">
        <img 
          src="/thalambur/testimonial-vskil.jpg" 
          alt="Testimonial Feedback" 
          className="w-auto h-auto max-w-full block transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Bottom Section: Width-Aligned Compact Contact Bar */}
  <div className="w-full max-w-4xl bg-indigo-950 rounded-[2.5rem] p-5 md:p-6 shadow-xl relative overflow-hidden border border-white/5">
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4">
      
      {/* Label with Modern Typography */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-secondary text-[10px] uppercase tracking-[0.4em] font-black mb-1.5">
          Get in Touch
        </h4>
        <p className="text-white font-bold text-xl tracking-tight">
          Connect with VSkill
        </p>
      </div>

      {/* Action Buttons with Glassmorphism */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Email Pill */}
        <a 
          href="mailto:vskill@velsuniv.ac.in" 
          className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#232A95] hover:border-[#232A95] transition-all duration-300 group"
        >
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#232A95] transition-colors">
            <Mail size={20} className="text-white group-hover:text-[#232A95]" />
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">
            vskill@velsuniv.ac.in
          </span>
        </a>

        {/* Phone Pill */}
        <a 
          href="tel:9500057620" 
          className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#232A95] hover:border-[#232A95] transition-all duration-300 group"
        >
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#232A95] transition-colors">
            <Phone size={20} className="text-white group-hover:text-[#232A95]" />
          </div>
          <span className="text-white font-black text-lg tracking-tighter">
            95000 57620
          </span>
        </a>
      </div>
    </div>

    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
  </div>
</div>
          )}
        </div>
      </section>
    </div>
  );
}