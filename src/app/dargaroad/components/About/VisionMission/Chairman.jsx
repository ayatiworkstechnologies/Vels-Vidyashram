"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// CONFIGURATION FOR SPEEDS
const SPEEDS = {
  paragraph: 15,
  quote: 40,
  pauseBetween: 500,
};

export default function Chairman() {
  const sectionRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [typedText, setTypedText] = useState([]);
  const [typedQuote, setTypedQuote] = useState("");

  // =====================================================
  // CHAIRMAN CONTENT
  // =====================================================

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

  // =====================================================
  // INTERNATIONAL POLICY DATA
  // =====================================================

  const philosophyItems = [
    {
      title: "Value their roots",
      text: "By appreciating Indian culture, heritage, languages, and traditions.",
    },
    {
      title: "Explore the world",
      text: "By engaging with diverse countries, cultures, communities, and global issues.",
    },
    {
      title: "Develop intercultural competence",
      text: "Through empathy, respect, and openness to diversity.",
    },
    {
      title: "Collaborate globally",
      text: "Using both physical and digital platforms to connect with peers worldwide.",
    },
    {
      title: "Think globally, act locally",
      text: "By applying learning to real-world challenges and community issues.",
    },
  ];

  const commitmentItems = [
    {
      number: "01",
      title: "Embedding International Dimensions",
      text: "Integrate global perspectives across curriculum, co-curricular activities, and projects to foster awareness of cultures, languages, and global issues.",
    },
    {
      number: "02",
      title: "Developing Intercultural Understanding",
      text: "Encourage students to respect their own cultural identity while cultivating empathy and appreciation for diverse backgrounds.",
    },
    {
      number: "03",
      title: "Facilitating International Collaboration",
      text: "Provide age-appropriate opportunities for students and teachers to collaborate with schools, organizations, and communities worldwide.",
    },
    {
      number: "04",
      title: "Nurturing Global Citizenship",
      text: "Strengthen communication, collaboration, creativity, critical thinking, and problem-solving skills to enable constructive engagement with global challenges.",
    },
    {
      number: "05",
      title: "Promoting Reciprocal Learning",
      text: "Ensure international activities are based on mutual respect, with students learning with others rather than merely about others.",
    },
    {
      number: "06",
      title: "Supporting Educators and Community",
      text: "Empower teachers to integrate international perspectives into pedagogy and encourage parents and the wider community to support global learning initiatives.",
    },
    {
      number: "07",
      title: "Continuous Review and Development",
      text: "Regularly evaluate international practices to ensure they remain meaningful, inclusive, age-appropriate, and aligned with educational objectives.",
    },
  ];

  const aspirationItems = [
    "Rooted in values and identity",
    "Open to diverse perspectives",
    "Confident in collaboration across cultures",
    "Committed to contributing positively to society",
  ];

  // =====================================================
  // INTERSECTION OBSERVER
  // =====================================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // =====================================================
  // TYPING EFFECT
  // =====================================================

  useEffect(() => {
    if (!started) return;

    let pIdx = 0;
    let charIdx = 0;
    let quoteCharIdx = 0;

    const typeChar = () => {
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
          pIdx++;
          charIdx = 0;

          setTimeout(typeChar, SPEEDS.pauseBetween);
        }
      } else if (quoteCharIdx < quote.length) {
        setTypedQuote(quote.slice(0, quoteCharIdx + 1));

        quoteCharIdx++;

        setTimeout(typeChar, SPEEDS.quote);
      }
    };

    typeChar();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* =====================================================
            CHAIRMAN MESSAGE
        ====================================================== */}

        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-black mb-12 text-center">
            Chairman&apos;s Message
          </h2>

          <h4 className="text-xl md:text-2xl font-primary font-bold text-black mb-7">
            Education is an investment…
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-14 items-start">

            {/* LEFT SIDE - TEXT */}
            <div className="lg:col-span-6 space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="relative font-secondary">
                  {typedText[index]}

                  {typedText[index] !== undefined &&
                    typedText[index].length < paragraph.length && (
                      <span className="inline-block w-[2px] h-5 bg-blue-600 ml-1 animate-pulse" />
                    )}
                </p>
              ))}

              {/* QUOTE */}
              {typedQuote && (
                <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#2b1b5a]">
                  <p className="text-xl md:text-2xl font-secondary font-bold text-[#2b1b5a] italic leading-relaxed">
                    “{typedQuote}”

                    {typedQuote.length < quote.length && (
                      <span className="inline-block w-[3px] h-6 bg-[#2b1b5a] ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="lg:col-span-4">
              <div className="relative h-[420px] md:h-[500px] lg:h-[560px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/dargaroad/founder.webp"
                  alt="Chairman - Vels Vidyashram"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTERNATIONAL POLICY
        ====================================================== */}

        <div className="w-full pt-4 md:pt-8">

          {/* MAIN TITLE */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-primary font-bold text-[#2b1b5a] uppercase tracking-[0.08em] mb-5">
              International Policy
            </h2>
          </div>

          {/* =====================================================
              POSITION + EDUCATIONAL PHILOSOPHY
          ====================================================== */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-stretch">

            {/* POSITION STATEMENT */}
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 md:p-8 lg:p-9 shadow-sm">

              <h3 className="text-2xl md:text-3xl font-primary font-bold text-black mb-6">
                Position Statement
              </h3>

              <div className="space-y-5 text-gray-700 font-secondary text-base md:text-lg leading-relaxed">
                <p>
                  At Vels Vidyashram, we believe education must prepare learners
                  to thrive in an interconnected world. Guided by our vision of
                  holistic development and our mission to nurture responsible,
                  empathetic, and active global citizens, we integrate
                  international perspectives across all aspects of learning.
                </p>

                <p>
                  Students are encouraged to explore diverse cultures and
                  viewpoints while remaining deeply rooted in their own values,
                  identity, and heritage.
                </p>

                <p>
                  International learning is not treated as an occasional
                  activity but as a continuous, embedded dimension of our
                  curriculum, co-curricular programmes, and community
                  engagement.
                </p>
 
                <p>
                  Through meaningful experiences, students develop the
                  knowledge, skills, and dispositions required to contribute
                  positively to both local and global communities.
                </p>
              </div>
            </div>

            {/* EDUCATIONAL PHILOSOPHY */}
            <div className="h-full rounded-2xl border border-[#2B158F]/10 bg-[#f8f7fc] p-6 md:p-8 lg:p-9">

              <h3 className="text-2xl md:text-3xl font-primary font-bold text-black mb-5">
                Educational Philosophy
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-7">
                International learning at Vels Vidyashram enables students to:
              </p>

              <div className="space-y-4">
                {philosophyItems.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-xl bg-white border border-gray-200 p-4 md:p-5 transition-all duration-300 hover:shadow-md"
                  >
                   <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[#2b1b5a] shrink-0" />

                    <div>
                      <h4 className="font-primary font-bold text-black text-base md:text-lg">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 font-secondary text-sm md:text-base leading-relaxed mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              COMMITMENTS
          ====================================================== */}

          <div className="mt-16 md:mt-20">

            <div className="mb-8">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#2b1b5a]">
                Our Approach
              </span>

              <h3 className="text-2xl md:text-3xl font-primary font-bold text-black mt-2">
                Commitments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {commitmentItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    index === 6
                      ? "md:col-span-2 xl:col-span-3"
                      : ""
                  }`}
                >
                  <div
                    className={`flex ${
                      index === 6
                        ? "flex-col sm:flex-row sm:items-start"
                        : "items-start"
                    } gap-4`}
                  >
                    {/* NUMBER */}
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#2B158F] text-white flex items-center justify-center font-bold text-sm">
                      {item.number}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h4 className="font-primary font-bold text-black text-lg mb-2">
                        {item.title}
                      </h4>

                      <p className="font-secondary text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              ASPIRATIONS
          ====================================================== */}

          <div className="mt-16 md:mt-20 overflow-hidden rounded-3xl border border-[#2b1b5a]/10 bg-white shadow-[0_18px_50px_rgba(43,27,90,0.08)]">

            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* LEFT SIDE */}
              <div className="lg:col-span-2 p-7 md:p-10 lg:p-12 bg-gradient-to-br from-[#fff8ef] to-[#fffdf9] border-b lg:border-b-0 lg:border-r border-[#f3e6d8]">

                <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-[#ff7a00] mb-4">
                  Aspirations
                </span>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-[#231942] leading-tight">
                  Developing Responsible Global Citizens
                </h3>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-3 p-7 md:p-10 lg:p-12 bg-[#faf9fd]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                  {aspirationItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#2b1b5a]/10 bg-white px-5 py-4 text-[#2d2940] text-sm md:text-base font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">

                        <span className="mt-2 w-2 h-2 rounded-full bg-[#ff7a00] shrink-0" />

                        <span>{item}</span>
                      </div>
                    </div>
                  ))}

                </div>

                <p className="text-[#5f5a70] font-secondary text-base md:text-lg leading-relaxed">
                  Our ultimate goal is not only to teach students about the world
                  but to help them{" "}
                  <span className="font-bold text-[#2b1b5a]">
                    understand, connect with, and contribute to it.
                  </span>{" "}
                  International learning strengthens our commitment to holistic
                  education and supports our mission of developing responsible,
                  active global citizens with human values.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}