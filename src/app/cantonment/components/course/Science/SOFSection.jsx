"use client";

import Link from "next/link";

export default function SOFSection() {
  return (
    <section className="bg-[#f7f5f2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#e6dfd7] bg-white shadow-[0_10px_40px_rgba(27,31,35,0.06)]">
          <div className="px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-[18px] border border-[#ece6de] bg-[#fffdf9] px-4 py-3 shadow-sm">
                <img
                  src="/cantonment/sof.jpg"
                  alt="Science Olympiad Foundation"
                  className="h-[56px] w-auto object-contain sm:h-[68px]"
                />
              </div>
            </div>

            {/* Title */}
            <div className="mt-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8b6f47]">
                Course Overview
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl">
                Science Olympiad Foundation (SOF)
              </h1>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-[#d6b37a]" />
            </div>

            {/* Content */}
            <div className="mx-auto mt-10 max-w-5xl space-y-10 text-left">
              {/* Maths Olympiad */}
              <div className="rounded-[22px] border border-[#eee7de] bg-[#fcfbf8] p-5 sm:p-6">
                <h2 className="text-xl font-bold text-[#344054] sm:text-2xl">
                  Maths Olympiad
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-[#667085] sm:text-[17px]">
                  Mathematics is one of the scoring subjects that require students
                  to master concepts. One of the most essential elements of
                  mastering mathematics is thorough practice & International Maths
                  Olympiad (IMO) is one such platform where students are trained
                  to understand its basics. This exam has two levels. It is open
                  for students from class 1 to class 10. All questions asked in
                  these exams are multiple choice questions. The Olympiad exam
                  also forms a base for students to score well in their academics.
                  It gives students an edge over the others to solve tricky
                  questions.
                </p>
              </div>

              {/* Science Olympiad */}
              <div className="rounded-[22px] border border-[#eee7de] bg-[#fcfbf8] p-5 sm:p-6">
                <h2 className="text-xl font-bold text-[#344054] sm:text-2xl">
                  Science Olympiad
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-[#667085] sm:text-[17px]">
                  International Science Olympiad (ISO) exam is a global Olympiad
                  competition where students from different schools across
                  countries can take part. It gives budding talent a platform to
                  test their skill sets. Such exams make students ready for
                  national as well as international competitions. The test
                  questions are based on applied science. It uplifts existing
                  knowledge of students on different topics of physics, chemistry
                  and biology. This exam has two levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-end border-t border-[#e5ddd3] pt-6">
          <Link
            href="/cantonment/spell-bee"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5b3b8c] transition hover:text-[#3f2663]"
          >
            <span>Spell Bee</span>
            <span>→</span>
          </Link>
        </div>

        {/* Related Courses */}
        <div className="mt-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#2b2f42] sm:text-3xl">
              Related Courses
            </h2>
            <p className="mt-2 text-sm text-[#8a8f98] sm:text-base">
              Discover more programs designed to strengthen language and academic skills
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/cantonment/spell-bee"
              className="group overflow-hidden rounded-[24px] border border-[#e7e0d8] bg-white shadow-[0_10px_30px_rgba(20,20,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,20,20,0.10)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/spellbee-course.jpg"
                  alt="Spell Bee"
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug text-[#111827]">
                  Spell Bee
                </h3>
                <p className="mt-2 text-sm font-medium text-[#6b7280]">
                  Language Enrichment Program
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5b3b8c]">
                  <span>View Course</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}