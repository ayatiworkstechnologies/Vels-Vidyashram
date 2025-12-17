"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ClubActivitiesSection() {
  const scrollRef = useRef(null);
  const hoverRef = useRef(false);
  const rafRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastTime = performance.now();
    const speed = 35; // px/sec
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

  return (
    <div className="grid md:grid-cols-2 gap-12 bg-white p-10 ">
      {/* LEFT IMAGE */}
      <div className="relative h-[360px] sticky top-24  overflow-hidden">
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

          {/* CLUB ACTIVITIES */}
          <div>
            <h2 className="text-3xl font-primary font-primary-bold mb-2 border-b border-secondary pb-1 inline-block">
              Club Activities
            </h2>
            <p className="text-sm text-black font-secondary font-secondary-regular leading-relaxed mt-2">
              A series of Club Activities to promote and cultivate the talents
              of students are conducted on working Saturdays.
            </p>
          </div>

          {/* LITERARY CLUB */}
          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">Literary Club</h3>
            <p className="text-md font-primary font-primary-semibold mb-1">
              The objectives are to enhance the following skills:
            </p>
            <p className="text-md text-black font-secondary font-secondary-regular leading-relaxed mt-2">
              Oratory, Writing, Debating, Reading
            </p>
          </div>

          {/* READING CLUB */}
          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">Reading Club</h3>
            <p className="text-md text-black font-secondary font-secondary-regular leading-relaxed mt-2 ">
              The objective is to inculcate the habit of reading.
            </p>
          </div>

          {/* HEALTH & HYGIENE */}
          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Health and Hygiene
            </h3>
            <p className="text-md text-black font-secondary font-secondary-regular leading-relaxed mt-2 ">The objectives are,</p>
            <ul className="list-disc pl-5 text-sm text-black font-secondary font-secondary-regular mt-2 space-y-1">
              <li>To highlight the importance of first aid.</li>
              <li>To teach students simple first aid techniques.</li>
            </ul>
          </div>

          {/* SOCIAL SERVICE CLUB */}
          <div>
            <h3 className="text-2xl font-primary font-primary-semibold mb-4">
              Social Service Club
            </h3>
            <p className="text-md text-black font-secondary font-secondary-regular leading-relaxed mt-2">The objectives are:</p>
            <ul className="list-disc pl-5 text-sm text-black font-secondary font-secondary-regular mt-2 space-y-1">
              <li>
                To highlight that service to man is service to God.
              </li>
              <li>
                To make them aware of the harsh realities of life by taking
                them on a visit to orphanages and old age homes.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
