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
     
      {
        id: 16,
        title: "Diwali celebration",
        thumbnail: "/thalambur/thumbnail/thum-16.jpg",
        videoUrl: "https://www.youtube.com/embed/wmZ2yCDQuhs?si=nu9Z2v3C0hHPKwCA"
      },
      {
        id: 17,
        title: "Happy Vidyarambham",
        thumbnail: "/thalambur/thumbnail/thum-17.jpg",
        videoUrl: "https://www.youtube.com/embed/Lw_NpnD95EE?si=YTEq_T7PeDuzyZYx"
      },
      {
        id: 18,
        title: "Pongal celebration 2026",
        thumbnail: "/thalambur/thumbnail/thum-18.jpg",
        videoUrl: "https://www.youtube.com/embed/m45zSDBJ6Ng?si=xJGsIKGxztIRWInj"
 
      },
      {
        id: 19,
        title: "Interschool sports meet 2025-26",
        thumbnail: "/thalambur/thumbnail/thum-19.jpg",
        videoUrl: "https://www.youtube.com/embed/oXcKnuoKoYA?si=NEWQkq_w0h4Q-JXj"
      },
      {
        id: 20,
        title: "Sandhai celebration",
        thumbnail: "/thalambur/thumbnail/thum-20.jpg",
        videoUrl: "https://www.youtube.com/embed/2GvMTDKJVEA?si=TeweIstQyM4pFE4C"
      },
      {
        id: 21,
        title: "Grandparents Day ",
        thumbnail: "/thalambur/thumbnail/thum-21.jpg",
        videoUrl: "https://www.youtube.com/embed/h7hY0DPRs4Y?si=84eh1lbIBjWyRVDv"
 
      },
      {
        id: 22,
        title: "KG- Purple day celebration ",
        thumbnail: "/thalambur/thumbnail/thum-22.jpg",
        videoUrl: "https://www.youtube.com/embed/rLNjxQA00xM?si=UAEIjSI9_XiBcF8k"
     
      },
      {
        id: 23,
        title: "Melange 2025- Interschool competition ",
        thumbnail: "/thalambur/thumbnail/thum-23.jpg",
        videoUrl: "https://www.youtube.com/embed/PYcqsCFPjgM?si=r8kTmGCRN4kdrTMy"
      },
      {
        id: 24,
        title: "International Yoga day",
        thumbnail: "/thalambur/thumbnail/thum-24.jpg",
        videoUrl: "https://www.youtube.com/embed/CDfbwO-t768?si=F9aklcYL_c4IWZJB"
      },
      {
        id: 25,
        title: "Voices of tomorrow: Student council nominees 2025",
        thumbnail: "/thalambur/thumbnail/thum-25.jpg",
        videoUrl: "https://www.youtube.com/embed/3A9ITGjlJFw?si=0-mcYAZCCSH-PoG1"
      },
      {
        id: 26,
        title: "Step Orientation",
        thumbnail: "/thalambur/thumbnail/thum-26.jpg",
        videoUrl: "https://www.youtube.com/embed/TaDylNNBBfc?si=9LLjsl_v7FBFT2nE"
     
      },
      {
        id: 27,
        title: "Personal safety education session",
        thumbnail: "/thalambur/thumbnail/thum-27.jpg",
        videoUrl: "https://www.youtube.com/embed/d07ky5ErJSs?si=bobuw53eX9YGnj7e"
      },
      {
        id: 28,
        title: "World scholar's cup - Chennai round 2025",
        thumbnail: "/thalambur/thumbnail/thum-28.jpg",
        videoUrl: "https://www.youtube.com/embed/WPh7s296eYw?si=zSB-YMELED5Sv1mZ"
      },
      {
        id: 29,
        title: "Parent orientation program 2025-26",
        thumbnail: "/thalambur/thumbnail/thum-29.jpg",
        videoUrl: "https://www.youtube.com/embed/6HvW_x8hTNo?si=raRcolcwTssop9hI"
      },
      {
        id: 30,
        title: "Salangai poojai",
        thumbnail: "/thalambur/thumbnail/thum-30.jpg",
        videoUrl: "https://www.youtube.com/embed/kBTEl5PdV-4?si=bJzD4NfGAgXUQlhE"
      },
      {
        id: 31,
        title: "KG Graduation day 2025 & Annual proficiency award cerem",
        thumbnail: "/thalambur/thumbnail/thum-31.jpg",
        videoUrl: "https://www.youtube.com/embed/KtybeWopBQU?si=SMr5cieWxl4nQd4e"
      }
 
       
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
      category: "Parents Testimonials during Grade 1 and 2 Culmination Day",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          thumbnail: "/thalambur/thumbnail/pa-1.jpg",
          videoUrl: "https://www.youtube.com/embed/HQ6m896ITKU?si=rWbhrjbZQMvTNYsq"
        },
          {
          id: 2,
          thumbnail: "/thalambur/thumbnail/pa-2.jpg",
          videoUrl: "https://www.youtube.com/embed/x1fqOjjOd4A?si=twzzPHcnFeeJQmXs"
        },
          {
          id: 3,  
          thumbnail: "/thalambur/thumbnail/pa-3.jpg",
          videoUrl: "https://www.youtube.com/embed/0zeoiCyu9zQ?si=ySITJhctN3fvkQTA"
        },

        {
          id: 4,
          thumbnail: "/thalambur/thumbnail/pa-4.jpg",
          videoUrl: "https://www.youtube.com/embed/9o8dw-ps4wI?si=yUiDNTcdvACylbPd"
        },
         
      ]
    },
    {
      category: "Parents Testimonials during KG Culmination Day",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          title: "Annual Day Parent Review",
          thumbnail: "/thalambur/thumbnail/pa-5.jpg",
          videoUrl: "https://www.youtube.com/embed/k3moS-HLG0s?si=a255blOXerkMtdWz"
        },
        {
          id: 2,
        
          thumbnail: "/thalambur/thumbnail/pa-6.jpg",
          videoUrl: "https://www.youtube.com/embed/F160MLpfsx0?si=95RNj3d95v89zkzu"
        },
        {
          id: 3,
          thumbnail: "/thalambur/thumbnail/pa-7.jpg",
          videoUrl: "https://www.youtube.com/embed/EL4G5HYmVQQ?si=WwNb81K3hjjrxzHD"
        },
      ]
    },
     {
      category: "Grand Parents Testimonials",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          
          thumbnail: "/thalambur/thumbnail/pa-8.jpg",
          videoUrl: "https://www.youtube.com/embed/ESa8Ql5Uil8?si=DVnuWpGWpMRPDiaq"
        },
        {
          id: 2,
        
          thumbnail: "/thalambur/thumbnail/pa-9.jpg",
          videoUrl: "https://www.youtube.com/embed/89wS-6RkrLI?si=c_xj4DneQEzdrN1G"
        },
        {
          id: 3,
          thumbnail: "/thalambur/thumbnail/pa-10.jpg",
          videoUrl: "https://www.youtube.com/embed/1B2ItFirTkg?si=jUPGHlbaYXNJCIrZ"
        },
        {
          id: 4,
          thumbnail: "/thalambur/thumbnail/pa-11.jpg",
          videoUrl: "https://www.youtube.com/embed/x3VQ6kCON14?si=aNFsYdsmOz4osWRV"
        },
        {
          id: 5,
          thumbnail: "/thalambur/thumbnail/pa-12.jpg",
          videoUrl: "https://www.youtube.com/embed/GPQC1HdeIzg?si=HyX7OcHgwrTXCHTY"
        },
      ]
    },
        {
      category: "Parent Testimonials",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          
          thumbnail: "/thalambur/thumbnail/pa-13.jpg",
          videoUrl: "https://www.youtube.com/embed/Le89xfMjlak?si=9Nf5O4yYfFIJ_y8K"
        },
        {
          id: 2,
        
          thumbnail: "/thalambur/thumbnail/pa-14.jpg",
          videoUrl: "https://www.youtube.com/embed/dd8RTTRaB7E?si=m3ztpt5iUgtn-1GL"
        },
        {
          id: 3,
          thumbnail: "/thalambur/thumbnail/pa-15.jpg",
          videoUrl: "https://www.youtube.com/embed/ey0k8IX6EWg?si=KbSJH8k5VuhuA7aL"
        },
        {
          id: 4,
          thumbnail: "/thalambur/thumbnail/pa-16.jpg",
          videoUrl: "https://www.youtube.com/embed/tlY4h-64d5M?si=NNUnJVRoiw41IGpQ"
        },
        {
          id: 5,
          thumbnail: "/thalambur/thumbnail/pa-17.jpg",
          videoUrl: "https://www.youtube.com/embed/hN2ZN-9NTqA?si=AHNlnKckeD5cMDyG"
        },
         {
          id: 6,
          thumbnail: "/thalambur/thumbnail/pa-18.jpg",
          videoUrl: "https://www.youtube.com/embed/IYc9yhmtu5M?si=mTQDbqCyroKdopbT"
        },
         {
          id: 7,
          thumbnail: "/thalambur/thumbnail/pa-19.jpg",
          videoUrl: "https://www.youtube.com/embed/pCgxX3pwGUA?si=s9rcjOQeqPV1aTTa"
        },
         {
          id: 8,
          thumbnail: "/thalambur/thumbnail/pa-20.jpg",
          videoUrl: "https://www.youtube.com/embed/-_8wKbk2bo4?si=8UarC7Zbv_vbKj9S"
        },
         {
          id: 9,
          thumbnail: "/thalambur/thumbnail/pa-21.jpg",
          videoUrl: "https://www.youtube.com/embed/4Aacp5u7EqM?si=kN05Sup7bGqqQVXS"
        },
         {
          id: 10,
          thumbnail: "/thalambur/thumbnail/pa-22.jpg",
          videoUrl: "https://www.youtube.com/embed/HQxZa3tjJBI?si=_W4gJwacoZ3sAPZ8"
        },
         {
          id: 11,
          thumbnail: "/thalambur/thumbnail/pa-23.jpg",
          videoUrl: "https://www.youtube.com/embed/frYed5_rnzA?si=-QJo8qfwjId0Ew-0"
        },
      ]
    },
  ]
};

