"use client";

const ITEMS = [
  {
    id: 1,
    title: "Mandatory Disclosure",
    pdf: "/pallavaram/mandatory-disclosure/Mandatory_public_disclosure.pdf",
  },
  {
    id: 2,
    title: "Affiliation",
    pdf: "/pallavaram/pdf/affiliation.pdf",
  },
  {
    id: 3,
    title: "NOC",
    pdf: "/pallavaram/pdf/noc.pdf",
  },
  {
    id: 4,
    title: "Trust",
    pdf: "/pallavaram/pdf/trust.pdf",
  },
  {
    id: 6,
    title: "Recognition",
    pdf: "/pallavaram/pdf/recognition.pdf",
  },
  {
    id: 7,
    title: "Building",
    pdf: "/pallavaram/pdf/building.pdf",
  },
  {
    id: 8,
    title: "Fire Certificate",
    pdf: "/pallavaram/mandatory-disclosure/FIRE_CERTIFICATE.pdf",
  },
  {
    id: 9,
    title: "Sanitary",
    pdf: "/pallavaram/pdf/SANITARY.pdf",
  },
  {
    id: 10,
    title: "Self Certification",
    pdf: "/pallavaram/pdf/self-certificate.pdf",
  },
  {
    id: 11,
    title: "Fee Structure",
    pdf: "/pallavaram/pdf/fee-structure.pdf",
  },
  {
    id: 12,
    title: "Calendar",
    pdf: "/pallavaram/pdf/calendar.pdf",
  },
  {
    id: 13,
    title: "SMC",
    pdf: "/pallavaram/pdf/smc.pdf",
  },
  {
    id: 14,
    title: "PTA",
    pdf: "/pallavaram/pdf/pta.pdf",
  },
  {
    id: 15,
    title: "Results",
    pdf: "/pallavaram/pdf/RESULTS.pdf",
  },
  {
    id: 16,
    title: "Self Affidavit",
    pdf: "/pallavaram/pdf/self-affidavit.pdf",
  },
  {
    id: 17,
    title: "TC Sample",
    pdf: "/pallavaram/pdf/TC-Sample.pdf",
  },
];

export default function MandatorySection() {
  return (
    <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
      {/* Mandatory Disclosure Banner */}
      <section className="relative overflow-hidden"></section>

      {/* Documents section */}
      <section className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-6 text-center sm:mb-7">
            <h2
              className="
                font-primary text-xl font-bold uppercase
                leading-tight text-[#2B158F]
                sm:text-2xl md:text-[27px]
              "
            >
              Documents and Information
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#FF8700]" />
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-sm border border-[#DDD8ED] shadow-[0_10px_35px_rgba(43,21,143,0.08)] md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2B158F] text-white">
                  <th
                    scope="col"
                    className="
                      w-[100px] border-r border-white/30
                      px-4 py-3.5 text-left
                      font-secondary text-base font-semibold
                    "
                  >
                    Sl.No.
                  </th>

                  <th
                    scope="col"
                    className="
                      border-r border-white/30
                      px-4 py-3.5 text-left
                      font-secondary text-base font-semibold
                    "
                  >
                    Information
                  </th>

                  <th
                    scope="col"
                    className="
                      w-[175px] px-4 py-3.5 text-center
                      font-secondary text-base font-semibold
                    "
                  >
                    View Documents
                  </th>
                </tr>
              </thead>

              <tbody>
                {ITEMS.map((item, index) => (
                  <tr
                    key={item.id}
                    className="
                      group border-b border-[#E5E1F2] bg-white
                      transition-colors duration-200
                      last:border-b-0 hover:bg-[#F7F5FF]
                    "
                  >
                    <td
                      className="
                        border-r border-[#E5E1F2] px-4 py-3
                        text-center font-secondary text-[16px]
                        font-medium text-[#2B158F]
                      "
                    >
                      {index + 1}
                    </td>

                    <td
                      className="
                        border-r border-[#E5E1F2] px-4 py-3
                        font-secondary text-[16px] text-[#4D4A58]
                      "
                    >
                      {item.title}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center justify-center gap-1.5
                          font-secondary text-[16px] font-semibold
                          text-[#2B158F] underline
                          decoration-[#2B158F]
                          underline-offset-4
                          transition-all duration-200
                          hover:text-[#FF8700]
                          hover:decoration-[#FF8700]
                        "
                      >
                        View

                        <svg
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile table */}
          <div className="overflow-hidden rounded-sm border border-[#DDD8ED] shadow-[0_8px_25px_rgba(43,21,143,0.08)] md:hidden">
            {/* Mobile table header */}
            <div className="grid grid-cols-[55px_1fr_72px] bg-[#2B158F] text-white">
              <div className="flex items-center justify-center border-r border-white/30 px-1 py-3.5 font-secondary text-xs font-semibold">
                Sl.No.
              </div>

              <div className="flex items-center border-r border-white/30 px-3 py-3.5 font-secondary text-xs font-semibold">
                Information
              </div>

              <div className="flex items-center justify-center px-2 py-3.5 text-center font-secondary text-xs font-semibold">
                View
              </div>
            </div>

            {/* Mobile table rows */}
            {ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="
                  grid grid-cols-[55px_1fr_72px]
                  border-b border-[#E5E1F2] bg-white
                  transition-colors duration-200
                  last:border-b-0 hover:bg-[#F7F5FF]
                "
              >
                <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm font-medium text-[#2B158F]">
                  {index + 1}
                </div>

                <div className="flex items-center border-r border-[#E5E1F2] px-3 py-3 font-secondary text-sm leading-5 text-[#4D4A58]">
                  {item.title}
                </div>

                <div className="flex items-center justify-center px-2 py-3">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-secondary text-sm font-semibold
                      text-[#2B158F] underline
                      decoration-[#2B158F]
                      underline-offset-4
                      transition-colors duration-200
                      hover:text-[#FF8700]
                      hover:decoration-[#FF8700]
                    "
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}