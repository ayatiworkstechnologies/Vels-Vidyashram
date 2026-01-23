"use client";

import Image from "next/image";

export default function AboutSchool() {
  return (
    <>
      <section className="relative w-full py-16 md:py-32 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/thalambur/about-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/40 lg:bg-transparent" />
        </div>

        {/* CONTENT CARD */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-xl md:text-3xl font-primary text-primary leading-snug mb-4 md:mb-6">
                Shaping Holistic Education at Vels <br className="hidden md:block" />
                Vidyashram Thalambur
              </h2>

              <p className="text-sm text-gray-600 font-secondary leading-relaxed mb-4">
                Vels Vidyashram Thalambur and Vels Vidyashram Cantonment were established in 2014 to provide quality education where the learning takes place through observation, reflection and exploration with emphasis on character development. Within a short span of time our school stands as best school in OMR and best Kindergarten school in Navallur.
              </p>

              <p className="text-sm text-gray-600 font-secondary leading-relaxed mb-6">
                The schools provide a wide variety of co-curricular (Extracurricular) activities and enrichment programs which gives abundant opportunities for children to develop their potential and excel in the areas of their talent. This holistic approach has paved way for these schools to become two of the best CBSE schools in OMR.
              </p>

              <p className="text-sm text-gray-600 font-bold font-secondary leading-relaxed border-t pt-4">
                Vels Education Trust was established in 1992 with the aim of
                transforming an individual with character and ability.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full max-w-[260px] lg:w-[260px] shrink-0 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square lg:aspect-auto">
                <Image
                  src="/thalambur/about-img.png"
                  alt="Students studying"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="w-full py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] md:h-[420px] flex items-center">

            {/* BACKGROUND IMAGE - Modified for mobile focus */}
            <div
              className="absolute inset-0 bg-cover bg-right md:bg-center"
              style={{
                backgroundImage: "url('/thalambur/img-dr.png')",
              }}
            />

            {/* DARK GRADIENT OVERLAY - Adjusted for text readability on small screens */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 flex w-full h-full items-end md:items-center p-6 md:px-12">

              {/* TEXT BOX */}
              <div className="max-w-xl text-white">
                <p className="text-xs md:text-sm leading-relaxed font-secondary text-white/90 mb-6">
                  The trust was founded by Dr.Ishari K. Ganesh, a visionary and an eminent educationist, in fond memory of his father Shri. Isari Velan. Vaels Education Trust has always served to take education to all sections of the society. Today, the Vels Group marches successfully beyond 29 years with more than 30,000 students and 36 Institutions.
                </p>

                <h3 className="text-xl md:text-2xl text-white font-semibold font-primary">
                  Dr. Ishari K. Ganesh,
                </h3>
                <p className="text-lg md:text-2xl text-white font-primary opacity-90">
                  M.Com., B.L., Ph. D.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}