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
                  Welcome to Vels Vidyashram – Chennai’s leading center of
                  Immersive learning <br />
                  Ranked among the best CBSE schools in Chennai, Vels Vidyashram
                  empowers its students with holistic 360-degree development
                  through innovative and interactive modules. Along with the
                  overall development, the school ensures the safety and
                  security of its students.
                  <br />
                  Established in 2018, with a vision to offer the best quality
                  of education, we offer the best facilities to students as per
                  global standards. The school’s infrastructure emphasizes on
                  making the learning process motivating and engaging for its
                  students.
                  <br />
                  Vels Vidyashram is striving hard to make the best possible
                  efforts to inculcate strong values combined with academics and
                  extracurricular activities.
                  <br />
                  In order to ensure that each student’s talents are developed
                  to the full, the school also applies the multiple intelligence
                  approach.
                </p>

                <h2 className="font-primary font-primary-bold text-2xl md:text-3xl text-black tracking-tight">
                  Evolve better with us
                </h2>

                <div className="w-30 h-[1px] bg-secondary my-3 mb-10" />

                <p className="font-secondary font-secondary-regular md:max-w-xl text-justify text-sm md:text-md text-black/80 leading-[2] mb-4">
                  At Vels Vidyashram, the focus has always been to empower its
                  students to excel in different walks of life so that they are
                  able to evolve better as global citizens of tomorrow.
                  We are among the top CBSE schools in Chennai that believe in a
                  holistic approach towards the overall development of the child.
                  To make students future-ready, we have now integrated
                  future skills in the curriculum and focusing on:
                </p>

                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Excellent communication skills</li>
                  <li>Innovation and creativity</li>
                  <li>Sense making</li>
                  <li>Rational thinking</li>
                  <li>Power of learning, unlearning and relearning</li>
                  <li>Problem-solving and computational thinking</li>
                </ul>

                <h2 className="font-primary font-primary-bold text-2xl md:text-3xl text-black tracking-tight">
                  Why choose us?
                </h2>

                <div className="w-30 h-[1px] bg-secondary my-3 mb-10" />

                <p className="font-secondary font-secondary-regular md:max-w-xl text-justify text-sm md:text-md text-black/80 leading-[2] mb-4">
                  What makes us the best school includes:
                </p>

                <ul className="list-disc pl-6 space-y-1 mb-8">
                  <li>Safe and secure environment</li>
                  <li>Best academics</li>
                  <li>Excellent sports facilities</li>
                  <li>Best infrastructure</li>
                  <li>Highly experienced and talented teaching faculty</li>
                  <li>Innovative curriculum</li>
                </ul>

                <p className="text-black/80 leading-[1.8] font-secondary font-secondary-regular">
                  We are the top CBSE school in Chennai that guarantees the improvement and success of the child. We are not just a school but a training ground for life. Drop us your details below for a quick response.
                </p>
              </motion.div>

              {/* IMAGE BLOCK (STICKY) */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-[42%] flex justify-center md:justify-start order-2 md:order-1"
              >
                {/* Sticky wrapper */}
                <div className="md:sticky md:top-24 self-start md:z-10 w-full">
                  <div className="relative w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] max-h-[80vh]">
                    <Image
                      src="/dargaroad/best-cbse.png"
                      alt="Best CBSE School in Chennai"
                      width={485}
                      height={485}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>


    </>
  );
}
