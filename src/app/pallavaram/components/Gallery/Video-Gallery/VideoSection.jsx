"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X, ChevronDown, Calendar, GraduationCap } from "lucide-react";

const VIDEO_DATA = {
  videosByYear: {
    "2025 - 2026": [
      {
        id: 1,
        title: "Onam Celebrations",
        thumbnail: "/pallavaram/thumbnail/thum-1.jpg",
        videoUrl: "https://www.youtube.com/embed/B3NGTQ7zcyk?si=9R_TbAaV4a-ilYnb"
      },
      {
        id: 2,
        title: "International Yoga Day 2025",
        thumbnail: "/pallavaram/thumbnail/thum-2.jpg",
        videoUrl: "https://www.youtube.com/embed/uhgHrQHOgdw?si=3xkcf-CNcfCurJ9I"
      },
      {
        id: 3,
        title: "Vels Kite day",
        thumbnail: "/pallavaram/thumbnail/thum-3.jpg",
        videoUrl: "https://www.youtube.com/embed/Zzpso9Av7rs?si=3pJu7YErMCU5AX6j"
      },
      {
        id: 4,
        title: "VELS Father’s Day Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-4.jpg",
        videoUrl: "https://www.youtube.com/embed/VlXLN0TalIM?si=lx8TnMu0ZGp6smoG"
      },
      {
        id: 5,
        title: "Investiture Ceremony",
        thumbnail: "/pallavaram/thumbnail/thum-5.jpg",
        videoUrl: "https://www.youtube.com/embed/-o34BlupXgY?si=EdxCphnYpCealqEm"
      },
      {
        id: 6,
        title: "Speech by Chairman sir",
        thumbnail: "/pallavaram/thumbnail/thum-6.jpg",
        videoUrl: "https://www.youtube.com/embed/7tAP43D_meY?si=da30iAW3UEtwT0zm"
      },
      {
        id: 7,
        title: "KINDERGARTEN GRADUATION DAY CELEBRATION 2023-24",
        thumbnail: "/pallavaram/thumbnail/thum-7.jpg",
        videoUrl: "https://www.youtube.com/embed/4q_DuWXhi7U?si=5FeX6pqoc9YRP4MC"
      },
      {
        id: 8,
        title: "Quarterly e-Magazine Edition-2",
        thumbnail: "/pallavaram/thumbnail/thum-8.jpg",
        videoUrl: "https://www.youtube.com/embed/WklqnLDp93k?si=MgWW-9Din5WrrXXv"
      },
      {
        id: 9,
        title: "Children's Day",
        thumbnail: "/pallavaram/thumbnail/thum-9.jpg",
        videoUrl: "https://www.youtube.com/embed/6_84LHVUo64?si=z6shModB9RIDcBL6"
      },
      {
        id: 10,
        title: "Diwali Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-10.jpg",
        videoUrl: "https://www.youtube.com/embed/yZdE__E3UZQ?si=XYJypNXsu8K3lEZ4"
      },
   
      {
        id: 11,
        title: "Diwali Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-11.jpg",
        videoUrl: "https://www.youtube.com/embed/8lpiYDhnsW4?si=t3cW9vOLqG1jVKlJ"
      },
      {
        id: 12,
        title: "Dandiya Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-12.jpg",
        videoUrl: "https://www.youtube.com/embed/6stsf8ZK_VI?si=Amb29rtX0xfPYYMc"
     
      },
      {
         id: 13,
        title: "Vinayagar Chaturthi",
        thumbnail: "/pallavaram/thumbnail/thum-13.jpg",
        videoUrl: "https://www.youtube.com/embed/PsDxy5bR1Q0?si=KBoNg5rZbUGB5hwx"
 
      },
      {
        id: 14,
        title: "VELS Exotic-Inter School Teachers Sports",
        thumbnail: "/pallavaram/thumbnail/thum-14.jpg",
        videoUrl: "https://www.youtube.com/embed/JQxtvlWbboA?si=Qf0_JcB0FRJzCVn9"
      },
      {
        id: 15,
        title: "Donation of Books",
        thumbnail: "/pallavaram/thumbnail/thum-15.jpg",
        videoUrl: "https://www.youtube.com/embed/TQUAJ_dJd4Q?si=dECFuPJvoKObygqC"
      },
     
      {
        id: 16,
        title: "Basketball and Soccer tournament",
        thumbnail: "/pallavaram/thumbnail/thum-16.jpg",
        videoUrl: "https://www.youtube.com/embed/17MdMXcnTgk?si=sshdsbWMUOcnUaa_"
      },
      {
        id: 17,
        title: "Investiture Ceremony",
        thumbnail: "/pallavaram/thumbnail/thum-17.jpg",
        videoUrl: "https://www.youtube.com/embed/VnZPIneYa8U?si=P0WpSw1B4WSRcmWf"
      },
      {
        id: 18,
        title: "Episteme",
        thumbnail: "/pallavaram/thumbnail/thum-18.jpg",
        videoUrl: "https://www.youtube.com/embed/dROqxDmesfc?si=VmkfzKLlhco0pZb8"
 
      },
      {
        id: 19,
        title: "Student Election",
        thumbnail: "/pallavaram/thumbnail/thum-19.jpg",
        videoUrl: "https://www.youtube.com/embed/ewNlwiyItgo?si=00XObj-ZYcRqtDQX"
      },
      {
        id: 20,
        title: "Pongal Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-20.jpg",
        videoUrl: "https://www.youtube.com/embed/u7zWl7qzwCM?si=kvOEQ0LvfQmOeZgE"
      },
      {
        id: 21,
        title: "Three little pigs",
        thumbnail: "/pallavaram/thumbnail/thum-21.jpg",
        videoUrl: "https://www.youtube.com/embed/ObXVSo6_hnM?si=c0-vIjVQSJwPq30S"
 
      },
      {
        id: 22,
        title: "Annual Day Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-22.jpg",
        videoUrl: "https://www.youtube.com/embed/lBK-OrHQTyU?si=tvDRsTEoFbBf86JI"
     
      },
      {
        id: 23,
        title: "Election video",
        thumbnail: "/pallavaram/thumbnail/thum-23.jpg",
        videoUrl: "https://www.youtube.com/embed/ObXVSo6_hnM?si=XlGQjSzQYZ-KLZ5A"
      },
      {
        id: 24,
        title: "Chess Olympiad",
        thumbnail: "/pallavaram/thumbnail/thum-24.jpg",
        videoUrl: "https://www.youtube.com/embed/lBK-OrHQTyU?si=xI-QQWRzvOJCqerk"
      },
      {
        id: 25,
        title: "Colour Week Celebration",
        thumbnail: "/pallavaram/thumbnail/thum-25.jpg",
        videoUrl: "https://www.youtube.com/embed/335FeWo5O8U?si=MEn0NXn4e4u3COcZ"
      },
      {
        id: 26,
        title: "Nature Conservation Day",
        thumbnail: "/pallavaram/thumbnail/thum-26.jpg",
        videoUrl: "https://www.youtube.com/embed/-oTwoZiE2JU?si=eDpkdK1_emoTNBoS"
     
      },
      {
        id: 27,
        title: "National Colouring Book Day",
        thumbnail: "/pallavaram/thumbnail/thum-27.jpg",
        videoUrl: "https://www.youtube.com/embed/s7w62Qwk-bo?si=udjMxsJnGy18jyQ7"
      },
      {
        id: 28,
        title: "Respect for Parents Day",
        thumbnail: "/pallavaram/thumbnail/thum-28.jpg",
        videoUrl: "https://www.youtube.com/embed/LtqrgEpS67Y?si=z5bsmos5RVn1TRpX"
      },
      {
        id: 29,
        title: "Birthday Wishes to Chairman (Oct 7th)",
        thumbnail: "/pallavaram/thumbnail/thum-29.jpg",
        videoUrl: "https://www.youtube.com/embed/crEHN-92tYA?si=vdVjTAKTMJSFIzn5"
      },
      {
        id: 30,
        title: "Birthday Song for Chairman",
        thumbnail: "/pallavaram/thumbnail/thum-30.jpg",
        videoUrl: "https://www.youtube.com/embed/pBL20qRbKnw?si=_KDeHncPwEOXSGa5"
      },
      {
        id: 31,
        title: "Value Week Celebration by Grades 1 to 3",
        thumbnail: "/pallavaram/thumbnail/thum-31.jpg",
        videoUrl: "https://www.youtube.com/embed/T_RUWgSsxSE?si=XdDMF2umx97Xi2uA"
      },
       {
        id: 32,
        title: "Value Week Celebration by Grades 4 to 8",
        thumbnail: "/pallavaram/thumbnail/thum-32.jpg",
        videoUrl: "https://www.youtube.com/embed/SVvLw9F7hzM?si=o60bI4MjIjEjHgRC"
      },
  
       {
        id: 33,
        title: "International Yoga Day, on 21 Jun 2018",
        thumbnail: "/pallavaram/thumbnail/thum-33.jpg",
        videoUrl: "https://www.youtube.com/embed/eMIrOTvMC6I?si=layr39ZiSN34fNmP"
      },

 
       
    ],
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
