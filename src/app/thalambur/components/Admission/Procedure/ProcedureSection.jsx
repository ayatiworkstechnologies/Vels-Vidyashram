"use client";

import React from 'react';
import { color, motion } from 'framer-motion';
import { 
  FileDown, 
  UserCheck, 
  FileStack, 
  Wallet, 
  Phone, 
  Mail, 
  ChevronRight,
  Info 
} from 'lucide-react';

const AdmissionRedesign = () => {
 const ageCriteria = [
    { level: "Play Group", age: "2 to 3 years" },
    { level: "Pre-KG", age: "3 to 4 years" },
    { level: "LKG", age: "4 to 5 years" },
    { level: "UKG", age: "5 to 6 years" },
    { level: "Grade 1", age: "6+ years" },
  ];

  const documents = [
    "One Certified copy of school reports of the previous year (wherever applicable) for record purpose only.",
    "One certified copy of a child's Birth Certificate.",
    "Two Passport Size Photographs (Student).",
    "Aadhar Card copy of the Student.",
    "Address Proof copy (EB Bill, Rental Agreement, Phone Bill, Gas Bill, Aadhar etc.)"
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-8 font-sans antialiased text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Header & Introductory Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-primary text-primary tracking-tight mb-4">
            Admission Procedure
          </h1>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <Info className="text-primary shrink-0 mt-1" size={24} />
            <p className="text-slate-600 leading-relaxed font-secondary">
              We offer equal opportunities to all students. Admission is granted subject to the availability of seats. 
              <span className="block mt-2 font-semibold text-slate-800 font-secondary">
                Age criteria: As on 1st April of the year in which the admission is sought.
              </span>
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* 2. Age Criteria Grid */}
            <section>
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
                <UserCheck className="text-primary font-primary" /> Grade Wise Age Criteria
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ageCriteria.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "white", textColor : "#fff"
                     }}
                    className="p-4 rounded-2xl bg-slate-50 border border-primary   transition-colors"
                  >
                    <p className="text-[10px] uppercase font-bold text-secondary font-secondary mb-1 ">{item.level}</p>
                    <p className="text-sm font-bold text-slate-700">{item.age}</p>
                  </motion.div>
                ))}

                <div className="bg-slate-100 p-5 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-bold text-secondary font-secondary uppercase">Grade 2 & Above</p>
                    <p className="text-xs font-medium text-slate-500">Based on previous class promotion</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Document Requirements */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-primary font-primary">
                <FileStack className="text-primary" /> Required Documentation
              </h3>
              <p className="text-sm text-slate-500 mb-6 italic font-secondary">
                Students coming on a transfer from another state, city or school, the School Leaving Certificate / Transfer certificate should be submitted to the Admission Office.
              </p>
              <ul className="space-y-4">
                {documents.map((doc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-primary transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>

          {/* 4. Action Sidebar */}
          <div className="space-y-6">
            
            {/* Download CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/thalambur/pdf/application-form.pdf"
              className="flex flex-col items-center justify-center p-8 bg-primary rounded-3xl text-white shadow-xl shadow-primary-200 text-center group transition-all"
            >
              <FileDown size={48} className="mb-4 group-hover:bounce transition-transform" />
              <span className="text-xl font-bold uppercase tracking-tight">Download Application</span>
              <p className="text-primary-100 text-xs mt-2 opacity-80 underline underline-offset-4 font-medium">
                Click to download PDF form
              </p>
            </motion.a>

            {/* Fee Card */}
            <div className="bg-secondary rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="text-primary" size={24} />
                <h4 className="font-bold text-white">Registration Fee</h4>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-white">INR 500</span>
                <span className="text-white text-xs uppercase font-bold tracking-tighter">Non-Refundable</span>
              </div>
              <p className="text-xs text-white font-secondary leading-relaxed">
                To be paid in cash along with the hard copy of the filled application at the school office.
              </p>
            </div>

            {/* Acceptance & Contact */}
            <div className="bg-white font-secondary border border-slate-200 rounded-3xl p-6 space-y-6 shadow-sm">
              <div className="pb-4 border-b border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Formal Acceptance</p>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  Acceptance will be posted within 7 working days of submission.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-slate-400">Support & Clarifications</p>
                <div className="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors cursor-pointer">
                  <Phone size={18} />
                  <span className="text-sm font-bold">98844 84490 / 74016 57975</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors cursor-pointer">
                  <Mail size={18} />
                  <span className="text-sm font-bold">admissions@velsvidyashram.ac.in</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRedesign;