import React from "react";

const ExperienceSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      {/* Background Image */}
      <img
        src="/bg-4.png"
        alt="Admission Background"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center lg:px-0">
        <h2 className="mb-8 text-[28px] font-bold text-[#2E3192] md:text-[34px] lg:text-[42px]">
          Experience the Future of Learning
        </h2>

        <p className="mx-auto w-full max-w-4xl text-base leading-7 text-gray-800 md:text-lg lg:text-[20px] lg:leading-8">
          Discover an educational environment where Artificial Intelligence
          meets academic excellence, innovation inspires creativity, and every
          child is empowered to dream, explore, and succeed.
        </p>

        <p className="mx-auto mt-7 max-w-3xl text-sm tracking-wide text-gray-600 md:text-base">
          "Visit Any of Our Four Campuses and Begin Your Child&apos;s Journey
          Towards Excellence Today"
        </p>

        <div className="mt-12">
          <a
            href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#2E3192] px-12 py-4 text-lg font-semibold text-white shadow-[0_12px_25px_rgba(46,49,146,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20257d] hover:shadow-[0_18px_30px_rgba(46,49,146,0.35)]"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;