"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X, ChevronDown, Calendar, GraduationCap } from "lucide-react";

const VIDEO_DATA = {
  videosByYear: {
    "2025 - 2026": [
      {
        id: 1,
        title: "Independence day celebration ",
        thumbnail: "/thalambur/thumbnail/thum-1.jpg",
        videoUrl: "https://www.youtube.com/embed/PaQUt0qDKyo?si=HjVBJxIKdQkVlTY_"
      },
      {
        id: 2,
        title: "KG- Yellow day celebration ",
        thumbnail: "/thalambur/thumbnail/thum-2.jpg",
        videoUrl: "https://www.youtube.com/embed/Ib3Cr8KOxOQ?si=g5wP7RSzGDNk2TTW"
      },
      {
        id: 3,
        title: "KG- Red day celebration",
        thumbnail: "/thalambur/thumbnail/thum-3.jpg",
        videoUrl: "https://www.youtube.com/embed/AVH_Dkse7LY?si=adTVbrSBeQ3LjvEC"
      },
      {
        id: 4,
        title: "Empowering educators through STEM",
        thumbnail: "/thalambur/thumbnail/thum-4.jpg",
        videoUrl: "https://www.youtube.com/embed/wia-jhd6dTA?si=OkT91GpEw7DpBjLa"
      },
      {
        id: 5,
        title: "No Bag day ",
        thumbnail: "/thalambur/thumbnail/thum-5.jpg",
        videoUrl: "https://www.youtube.com/embed/zSJivDnKOBM?si=8xqNiMbnCKyrCA0L"
      },
      {
        id: 6,
        title: "Investiture ceremony",
        thumbnail: "/thalambur/thumbnail/thum-6.jpg",
        videoUrl: "https://www.youtube.com/embed/rkxadX1MFa8?si=SPeHF_OSe_5lFGYQ"
      },
      {
        id: 7,
        title: "Campus visit to Vels Medical College & Hospital",
        thumbnail: "/thalambur/thumbnail/thum-7.jpg",
        videoUrl: "https://www.youtube.com/embed/_IxOrTmWF4Y?si=YXND2SdpVG4h-W-S"
      },
      {
        id: 8,
        title: "Father's Day celebration",
        thumbnail: "/thalambur/thumbnail/thum-8.jpg",
        videoUrl: "https://www.youtube.com/embed/jFrVGTsUFsQ?si=aqCrdY-wEo5ra5jp"
      },
      {
        id: 9,
        title: "Vels Football club Inauguration",
        thumbnail: "/thalambur/thumbnail/thum-9.jpg",
        videoUrl: "https://www.youtube.com/embed/fPgGO-yCNWE?si=EiLl1TqIDA9Oie6q"
      },
      {
        id: 10,
        title: "No-Bag Day 2025",
        thumbnail: "/thalambur/thumbnail/thum-10.jpg",
        videoUrl: "https://www.youtube.com/embed/aMH9OWNBmww?si=iLziC4utO1v3rAcY"
      },
   
      {
        id: 11,
        title: "EVS Culmination day Grade I & II",
        thumbnail: "/thalambur/thumbnail/thum-11.jpg",
        videoUrl: "https://www.youtube.com/embed/sbImD_yjKJc?si=ILy7kA9A1nU7GNMQ"
      },
      {
        id: 12,
        title: "KG- Culmination day 2025 ",
        thumbnail: "/thalambur/thumbnail/thum-12.jpg",
        videoUrl: "https://www.youtube.com/embed/R5KPASt5FLQ?si=DkIQs70ZQXk47ThQ"
     
      },
      {
         id: 13,
        title: "Grade IX-XII field trip ",
        thumbnail: "/thalambur/thumbnail/thum-13.jpg",
        videoUrl: "https://www.youtube.com/embed/-TvogdGuf40?si=3XFfla0QsHCdxr05"
 
      },
      {
        id: 14,
        title: "Grade VI-VIII field trip ",
        thumbnail: "/thalambur/thumbnail/thum-14.jpg",
        videoUrl: "https://www.youtube.com/embed/4zc-NoB6e-0?si=NoY7htZ4IAQVt6Oi"
      },
      {
        id: 15,
        title: "Grade III-V field trip",
        thumbnail: "/thalambur/thumbnail/thum-15.jpg",
        videoUrl: "https://www.youtube.com/embed/eNWYoOH6jG8?si=36Dt8pajlOa9b_Co"
      },
     
      // {
      //   id: 16,
      //   title: "Diwali celebration",
      //   thumbnail: "/thalambur/thumbnail/thum-16.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 17,
      //   title: "Happy Vidyarambham",
      //   thumbnail: "/thalambur/thumbnail/thum-17.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 18,
      //   title: "Pongal celebration 2026",
      //   thumbnail: "/thalambur/thumbnail/thum-18.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
 
      // },
      // {
      //   id: 19,
      //   title: "Interschool sports meet 2025-26",
      //   thumbnail: "/thalambur/thumbnail/thum-19.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 20,
      //   title: "Sandhai celebration",
      //   thumbnail: "/thalambur/thumbnail/thum-20.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 21,
      //   title: "Grandparents Day ",
      //   thumbnail: "/thalambur/thumbnail/thum-21.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
 
      // },
      // {
      //   id: 22,
      //   title: "KG- Purple day celebration ",
      //   thumbnail: "/thalambur/thumbnail/thum-22.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
     
      // },
      // {
      //   id: 23,
      //   title: "Melange 2025- Interschool competition ",
      //   thumbnail: "/thalambur/thumbnail/thum-23.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 24,
      //   title: "International Yoga day",
      //   thumbnail: "/thalambur/thumbnail/thum-24.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 25,
      //   title: "Voices of tomorrow: Student council nominees 2025",
      //   thumbnail: "/thalambur/thumbnail/thum-25.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 26,
      //   title: "Step Orientation",
      //   thumbnail: "/thalambur/thumbnail/thum-26.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
     
      // },
      // {
      //   id: 27,
      //   title: "Personal safety education session",
      //   thumbnail: "/thalambur/thumbnail/thum-27.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 28,
      //   title: "World scholar's cup - Chennai round 2025",
      //   thumbnail: "/thalambur/thumbnail/thum-28.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 29,
      //   title: "Parent orientation program 2025-26",
      //   thumbnail: "/thalambur/thumbnail/thum-29.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 30,
      //   title: "Salangai poojai",
      //   thumbnail: "/thalambur/thumbnail/thum-30.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // },
      // {
      //   id: 31,
      //   title: "KG Graduation day 2025 & Annual proficiency award cerem",
      //   thumbnail: "/thalambur/thumbnail/thum-31.jpg",
      //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      // }
 
       
    ],
 
    "2024 - 2025": [
      {
        id: 11,
        title: "Campus Tour",
        thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 12,
        title: "Annual Sports Day",
        thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 13,
        title: "Christmas Celebration",
        thumbnail: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 14,
        title: "School Assembly",
        thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 15,
        title: "Music Competition",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },
 
  testimonialSections: [
    {
      category: "Grade 1 and 2 Culmination Day",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 101,
          parentName: "Mrs. Priya Sharma",
          testimonial:
            "The school has provided an excellent environment for my son's overall development.",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    }
  ]
};

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All Years");

  /* LOCK BODY SCROLL WHEN POPUP OPEN */
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedVideo]);

  /* YEAR LIST */
  const years = useMemo(() => {
    return ["All Years", ...Object.keys(VIDEO_DATA.videosByYear)];
  }, []);

  /* FILTER VIDEOS */
  const filteredVideos = useMemo(() => {
    if (selectedYear === "All Years") {
      return Object.values(VIDEO_DATA.videosByYear).flat();
    }
    return VIDEO_DATA.videosByYear[selectedYear] || [];
  }, [selectedYear]);

  const openVideo = (video) => setSelectedVideo(video);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <>
      {/* PAGE CONTENT */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 md:p-12 max-w-7xl mx-auto font-sans">

        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-black text-slate-800 font-primary">
            Video Gallery
          </h1>
        </div>

        {/* TABS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 font-primary">
          <div className="hidden md:block w-48"></div>

          <div className="inline-flex bg-white p-1.5 rounded-2xl border-2 border-slate-200 shadow-lg">
            <button
              onClick={() => setActiveTab("videos")}
              className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl ${
                activeTab === "videos" ? "text-white" : "text-slate-600"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play size={18} /> Videos
              </span>
              {activeTab === "videos" && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-xl" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl ${
                activeTab === "testimonials" ? "text-white" : "text-slate-600"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Testimonials
              </span>
              {activeTab === "testimonials" && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-xl" />
              )}
            </button>
          </div>

          {/* YEAR FILTER */}
          <div className={`${activeTab === "videos" ? "" : "opacity-0 pointer-events-none"}`}>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border-2 border-slate-200 py-3 pl-11 pr-10 rounded-xl font-bold text-sm"
              >
                {years.map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>
        </div>

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                onClick={() => openVideo(video)}
                className="relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-64"
              >
                <img src={video.thumbnail} className="h-full w-full object-cover" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TESTIMONIALS */}
        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEO_DATA.testimonialSections[0].items.map(item => (
              <div
                key={item.id}
                onClick={() => openVideo(item)}
                className="relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-64"
              >
                <img src={item.image} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GLOBAL BLUR POPUP */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            style={{ position: "fixed", inset: 0, zIndex: 999999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              onClick={closeVideo}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)"
              }}
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-[92vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="w-full h-[260px] md:h-[320px] lg:h-[380px] bg-black">
                  <iframe
                    src={selectedVideo.videoUrl + "?autoplay=1"}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">
                    {selectedVideo.title || selectedVideo.parentName}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {selectedVideo.testimonial || "Experience our school moments."}
                  </p>
                </div>

                <button
                  onClick={closeVideo}
                  className="absolute top-3 right-3 bg-black text-white rounded-full p-2"
                >
                  <X size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
