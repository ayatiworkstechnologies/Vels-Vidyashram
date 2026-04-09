"use client";

import { motion } from "framer-motion";

export default function FounderMessageSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[26px] border border-white/40 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/img-1.png"
              alt="Vels campus"
              className="h-full w-full object-cover"
            />
          </div>


          {/* Content */}
          <div className="relative z-10 grid min-h-[340px] items-end lg:min-h-[500px] lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content */}
            <div className="flex h-full items-end px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[560px]"
              >
                <p className="max-w-[520px] text-[13px] leading-[1.45] text-white/92 md:text-[14px] md:leading-[1.55] lg:text-[15px]">
                  The trust was founded by Dr. Ishari K. Ganesh, a visionary and an
                  eminent educationist, in fond memory of his father Shri Isari Velan.
                  Vaels Educational Trust has always served to take education to all
                  sections of the society with the aim to provide job oriented programmes
                  that ensure immediate employability upon graduation and producing
                  talented &amp; responsible individuals. Today, the Vels Group of
                  Institutions marches successfully beyond 29 years of commitment to
                  excellence in education with more than 30,000 students, 36 Institutions
                  and 6000 staff.
                </p>

                <h3 className="mt-5 font-primary text-[28px] leading-[1.08] text-white md:text-[38px] lg:text-[28px] ">
                  Dr. Ishari K. Ganesh,
                  <br />
                  M.Com., B.L., Ph. D.
                </h3>
              </motion.div>
            </div>

            {/* Right Person Image */}
            <div className="relative flex h-full items-end justify-center lg:justify-end">
              <motion.img
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                src="/chairman.png"
                alt="Dr. Ishari K. Ganesh"
                className="relative z-10 h-[290px] w-auto object-contain md:h-[360px] lg:h-[470px] lg:translate-y-[6px]"
              />
            </div>
          </div>

          {/* Soft glossy top border */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}