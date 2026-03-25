"use client";

export default function LetterSection() {
  const items = [
    "NIOS accredited Study Centre 190191 (courses offered: Secondary and senior secondary with science subjects)",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee-left 22s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa] py-6 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <div key={index} className="mx-4 flex shrink-0 items-center gap-4">
                  <span className="text-lg font-semibold uppercase tracking-[0.22em] text-[#cfcfcf] sm:text-2xl md:text-4xl lg:text-5xl">
                    {item}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#056839]/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}