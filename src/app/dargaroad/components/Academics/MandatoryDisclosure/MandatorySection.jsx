"use client";

const ITEMS = [
  {
    id: 1,
    title: "Mandatory Disclosure",
    pdf: "/dargaroad/pdf/1_MANDATORYPUBLICDISCLOSURE2026-27.pdf",
  },
  {
    id: 2,
    title: "Affiliations",
    pdf: "/dargaroad/pdf/AFFILIATION.pdf",
  },
  {
    id: 3,
    title: "NOC",
    pdf: "/dargaroad/pdf/NOC.pdf",
  },
  {
    id: 4,
    title: "Trust",
    pdf: "/dargaroad/pdf/TRUST.pdf",
  },
  {
    id: 5,
    title: "Building",
    pdf: "/dargaroad/pdf/Building.pdf",
  },
  {
    id: 6,
    title: "Fire",
    pdf: "/dargaroad/pdf/FIRE_AND_RESCUE_NOC.pdf",
  },
  {
    id: 7,
    title: "Sanitary",
    pdf: "/dargaroad/pdf/sanitary-certificate-new.pdf",
  },
  {
    id: 8,
    title: "FEE structure",
    pdf: "/dargaroad/pdf/fee-structure.pdf",
  },
  {
    id: 9,
    title: "Calendar",
    pdf: "/dargaroad/pdf/academic-calendar.pdf",
  },
  {
    id: 10,
    title: "SMC",
    pdf: "/dargaroad/pdf/Smc-new.pdf",
  },
  {
    id: 11,
    title: "Recognition",
    pdf: "/dargaroad/pdf/CERTIFICATE_OF_RECOGNITION.pdf",
  },
  {
    id: 12,
    title: "PTA",
    pdf: "/dargaroad/pdf/PTA - 2026-27.pdf",
  },
  {
    id: 13,
    title: "Result",
    pdf: "/dargaroad/pdf/result-new.pdf",
  },
  {
    id: 14,
    title: "Self Darga Road",
    pdf: "/dargaroad/pdf/Self-DargaRoad.pdf",
  },
  {
    id: 15,
    title: "Self Affidavit",
    pdf: "/dargaroad/pdf/self-affidavit.pdf",
  },
  {
    id: 16,
    title: "Tc Sample",
    pdf: "/dargaroad/pdf/Transfer-Certificate-2023-2024.pdf",
  },
  {
    id: 17,
    title: "Land Certificate",
    pdf: "/dargaroad/pdf/land-certificate.pdf",
  },
];

export default function SchoolInfoPage() {
  return (
    <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
      {/* Top heading design */}
      <section className="relative overflow-hidden"></section>

      {/* Information section */}
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
                  last:border-b-0
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