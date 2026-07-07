"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BridgeCourseBanner() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-14 font-primary md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative pt-20 sm:pt-16 lg:pt-10">
          {/* Student Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            className="pointer-events-none absolute bottom-0 right-[-10px] z-30 h-[230px] w-[170px] select-none sm:right-0 sm:h-[280px] sm:w-[210px] md:h-[330px] md:w-[250px] lg:right-5 lg:h-[370px] lg:w-[280px]"
          >
            <Image
              src="/thalambur/add-img-2.png"
              alt="Student representative"
              fill
              priority
              sizes="(max-width: 640px) 170px, (max-width: 768px) 210px, (max-width: 1024px) 250px, 280px"
              className="object-contain object-bottom"
            />
          </motion.div>

          {/* Blue Banner */}
          <div className="relative z-10 min-h-[460px] overflow-hidden rounded-[26px] bg-[#232A95] sm:min-h-[320px] lg:min-h-[300px]">
            <div className="flex min-h-[inherit]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="relative z-20 flex w-full min-w-0 flex-col justify-center px-6 pb-[210px] pt-8 sm:px-8 sm:py-8 lg:px-10 lg:pr-[300px]"
              >
                <h2 className="text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold leading-[1.1] tracking-[0.06em] text-white">
                  Admission
                  <br />
                  2026–2027
                </h2>

                <p className="mt-4 max-w-4xl break-words text-sm font-medium leading-6 text-white/80 sm:text-[13px] sm:leading-5 md:text-sm md:leading-6 lg:text-base lg:leading-7">
                  Admissions for the 2026–27 academic year are now open. Give
                  your child the opportunity to thrive in an environment that
                  values academic excellence, innovation, discipline and
                  holistic growth. Contact our admissions team today to book a
                  campus visit and learn how Vels Vidyashram Thalambur can shape
                  a bright future for your child.
                </p>

                <a
                  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-max items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#232A95] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:text-sm"
                >
                  Apply Now

                  <span aria-hidden="true" className="text-base">
                    →
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}