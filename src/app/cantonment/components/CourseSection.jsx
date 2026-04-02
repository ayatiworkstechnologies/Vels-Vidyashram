"use client";

import Link from "next/link";

export default function CourseSection() {
  return (
    <section className="bg-[#f3f1ed] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-[1fr_1.05fr_1fr] items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {/* Top Content Card */}
            <div className="rounded-[28px] bg-[#e7e1db] p-6 sm:p-7 min-h-[190px] flex flex-col justify-between">
              <p className="max-w-[220px] text-[14px] leading-[1.5] text-[#4b4b56]">
                The Objective of the competition is to enchance the spelling.
              </p>

              <div>
                <Link
                  href="/cantonment/spell-bee"
                  className="inline-block text-[30px] sm:text-[34px] font-semibold leading-none text-[#2e2d3a] hover:text-[#1d4ed8] transition"
                >
                  Spell Bee
                </Link>
              </div>
            </div>

            {/* Bottom Image Card */}
            <div className="overflow-hidden rounded-[28px] min-h-[320px] sm:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
                alt="Laboratory testing"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Center Main Image */}
          <div className="overflow-hidden rounded-[32px] min-h-[520px] sm:min-h-[620px] relative">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Protective lab specialist"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1636]/80 via-[#0f1636]/20 to-transparent" />

         

            
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {/* Top Image Card */}
            <div className="overflow-hidden rounded-[28px] min-h-[320px] sm:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop"
                alt="Test tubes in lab"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom Content Card */}
            <div className="rounded-[28px] bg-[#dfe1ed] p-6 sm:p-7 min-h-[190px] flex flex-col justify-between">
              <div>
                <Link
                  href="/cantonment/science-olympiad-foundation-sof"
                  className="inline-block text-[30px] sm:text-[34px] font-semibold leading-none text-[#2e2d3a] hover:text-[#1d4ed8] transition"
                >
                  Science Olympiad Foundation (SOF)
                </Link>
              </div>

              <p className="max-w-[240px] text-[14px] leading-[1.5] text-[#4b4b56]">
                Maths Olympiad <br/>
                Science Olympiad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}