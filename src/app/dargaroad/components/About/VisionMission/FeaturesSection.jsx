// components/FeatureSingleSection.jsx
"use client";

import Image from "next/image";
import React from "react";

export default function FeatureSingleSection({
  items = [
    {
      title: "Vision",
      text: `The Best CBSE School in Pallavaram, Chennai that ensures a holistic development of all the students and empowers them to embrace learning to achieve their personal best and build their emotional, social and physical well-being.`,
      image: "/dargaroad/vision.png",
    },
    {
      title: "Mission",
      text: `The school with its well-qualified, trained, experienced team of passionate teachers, engaging teaching-learning approaches, clubbed with excellent infrastructure, tech-integration and enthusiastic parent involvement makes young learners achieve a holistic development and excellence in their chosen fields.

By imparting quality education, the school helps students blossom into responsible, confident global citizens with strong human values.`,
      image: "/dargaroad/mission.png",
    },
  ],
}) {
  return (
    <section className="w-full bg-gray-50 py-12 space-y-14">
      <div className="max-w-4xl mx-auto px-6 space-y-14">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-[0_20px_60px_rgba(2,6,23,0.06)] rounded-md p-8 md:p-12"
          >
            <div
              className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-y-2 -inset-x-2 translate-x-4 translate-y-4 bg-white rounded-sm shadow-[0_30px_60px_rgba(2,6,23,0.06)] -z-10" />
                <div className="w-[220px] sm:w-[260px] md:w-[300px] h-[300px] sm:h-[340px] md:h-[380px] overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <div className="w-14 h-[3px] bg-amber-300 mt-3 mb-5" />

                <p className="max-w-prose text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
