"use client";

import Link from "next/link";

export default function SpellBee() {
  return (
    <section className="bg-[#f7f5f2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#e6dfd7] bg-white shadow-[0_10px_40px_rgba(27,31,35,0.06)]">
          <div className="px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-[18px] border border-[#ece6de] bg-[#fffdf9] px-4 py-3 shadow-sm">
                <img
                  src="/cantonment/spell-bee.png"
                  alt="SpellBee"
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
                SpellBee
              </h1>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-[#d6b37a]" />
            </div>

            {/* Content */}
            <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center text-[15px] leading-8 text-[#667085] sm:text-[17px]">
              <p>
                The objective of the competition is to enhance the spelling and
                literary skills of children by encouraging them to explore the
                English language, expand their vocabulary and improve their
                communication and comprehension skills.
              </p>

              <p>
                Students learn the word forms, correct pronunciation, meanings,
                other related forms (inflections and derivations), word
                combinations (collocations), synonyms, antonyms and word usage
                in sentences ensuring the holistic understanding and application
                of the words learned.
              </p>

              <p>
                An expansive vocabulary in English guarantees a superior
                understanding of other subjects too and creates access to ALL
                the world&apos;s knowledge, helping the students ace exams like
                IELTS, TOEFL, UPSC, GRE, GMAT, CAT, etc., and even inspire them
                to author books and scholarly articles.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 border-t border-[#e5ddd3] pt-6">
          <Link
            href="/cantonment/science-olympiad-foundation-sof"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5b3b8c] transition hover:text-[#3f2663]"
          >
            <span>←</span>
            <span>Science Olympiad Foundation (SOF)</span>
          </Link>
        </div>

        {/* Related Courses */}
        <div className="mt-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#2b2f42] sm:text-3xl">
              Related Courses
            </h2>
            <p className="mt-2 text-sm text-[#8a8f98] sm:text-base">
              Explore more programs related to academic excellence
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/cantonment/science-olympiad-foundation-sof"
              className="group overflow-hidden rounded-[24px] border border-[#e7e0d8] bg-white shadow-[0_10px_30px_rgba(20,20,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,20,20,0.10)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/sof.jpg"
                  alt="Science Olympiad Foundation"
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug text-[#111827]">
                  Science Olympiad Foundation
                </h3>
                <p className="mt-2 text-sm font-medium text-[#6b7280]">
                  SOF
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