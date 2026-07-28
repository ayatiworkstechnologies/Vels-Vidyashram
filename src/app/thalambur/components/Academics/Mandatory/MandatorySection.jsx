"use client";

const ITEMS = [
  {
    id: 1,
    title: "CBSE Mandatory Disclosure",
    pdf: "/thalambur/pdf/Mandatory-Disclosure.pdf",
  },
  {
    id: 2,
    title: "Land & Trust Certificate",
    pdf: "/thalambur/pdf/01_LAND_CERTIFICATE_2025.pdf",
  },
  {
    id: 3,
    title: "CBSE Affiliation",
    pdf: "/thalambur/pdf/03_CBSE_Affiliation.pdf",
  },
  {
    id: 4,
    title: "Self Certification",
    pdf: "/thalambur/pdf/Self-declaration.pdf",
  },
  {
    id: 5,
    title: "NOC",
    pdf: "/thalambur/pdf/05_NOC2026.pdf",
  },
  {
    id: 6,
    title: "Recognition",
    pdf: "/thalambur/pdf/06_Recoginition.pdf",
  },
  {
    id: 7,
    title: "Building Safety",
    pdf: "/thalambur/pdf/07_BuildingSafety.pdf",
  },
  {
    id: 8,
    title: "Fire Safety",
    pdf: "/thalambur/pdf/08_Fire.pdf",
  },
  {
    id: 9,
    title: "Sanitary Certificate",
    pdf: "/thalambur/pdf/sanitary-certificate.pdf",
  },
  {
    id: 10,
    title: "Calendar for Students",
    pdf: "/thalambur/pdf/10_StudentAcademicCalendar2026-27.pdf",
  },
  {
    id: 11,
    title: "Fee Structure",
    pdf: "/thalambur/pdf/11_Fee.pdf",
  },
  {
    id: 12,
    title: "SMC",
    pdf: "/thalambur/pdf/10-SMC.pdf",
  },
  {
    id: 13,
    title: "PTA Association",
    pdf: "/thalambur/pdf/13_PTA.pdf",
  },
  {
    id: 14,
    title: "Board Results",
    pdf: "/thalambur/pdf/14_Results.pdf",
  },
];

export default function MandatorySection() {
  return (
    <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
      {/* Top heading */}
      <section className="relative overflow-hidden"></section>

      {/* Documents section */}
      <section className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-6 text-center">
            <h2
              className="
                font-primary text-xl font-bold uppercase
                leading-tight text-[#2B158F]
                sm:text-2xl md:text-[27px]
              "
            >
              Documents and Information
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden border border-[#DDD8ED] md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2B158F] text-white">
                  <th
                    scope="col"
                    className="
                      w-[100px] border-r border-white/40
                      px-4 py-3 text-left
                      font-secondary text-base font-medium
                    "
                  >
                    Sl.No.
                  </th>

                  <th
                    scope="col"
                    className="
                      border-r border-white/40 px-4 py-3
                      text-left font-secondary text-base font-medium
                    "
                  >
                    Information
                  </th>

                  <th
                    scope="col"
                    className="
                      w-[175px] px-4 py-3 text-center
                      font-secondary text-base font-medium
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
                      border-b border-[#E5E1F2] bg-white
                      transition-colors duration-200
                      last:border-b-0 hover:bg-[#F8F6FF]
                    "
                  >
                    <td
                      className="
                        border-r border-[#E5E1F2] px-4 py-2.5
                        text-center font-secondary text-[16px]
                        text-gray-900
                      "
                    >
                      {index + 1}
                    </td>

                    <td
                      className="
                        border-r border-[#E5E1F2] px-4 py-2.5
                        font-secondary text-[16px] text-gray-900
                      "
                    >
                      {item.title}
                    </td>

                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          font-secondary text-[16px] font-medium
                          text-[#2B158F] underline
                          decoration-[#2B158F] underline-offset-2
                          transition-colors duration-200
                          hover:text-[#FF8700]
                          hover:decoration-[#FF8700]
                        "
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile table */}
          <div className="overflow-hidden border border-[#DDD8ED] md:hidden">
            <div className="grid grid-cols-[55px_1fr_70px] bg-[#2B158F] text-white">
              <div className="flex items-center justify-center border-r border-white/40 px-1 py-3 font-secondary text-xs font-medium">
                Sl.No.
              </div>

              <div className="flex items-center border-r border-white/40 px-3 py-3 font-secondary text-xs font-medium">
                Information
              </div>

              <div className="flex items-center justify-center px-2 py-3 text-center font-secondary text-xs font-medium">
                View
              </div>
            </div>

            {ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="
                  grid grid-cols-[55px_1fr_70px]
                  border-b border-[#E5E1F2] bg-white
                  transition-colors duration-200
                  last:border-b-0 hover:bg-[#F8F6FF]
                "
              >
                <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm text-gray-900">
                  {index + 1}
                </div>

                <div className="flex items-center border-r border-[#E5E1F2] px-3 py-3 font-secondary text-sm leading-5 text-gray-900">
                  {item.title}
                </div>

                <div className="flex items-center justify-center px-2 py-3">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-secondary text-sm font-medium
                      text-[#2B158F] underline
                      decoration-[#2B158F] underline-offset-2
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