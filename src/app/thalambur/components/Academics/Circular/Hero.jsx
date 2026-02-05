"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
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
          <li className="text-black font-medium capitalize">Circular</li>
        </ol>
      </div>

  

   
    </>
  );
}