"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// CONFIGURATION FOR SPEEDS
const SPEEDS = {
  paragraph: 15, // Lower is faster
  quote: 40,     // Slower for dramatic effect
  pauseBetween: 500, // Pause after each paragraph
};

export default function Chairman() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [typedText, setTypedText] = useState([]);
  const [typedQuote, setTypedQuote] = useState("");

  const paragraphs = [
    "Education is the basis of all progress. It is for this very reason that we forayed into education, about 28 years ago. Over a decade and a half of experience has taught us that progress is possible only, if men and women are equally well-educated.",
    "The entire purpose of education is not to restrict itself to imparting bookish knowledge only but inculcate humanitarian values like wisdom, compassion, courage, humility, integrity and reliability in a student.",
    "We, just like you, believe in holistic education for your child, encompassing – academics, co-curricular activities, sports education and life-skills learning. Our endeavor is to strike a balance between state-of-the-art infrastructure and an internationally acceptable education.",
    "At Vels Vidyashram School we impart education that is based on conscience and we rear a breed of young minds possessing confidence, motivation and ever ready to take up challenges.",
    "The campus, sports and academic facilities all bear testimony to this effort. In order to promote an internationally acceptable education, our key focus has been on faculty development – providing continuous teacher training in order to deliver real value education and excellence in academics.",
    "Vels Vidyashram School encourages students to learn about themselves and their constantly changing environment, while at the same time offering support and guidance as they practice decision-making and social skills.",
    "We are confident that this school is the best place for your child. We welcome your active interest and involvement in the progress and activities of your child. We look forward to your continuous support.",
  ];

  const quote = "Sky is the limit. Together let us achieve more. My best wishes to all our students, staff and parents";

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing Logic
  useEffect(() => {
    if (!started) return;

    let pIdx = 0;
    let charIdx = 0;
    let quoteCharIdx = 0;

    const typeChar = () => {
      // 1. Handle Paragraphs
      if (pIdx < paragraphs.length) {
        const currentPara = paragraphs[pIdx];
        
        if (charIdx < currentPara.length) {
          setTypedText((prev) => {
            const newText = [...prev];
            newText[pIdx] = currentPara.slice(0, charIdx + 1);
            return newText;
          });
          charIdx++;
          setTimeout(typeChar, SPEEDS.paragraph);
        } else {
          // Finished a paragraph, move to next after a small pause
          pIdx++;
          charIdx = 0;
          setTimeout(typeChar, SPEEDS.pauseBetween);
        }
      } 
      // 2. Handle Quote
      else if (quoteCharIdx < quote.length) {
        setTypedQuote(quote.slice(0, quoteCharIdx + 1));
        quoteCharIdx++;
        setTimeout(typeChar, SPEEDS.quote);
      }
    };

    typeChar();
  }, [started]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-primary font-bold text-black mb-12 text-center">
      Education is an investment…
    </h2>

    {/* Changed to grid-cols-10 for exact 70/30 split on desktop */}
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
      
      {/* Text Container: Spans 7 out of 10 columns (70%) */}
      <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed min-h-[400px]">
        {paragraphs.map((_, index) => (
          <p key={index} className="relative font-secondary">
            {typedText[index]}
            {typedText[index] !== undefined && typedText[index].length < paragraphs[index].length && (
              <span className="inline-block w-[2px] h-5 bg-blue-600 ml-1 animate-pulse" />
            )}
          </p>
        ))}

        {typedQuote && (
          <div className="mt-14 p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#2b1b5a]">
            <p className="text-2xl md:text-3xl font-secondary font-bold text-[#2b1b5a] italic leading-snug">
              “{typedQuote}”
              {typedQuote.length < quote.length && (
                <span className="inline-block w-[3px] h-6 bg-[#2b1b5a] ml-1 animate-pulse" />
              )}
            </p>
          </div>
        )}
      </div>

      {/* Image Container: Spans 3 out of 10 columns (30%) */}
      <div className="lg:col-span-3 relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image
          src="/thalambur/education.jpg"
          alt="Education at Vels Vidyashram"
          fill
          className="object-cover" // Added object-cover to ensure the image fills the 30% width nicely
          priority
        />
      </div>
    </div>
  </div>
</section>
  );
}