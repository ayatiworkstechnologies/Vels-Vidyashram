// components/ProfileHero.jsx
"use client";

import Image from "next/image";
import React from "react";

/**
 * Props:
 * - imageSrc: string
 * - name: string
 * - subtitle: string (multi-line allowed)
 * - heading: string
 * - content: ReactNode | string
 */

export default function ProfileHero({
  imageSrc = "/main/founder.png",
  name = "DR. ISHARI K. GANESH",
  subtitle = `Founder & Chancellor of Vels University
Chairman, Vels Group of Institutions & Companies`,
  heading = "CHAIRMAN’S MESSAGE",
  content,
}) {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* LEFT SIDE — IMAGE + OVERLAY TEXT */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-[230px] sm:w-[260px] md:w-full max-w-[340px]">

              {/* Image */}
              <Image
                src={imageSrc}
                alt={name}
                width={580}
                height={540}
                priority
                className="w-full h-auto object-cover"
              />

              {/* PURPLE TEXT OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-[#402E8A] text-white px-4 py-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {name}
                </h3>

                {subtitle && (
                  <p className="text-xs sm:text-sm opacity-90 leading-tight mt-1 whitespace-pre-line">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — TEXT CONTENT */}
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {heading}
            </h3>

            {/* Underline */}
            <div className="w-20 h-[2px] bg-amber-300 mt-3 mb-5" />

            <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
              {content ? (
                content
              ) : (
                <>
                  <p>
                    VELS Group of Institutions was established by Dr. Ishari K.
                    Ganesh, M.Com., B.L., Ph. D., in 1992 in memory of his father
                    Shri. IsariVelan.
                  </p>

                  <p>
                    Dr. Ishari K. Ganesh, with the noble aim of imparting quality education, has started several colleges of higher learning over the years, which includes colleges of Basic Sciences, Dental Science, Paramedical Sciences, Nautical Science, Catering & Hotel Management, Engineering & Technology, Teacher Training and Education. We also offer practical and job oriented courses to the students hailing from different economical and social background. Our institutions attract students not only from Tamil Nadu but from other states and overseas as well.
                  </p>

                  <p>
                    Vels International Preschool in Neelankarai, ECR is ranked number 1 in India for the last 4 years owing to its internationally acclaimed curriculum – Kindle Kids and its dedication towards individual attention to students.
                  </p>
                  <p>Vaels International School, Injambakkam, ECR offers ICSE and IGCSE curriculum and has been awarded as top international school in the state as it exceeds the standards of International schools across the world.</p>
                  <p>Besides its involvement in higher education, VELS Group has established Vels Vidyashram, a chain of CBSE Schools since 1998. The Schools have been producing excellent results in the Board examinations and has been individually recognized for importance to extracurricular activities, holistic development of students and infrastructure.</p>
                  <p>Vels Vidyashram Thalambur and Vels Vidyashram Cantonment  were  established in 2014 to provide quality education where the learning takes place through observation, reflection and exploration with emphasis on character development. The schools provides a wide variety of co-curricular activities and enrichment programmes which gives abundant opportunities for children to develop their potential and excel in the areas of their talent.</p>
                  <p>Our Group of Institutions instills the importance of lifelong learning and offers programmes from Pre-KG to Ph.D., in India, Singapore and United Kingdom.</p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
