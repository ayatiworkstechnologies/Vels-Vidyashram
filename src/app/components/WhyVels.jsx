"use client";

export default function WhyVels() {
  const items = [
    {
      number: "01",
      title: "Holistic Learning <br /> Approach",
      subtitle: "A balanced blend of academics, arts, sports, and life skills.",
    },
    {
      number: "02",
      title: "Experienced Faculty <br /> Team",
      subtitle:
        "Dedicated educators nurturing excellence with personalised attention every day.",
      highlight: true,
    },
    {
      number: "03",
      title: "Future-Ready <br /> Curriculum",
      subtitle:
        "STEM, digital learning, and practical activities preparing students for tomorrow.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* ------------------------ */}
      {/* Center Heading */}
      {/* ------------------------ */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-primary font-primary-semibold text-black">
          Why Vels Vidyashram
        </h2>

        <div className="w-40 h-[1px] bg-secondary mx-auto mt-2 mb-4"></div>

        <p className="text-black mt-2 font-secondary font-secondary-regular">
          Where strong values meet future-ready learning.
        </p>

        {/* ------------------------ */}
        {/* 3 Animated Feature Boxes */}
        {/* ------------------------ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg transition-all duration-300 ease-out transform
                ${
                  item.highlight
                    ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    : "border border-gray-200"
                }
                hover:scale-[1.05] hover:-translate-y-2
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
              `}
            >
              {/* Number + Divider */}
              <div className="flex items-center gap-3">
                <span className="text-secondary text-3xl font-primary font-primary-bold">
                  {item.number}
                </span>
                <span className="h-[1px] w-16 bg-tertiary"></span>
              </div>

              {/* Title */}
              <h3
                className="mt-4 text-lg font-primary font-primary-semibold text-primary text-left leading-snug"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>

              {/* Description */}
              <p className="mt-10 text-black text-sm font-secondary font-secondary-regular text-left">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------ */}
      {/* Bottom Marquee Scrolling Strip */}
      {/* ------------------------ */}
      <div className="w-full bg-primary text-white py-2 mt-14 overflow-hidden">
  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="6"
    className="font-secondary font-secondary-light whitespace-nowrap"
  >
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;

    
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
     ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026 &nbsp;&nbsp;&nbsp;
    ★ Vijayadasami Admission Open 2025–2026
  </marquee>
</div>

    </section>
  );
}
