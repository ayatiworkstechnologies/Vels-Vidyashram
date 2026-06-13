"use client";

const sportsImages = [
  {
    id: 1,
    title: "Indoor Mind Sports",
    image: "/thalambur/pe-1.jpg",
  },
  {
    id: 2,
    title: "Team Achievements",
    image: "/thalambur/pe-2.jpg",
  },
  {
    id: 3,
    title: "Active Sports Training",
    image: "/thalambur/pe-3.jpg",
  },
];

const highlights = [
  "Fitness & stamina building",
  "Teamwork and discipline",
  "Indoor and outdoor games",
  "Qualified sports teachers",
];

export default function PhysicalEducationSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC] px-6 py-16 md:py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#4A2EA7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0F1B4C] md:text-6xl">
            Physical Education
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            Physical Education develops students’ competence and confidence to
            take part in a wide range of physical activities. It builds fitness,
            teamwork, discipline, strategy, and the ability to perform
            successfully both in and out of school.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content Card */}
          <div className="rounded-[36px] bg-white p-7 shadow-xl md:p-10">
            <h3 className="text-3xl font-bold text-[#0F1B4C]">
              Building confidence through movement and sport
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              Professionally qualified Physical Education teachers guide
              students through structured sports activities, skill development,
              fitness routines, and team-based learning experiences.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-[#F7F8FC] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4A2EA7] text-white">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-[#0F1B4C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-[#0F1B4C] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Focus Area
              </p>
              <h4 className="mt-2 text-2xl font-bold text-white">
                Skills, Strategy & Sportsmanship
              </h4>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid gap-6 sm:grid-cols-2">
            {sportsImages.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[30px] bg-white shadow-xl ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index === 2 ? "h-[280px]" : "h-[260px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}