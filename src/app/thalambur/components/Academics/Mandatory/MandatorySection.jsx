"use client";

const ITEMS = [
  { id: 1,  title: "CBSE Mandatory Disclosure",     pdf: "/thalambur/pdf/Mandatory-Disclosure.pdf" },
  { id: 2,  title: "Land & Trust Certificate",       pdf: "/thalambur/pdf/01_LAND_CERTIFICATE_2025.pdf" },
  { id: 3,  title: "CBSE Affiliation",               pdf: "/thalambur/pdf/03_CBSE_Affiliation.pdf" },
  { id: 4,  title: "Self Certification",             pdf: "/thalambur/pdf/Self_certificate.pdf" },
  { id: 5,  title: "NOC",                            pdf: "/thalambur/pdf/05_NOC.pdf" },
  { id: 6,  title: "Recognition",                    pdf: "/thalambur/pdf/06_Recoginition.pdf" },
  { id: 7,  title: "Building Safety",                pdf: "/thalambur/pdf/07_BuildingSafety.pdf" },
  { id: 8,  title: "Fire Safety",                    pdf: "/thalambur/pdf/08_Fire.pdf" },
  { id: 9,  title: "Sanitary Certificate",           pdf: "/thalambur/pdf/SANITATION_2026.pdf" },
  { id: 10, title: "Calendar for Students",          pdf: "/thalambur/pdf/10_StudentAcademicCalendar2026-27.pdf" },
  { id: 11, title: "Fee Structure",                  pdf: "/thalambur/pdf/11_Fee.pdf" },
  { id: 12, title: "SMC",                            pdf: "/thalambur/pdf/12_SMC.pdf" },
  { id: 13, title: "PTA Association",                pdf: "/thalambur/pdf/13_PTA.pdf" },
  { id: 14, title: "Board Results",                  pdf: "/thalambur/pdf/14_Results.pdf" },
  { id: 15, title: "Strength Details",               pdf: "/thalambur/pdf/15_Students_Strength.pdf" },
  {
    id: 16,
    type: "teacher-group",
    title: "Teachers Details",
    subItems: [
      { label: "a. PGT", pdf: "/thalambur/pdf/LIST_OF_TEACHERS-PGT.pdf" },
      { label: "b. TGT", pdf: "/thalambur/pdf/LIST_OF_TEACHERS-TGT.pdf" },
      { label: "c. PRT", pdf: "/thalambur/pdf/LIST_OF_TEACHERS-PRT.pdf" },
    ],
  },
  { id: 17, title: "SPECIAL EDUCATOR: Ms. ANIS FATHIMA" },
  { id: 18, title: "COUNSELING & WELLNESS TEACHER : Ms. FATHIMA ROSHAN M" },
  { id: 19, title: "CAREER COUNSELOR : Ms. SUBHALAKSHMI S" },
];

