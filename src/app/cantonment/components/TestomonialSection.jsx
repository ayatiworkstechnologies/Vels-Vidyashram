"use client";

import React from "react";

const testimonials = [
  {
    tag: "Parent Voice",
    text: `Project day at Vels was a wonderful event for the kids. It was fun filled learning experience and really a great initiative by Vels Team. My child is attending for the third consecutive year to showcase her talents. The carnival is great experience for children, every time the event is more and more innovative. Keep it up Vels.`,
    name: "V Senthil Kumaran",
    role: "Father of Jeshna IA.",
    cardBg: "bg-[#f8dede]",
    badgeBg: "bg-[#f39c83]",
    rotate: "-rotate-[8deg]",
    position: "left-[-12px] top-[82px]",
  },
  {
    tag: "School Event",
    text: `EVS culmination day. It has been a really extravagant display of children organising activities. It is happy to see our child deliberating her inner energy and making it abundant. As this is happening on a regular basis, a Big Wow and sincere gratitude to the organisation & teachers for organising it. Thanks a trillion.`,
    name: "Madhusudhan",
    role: "Father of Varshini 1B",
    cardBg: "bg-[#f7efb9]",
    badgeBg: "bg-[#f08aa8]",
    rotate: "rotate-[7deg]",
    position: "left-[-4px] top-[165px]",
  },
  {
    tag: "Observation Week",
    text: `Parent observation week! It is a very nice initiative to bring parents to school to watch us how the class is being conducted for the kids. It was a great experience for us as a parent to know the concept of teaching in school. The practical problem, understanding methods were really unique and excellent. It helps the child to understand the concept. We are glad to be a part of Vels.`,
    name: "Madhusudhan",
    role: "Father of Varsha 11B",
    cardBg: "bg-[#ead0f3]",
    badgeBg: "bg-[#bb6cd7]",
    rotate: "-rotate-[6deg]",
    position: "right-[-12px] top-[100px]",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* soft abstract background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-16 left-0 h-56 w-56 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* heading */}
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-[#ff7a00]">
            Testimonials
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-[#2b1546] sm:text-4xl md:text-5xl">
            Explore the students experience
          </h2>
        </div>

        {/* desktop / tablet */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
          {/* Column 1 */}
          <div className="relative mx-auto flex w-full max-w-[320px] justify-center">
            <div className="relative h-[560px] w-[230px] rounded-[28px] border-[4px] border-[#7a3ca3] bg-[#ead6ee] shadow-[0_12px_30px_rgba(92,37,133,0.12)]">
              <div className="absolute inset-[10px] rounded-[22px] border-2 border-dashed border-[#dcbfe3]" />

              <div
                className={`absolute z-20 w-[235px] rounded-[22px] border-[3px] border-[#f3dfe3] p-4 shadow-xl ${testimonials[0].cardBg} ${testimonials[0].rotate} ${testimonials[0].position}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-white ${testimonials[0].badgeBg}`}
                  >
                    {testimonials[0].tag}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-white/70" />
                </div>

                <div className="rounded-[14px] bg-white/90 px-3 py-2 text-[12px] leading-relaxed text-[#3d3550] shadow-sm">
                  {testimonials[0].text}
                </div>

                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8c6d92]">
                    Parent
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-tight text-[#2b1546]">
                    {testimonials[0].name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#5d4966]">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-[210px] rounded-[22px] border-[4px] border-[#7a3ca3] bg-[#ff5b3e] px-4 py-7 text-center shadow-lg">
                <div className="text-2xl font-extrabold text-white">
                  Happy Parents
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative mx-auto flex w-full max-w-[320px] justify-center">
            <div className="relative h-[560px] w-[230px] rounded-[28px] border-[4px] border-[#7a3ca3] bg-[#ead6ee] shadow-[0_12px_30px_rgba(92,37,133,0.12)]">
              <div className="absolute inset-[10px] rounded-[22px] border-2 border-dashed border-[#dcbfe3]" />

              <div className="absolute left-0 right-0 top-0 z-10 mx-auto w-[210px] rounded-[22px] border-[4px] border-[#7a3ca3] bg-[#f7e464] px-5 py-8 text-center shadow-lg">
                <div className="text-[20px] font-extrabold leading-tight text-[#5d3b00]">
                  Every moment
                  <br />
                  matters here
                </div>
              </div>

              <div
                className={`absolute z-20 w-[238px] rounded-[22px] border-[3px] border-[#efe6b5] p-4 shadow-xl ${testimonials[1].cardBg} ${testimonials[1].rotate} ${testimonials[1].position}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-white ${testimonials[1].badgeBg}`}
                  >
                    {testimonials[1].tag}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-white/70" />
                </div>

                <div className="rounded-[14px] bg-white/90 px-3 py-2 text-[12px] leading-relaxed text-[#3d3550] shadow-sm">
                  {testimonials[1].text}
                </div>

                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8c6d92]">
                    Parent
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-tight text-[#2b1546]">
                    {testimonials[1].name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#5d4966]">
                    {testimonials[1].role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-[210px] rounded-[22px] border-[4px] border-[#7a3ca3] bg-[#efdff0] px-4 py-7 text-center shadow-lg">
                <div className="text-lg font-bold text-[#c19acb]">
                  Trusted Feedback
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative mx-auto flex w-full max-w-[320px] justify-center md:col-span-2 xl:col-span-1">
            <div className="relative h-[560px] w-[230px] rounded-[28px] border-[4px] border-[#7a3ca3] bg-[#ead6ee] shadow-[0_12px_30px_rgba(92,37,133,0.12)]">
              <div className="absolute inset-[10px] rounded-[22px] border-2 border-dashed border-[#dcbfe3]" />

              <div
                className={`absolute z-20 w-[235px] rounded-[22px] border-[3px] border-[#eadcf6] p-4 shadow-xl ${testimonials[2].cardBg} ${testimonials[2].rotate} ${testimonials[2].position}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-white ${testimonials[2].badgeBg}`}
                  >
                    {testimonials[2].tag}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-white/70" />
                </div>

                <div className="rounded-[14px] bg-white/90 px-3 py-2 text-[12px] leading-relaxed text-[#3d3550] shadow-sm">
                  {testimonials[2].text}
                </div>

                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8c6d92]">
                    Parent
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-tight text-[#2b1546]">
                    {testimonials[2].name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#5d4966]">
                    {testimonials[2].role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-[210px] rounded-[22px] border-[4px] border-[#7a3ca3] bg-[#ef78e8] px-4 py-7 text-center shadow-lg">
                <div className="text-[20px] font-extrabold leading-tight text-[#5b1659]">
                  Wherever
                  <br />
                  you are
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="grid gap-6 md:hidden">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border-[4px] border-[#7a3ca3] bg-[#ead6ee] p-3 shadow-[0_12px_30px_rgba(92,37,133,0.12)]"
            >
              <div className="rounded-[20px] border-2 border-dashed border-[#dcbfe3] p-3">
                <div
                  className={`rounded-[22px] p-4 shadow-lg ${
                    index === 0
                      ? "bg-[#f8dede]"
                      : index === 1
                      ? "bg-[#f7efb9]"
                      : "bg-[#ead0f3]"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-white ${
                        index === 0
                          ? "bg-[#f39c83]"
                          : index === 1
                          ? "bg-[#f08aa8]"
                          : "bg-[#bb6cd7]"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="h-6 w-6 rounded-full bg-white/70" />
                  </div>

                  <div className="rounded-[14px] bg-white/90 px-3 py-3 text-[13px] leading-relaxed text-[#3d3550] shadow-sm">
                    {item.text}
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8c6d92]">
                      Parent
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold leading-tight text-[#2b1546]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#5d4966]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}