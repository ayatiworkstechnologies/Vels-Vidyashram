"use client";
import Image from "next/image";

export default function VelsStaticOverlaySection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start relative z-10 pb-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 font-primary text-gray-900">
            Vels Vidyashram Thalambur
          </h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed font-secondary">
            <p>Established in 2014, Vels Vidyashram Thalambur aims to provide the best quality education to its students. Within a short span of time, the school has been recognized as one of the best CBSE schools in OMR offering a 360-degree learning environment to its students.</p>
            <p>We follow an integrated CBSE syllabus and innovative teaching methodologies that are student-friendly and engaging. This further facilitates the student's ability to develop practical skills through knowledge and understanding. We also instill positive values in our children along with nurturing their creativity and analytical ability.</p>
            <p>The school provides a wide variety of co-curricular activities and enrichment programs which gives abundant opportunities for students for their overall development.</p>
            <p>Since its foundation, the school is committed to delivering the best educational experience to its students in a structured and supportive environment. Our diverse offerings and character education given to the children have contributed to the development of superbly well-rounded professionals for years.</p>
            <p>We are the best CBSE school in Chennai that is defined by its culture of inclusivity that fosters close relationships between students and teachers, made possible by a small student to teacher ratio. Students are encouraged to push themselves academically while constantly focusing on the school's core values of compassion, determination, honesty, and respect.</p>
          </div>
        </div>

        {/* RIGHT OVERLAPPING IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div className="absolute top-0 right-0 w-[400px] h-[550px] rounded-2xl overflow-hidden shadow-2xl z-30 translate-y-10">
            <Image
              src="/thalambur/vels-1.png"
              alt="Students"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= CENTER BANNER (The Base) ================= */}
      <div className="relative w-full h-[450px] md:h-[550px] z-0">
        <Image
          src="/thalambur/bg-vels.png"
          alt="Vels Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl text-white font-primary font-bold drop-shadow-2xl">
            Welcome to Vels Vidyashram
          </h2>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start relative z-10 pt-16">
        
        {/* LEFT OVERLAPPING IMAGE */}
        <div className="relative h-full hidden lg:block">
          <div className="absolute bottom-0 left-0 w-[400px] h-[550px] rounded-2xl overflow-hidden shadow-2xl z-30 -translate-y-10">
            <Image
              src="/thalambur/vels-2.png"
              alt="Classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-10">
          <h3 className="text-3xl font-primary font-semibold mb-6 text-gray-900 leading-tight">
            Why Vels Vidyashram is the best solution for education?
          </h3>
          <p className="text-sm text-gray-600 mb-8 font-secondary">
            We are passionate about bringing out the best from young minds. We aim to deliver the best educational experience which is designed to benefit your child in all ways.
          </p>

          <div className="space-y-10">
            <div>
              <h4 className="font-primary text-xl font-bold mb-2 text-gray-800">An engaging curriculum</h4>
              <p className="font-secondary text-sm text-gray-700 leading-relaxed">
                The curriculum at Vels Vidyashram delivers exceptional learning opportunities through innovative teaching methods. Our school follows international standards that make it among the top CBSE schools in OMR.
              </p>
            </div>
            <div>
              <h4 className="font-primary text-xl font-bold mb-2 text-gray-800">Campus</h4>
              <p className="font-secondary text-sm text-gray-700 leading-relaxed">
                We are the best CBSE school in OMR road Chennai that aims to facilitate the holistic development of the students. The campus is equipped with all the latest and modern facilities.
              </p>
            </div>
            <div>
              <h4 className="font-primary text-xl font-bold mb-2 text-gray-800">Sports and physical well-being</h4>
              <p className="font-secondary text-sm text-gray-700 leading-relaxed">
                With extensive extracurricular and a variety of sports facilities, our students will experience a flourishing sporting life here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}