function ViewLink({ href, size = "base" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        font-secondary font-medium
        text-[#2B158F] underline decoration-[#2B158F] underline-offset-2
        transition-colors duration-200
        hover:text-[#FF8700] hover:decoration-[#FF8700]
        ${size === "sm" ? "text-sm" : "text-[16px]"}
      `}
    >
      View
    </a>
  );
}

export default function MandatorySection() {
  return (
    <main className="min-h-screen bg-white pb-14 sm:pb-16 lg:pb-20">
      <section className="relative overflow-hidden" />

      <section className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-[860px]">

          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="font-primary text-xl font-bold uppercase leading-tight text-[#2B158F] sm:text-2xl md:text-[27px]">
              Documents and Information
            </h2>
          </div>

          {/* ════════════════════════════════════════
              DESKTOP TABLE
          ════════════════════════════════════════ */}
          <div className="hidden overflow-hidden border border-[#DDD8ED] md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2B158F] text-white">
                  <th className="w-[100px] border-r border-white/40 px-4 py-3 text-left font-secondary text-base font-medium">
                    Sl.No.
                  </th>
                  <th className="border-r border-white/40 px-4 py-3 text-left font-secondary text-base font-medium">
                    Information
                  </th>
                  <th className="w-[175px] px-4 py-3 text-center font-secondary text-base font-medium">
                    View Documents
                  </th>
                </tr>
              </thead>

              <tbody>
                {ITEMS.map((item, index) => {
                  const serial = index + 1;

                  /* ── Teacher group ── */
                  if (item.type === "teacher-group") {
                    return (
                      <>
                        {/* Parent row: serial | "Teachers Details" (spans Info+View) */}
                        <tr
                          key={`${item.id}-parent`}
                          className="border-b border-[#E5E1F2] bg-white"
                        >
                          <td className="border-r border-[#E5E1F2] px-4 py-2.5 text-center font-secondary text-[16px] text-gray-900">
                            {serial}
                          </td>
                          <td
                            colSpan={2}
                            className="px-4 py-2.5 font-secondary text-[16px] font-semibold text-gray-900"
                          >
                            {item.title}
                          </td>
                        </tr>

                        {/* Sub-rows: empty serial | a./b./c. label | View */}
                        {item.subItems.map((sub, si) => (
                          <tr
                            key={`${item.id}-sub-${si}`}
                            className="border-b border-[#E5E1F2] bg-[#FAFAFE] transition-colors duration-200 last:border-b-0 hover:bg-[#F3F0FF]"
                          >
                            {/* Empty serial cell to align with parent */}
                            <td className="border-r border-[#E5E1F2] px-4 py-2.5 text-center font-secondary text-[16px] text-gray-400">
                              &nbsp;
                            </td>
                            {/* Indented sub-label */}
                            <td className="border-r border-[#E5E1F2] py-2.5 pl-10 pr-4 font-secondary text-[15px] text-gray-700">
                              {sub.label}
                            </td>
                            {/* View link */}
                            <td className="px-4 py-2.5 text-center">
                              <ViewLink href={sub.pdf} />
                            </td>
                          </tr>
                        ))}
                      </>
                    );
                  }

                  /* ── Normal row with PDF ── */
                  if (item.pdf) {
                    return (
                      <tr
                        key={item.id}
                        className="border-b border-[#E5E1F2] bg-white transition-colors duration-200 last:border-b-0 hover:bg-[#F8F6FF]"
                      >
                        <td className="border-r border-[#E5E1F2] px-4 py-2.5 text-center font-secondary text-[16px] text-gray-900">
                          {serial}
                        </td>
                        <td className="border-r border-[#E5E1F2] px-4 py-2.5 font-secondary text-[16px] text-gray-900">
                          {item.title}
                        </td>
                        <td className="px-4 py-2.5 text-center">
                          <ViewLink href={item.pdf} />
                        </td>
                      </tr>
                    );
                  }

                  /* ── No-PDF row (merged Info + View) ── */
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-[#E5E1F2] bg-white transition-colors duration-200 last:border-b-0 hover:bg-[#F8F6FF]"
                    >
                      <td className="border-r border-[#E5E1F2] px-4 py-2.5 text-center font-secondary text-[16px] text-gray-900">
                        {serial}
                      </td>
                      <td
                        colSpan={2}
                        className="px-4 py-2.5 font-secondary text-[16px] text-gray-900"
                      >
                        {item.title}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ════════════════════════════════════════
              MOBILE TABLE
          ════════════════════════════════════════ */}
          <div className="overflow-hidden border border-[#DDD8ED] md:hidden">

            {/* Mobile header */}
            <div className="grid grid-cols-[44px_1fr_60px] bg-[#2B158F] text-white">
              <div className="flex items-center justify-center border-r border-white/40 px-1 py-3 font-secondary text-xs font-medium">
                No.
              </div>
              <div className="flex items-center border-r border-white/40 px-3 py-3 font-secondary text-xs font-medium">
                Information
              </div>
              <div className="flex items-center justify-center px-2 py-3 text-center font-secondary text-xs font-medium">
                View
              </div>
            </div>

            {/* Mobile rows */}
            {ITEMS.map((item, index) => {
              const serial = index + 1;

              /* ── Teacher group ── */
              if (item.type === "teacher-group") {
                return (
                  <div key={item.id} className="border-b border-[#E5E1F2] last:border-b-0">

                    {/* Parent row */}
                    <div className="grid grid-cols-[44px_1fr] bg-white">
                      <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm text-gray-900">
                        {serial}
                      </div>
                      <div className="flex items-center px-3 py-3 font-secondary text-sm font-semibold leading-5 text-gray-900">
                        {item.title}
                      </div>
                    </div>

                    {/* Sub-rows */}
                    {item.subItems.map((sub, si) => (
                      <div
                        key={si}
                        className="grid grid-cols-[44px_1fr_60px] border-t border-[#E5E1F2] bg-[#FAFAFE] transition-colors duration-200 hover:bg-[#F3F0FF]"
                      >
                        {/* Empty serial cell */}
                        <div className="border-r border-[#E5E1F2]" />
                        {/* Sub-label */}
                        <div className="flex items-center border-r border-[#E5E1F2] py-2.5 pl-5 pr-3 font-secondary text-sm leading-5 text-gray-700">
                          {sub.label}
                        </div>
                        {/* View link */}
                        <div className="flex items-center justify-center px-2 py-2.5">
                          <ViewLink href={sub.pdf} size="sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              /* ── Normal row with PDF ── */
              if (item.pdf) {
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-[44px_1fr_60px] border-b border-[#E5E1F2] bg-white transition-colors duration-200 last:border-b-0 hover:bg-[#F8F6FF]"
                  >
                    <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm text-gray-900">
                      {serial}
                    </div>
                    <div className="flex items-center border-r border-[#E5E1F2] px-3 py-3 font-secondary text-sm leading-5 text-gray-900">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-center px-2 py-3">
                      <ViewLink href={item.pdf} size="sm" />
                    </div>
                  </div>
                );
              }

              /* ── No-PDF row ── */
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[44px_1fr] border-b border-[#E5E1F2] bg-white transition-colors duration-200 last:border-b-0 hover:bg-[#F8F6FF]"
                >
                  <div className="flex items-center justify-center border-r border-[#E5E1F2] px-1 py-3 font-secondary text-sm text-gray-900">
                    {serial}
                  </div>
                  <div className="flex items-center px-3 py-3 font-secondary text-sm leading-5 text-gray-900">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}