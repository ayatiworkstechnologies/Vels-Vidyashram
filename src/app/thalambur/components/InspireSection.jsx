"use client";

import Image from "next/image";

export default function InspireSection() {
  return (
    <section className="relative bg-white py-16 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center min-h-[500px]">
        
        {/* LEFT IMAGE - Visible on Large Screens */}
        <div className="hidden lg:block absolute left-0 top-0 -translate-y-12 xl:-translate-x-10">
          <div className="relative w-[260px] h-[220px] xl:w-[300px] xl:h-[260px] rounded-[32px] overflow-hidden shadow-2xl rotate-[-3deg]">
            <Image
              src="/thalambur/inspire-1.png"
              alt="Students learning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center max-w-xl z-10">
          <div className="flex justify-center mb-6">
            <Image
              src="/thalambur/star.png"
              alt="Inspire icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-[60px] md:h-[60px]"
            />
          </div>

          <h2 className="text-[clamp(28px,5vw,44px)] font-semibold font-primary leading-tight mb-4 text-slate-900">
            Inspiring Young Minds
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-primary font-medium mb-8">
            A place where young minds are nurtured through quality education
            and strong values. We create a supportive environment that inspires
            confidence, curiosity, and growth.
          </p>

          <button className="px-10 py-3 bg-tertiary hover:opacity-90 transition-all text-white rounded-md font-regular font-primary shadow-lg active:scale-95">
            Let&apos;s Go
          </button>
        </div>

        {/* MOBILE/TABLET IMAGES - Only shown when absolute images are hidden */}
        <div className="flex gap-4 mt-12 lg:hidden">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl">
                 <Image src="/thalambur/inspire-1.png" alt="Students" fill className="object-cover" />
            </div>
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl mt-6">
                 <Image src="/thalambur/inspire-2.png" alt="Classroom" fill className="object-cover" />
            </div>
        </div>

        {/* RIGHT IMAGE - Visible on Large Screens */}
        <div className="hidden lg:block absolute right-0 bottom-0 translate-y-12 xl:translate-x-10">
          <div className="relative w-[260px] h-[220px] xl:w-[300px] xl:h-[260px] rounded-[32px] overflow-hidden shadow-2xl rotate-[3deg]">
            <Image
              src="/thalambur/inspire-2.png"
              alt="Students classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}