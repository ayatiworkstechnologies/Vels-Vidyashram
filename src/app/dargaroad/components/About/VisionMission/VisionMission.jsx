"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    img: "/dargaroad/event-1.png",
    title: "Constitution Day <br /> Celebration",
    href: "#",
  },
  {
    img: "/dargaroad/event-2.png",
    title: "Vels plus <br />expo @ vels",
    href: "#",
  },
  {
    img: "/dargaroad/event-3.png",
    title: "Continuous Professional <br/> Development",
    href: "#",
  },
];

const videos = [
  {
    img: "/dargaroad/video-1.png",
    title: "Inter School Bhajan Competition",
    videoUrl: "https://youtu.be/1XqYAZIuuk0",
    href: "#",
  },
  {
    img: "/dargaroad/video-2.png",
    title: "Vels expo @ vels",
    videoUrl: "https://youtu.be/TSmlvNCpFZo",
    href: "#",
  },
  {
    img: "/dargaroad/video-3.png",
    title: "Dandiya Raas",
    videoUrl: "https://youtu.be/DmjUNSnGxmY",
    href: "#",
  },
];

export default function VisionMission() {
  return (
    <>
 <div className="w-full">
      {/* EVENTS */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-primary font-primary-bold">Events</h3>
          <div className="w-20 h-[1px] bg-secondary mx-auto mt-3 " />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <article
              key={i}
              className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="w-full h-auto">
                <Image
                  src={e.img}
                  alt={e.title}
                  width={419}
                  height={259}
                  className="w-full h-full "
                />
              </div>

              <div className="p-4">
                <h4
                  className="text-md font-primary font-primary-semibold mb-1"
                  dangerouslySetInnerHTML={{ __html: e.title }}
                />

                <div className="flex items-center justify-between mt-5">
                  <Link
                    href={e.href}
                    className="text-md text-tertiary font-primary font-primary-semibold flex items-center gap-2"
                  >
                    <span>know More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <div className="text-xs text-gray-300"> </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-primary font-primary-bold text-white">
              Video
            </h3>
            <div className="w-20 h-[1px] bg-secondary mx-auto mt-3" />
          </div>

          {/* VIDEO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="bg-transparent">
                {/* VIDEO CARD */}
                <div className="relative rounded-md overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                  {/* Main video image ONLY */}
                  <div className="w-full h-auto relative">
                    <Image
                      src={v.img}
                      alt={v.title}
                      width={419}
                      height={259}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Play button overlay */}
                  <a
                    href={v.videoUrl}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Play ${v.title}`}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 md:w-7 md:h-7 text-[#111827]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 3v18l15-9L5 3z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* TITLE */}
                <div className="pt-3">
                  <h4 className="text-md font-primary font-primary-semibold text-white mb-1">
                    {v.title}
                  </h4>
                </div>

                {/* KNOW MORE BUTTON */}
                <div className="flex items-center justify-between mt-5">
                  <Link
                    href={v.href}
                    className="text-md text-white font-primary font-primary-semibold flex items-center gap-2"
                  >
                    <span>know More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <div className="text-xs text-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
 
      {/* ==================== TOP BANNER ==================== */}
     
<section className="relative max-w-4xl mx-auto my-10">
  <div className="relative overflow-hidden rounded-md">
    {/* Background image with girl on the right */}
    <img
      src="/dargaroad/bg.png"
      alt="Admissions Banner"
      className="block w-full h-auto object-cover"
    />

    {/* Overlay only on LEFT HALF */}
    <div className="absolute bottom-[-55%] inset-y-0 left-0 w-[55%] flex items-center justify-center">
      <div className=" space-y-4">
        <h2 className="text-white text-base md:text-lg lg:text-xl font-primary font-primary-semibold">
          Registration for Admissions Open for 2026–27
        </h2>

        <button className="px-6 py-2 border border-white text-white text-sm font-primary hover:bg-white hover:text-black transition">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</section>









      {/* ==================== ABOUT CLUBS BLOCK ==================== */}
<section className="w-full py-10 relative bg-tertiary text-white overflow-hidden flex items-center justify-center">
{/* Overlay */}
<div className="absolute inset-0 bg-black/30" />


<div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center w-full">
<h3 className="text-2xl md:text-4xl text-white font-primary font-primary-semibold">
About Vels Vidyashram Clubs
</h3>
<div className="w-30 h-[1px] bg-secondary mt-3 mx-auto" />


<p className="mt-6 text-sm md:text-lg leading-relaxed font-primary font-primary-semibold max-w-2xl mx-auto">
A series of Club Activities to promote and cultivate the talents of<br />
students are conducted.
</p>


<div className="mt-10 flex justify-center">
<a
href="/beyond-academics#clubs"
className="inline-flex items-center justify-center px-7 py-3 border border-white text-white text-sm md:text-base font-primary font-primary-semibold hover:bg-white hover:text-black transition-colors duration-300 rounded-lg shadow-md"
>
Know More
</a>
</div>
</div>
</section>
    


    </>
   
  );
}
