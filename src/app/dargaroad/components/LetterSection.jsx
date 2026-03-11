"use client";

export default function LetterSection() {
  return (
    <section className="relative py-12 md:py-12 overflow-hidden bg-white">
      <marquee
        direction="left"
        scrollAmount={15}
        behavior="scroll"
        className="
          uppercase font-secondary font-bold text-[#CCCCCC]
          text-3xl leading-[0.9]
          sm:text-4xl
          md:text-6xl md:leading-[0.85]
          lg:text-7xl
          whitespace-nowrap
        "
      >
        NIOS accredited Study Centre 190191 (courses offered: Secondary and
          senior secondary with science subjects)
      </marquee>
    </section>
  );
}
