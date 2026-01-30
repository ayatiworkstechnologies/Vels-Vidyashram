"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Chairman() {
  const sectionRef = useRef(null);

  const paragraphs = [
    "Education is the basis of all progress. It is for this very reason that we forayed into education, about 28 years ago. Over a decade and a half of experience has taught us that progress is possible only, if men and women are equally well-educated.",
    "The entire purpose of education is not to restrict itself to imparting bookish knowledge only but inculcate humanitarian values like wisdom, compassion, courage, humility, integrity and reliability in a student.",
    "We, just like you, believe in holistic education for your child, encompassing – academics, co-curricular activities, sports education and life-skills learning. Our endeavor is to strike a balance between state-of-the-art infrastructure and an internationally acceptable education.",
    "At Vels Vidyashram School we impart education that is based on conscience and we rear a breed of young minds possessing confidence, motivation and ever ready to take up challenges.",
    "The campus, sports and academic facilities all bear testimony to this effort. In order to promote an internationally acceptable education, our key focus has been on faculty development – providing continuous teacher training in order to deliver real value education and excellence in academics.",
    "Vels Vidyashram School encourages students to learn about themselves and their constantly changing environment, while at the same time offering support and guidance as they practice decision-making and social skills.",
    "We are confident that this school is the best place for your child. We welcome your active interest and involvement in the progress and activities of your child. We look forward to your continuous support.",
  ];

  const quote =
    "Sky is the limit. Together let us achieve more. My best wishes to all our students, staff and parents";

  const [typedText, setTypedText] = useState([]);
  const [typedQuote, setTypedQuote] = useState("");
  const [started, setStarted] = useState(false);

  /* Start animation on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Typing logic */
  useEffect(() => {
    if (!started) return;

    let pIndex = 0;
    let cIndex = 0;
    let current = "";
    let typingQuote = false;
    let qIndex = 0;

    const interval = setInterval(() => {
      // PARAGRAPH TYPING (SLOW)
      if (!typingQuote) {
        if (pIndex >= paragraphs.length) {
          // pause before quote
          typingQuote = true;
          return;
        }

        current += paragraphs[pIndex][cIndex];
        cIndex++;

        setTypedText((prev) => {
          const copy = [...prev];
          copy[pIndex] = current;
          return copy;
        });

        if (cIndex === paragraphs[pIndex].length) {
          pIndex++;
          cIndex = 0;
          current = "";
        }
      }

      // QUOTE TYPING (SLOWER & DRAMATIC)
      else {
        setTypedQuote((prev) => prev + quote[qIndex]);
        qIndex++;

        if (qIndex === quote.length) {
          clearInterval(interval);
        }
      }
    }, typingQuote ? 45 : 35); // 👈 KEY FIX

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Education is an investment…
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            {paragraphs.map((_, index) => (
              <p key={index}>
                {typedText[index]}
                {typedText[index] &&
                  typedText[index].length <
                    paragraphs[index].length && (
                    <span className="inline-block w-[2px] h-5 bg-gray-500 ml-1 animate-pulse" />
                  )}
              </p>
            ))}

            {/* QUOTE */}
            {typedQuote && (
              <div className="mt-14 text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#2b1b5a] leading-snug">
                  “{typedQuote}”
                  {typedQuote.length < quote.length && (
                    <span className="inline-block w-[3px] h-6 bg-[#2b1b5a] ml-1 animate-pulse" />
                  )}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/thalambur/education-image.jpg"
              alt="Education at Vels Vidyashram"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
