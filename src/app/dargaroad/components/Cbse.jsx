"use client";

export default function Cbse() {
  const items = [
    {
      number: "01",
      title: "About Us  <br /> Vels Educational Trust",
      subtitle:
        "The School was established in 2018 by Vel’s Educational Trust (Regd.)",
    },
    {
      number: "02",
      title: "Academics  <br /> From Pre KG to IX & XI Standard",
      subtitle:
        "Experienced & trained teachers help in maintaining academic excellence and high standards of the school.",
      highlight: true,
    },
    {
      number: "03",
      title: "Facilities  <br /> Modern trend in education",
      subtitle:
        "The school has all the necessary facilities in keeping with the modern trend in education.",
    },
  ];

  return (
    <section className="py-10 bg-white relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-primary font-primary-semibold text-black">
          Vels Vidyashram CBSE School in Chennai
        </h2>

        <div className="w-40 h-[1px] bg-secondary mx-auto mt-2 mb-4" />

        <p className="text-black mt-2 font-secondary font-secondary-regular">
          Vels Vidyashram took its humble birth in 2018. The founder of the
          school Dr.Ishari K.Ganesh a great visionary wanted to build up a
          school with excellence as its watchword in all aspects.
        </p>

        {/* 3 Feature Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => {
            const isHighlight = item.highlight;

            return (
              <div
                key={index}
                className={`
                  p-8 transition-all duration-300 ease-out transform
                  ${
                    isHighlight
                      ? "bg-primary shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                      : "bg-primary border border-primary/10"
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
                  <span
                    className={`h-[1px] w-16 ${
                      isHighlight ? "bg-white" : "bg-white/70"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`
                    mt-4 text-lg font-primary font-primary-semibold
                    text-left leading-snug
                    ${isHighlight ? "text-white" : "text-white"}
                  `}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                {/* Description */}
                <p
                  className={`
                    mt-6 text-sm font-secondary font-secondary-regular text-left
                    ${isHighlight ? "text-white" : "text-white"}
                  `}
                >
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="w-full bg-primary text-white py-2 mt-14 overflow-hidden">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="font-secondary font-secondary-light whitespace-nowrap"
        >
          *NIOS accredited Study Centre 190191 (courses offered: Secondary and
          senior secondary with science subjects) &nbsp;&nbsp;&nbsp;  *NIOS
          accredited Study Centre 190191 (courses offered: Secondary and senior
          secondary with science subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited
          Study Centre 190191 (courses offered: Secondary and senior secondary
          with science subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study
          Centre 190191 (courses offered: Secondary and senior secondary with
          science subjects) &nbsp;&nbsp;&nbsp; *NIOS accredited Study Centre
          190191 (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects) &nbsp;&nbsp;&nbsp;  *NIOS accredited Study Centre 190191
          (courses offered: Secondary and senior secondary with science
          subjects)
        </marquee>
      </div>
    </section>
  );
}
