"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * EducationAutoScroll
 * - image: left image (exact size via imgWidth/imgHeight)
 * - imgWidth, imgHeight: numeric px values (controls layout)
 * - speed: px per second scrolling speed (default 40)
 *
 * Behavior:
 * - On md+ screens: left image sticky (exact size), right panel auto-scrolls vertically.
 * - Loops when reaches the end (small pause on loop).
 * - Pauses when user hovers or when user interacts (mouse enters).
 * - On small screens it stacks and disables auto-scroll (letting natural page scroll).
 */

export default function EducationAutoScroll({
  image = "/dargaroad/education.png",
  heading = "Education is an investment",
  imgWidth = 508,
  imgHeight = 600,
  speed = 40, // px per second
  paragraphs = [
    `Education is the basis of all progress. It is for this very reason that we forayed into education, about 28 years ago. Over a decade and a half of experience has taught us that progress is possible only, if men and women are equally well-educated`,
    `The entire purpose of education is not to restrict itself to imparting bookish knowledge only but inculcate humanitarian values like wisdom, compassion, courage, humility, integrity and reliability in a student.`,
    `We, just like you, believe in holistic education for your child, encompassing academics, co-curricular activities, sports education and life-skills learning. Our endeavor is to strike a balance between state-of-the-art infrastructure and an internationally acceptable education.`,
    `At Vels Vidyashram School we impart education that is based on conscience and we rear a breed of young minds that are bustling with self confidence, motivation and ever ready to take up challenges.`,
    `The campus, sports and academic facilities all bear testimony to this effort. In order to promote an internationally acceptable education, our key focus has been on faculty development – providing continuous teacher training in order to deliver real value education and excellence in academics. Teachers are trained not only to teach well but are also expected to inspire confidence and trust in their students and become role models. Further, the School inculcates in the students a respect for tradition and ensures discipline and good manners.`,
    `Vels Vidyashram School encourages students to learn about themselves and their constantly changing environment, while at the same time offering support and guidance as they practice decision-making and social skills.`,
    `We are confident that this school is the best place for your child. We welcome your active interest and involvement in the progress and activities of your child. We look forward to your continuous support.`,
  ],
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const pausedRef = useRef(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMd(window.innerWidth >= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMd) return; // enable auto scroll only on md+
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // If content fits inside container, no scrolling needed.
    if (content.scrollHeight <= container.clientHeight) return;

    let running = true;
    let pauseAtLoop = 800; // ms pause at loop end
    let accumulatedPause = 0;
    let isLoopingBack = false;

    const step = (time) => {
      if (!running) return;
      if (pausedRef.current) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current; // ms
      lastTimeRef.current = time;

      // move by speed * dt (px)
      const delta = (speed * dt) / 1000;
      // scrollTop increments
      container.scrollTop += delta;

      // if reached end, pause, then smooth jump to top and continue
      if (container.scrollTop + container.clientHeight >= content.scrollHeight - 0.5) {
        // reached bottom
        // pause then reset
        pausedRef.current = true;
        setTimeout(() => {
          // smooth reset by jumping to top instantly (or can animate)
          container.scrollTop = 0;
          lastTimeRef.current = null;
          pausedRef.current = false;
          rafRef.current = requestAnimationFrame(step);
        }, pauseAtLoop);
        // stop current frame; loop will be resumed by timeout
        return;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMd, speed, paragraphs]);

  // Pause on hover / focus / interaction
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const enter = () => (pausedRef.current = true);
    const leave = () => (pausedRef.current = false);
    c.addEventListener("mouseenter", enter);
    c.addEventListener("mouseleave", leave);
    c.addEventListener("focusin", enter);
    c.addEventListener("focusout", leave);
    return () => {
      c.removeEventListener("mouseenter", enter);
      c.removeEventListener("mouseleave", leave);
      c.removeEventListener("focusin", enter);
      c.removeEventListener("focusout", leave);
    };
  }, []);

  // inline styles for exact image size and right panel height on md+
  const leftStyle = isMd ? { width: `${imgWidth}px`, height: `${imgHeight}px` } : undefined;
  const rightStyle = isMd ? { height: `${imgHeight}px` } : undefined;

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-0">
          {/* LEFT: exact-size image, sticky on md */}
          <div
            className={`flex-shrink-0 ${isMd ? "md:sticky md:top-10" : ""}`}
            style={leftStyle}
          >
            <img src={image} alt={heading} width={imgWidth} height={imgHeight} className="block w-auto h-auto" />
          </div>

          {/* RIGHT: auto-scroll container */}
          <div
            className="bg-[#231231] text-white px-6 md:px-10 py-8 flex-1"
            style={rightStyle}
          >
            <div
              ref={containerRef}
              className={`h-full ${isMd ? "overflow-auto" : ""}`}
              tabIndex={0} // allow focus to pause
              style={{ outline: "none" }}
            >
              <div ref={contentRef} className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl  text-white font-semibold leading-tight mb-3">{heading}</h2>
                <div className="w-14 h-[3px] bg-amber-300 mb-4" />
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
