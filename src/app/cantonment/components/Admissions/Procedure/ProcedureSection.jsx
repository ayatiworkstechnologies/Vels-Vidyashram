"use client";

const admissionData = [
  {
    title: "Pre KG - Class 1",
    campus: "Vels Vidyashram",
    location: "Cantonment Campus",
    contact: "99625 31941",
  },
  {
    title: "PlayGroup—XII",
    campus: "Vels Vidyashram",
    location: "Pallavaram Campus",
    contact: "044 – 2266 2508 / 78248 30871",
  },
  {
    title: "PlayGroup—XII",
    campus: "Vels Vidyashram",
    location: "Dharga Road",
    contact: "044 – 2266 2510 / 99625 06349",
  },
];

export default function ProcedureSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#d7def3] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#30408d] shadow-sm">
            Enrolment 2026
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            Admissions Open
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b7aa8] sm:text-base md:text-lg">
            The admission in Vels Vidyashram will be done as per the vacancy
            position every year and for any other details kindly contact
            Principal in person.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {admissionData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[#dfe5f5] bg-white p-6 shadow-[0_10px_30px_rgba(26,43,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,43,91,0.10)]"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#253b8f] via-[#4964c4] to-[#7a92e8]" />

              {/* Card Number */}
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2ff] text-sm font-bold text-[#24377f]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-[#f5f7ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6070a8]">
                  Campus Info
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1d2b6b]">
                {item.title}
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff8a00]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1f2f6f]">
                      {item.campus}
                    </p>
                    <p className="mt-1 text-sm text-[#6d7aa6]">
                      School Campus
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff8a00]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1f2f6f]">
                      {item.location}
                    </p>
                    <p className="mt-1 text-sm text-[#6d7aa6]">Location</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff8a00]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1f2f6f]">
                      Contact No:
                    </p>
                    <a
                      href={`tel:${item.contact.replace(/[^0-9+]/g, "")}`}
                      className="mt-1 inline-block text-sm text-[#5d73b5] transition hover:text-[#253b8f]"
                    >
                      {item.contact}
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#3250b7] via-[#8ea6ef] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}