/* =========================
   COMPONENT
========================= */

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All Years");

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
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

  /* FIX YOUTUBE AUTOPLAY */
  const getAutoplayUrl = (url) => {
    return url.includes("?")
      ? `${url}&autoplay=1`
      : `${url}?autoplay=1`;
  };

  return (
    <>
      {/* ================= PAGE ================= */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 md:p-12 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-black text-slate-800">
            Video Gallery
          </h1>
        </div>

        {/* TABS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">

          <div className="inline-flex bg-white p-1.5 rounded-2xl border-2 border-slate-200 shadow-lg">

            {/* VIDEOS TAB */}
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
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                />
              )}
            </button>

            {/* TESTIMONIALS TAB */}
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl ${
                activeTab === "testimonials" ? "text-white" : "text-slate-600"
              }`}
            >
              <span className="relative z-10">
                Testimonials
              </span>
              {activeTab === "testimonials" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                />
              )}
            </button>
          </div>

          {/* YEAR FILTER */}
          {activeTab === "videos" && (
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border-2 border-slate-200 py-3 pl-11 pr-10 rounded-xl font-bold text-sm"
              >
                {years.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>

              <Calendar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                size={18}
              />
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
            </div>
          )}
        </div>

        {/* ================= VIDEOS ================= */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideo(video)}
                className="relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-64 group"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h3 className="text-white font-bold">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= TESTIMONIALS ================= */}
        {activeTab === "testimonials" && (
          <div className="space-y-14">
            {VIDEO_DATA.testimonialSections.map((section, index) => (
              <div key={index}>

                {/* CATEGORY TITLE */}
                <div className="border-l-4 border-primary pl-4 mb-6 flex items-center gap-3">
                  <span className="text-primary">
                    {section.icon}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    {section.category}
                  </h2>
                </div>

                {/* CATEGORY VIDEOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openVideo(item)}
                      className="relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-64 group"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                        <h3 className="text-white font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= VIDEO POPUP ================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              onClick={closeVideo}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-[92vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="w-full h-[260px] md:h-[320px] lg:h-[380px] bg-black">
                  <iframe
                    src={getAutoplayUrl(selectedVideo.videoUrl)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    Experience our school moments.
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
