"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ================= DATA ================= */
const SLIDES_ROW_1 = [
  ["/dargaroad/img-1.jpg", "/dargaroad/img-2.jpg"],
  ["/dargaroad/img-3.jpg", "/dargaroad/img-4.jpg"],
  ["/dargaroad/img-5.jpg", "/dargaroad/img-1.jpg"],
];

const SLIDES_ROW_2 = [
  ["/dargaroad/mda.jpg", "/dargaroad/kare.jpg"],
  ["/dargaroad/school-vels.jpg", "/dargaroad/nios.jpg"],
];

const FEATURES_TEXT = [
  {
    title: "Special Features",
    desc:
      "Apart from academics, activities related to curriculum are also given importance. These activities are conducted keeping in mind the present system of education that is becoming global.",
  },
  {
    title: "Maths Lab",
    desc:
      "Learning by doing forms the basis for all activities in the lab. The Maths Lab enhances concept stabilisation using laboratory activities.",
  },
  {
    title: "Smart Class",
    desc:
      "The technology enabled programme ensures effective and enriching learning experiences. The regularly updated inputs and a wide range of video clippings are used.",
  },
  {
    title: "Clean Class Award",
    desc:
      "A clean class promotes positivity in the learning atmosphere. The Clean Class Award is given on a term basis.",
  },
  {
    title: "Artificial Intelligence Lab",
    desc:
      "Hands-on training in Robotics, Artificial Intelligence and coding prepares students for future innovation.",
  },
];

/* ================= MOBILE DETECTOR ================= */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function SpecialFeaturesSection() {
  /* ===== ALL HOOKS AT TOP (VERY IMPORTANT) ===== */
  const isMobile = useIsMobile();

  const [activeRow1, setActiveRow1] = useState(0);
  const [activeRow2, setActiveRow2] = useState(0);

  const scrollRef = useRef(null);
  const hoverRef = useRef(false);
  const rafRef = useRef(null);

  /* ===== DESKTOP AUTO SCROLL ===== */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let last = performance.now();
    const speed = 20;

    const animate = (time) => {
      if (!hoverRef.current) {
        el.scrollTop += ((time - last) * speed) / 1000;
        const max = el.scrollHeight - el.clientHeight;
        if (el.scrollTop >= max) el.scrollTop = 0;
      }
      last = time;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const Pagination = ({ total, active, onChange, align = "left" }) => (
    <div
      className={`flex gap-4 mt-6 text-sm tracking-[0.3em] ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className="cursor-pointer text-lg text-[#3A2C92]"
        >
          {active === idx ? String(idx + 1).padStart(2, "0") : "-"}
        </button>
      ))}
    </div>
  );

  /* ================================================= */
  /* ================= MOBILE UI ===================== */
  /* ================================================= */
  if (isMobile) {
    return (
      <section className="space-y-12">
        <div className="relative h-[220px] w-full">
          <Image
            src="/dargaroad/curriculum.jpg"
            alt="Special Features"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-4 space-y-4">
          {FEATURES_TEXT.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-primary font-primary-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="px-4 space-y-4">
          {[...SLIDES_ROW_1.flat(), ...SLIDES_ROW_2.flat()].map((src, i) => (
            <div
              key={i}
              className="relative h-[200px] w-full overflow-hidden rounded-md"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ================================================= */
  /* ============ DESKTOP (UNCHANGED) ================= */
  /* ================================================= */

  return (
    <section className="space-y-24">
      {/* ================= TOP SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-12 bg-white p-10">
        <div className="relative h-[360px] sticky top-24 overflow-hidden">
          <Image
            src="/dargaroad/curriculum.jpg"
            alt="Special Features"
            fill
            className="object-cover"
          />
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
          className="h-[360px] overflow-y-scroll pr-4"
        >
          <div className="space-y-8 pb-24">
            {FEATURES_TEXT.map((item, i) => (
              <div key={i}>
                {item.title === "Special Features" ? (
                  <div className="mb-4">
                    <h2 className="text-3xl font-primary font-primary-bold">
                      {item.title}
                    </h2>
                    <div className="h-[1px] w-24 bg-secondary mt-2" />
                  </div>
                ) : (
                  <h3 className="text-2xl font-primary font-primary-semibold text-black mb-1">
                    {item.title}
                  </h3>
                )}

                <p className="text-sm font-secondary text-black leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ROW 1 ================= */}
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="hidden md:block text-[56px] font-primary font-primary-extrabold mx-auto text-[#D8D8D8]">
          Special <br /> Features
        </div>

        <div className="md:col-span-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeRow1 * 100}%)` }}
            >
              {SLIDES_ROW_1.map((pair, i) => (
                <div key={i} className="min-w-full flex gap-8">
                  {pair.map((src, j) => (
                    <div key={j} className="relative h-[220px] w-1/2">
                      <Image src={src} alt="" fill />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Pagination
            total={SLIDES_ROW_1.length}
            active={activeRow1}
            onChange={setActiveRow1}
          />
        </div>
      </div>

      {/* ================= ROW 2 ================= */}
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeRow2 * 100}%)` }}
            >
              {SLIDES_ROW_2.map((pair, i) => (
                <div key={i} className="min-w-full flex gap-8">
                  {pair.map((src, j) => (
                    <div key={j} className="relative h-[220px] w-1/2">
                      <Image src={src} alt="" fill />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Pagination
            total={SLIDES_ROW_2.length}
            active={activeRow2}
            onChange={setActiveRow2}
            align="right"
          />
        </div>

        <div className="hidden md:block text-[56px] font-primary font-primary-extrabold mx-auto text-[#D8D8D8]">
          Special <br /> Features
        </div>
      </div>
    </section>
  );
}
