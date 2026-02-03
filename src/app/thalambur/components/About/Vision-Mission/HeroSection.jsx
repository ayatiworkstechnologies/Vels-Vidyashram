"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);
  const textContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const container = textContainerRef.current;
    if (!container || isHovered || !aboutVisible) return;

    let scrollInterval;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
          // Smooth fade and reset
          container.style.scrollBehavior = 'auto';
          container.scrollTop = 0;
          // Re-enable smooth scrolling after reset
          setTimeout(() => {
            container.style.scrollBehavior = 'smooth';
          }, 50);
        } else {
          container.scrollTop += 1;
        }
      }, 40);
    };

    const timer = setTimeout(startScroll, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(scrollInterval);
    };
  }, [isHovered, aboutVisible]);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 mt-6 mb-10">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M11.47 3.84a1 1 0 0 1 1.06 0l7 4.667a1 1 0 0 1-.56 1.83H18v8a1 1 0 0 1-1 1h-4v-5h-2v5H7a1 1 0 0 1-1-1v-8H5.03a1 1 0 0 1-.56-1.83l7-4.667Z" />
              </svg>
              Home
            </Link>
          </li>

          {/* Separator */}
          <li className="text-gray-400">/</li>

          {/* Current Page */}
          <li className="text-black font-medium capitalize">About Us</li>
        </ol>
      </div>

      <section
        ref={aboutRef}
        className="relative w-full py-16 md:py-32 overflow-hidden"
      >
        {/* BACKGROUND IMAGE */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            aboutVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: "url('/thalambur/bg-2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/40 lg:bg-transparent" />
        </div>

        {/* CONTENT CARD */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div
            className={`bg-white rounded-3xl shadow-xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-1000 delay-300 ${
              aboutVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* LEFT CONTENT - Wrapper with fixed height */}
            <div className="flex-1 relative">
              <div
                ref={textContainerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                className="h-[350px] md:h-[400px] overflow-y-auto scrollbar-hide"
                style={{
                  scrollBehavior: "smooth",
                }}
              >
                <div className="space-y-6 text-gray-700 text-base leading-relaxed pr-2">
                  <p>
                    VELS Group of Institutions was established by Dr. Ishari K.
                    Ganesh, M.Com., B.L., Ph. D., in 1992 in memory of his father
                    Shri. IsariVelan.
                  </p>

                  <p>
                    Dr. Ishari K. Ganesh, with the noble aim of imparting quality
                    education, has started several colleges of higher learning over
                    the years, which includes colleges of Basic Sciences, Dental
                    Science, Paramedical Sciences, Nautical Science, Catering &
                    Hotel Management, Engineering & Technology, Teacher Training and
                    Education. We also offer practical and job oriented courses to
                    the students hailing from different economical and social
                    background. Our institutions attract students not only from
                    Tamil Nadu but from other states and overseas as well.
                  </p>

                  <p>
                    Vels International Preschool in Neelankarai,{" "}
                    <span className="text-orange-500 font-semibold">
                      ECR is ranked number 1 in India for the last 4 years owing to
                      its internationally acclaimed curriculum
                    </span>{" "}
                    – Kindle Kids and its dedication towards individual attention to
                    students.
                  </p>

                  <p>
                    Vaels International School, Injambakkam,{" "}
                    <span className="text-orange-500 font-semibold">
                      ECR offers ICSE and IGCSE curriculum and has been awarded as
                      top international school in the state
                    </span>
                    , as it exceeds the standards of International schools across
                    the world.
                  </p>

                  <hr className="my-6 border-gray-200" />

                  <p>
                    Besides its involvement in higher education, VELS Group has
                    established Vels Vidyashram, a chain of CBSE Schools since 1998.
                    The Schools have been producing excellent results in the Board
                    examinations and has been individually recognized for importance
                    to extracurricular activities, holistic development of students
                    and infrastructure.
                  </p>

                  <p>
                    Vels Vidyashram Thalambur and Vels Vidyashram Cantonment were
                    established in 2014 to provide quality education where the
                    learning takes place through observation, reflection and
                    exploration with emphasis on character development. The schools
                    provides a wide variety of co-curricular activities and
                    enrichment programmes which gives abundant opportunities for
                    children to develop their potential and excel in the areas of
                    their talent.
                  </p>

                  <p>
                    Our Group of Institutions instills the importance of lifelong
                    learning and offers programmes from Pre-KG to Ph.D., in India,
                    Singapore and United Kingdom.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`w-full max-w-[260px] lg:w-[260px] shrink-0 transition-all duration-1000 delay-600 ${
                aboutVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className=" overflow-hidden aspect-square lg:aspect-auto hover:scale-105 transition-transform duration-500">
                <Image
                  src="/thalambur/founder.webp"
                  alt="Students studying"
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

   
    </>
  );
}