"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function ClubActivitiesSection() {
  /* ===== HOOKS AT TOP ===== */
  const isMobile = useIsMobile();

  const scrollRef = useRef(null);
  const hoverRef = useRef(false);
  const rafRef = useRef(null);
  const pauseRef = useRef(false);

  /* ===== DESKTOP AUTO SCROLL (UNCHANGED) ===== */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastTime = performance.now();
    const speed = 35;
    const pauseAtBottom = 1500;

    const animate = (time) => {
      if (!hoverRef.current && !pauseRef.current) {
        const delta = time - lastTime;
        el.scrollTop += (speed * delta) / 1000;

        const maxScroll = el.scrollHeight - el.clientHeight;
        if (el.scrollTop >= maxScroll) {
          pauseRef.current = true;
          setTimeout(() => {
            el.scrollTop = 0;
            pauseRef.current = false;
          }, pauseAtBottom);
        }
      }

      lastTime = time;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ================================================= */
  /* ================= MOBILE DESIGN ================= */
  /* ================================================= */
  if (isMobile) {
    return (
      <section className="space-y-10">
        {/* IMAGE */}
        <div className="relative h-[220px] w-full">
          <Image
            src="/dargaroad/curriculum.jpg"
            alt="Club Activities"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT CARDS */}
        <div className="px-4 space-y-5">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-primary font-primary-bold mb-2">
              Club Activities
            </h2>
            <p className="text-sm leading-relaxed">
              A series of Club Activities to promote and cultivate the talents
              of students are conducted on working Saturdays.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-primary font-primary-semibold mb-2">
              Literary Club
            </h3>
            <p className="text-sm leading-relaxed">
              Oratory, Writing, Debating, Reading
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-primary font-primary-semibold mb-2">
              Reading Club
            </h3>
            <p className="text-sm leading-relaxed">
              The objective is to inculcate the habit of reading.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-primary font-primary-semibold mb-2">
              Health and Hygiene
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>To highlight the importance of first aid.</li>
              <li>To teach students simple first aid techniques.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-primary font-primary-semibold mb-2">
              Social Service Club
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Service to man is service to God.</li>
              <li>
                Visits to orphanages and old age homes to understand life
                realities.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  /* ================================================= */
  /* ============ DESKTOP (UNCHANGED) ================= */
  /* ================================================= */

  return (
    <div className="grid md:grid-cols-2 gap-12 bg-white p-10 ">
      {/* LEFT IMAGE */}
      <div className="relative h-[360px] sticky top-24 overflow-hidden">
        <Image
          src="/dargaroad/curriculum.jpg"
          alt="Club Activities"
          fill
          className=""
        />
      </div>

      {/* RIGHT AUTO-SCROLL TEXT */}
      <div
        ref={scrollRef}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        className="h-[360px] overflow-y-scroll pr-6"
      >
        <div className="space-y-10 pb-32">
          <div>
            <h2 className="text-3xl font-primary font-primary-bold mb-2 border-b border-secondary pb-1 inline-block">
              Club Activities
            </h2>
            <p className="text-sm text-black font-secondary font-secondary-regular leading-relaxed mt-2">
              A series of Club Activities to promote and cultivate the talents
              of students are conducted on working Saturdays.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Literary Club
            </h3>
            <p className="text-md font-primary font-primary-semibold mb-1">
              The objectives are to enhance the following skills:
            </p>
            <p className="text-md text-black font-secondary leading-relaxed mt-2">
              Oratory, Writing, Debating, Reading
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Reading Club
            </h3>
            <p className="text-md text-black font-secondary leading-relaxed mt-2">
              The objective is to inculcate the habit of reading.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Health and Hygiene
            </h3>
            <p className="text-md text-black font-secondary leading-relaxed mt-2">
              The objectives are,
            </p>
            <ul className="list-disc pl-5 text-sm text-black font-secondary mt-2 space-y-1">
              <li>To highlight the importance of first aid.</li>
              <li>To teach students simple first aid techniques.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Social Service Club
            </h3>
            <p className="text-md text-black font-secondary leading-relaxed mt-2">
              The objectives are:
            </p>
            <ul className="list-disc pl-5 text-sm text-black font-secondary mt-2 space-y-1">
              <li>Service to man is service to God.</li>
              <li>
                Visits to orphanages and old age homes to understand realities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
