"use client";

const labs = [
  {
    id: "01",
    title: "Physics Lab",
    image: "/thalambur/physics.jpg",
    description:
      "A well-equipped physics lab that helps students understand theories through experiments, observation, and practical application.",
  },
  {
    id: "02",
    title: "Chemistry Lab",
    image: "/thalambur/chemistry.jpg",
    description:
      "A safe and modern chemistry lab designed to encourage curiosity, scientific inquiry, and hands-on learning.",
  },
  {
    id: "03",
    title: "Biology Lab",
    image: "/thalambur/biology.jpg",
    description:
      "A structured biology lab with models, specimens, and equipment to help students explore life science concepts clearly.",
  },
  {
    id: "04",
    title: "Computer Lab",
    image: "/thalambur/computer.png",
    description:
      "A technology-enabled computer lab with sufficient systems and resources for digital learning and skill development.",
  },
  {
    id: "05",
    title: "English Lab",
    image: "/thalambur/english.jpg",
    description:
      "An engaging language lab that improves communication, vocabulary, listening, speaking, and reading skills.",
  },
  {
    id: "06",
    title: "Maths Lab",
    image: "/thalambur/maths.jpg",
    description:
      "A creative mathematics lab where students learn concepts through activities, patterns, puzzles, and practical models.",
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC]">
      {/* Banner */}
      <section className="relative overflow-hidden bg-[#24126A] px-6 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_35%)] opacity-20" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Vels Vidyashram
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Laboratories
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Modern laboratories designed to make learning practical, engaging,
            and discovery-driven.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Practical Learning Spaces
            </span>

            <h2 className="text-3xl font-bold leading-tight text-[#0F1B4C] md:text-5xl">
              Explore, experiment and learn through experience
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Our laboratories provide students with the right environment to
              observe, test, analyse, and understand concepts beyond textbooks.
            </p>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#24126A] shadow-md">
                  {lab.id}
                </span>

                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold text-white drop-shadow-md">
                  {lab.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-gray-600">
                  {lab.description}
                </p>

                <div className="mt-6 h-[1px] w-full bg-gray-100" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0F1B4C]">
                    Hands-on Learning
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A2EA7] text-white transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#0F1B4C] p-8 text-center shadow-xl md:p-14">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Learning becomes stronger when students experience it
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Our lab facilities help students build confidence, curiosity, and
            practical understanding across science, technology, language, and
            mathematics.
          </p>
        </div>
      </section>
    </main>
  );
}