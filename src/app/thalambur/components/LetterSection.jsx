"use client";

export default function MarqueeSection() {
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
        Welcome to Vels Vidyashram, Thalambur where learning, values, and
        excellence come together.
      </marquee>
    </section>
  );
}
