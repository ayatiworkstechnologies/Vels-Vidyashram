"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BestCbseSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-visible">
            {/* Desktop right grey block */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[68%] bg-[#F5F5F5]" />

            {/* Mobile background */}
            <div className="md:hidden absolute inset-0 bg-[#F5F5F5] -z-10" />

            <div className="relative flex flex-col md:flex-row gap-10 md:gap-12 px-6 md:px-10 py-8 md:py-12">

              {/* TEXT BLOCK */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="md:w-[58%] flex flex-col order-1 md:order-2"
              >
                <h2 className="font-primary font-primary-bold text-2xl md:text-3xl text-black tracking-tight">
                  Best CBSE School in Chennai
                </h2>

                <div className="w-30 h-[1px] bg-secondary my-3 mb-10" />

                <p className="font-secondary font-secondary-regular md:max-w-xl text-justify text-sm md:text-md text-black/80 leading-[2] mb-4">
                  A well-structured campus built for excellence and holistic development. Led by experienced educators and supported Welcome to Vels Vidyashram – Chennai’s leading center of immersive learning.<br/>
                  Ranked among the best CBSE schools in Chennai, Vels Vidyashram empowers its students with holistic 360-degree development through innovative and interactive modules. Along with the overall development, the school ensures the safety and security of its students.<br/>
                  Established in 2018, with a vision to offer the best quality of education, we offer the best facilities to students as per global standards. The school’s infrastructure emphasizes on making the learning process motivating and engaging for its students.
                </p>
              </motion.div>

              {/* IMAGE BLOCK */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-[42%] flex justify-center md:justify-start order-2 md:order-1"
              >
                <div className="relative w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/dargaroad/best-cbse.png"
                    alt="Best CBSE School in Chennai"
                    width={485}
                    height={485}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full flex justify-center py-10"
      >
        <div className="w-full max-w-4xl bg-[#211637] py-8 flex flex-col items-center text-center">
          <h3 className="text-white font-primary font-primary-semibold text-base md:text-lg">
            School Admission Open Now
          </h3>

          <button
            className="mt-4 px-8 py-2 border border-white text-white text-sm font-secondary font-secondary-semibold hover:bg-white/10 transition"
          >
            Apply Now
          </button>
        </div>
      </motion.section>

      {/* CLUBS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full py-12 flex justify-center"
      >
        <div className="text-center max-w-2xl px-4">
          <h2 className="text-xl md:text-2xl font-primary font-primary-semibold text-black">
            About Vels Vidyashram Clubs
          </h2>

          <div className="w-28 h-[1px] bg-secondary mx-auto mt-2 mb-4" />

          <p className="text-sm md:text-base text-black/80 leading-normal font-primary font-primary-medium">
            A series of Club Activities to promote and cultivate the talents of <br/>
            students are conducted
          </p>

          <a
            href="#"
            className="block mt-4 text-sm font-primary font-primary-bold text-[#2D2A41] hover:text-black transition"
          >
            Know More
          </a>
        </div>
      </motion.section>
    </>
  );
}
