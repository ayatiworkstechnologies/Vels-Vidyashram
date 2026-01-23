"use client";
import { useState } from "react";
import Image from "next/image";

export default function OurMottoSection() {
  const [expandedCard, setExpandedCard] = useState(0);

  const cards = [
    {
      title: "Our Group",
      text: "A trusted group of institutions dedicated to academic excellence and values. Shaping young minds through quality education and innovation.",
      image: "/thalambur/group.png",
      showButton: true,
    },
    {
      title: "Academics",
      text: "Strong academic foundation supported by modern teaching methods and dedicated faculty.",
      image: "/thalambur/academics.png",
      showButton: true,
    },
    {
      title: "Admissions / Enquiry",
      text: "Simple, transparent admission process with guidance for parents and students.",
      image: "/thalambur/enquiry.png",
      showButton: true,
    },
    {
      title: "Activities / Events",
      text: "Cultural, sports, and extracurricular activities that nurture creativity and confidence.",
      image: "/thalambur/activities.png",
      showButton: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* TOP TEXT */}
      <div className="mb-8 md:mb-12">
        <span className="inline-block text-xs font-semibold text-secondary bg-orange-50 px-3 py-1 rounded-full mb-4">
          Our motto
        </span>

        <h2 className="text-3xl md:text-5xl font-regular font-primary text-gray-900 leading-tight max-w-2xl">
          The Motto of the School is <br />
          Wisdom is Strength.
        </h2>
      </div>

      {/* CARDS CONTAINER */}
      {/* Mobile: Vertical stack (flex-col) | Desktop: Horizontal (flex-row) */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 h-auto md:h-[360px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            isExpanded={expandedCard === index}
            onClick={() => setExpandedCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ title, text, image, showButton, isExpanded, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        shadow-lg border border-gray-100 md:border-none
        /* Mobile: fixed height per card | Desktop: flex grow/shrink */
        h-auto md:h-full
        ${isExpanded ? "md:flex-[2.5]" : "md:flex-1"}
      `}
    >
      {/* MOBILE DESIGN (One by one, Img + Content always visible) */}
      <div className="flex flex-col md:hidden bg-white">
        <div className="relative h-48 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-primary">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {text}
          </p>
          {showButton && (
            <button className="inline-flex items-center gap-3 font-semibold text-sm text-gray-900">
              Learn More
              <span className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center">
                →
              </span>
            </button>
          )}
        </div>
      </div>

      {/* DESKTOP DESIGN (Kept original logic) */}
      <div className="hidden md:block h-full w-full">
        {isExpanded ? (
          <div className="absolute inset-0 flex bg-gray-100">
            {/* LEFT CONTENT */}
            <div className="w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-primary">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {text}
                </p>
              </div>

              {showButton && (
                <button className="inline-flex items-center gap-3 font-semibold text-sm text-gray-900">
                  Learn More
                  <span className="w-10 h-10 rounded-full bg-tertiary text-white flex items-center justify-center">
                    →
                  </span>
                </button>
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ) : (
          /* COLLAPSED CARD (FULL IMAGE) */
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />

            {/* TITLE BOTTOM */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-semibold leading-snug">
                {title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}