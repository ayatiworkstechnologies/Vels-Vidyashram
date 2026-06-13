"use client";

const galleryImages = [
  {
    id: 1,
    title: "Interactive Learning",
    image: "/pallavaram/digi-1.jpg",
  },
  {
    id: 2,
    title: "Smart Classroom",
    image: "/pallavaram/digi-2.jpg",
  },
  {
    id: 3,
    title: "Activity Based Learning",
    image: "/pallavaram/digi-3.jpg",
  },
  {
    id: 4,
    title: "Digital Teaching",
    image: "/pallavaram/digi-1.jpg",
  },
];

export default function DigitalClassroomPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC]">
      {/* Banner */}
      <section className="relative overflow-hidden bg-[#24126A] px-6 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Vels Vidyashram
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Digital Classroom
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Modern smart classroom learning with interactive boards, visual
            teaching methods, and activity-based education.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Smart Learning Environment
            </span>

            <h2 className="text-3xl font-bold leading-tight text-[#0F1B4C] md:text-5xl">
              Learning made more visual, engaging and interactive
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Our digital classrooms help students understand concepts through
              visual presentations, smart boards, animations, and interactive
              learning tools. This approach improves attention, participation,
              and subject clarity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Interactive smart boards",
                "Visual learning support",
                "Student-friendly teaching",
                "Modern classroom experience",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4A2EA7] text-white">
                    ✓
                  </div>

                  <h3 className="font-semibold text-[#0F1B4C]">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Modern Gallery - Fixed */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative h-[260px] overflow-hidden rounded-[28px] bg-white shadow-xl md:h-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-white p-8 shadow-xl md:p-12">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-[#4A2EA7]">01</h3>
              <p className="mt-3 font-semibold text-[#0F1B4C]">
                Better Concept Clarity
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#4A2EA7]">02</h3>
              <p className="mt-3 font-semibold text-[#0F1B4C]">
                Improved Student Focus
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#4A2EA7]">03</h3>
              <p className="mt-3 font-semibold text-[#0F1B4C]">
                Engaging Classroom Sessions
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}