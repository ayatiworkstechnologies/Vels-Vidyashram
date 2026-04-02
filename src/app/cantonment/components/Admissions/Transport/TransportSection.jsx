"use client";

const routes = [
  "Pammal",
  "Pozhichalur",
  "Pallavaram",
  "Chrompet",
  "Keelkattalai",
  "Madipakkam",
  "Zamin Pallavaram",
];

export default function TransportSection() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Image */}
          <div className="overflow-hidden rounded-[18px] bg-white shadow-sm">
            <img
              src="/cantonment/trans.jpg"
              alt="School transport"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="rounded-[18px] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-center text-[15px] leading-8 text-[#6a79a8] sm:text-[16px]">
              Well organized transport system to ply students to and fro. A safe
              journey is ensured by well supervised system. Child&apos;s comfort
              is prioritised and the child is taken care by van assistants.
            </p>

            <div className="mt-8 border-t border-[#d9dfef] pt-6">
              <h3 className="text-center text-[24px] font-bold text-[#2d3f8f]">
                Route:
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {routes.map((route, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-[12px] border border-[#dde3f2] bg-[#f8faff] px-4 py-3 text-center text-[15px] font-medium text-[#6a79a8] transition hover:border-[#2d3f8f] hover:text-[#2d3f8f]"
                  >
                    {route}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}