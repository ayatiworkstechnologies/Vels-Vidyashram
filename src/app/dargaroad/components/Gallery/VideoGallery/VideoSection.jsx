"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ChevronDown,
  Calendar,
  GraduationCap,
} from "lucide-react";

const VIDEO_DATA = {
  years: ["2026 - 2027", "2025 - 2026"],
  videosByYear: {
    "2026 - 2027": [
      {
        id: 1,
        title: "Inter School Bhajan Competition",
        thumbnail: "/dargaroad/thumbnail/thumbnail-1.jpg",
        videoUrl: "https://youtu.be/BLvhUK8BlU8"
      },
      {
        id: 2,
        title: "No Bag Day",
        thumbnail: "/dargaroad/thumbnail/thumbnail-2.jpg",
        videoUrl: "https://www.youtube.com/embed/BY8o1-qeFag?si=MYnR9u43saf-s3Cb"
      },
    ],
    "2025 - 2026": [
      {
        id: 121,
        title: "April GLIMPSES",
        thumbnail: "/dargaroad/thumbnail/thum-21.jpg",
        videoUrl: "https://www.youtube.com/embed/BY8o1-qeFag?si=MYnR9u43saf-s3Cb"
      },
      {
        id: 122,
        title: "June GLIMPSES",
        thumbnail: "/dargaroad/thumbnail/thum-22.jpg",
        videoUrl: "https://www.youtube.com/embed/qNtzwRiNLYM?si=0aLlyuKR5Knwow5X"
      },
      {
        id: 120,
        title: "Academic Excellence Awards – Grade X 2026",
        thumbnail: "/dargaroad/thumbnail/thum-20.jpg",
        videoUrl: "https://www.youtube.com/embed/gUOEBDkTBeU?si=3L8ESXgighm7Qhtt"
      },
      {
        id: 119,
        title: "KG Graduation Ceremony",
        thumbnail: "/dargaroad/thumbnail/thum-19.jpg",
        videoUrl: "https://www.youtube.com/embed/FSBB7N4ZF2A?si=XRagT01vd8ZMhblm"
      },
      {
        id: 103,
        title: "Vels expo @ vels",
        thumbnail: "/dargaroad/thumbnail/thumb3.jpg",
        videoUrl: "https://www.youtube.com/embed/TSmlvNCpFZo?si=vYw6jbP8NeyxhT06"
      },
      {
        id: 118,
        title: "Japanese Tea Ceremony",
        thumbnail: "/dargaroad/thumbnail/thum-18.jpg",
        videoUrl: "https://www.youtube.com/embed/kldlbAtt8B0?si=4FjDlbg2huhKyav3"
      },
      {
        id: 102,
        title: "Christmas Celebration",
        thumbnail: "/dargaroad/thumbnail/thumb2.jpg",
        videoUrl: "https://www.youtube.com/embed/xdB1WsU96Yg?si=lGck3mTKXn3SbN3n"
      },
      {
        id: 106,
        title: "Dandiya Raas",
        thumbnail: "/dargaroad/thumbnail/thumb6.jpg",
        videoUrl: "https://www.youtube.com/embed/DmjUNSnGxmY?si=4zsue6jiadpEZ5ag"
      },
      {
        id: 101,
        title: "Grandparents Day",
        thumbnail: "/dargaroad/thumbnail/thumb1.jpg",
        videoUrl: "https://www.youtube.com/embed/GpN7BEemT8k?si=y-8zMppSQPsNEV-m"
      },
      {
        id: 105,
        title: "Navarasa navaratri @Vels",
        thumbnail: "/dargaroad/thumbnail/thumb5.jpg",
        videoUrl: "https://www.youtube.com/embed/SJoxRUBASoY?si=4j81h81jwsUNJxmX"
      },
      {
        id: 109,
        title: "Continuous Professional Development 2025",
        thumbnail: "/dargaroad/thumbnail/thumb9.jpg",
        videoUrl: "https://www.youtube.com/embed/rsUah1Jzl58?si=N_u2fn0jBCdXAoCR"
      },
      {
        id: 104,
        title: "December Glimpses",
        thumbnail: "/dargaroad/thumbnail/thumb4.jpg",
        videoUrl: "https://www.youtube.com/embed/4C8tLUzbslo?si=HdjdBdte1fG7GVhN"
      },
      {
        id: 108,
        title: "July Glimpses 2025",
        thumbnail: "/dargaroad/thumbnail/thumb8.jpg",
        videoUrl: "https://www.youtube.com/embed/FiL-3Aa7yfE?si=8M0OdlTRLlj8rb-H"
      },
      {
        id: 112,
        title: "Investiture Ceremony",
        thumbnail: "/dargaroad/thumbnail/thumb12.jpg",
        videoUrl: "https://www.youtube.com/embed/1vnkxsP0Umc?si=ACf9WoyrWCTtoGZm"
      },
      {
        id: 107,
        title: "November Glimpses",
        thumbnail: "/dargaroad/thumbnail/thumb7.jpg",
        videoUrl: "https://www.youtube.com/embed/npJnTyObAAs?si=RZck9_WmHUlcyVhN"
      },
      {
        id: 111,
        title: "April Glimpses",
        thumbnail: "/dargaroad/thumbnail/thumb11.jpg",
        videoUrl: "https://www.youtube.com/embed/96zGdwfuH34?si=yKIOgEYwj8qCcZTj"
      },
      {
        id: 115,
        title: "June Glimpses 2025",
        thumbnail: "/dargaroad/thumbnail/thumb15.jpg",
        videoUrl: "https://www.youtube.com/embed/4u5ZB6IYW6c?si=6WMYwu--auagN6d_"
      },
      {
        id: 110,
        title: "AARAMBH 2025",
        thumbnail: "/dargaroad/thumbnail/thumb10.jpg",
        videoUrl: "https://www.youtube.com/embed/unrYcfP9oZk?si=RrvcK3ejbrghWb_w"
      },
      {
        id: 114,
        title: "August Glimpses 2025",
        thumbnail: "/dargaroad/thumbnail/thumb14.jpg",
        videoUrl: "https://www.youtube.com/embed/hFbu2g2nNok?si=GhAMB6JmJLY1OxUr"
      },
      {
        id: 113,
        title: "Inter School Bhajan Competition",
        thumbnail: "/dargaroad/thumbnail/thumb13.jpg",
        videoUrl: "https://www.youtube.com/embed/1XqYAZIuuk0?si=vj0vYFsiyeUR4nYw"
      },
      {
        id: 116,
        title: "Diwali Celebration",
        thumbnail: "/dargaroad/thumbnail/thumb16.jpg",
        videoUrl: "https://www.youtube.com/embed/GvKCD9ytSdo?si=Cu3wt4djiW3v12n4"
      },
      {
        id: 117,
        title: "Awareness on oil-free cooking and healthy living",
        thumbnail: "/dargaroad/thumbnail/thumb17.jpg",
        videoUrl: "https://www.youtube.com/embed/N-mxgDKNcbs?si=mQ_pSGk6pkuKA5bC"
      },
    ],
  },
  testimonialSections: [
    {
      category: "Parents Testimonials - Fathers Day Celebration",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          thumbnail: "/dargaroad/thumbnail/father.png",
          videoUrl: "/dargaroad/video/video.mp4"
        }
      ]
    },
    {
      category: "Parents Testimonials - Fathers Day Celebration",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          thumbnail: "/dargaroad/thumbnail/parent-1.jpg",
          videoUrl: "https://www.youtube.com/embed/XQtaPJniX4k?si=rrQiMLopeEgPF0mE"
        },
        {
          id: 2,
          thumbnail: "/dargaroad/thumbnail/parent-2.jpg",
          videoUrl: "https://www.youtube.com/embed/dkV2EX0Pf64?si=SQMbiL4NiWRNLTA_"
        },
        {
          id: 3,
          thumbnail: "/dargaroad/thumbnail/parent-3.jpg",
          videoUrl: "https://www.youtube.com/embed/rWeIvOah2-U?si=B6qLKBlTdRY0Zcdt"
        },
        {
          id: 4,
          thumbnail: "/dargaroad/thumbnail/parent-4.jpg",
          videoUrl: "https://www.youtube.com/embed/9o8dw-ps4wI?si=yUiDNTcdvACylbPd"
        },
        {
          id: 5,
          thumbnail: "/dargaroad/thumbnail/parent-5.jpg",
          videoUrl: "https://www.youtube.com/embed/EsrzzjNCqLQ?si=74Zhnp9o6XN25XiL"
        },
        {
          id: 6,
          thumbnail: "/dargaroad/thumbnail/parent-6.jpg",
          videoUrl: "https://www.youtube.com/embed/xts7oOWlqGc?si=k1nE0aqm7VE6cBie"
        }
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