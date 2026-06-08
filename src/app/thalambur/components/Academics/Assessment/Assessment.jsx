"use client";
import { motion } from 'framer-motion';

export default function AssessmentStructure() {
  return (
    <>
      {/* Class VI to VIII */}
     <section className="py-8 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl font-semibold text-slate-800 mb-6 font-primary">
      Assessment Structure for Class VI to VIII
    </h2>

    <div className="overflow-x-auto">
      <div className="min-w-[1150px] border border-slate-300 rounded-2xl overflow-hidden shadow-xl bg-white font-secondary text-slate-700">
        {/* Top Header */}
        <div className="grid grid-cols-[1.1fr_1.45fr_1.7fr_1.75fr_2.1fr] border-b border-slate-300 bg-primary text-white">
          <div className="p-4 border-r border-slate-600 flex items-center justify-center font-semibold font-primary">
            Subjects
          </div>

          <div className="col-span-2 p-4 border-r border-slate-600 text-center font-semibold font-primary leading-tight">
            I TERM (100 MARKS)
            <br />
            <span className="font-normal text-xs opacity-90 font-secondary">
              (First half of the Session)
            </span>
          </div>

          <div className="col-span-2 p-4 text-center font-semibold font-primary leading-tight">
            II TERM (100 MARKS)
            <br />
            <span className="font-normal text-xs opacity-90 font-secondary">
              (Second half of the Session)
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-[1.1fr_1.45fr_1.7fr_1.75fr_2.1fr] min-h-[470px] divide-x divide-slate-300">
          {/* Subjects */}
          <div className="p-4 bg-slate-50 flex items-center">
            <div className="space-y-5 font-medium text-slate-700">
              <p>Language - R 1</p>
              <p>Language - R 2</p>
              <p>Language - R 3</p>
              <p>Mathematics</p>
              <p>Science</p>
              <p>Social Science</p>
            </div>
          </div>

          {/* I Term PA */}
          <div>
            <div className="p-4 border-b border-slate-300 bg-slate-50 font-semibold text-primary font-primary leading-tight">
              Periodic Assessment
              <br />
              20 Marks
            </div>

            <div className="p-4 space-y-5 text-sm leading-relaxed">
              <p>
                Periodic Test 5 marks with syllabus covered till announcement of
                test dates by school
              </p>
              <p>Note Book Submission 5 marks at term-end</p>
              <p>Multiple assessment - 5 marks at term end</p>
              <p>Subject Enrichment Activity 5 marks at term-end</p>
            </div>
          </div>

          {/* I Term Half Yearly */}
          <div>
            <div className="p-4 border-b border-slate-300 bg-slate-50 font-semibold text-primary font-primary leading-tight">
              Half Yearly Exam
              <br />
              80 Marks
            </div>

            <div className="p-4 text-sm leading-relaxed">
              Written exam for 80 marks with syllabus covered till announcement
              of Half Yearly exam dates by school
            </div>
          </div>

          {/* II Term PA */}
          <div>
            <div className="p-4 border-b border-slate-300 bg-slate-50 font-semibold text-primary font-primary leading-tight">
              Periodic Assessment
              <br />
              20 Marks
            </div>

            <div className="p-4 space-y-5 text-sm leading-relaxed">
              <p>
                Periodic Test 5 marks with syllabus covered till announcement of
                test dates by school
              </p>
              <p>Note Book Submission 5 marks at term-end</p>
              <p>Multiple assessment - 5 marks at term end</p>
              <p>Subject Enrichment Activity 5 marks at term-end</p>
            </div>
          </div>

          {/* II Term Yearly */}
          <div>
            <div className="p-4 border-b border-slate-300 bg-slate-50 font-semibold text-primary font-primary leading-tight">
              Yearly Exam
              <br />
              80 Marks
            </div>

            <div className="p-4 text-sm leading-relaxed">
              <p className="mb-5">
                Written exam for 80 marks with syllabus coverage as below:
              </p>

              <p className="font-semibold text-primary font-primary">
                Class VI:
              </p>
              <p className="mb-5">
                10% of 1st term covering significant topics + entire syllabus of
                2<sup>nd</sup> term
              </p>

              <p className="font-semibold text-primary font-primary">
                Class VII:
              </p>
              <p className="mb-5">
                20% of 1st term covering significant topics + entire syllabus of
                2<sup>nd</sup> term
              </p>

              <p className="font-semibold text-primary font-primary">
                Class VIII:
              </p>
              <p>
                30% of 1st term covering significant topics + entire syllabus of
                2<sup>nd</sup> term
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section>

      {/* Class IX & X */}
      <section className="py-8 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-3xl font-bold text-slate-800 font-primary">
        Assessment Structure for Class IX & X
      </h2>
      <p className="text-sm text-slate-600 mt-2 font-secondary">
        Total 100 Marks (Assessment will be based on whole year syllabus)
      </p>
    </motion.div>

    <div className="overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="min-w-[1200px] rounded-xl border border-slate-200 shadow-2xl bg-white overflow-hidden"
      >
        {/* Total Header */}
        <div className="bg-primary text-white text-center p-3 font-bold font-primary text-lg">
          Total 100 Marks (Assessment will be based on whole year Syllabus)
        </div>

        {/* Body Row */}
        <div className="grid grid-cols-[1.4fr_2.1fr_1.15fr_1.3fr_1.6fr_1.9fr] border-t border-slate-200 text-slate-700 font-secondary min-h-[360px]">
          <div className="border-r border-slate-200 p-4 flex items-center">
            <div className="space-y-5 font-bold font-primary text-slate-800">
              <p>Language - R1</p>
              <p>Language - R2</p>
              <p>Language - R3</p>
              <p>Mathematics</p>
              <p>Science</p>
              <p>Social Science</p>
            </div>
          </div>

          <div className="border-r border-slate-200 p-4 text-sm leading-relaxed flex items-center">
            <div className="space-y-10">
              <p>
                The Board will conduct Class - X Examination for 80 marks in each
                subject covering 100% syllabus of the subject of class - X only.
              </p>
              <p>
                Marks and Grades both will be awarded for individual subjects.
              </p>
            </div>
          </div>

          <div className="border-r border-slate-200 p-4 text-sm leading-relaxed">
            <p>
              Periodic written Test, restricted to three in each subject in an
              Academic Year.
            </p>
            <p className="mt-8">
              Average of the best two tests has to be taken for final marks
              submission.
            </p>
          </div>

          <div className="border-r border-slate-200 p-4 text-sm leading-relaxed flex items-center">
            <div>
              <p>This will cover:</p>
              <p>• Regularity</p>
              <p>• Assignment Completion</p>
              <p>• Neatness & upkeep of notebook</p>
            </div>
          </div>

          <div className="border-r border-slate-200 p-4 text-sm leading-relaxed">
            <div className="space-y-6">
              <p>Oral presentations</p>
              <p>Group discussion</p>
              <p>Quiz / MCQ activity</p>
              <p>Concept map</p>
              <p>Role play</p>
              <p>Peer assessment</p>
              <p>Subject viva</p>
              <p>Observation-based activity</p>
            </div>
          </div>

          <div className="p-4 text-sm leading-relaxed flex items-center">
            <div className="space-y-6">
              <p>Speaking and listening skills</p>
              <p>Speaking and listening skills</p>
              <p>Practical Lab work</p>
              <p>Mathematics Lab Practical</p>
              <p>Map work and project work</p>
            </div>
          </div>
        </div>

        {/* Footer Row */}
        <div className="grid grid-cols-[1.4fr_8.05fr] border-t border-slate-200 text-slate-700 font-secondary">
          <div className="border-r border-slate-200 p-6 text-base font-semibold text-[#1f3b6d] leading-relaxed">
            6th Additional
            <br />
            Subject/
            <br />
            skill subject
          </div>

          <div className="p-6 text-base text-slate-700">
            Scheme of studies to be followed
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Class XI & XII */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-800 font-primary">Scheme of Studies & Assessment Structure</h2>
            <p className="text-sm text-slate-600 mt-1 font-secondary">Class XI & XII : CBSE Senior Secondary</p>
          </motion.div>

          {/* ================= Scheme of Studies ================= */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-slate-800 mb-4 font-primary"
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
                  className="grid grid-cols-6 bg-primary text-white text-sm rounded-t-xl"
                >
                  <div className="p-4 col-span-1 font-semibold font-primary">Group</div>
                  <div className="p-4 col-span-5 font-semibold font-secondary">Subjects</div>
                </motion.div>

                {/* Rows */}
                {[
                  {
                    group: 'I',
                    subjects: 'English (Compulsory), Mathematics, Physics, Chemistry, Biology, Physical Education',
                  },
                  {
                    group: 'II',
                    subjects:
                      'English (Compulsory),Psychology , Physics, Chemistry, Biology.Physical Education',
                  },
                  {
                    group: 'III',
                    subjects:
                      'English (Compulsory), Mathematics, Physics, Chemistry, Informatics Practices, Physical Education',
                  },
                  {
                    group: 'IV',
                    subjects:
                      'English (Compulsory), Business Studies, Accountancy, Economics, Mathematics. Physical Education',
                  },
                  {
                    group: 'V',
                    subjects: 'English (Compulsory), Business Studies , Accountancy, Economics, Informatics Practices, Physical Education',
                  },
                   {
                    group: 'VI',
                    subjects: 'English (Compulsory), History, Political Science, Economics, Sociology.',
                  },
                   {
                    group: 'VII',
                    subjects: 'English (Compulsory), Psychology, Political Science, Economics , Sociology.',
                  },

                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', x: 5 }}
                    className="grid grid-cols-6 border-t text-sm text-slate-700 divide-x font-secondary"
                  >
                    <div className="p-4 font-semibold bg-slate-50">
                      <motion.div
                        whileHover={{ scale: 1.2, color: 'white' }}
                        className="w-10 h-10 bg-primary  rounded-full flex items-center justify-center text-white font-bold font-primary"
                      >
                        {item.group}
                      </motion.div>
                    </div>
                    <div className="p-4 col-span-5 font-secondary">{item.subjects}</div>
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
              className="text-xl font-semibold text-slate-800 mb-4 font-primary"
            >
              Assessment for Class XI & XII
            </motion.h3>

            <div className="overflow-x-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="min-w-[900px] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden "
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-2 bg-primary text-white text-sm rounded-t-xl"
                >
                  <div className="p-4 font-semibold border-r border-slate-700 font-primary">Class XI</div>
                  <div className="p-4 font-semibold font-primary">Class XII</div>
                </motion.div>

                {/* Body */}
                <div className="grid grid-cols-2 text-sm text-slate-700 divide-x font-secondary">
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
                        whileHover={{ x: 5, color: 'black' }}
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
                    className="p-4 space-y-3 font-secondary"
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
                        whileHover={{ x: 5, color: 'black' }}
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
              className="text-sm text-white mt-6 bg-secondary p-4 rounded-lg border border-white font-secondary"
            >
              <strong>Note:</strong> Promotion to Class X & XII will be based on performance throughout the academic year.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}