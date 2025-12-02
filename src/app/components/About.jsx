// components/FounderMessage.tsx
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F5F5F5] px-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center">
          {/* LEFT: IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/main/founder.png"
                alt="Dr. Ishari K. Ganesh"
                width={542}
                height={600}
                className="w-[542px] h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-4 md:space-y-5">
            {/* Heading */}
            <h2 className="text-xl md:text-2xl lg:text-xl font-primary font-primary-bold  pt-10">
              Vaels Education Trust was established in 1992 with the aim of
              transforming an individual with character and ability, committed
              to national service and development.
            </h2>

            {/* Orange line */}
            <div className="w-30 h-[1px] bg-[#F1A544]"></div>

            {/* Paragraph */}
            <p className="text-sm md:text-[18px]  font-secondary font-secondary-regular">
              The trust was founded by Dr. Ishari K. Ganesh, a visionary and an
              eminent educationist, in fond memory of his father Shri. Isari
              Velan. Vaels Education Trust has always served to take education
              to all sections of the society with the aim to provide job
              oriented programmes that ensures immediate employability upon
              graduation and producing talented &amp; responsible individuals.
              Today, the Vels Group of Institutions marches successfully beyond
              29 years of commitment to excellence in education with more than
              30,000 students, 36 institutions and 6000 staff.
            </p>

            {/* Name */}
            <h3 className="text-base md:text-2xl font-semibold tracking-wide text-[#2D3091] uppercase font-primary font-primary-semibold">
              DR. ISHARI K. GANESH
            </h3>

            {/* Designation */}
            <p className="text-sm md:text-xl font-secondary font-secondary-light">
              Founder &amp; Chancellor of Vels University
              <br />
              Chairman, Vels Group of Institutions &amp; Companies
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}
