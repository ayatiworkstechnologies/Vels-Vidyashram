"use client";
import { motion } from 'framer-motion';

export default function AssessmentStructure() {
  return (
    <>
      {/* Class VI to VIII */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-slate-800 mb-8"
          >
            Assessment Structure for Class VI to VIII
          </motion.h2>

          <div className="overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-[1100px] border border-slate-300 rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              {/* Header Row */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-4 bg-gradient-to-r from-slate-800 to-slate-700 font-semibold text-white text-sm"
              >
                <div className="p-4 border-r border-slate-600">Subjects</div>
                <div className="p-4 border-r border-slate-600">
                  TERM – I (100 MARKS)
                  <br />
                  <span className="font-normal text-xs opacity-90">
                    (First half of the academic session)
                    <br />
                    20 Marks – Periodic Assessment (PA)
                    <br />
                    80 Marks – Half Yearly Examination
                  </span>
                </div>
                <div className="p-4 border-r border-slate-600">
                  TERM – II (100 MARKS)
                  <br />
                  <span className="font-normal text-xs opacity-90">
                    (Second half of the academic session)
                    <br />
                    20 Marks – Periodic Assessment (PA)
                    <br />
                    80 Marks – Term End Examination
                  </span>
                </div>
                <div className="p-4">Yearly Examination</div>
              </motion.div>

              {/* Content Row */}
              <div className="grid grid-cols-4 text-sm text-slate-700">
                {/* Subjects */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-4 border-r space-y-2 font-medium bg-slate-50"
                >
                  {['Language – I', 'Language – II', 'Language – III', 'Mathematics', 'Science', 'Social Science'].map(
                    (subject, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ x: 5, color: '#3b82f6' }}
                      >
                        {subject}
                      </motion.p>
                    )
                  )}
                </motion.div>

                {/* Term I */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-4 border-r space-y-4"
                >
                  <div>
                    <p className="font-semibold mb-1 text-blue-700">PA – 20 Marks</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Periodic Test – 10 Marks (syllabus covered till announcement of test dates)</li>
                      <li>Notebook Submission – 5 Marks (term-end)</li>
                      <li>Subject Enrichment Activity – 5 Marks (term-end)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-1 text-blue-700">Half Yearly Examination – 80 Marks</p>
                    <p>
                      Written examination for 80 marks with syllabus covered till the announcement of Half Yearly
                      examination dates by the school.
                    </p>
                  </div>
                </motion.div>

                {/* Term II */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-4 border-r space-y-4"
                >
                  <div>
                    <p className="font-semibold mb-1 text-blue-700">PA – 20 Marks</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Periodic Test – 10 Marks (syllabus covered till announcement of test dates)</li>
                      <li>Notebook Submission – 5 Marks (term-end)</li>
                      <li>Subject Enrichment Activity – 5 Marks (term-end)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-1 text-blue-700">Term End Examination – 80 Marks</p>
                    <p>Written examination for 80 marks with syllabus prescribed for Term II.</p>
                  </div>
                </motion.div>

                {/* Yearly Exam */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-4 space-y-2"
                >
                  <p className="font-semibold text-blue-700">Written Examination – 80 Marks</p>
                  <p className="font-semibold mt-2">Syllabus Coverage:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>
                      <strong>Class VI:</strong> 10% of Term I (significant topics) + entire Term II syllabus
                    </li>
                    <li>
                      <strong>Class VII & VIII:</strong> 20% of Term I (significant topics) + entire Term II syllabus
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Class IX & X */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-800">Assessment Structure for Class IX & X</h2>
            <p className="text-sm text-slate-600 mt-2">Total 100 Marks (Assessment will be based on whole year syllabus)</p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-[1200px] rounded-xl border border-slate-200 shadow-2xl bg-white overflow-hidden"
            >
              {/* Main Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm rounded-t-xl"
              >
                <div className="p-4 border-r border-slate-700">Subjects</div>

                <div className="p-4 border-r border-slate-700">
                  <p className="font-semibold">80 Marks</p>
                  <p className="text-xs text-slate-300">
                    Board Examination
                    <br />
                    Minimum 33% in each subject
                  </p>
                </div>

                <div className="p-4 col-span-4">
                  <p className="font-semibold">20 Marks – Internal Assessment</p>
                  <p className="text-xs text-slate-300 mt-1">Minimum 33% out of overall 20 marks in each subject</p>
                </div>
              </motion.div>

              {/* Sub Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-6 bg-slate-100 text-sm font-medium text-slate-700"
              >
                <div className="p-4 border-r"></div>
                <div className="p-4 border-r"></div>
                <div className="p-4 border-r text-center">
                  Periodic Test
                  <br />
                  (10 Marks)
                </div>
                <div className="p-4 border-r text-center">
                  Notebook Submission
                  <br />
                  (5 Marks)
                </div>
                <div className="p-4 border-r text-center">
                  Subject Enrichment
                  <br />
                  (5 Marks)
                </div>
                <div className="p-4"></div>
              </motion.div>

              {/* Body */}
              <div className="grid grid-cols-6 text-sm text-slate-700 divide-x">
                {/* Subjects */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-5 space-y-2 font-semibold bg-slate-50"
                >
                  {['Language – I', 'Language – II', 'Science', 'Mathematics', 'Social Science'].map((subject, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      whileHover={{ x: 5, color: '#3b82f6' }}
                    >
                      {subject}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Board Exam */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-5 space-y-3"
                >
                  <p>Board will conduct Class X examination for 80 marks in each subject covering 100% syllabus of Class X only.</p>
                  <p>Marks and grades will be awarded for individual subjects.</p>
                  <p>9-point grading system will be same as followed by the Board for Class XII.</p>
                </motion.div>

                {/* Periodic Test */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-5 space-y-3"
                >
                  <p>Periodic written tests restricted to three per subject in an academic year.</p>
                  <p>Average of the best two tests will be considered for final marks submission.</p>
                </motion.div>

                {/* Notebook */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-5 space-y-2"
                >
                  <p className="font-medium">This will cover:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Regularity</li>
                    <li>Assignment completion</li>
                    <li>Neatness & upkeep of notebook</li>
                  </ul>
                </motion.div>

                {/* Subject Enrichment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="p-5 space-y-2"
                >
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Speaking and listening skills</li>
                    <li>Practical lab work</li>
                    <li>Mathematics lab practical</li>
                    <li>Map work and project work</li>
                  </ul>
                </motion.div>

                <div className="p-5"></div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="grid grid-cols-6 border-t bg-gradient-to-r from-blue-50 to-indigo-50 text-sm"
              >
                <div className="p-4 font-semibold border-r">6th Additional Subject</div>
                <div className="p-4 col-span-5">Scheme of studies to be followed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Class XI & XII */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-800">Scheme of Studies & Assessment Structure</h2>
            <p className="text-sm text-slate-600 mt-1">Class XI & XII : CBSE Senior Secondary</p>
          </motion.div>

          {/* ================= Scheme of Studies ================= */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-slate-800 mb-4"
            >
              Scheme of Studies
            </motion.h3>

            <div className="overflow-x-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="min-w-[900px] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm rounded-t-xl"
                >
                  <div className="p-4 col-span-1 font-semibold">Group</div>
                  <div className="p-4 col-span-5 font-semibold">Subjects</div>
                </motion.div>

                {/* Rows */}
                {[
                  {
                    group: 'I',
                    subjects: 'English Core (Compulsory), Mathematics, Physics, Chemistry, Biology, Physical Education',
                  },
                  {
                    group: 'II',
                    subjects:
                      'English Core (Compulsory), Mathematics, Physics, Chemistry, Informatics Practices, Physical Education',
                  },
                  {
                    group: 'III',
                    subjects:
                      'English Core (Compulsory), Mathematics, Business Studies, Accountancy, Economics, Physical Education',
                  },
                  {
                    group: 'IV',
                    subjects:
                      'English Core (Compulsory), Economics, Business Studies, Accountancy, Informatics Practices, Physical Education',
                  },
                  {
                    group: 'V',
                    subjects: 'English Core (Compulsory), Humanities, History, Geography, Sociology, Psychology',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', x: 5 }}
                    className="grid grid-cols-6 border-t text-sm text-slate-700"
                  >
                    <div className="p-4 font-semibold bg-slate-50">
                      <motion.div
                        whileHover={{ scale: 1.2, color: '#3b82f6' }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold"
                      >
                        {item.group}
                      </motion.div>
                    </div>
                    <div className="p-4 col-span-5">{item.subjects}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ================= Assessment Structure ================= */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-slate-800 mb-4"
            >
              Assessment for Class XI & XII
            </motion.h3>

            <div className="overflow-x-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="min-w-[900px] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm rounded-t-xl"
                >
                  <div className="p-4 font-semibold border-r border-slate-700">Class XI</div>
                  <div className="p-4 font-semibold">Class XII</div>
                </motion.div>

                {/* Body */}
                <div className="grid grid-cols-2 text-sm text-slate-700 divide-x">
                  {/* Class XI */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="p-4 space-y-3"
                  >
                    {[
                      'Mid Term – I',
                      'Quarterly Examination (includes Practical Examination)',
                      'Mid Term – II',
                      'Half Yearly Examination (includes Practical Examination)',
                      'Mid Term – III',
                      'Annual Examination (includes Practical Examination)',
                    ].map((item, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ x: 5, color: '#3b82f6' }}
                      >
                        {item}
                      </motion.p>
                    ))}
                  </motion.div>

                  {/* Class XII */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="p-4 space-y-3"
                  >
                    {[
                      'Mid Term – I',
                      'Mid Term – II',
                      'Quarterly Examination (includes Practical Examination)',
                      'Revision Examination – I',
                      'Half Yearly Examination (includes Practical Examination)',
                      'Revision Examination – II',
                      'CSSC / Pre-Board',
                      'Board Examination',
                    ].map((item, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                        whileHover={{ x: 5, color: '#3b82f6' }}
                      >
                        {item}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-slate-600 mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200"
            >
              <strong>Note:</strong> Promotion to Class X & XII will be based on performance throughout the academic year.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}