"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    tag: "Parent",
    quote:
      "Project day at Vels was a wonderful event for the kids. It was fun filled learning experience and really a great initiative by Vels Team. My child is attending for the third consecutive year to showcase her talents. The carnival is great experience for children, every time the event is more and more innovative. Keep it up Vels.",
    name: "V Senthil Kumaran",
    role: "Father of Jeshna IA.",
    cardBg: "#f8dede",
    badgeBg: "#f39c83",
    badgeText: "#fff"
  },
  {
    tag: "Parent",
    quote:
      "EVS culmination day. It has been a really extravagant display of children organising activities. It is happy to see our child deliberating her inner energy and making it abundant. As this is happening on a regular basis, a Big Wow and sincere gratitude to the organisation & teachers for organising it. Thanks a trillion.",
    name: "Madhusudhan",
    role: "Father of Varshini 1B",
    cardBg: "#f7efb9",
    badgeBg: "#f08aa8",
    badgeText: "#fff"
  },
  {
    tag: "Parent",
    quote:
      "Parent observation week! It is a very nice initiative to bring parents to school to watch us how the class is being conducted for the kids. It was a great experience for us as a parent to know the concept of teaching in school. The practical problem, understanding methods were really unique and excellent. It helps the child to understand the concept. We are glad to be a part of Vels.",
    name: "Madhusudhan",
    role: "Father of Varsha 11B",
    cardBg: "#ead0f3",
    badgeBg: "#bb6cd7",
    badgeText: "#fff"
  },
];

export default function TestimonialsBento() {
  const [active, setActive] = useState(1);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 4000); // Slightly longer interval to allow reading full text
  };

  const goTo = (idx) => {
    if (animating || idx === active) return;
    setAnimating(true);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
      startAutoPlay();
    }, 400);
  };

  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const getPosition = (idx) => {
    if (idx === active) return "center";
    if (idx === (active - 1 + total) % total) return "left";
    return "right";
  };

  return (
    <section
      className="relative overflow-hidden py-24 px-4"
      style={{
        background:
          "linear-gradient(145deg, #0a1128 0%, #0e1a3a 50%, #080f25 100%)",
      }}
    >
      {/* ── HEADING ── */}
      <div className="relative z-10 mb-12 text-center">
        <p className="mb-3 text-xs font-bold tracking-[0.25em] uppercase text-[#ff7a00]">
          Testimonials
        </p>
        <h2
          className="text-4xl font-black text-white sm:text-5xl"
          style={{
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Explore the students experience
        </h2>
        
      </div>

      {/* ── CARD STACK ── */}
      <div
        className="relative z-10 flex items-center justify-center max-w-full overflow-visible"
        style={{ height: 480 }}
      >
        {testimonials.map((t, i) => {
          const pos = getPosition(i);
          const isCenter = pos === "center";
          const isLeft = pos === "left";

          const translateX = isCenter ? "0px" : isLeft ? "-300px" : "300px";
          const scale = isCenter ? 1 : 0.82;
          const zIndex = isCenter ? 30 : 10;
          const opacity = isCenter ? 1 : 0.35;
          const brightness = isCenter ? 1 : 0.6;

          return (
            <div
              key={i}
              onClick={() => !isCenter && goTo(i)}
              className="w-[320px] sm:w-[380px]"
              style={{
                position: "absolute",
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex,
                opacity,
                filter: `brightness(${brightness})`,
                transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
                cursor: isCenter ? "default" : "pointer",
                borderRadius: 24,
                overflow: "hidden",
                background: t.cardBg,
                padding: "28px 24px",
                boxShadow: isCenter
                  ? "0 30px 60px rgba(0,0,0,0.4)"
                  : "0 10px 20px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "380px"
              }}
            >
              {/* Card Top: Tag Badge */}
              <div style={{ marginBottom: 20 }}>
                <span
                  style={{
                    background: t.badgeBg,
                    color: t.badgeText,
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Card Content: Main Text Body */}
              <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#2d3748",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Card Bottom: Identity Metadata */}
              <div
                style={{
                  marginTop: 24,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  paddingTop: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#0a1128",
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    marginBottom: 2,
                  }}
                >
                  {t.name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#4a5568",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── NAVIGATION CONTROLS ── */}
      <div className="relative z-10 mt-6 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 999,
                background:
                  i === active ? "#ff7a00" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}