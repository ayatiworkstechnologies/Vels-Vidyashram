
"use client";

export default function LetterSection() {
  const items = [
    "* Vijayadasami Admission Open 2025-2026",
   
  ];

  const loopItems = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 8s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="overflow-hidden bg-white py-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-[#fcfcfc] py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track">
            {loopItems.map((item, index) => (
              <div key={index} className="flex shrink-0 items-center gap-4 px-6">
                <span className="whitespace-nowrap text-lg font-semibold uppercase tracking-[0.22em] text-[#cfcfcf] sm:text-2xl md:text-4xl lg:text-5xl">
                  {item}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#056839]/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}