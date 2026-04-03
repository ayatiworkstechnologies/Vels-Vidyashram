"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, GraduationCap } from "lucide-react";

const VIDEO_DATA = {
  videosByYear: {
    "2025 - 2026": [
      {
        id: 1,
        title: "Vels Sandhai Dance",
        thumbnail: "/cantonment/thumbnail/thum1.jpg",
        videoUrl: "https://www.youtube.com/embed/TIqYrZPnrjU?si=937v0rtqsdRmLBce",
      },
      {
        id: 2,
        title: "EVS Culmination Day",
        thumbnail: "/cantonment/thumbnail/thum2.jpg",
        videoUrl: "https://www.youtube.com/embed/uNIr2AAwSyg?si=PzJkH1Pg-OVHCeHm",
      },
      {
        id: 3,
        title: "Vels Cantonment - Energizing Morning Assembly for our tiny tots",
        thumbnail: "/cantonment/thumbnail/thum3.jpg",
        videoUrl: "https://www.youtube.com/embed/TQa9AcobXAk?si=nck1pQcki1qwjmc7",
      },
      {
        id: 4,
        title: "Vels 8 Circuit",
        thumbnail: "/cantonment/thumbnail/thum4.jpg",
        videoUrl: "https://www.youtube.com/embed/JX2j2ODXo24?si=CWuut7a8YiQgz3ry",
      },
      {
        id: 5,
        title: "Yoga Day Celebration",
        thumbnail: "/cantonment/thumbnail/thum5.jpg",
        videoUrl: "https://www.youtube.com/embed/O57KPZdkVP8?si=JBf794mJJ1eyn2D1",
      },
        {
        id: 6,
        title: "Yoga Day Celebration",
        thumbnail: "/cantonment/thumbnail/thum6.jpg",
        videoUrl: "https://www.youtube.com/embed/klvJCxjejqc?si=ww6a5LyS5E6H4ZeR",
      },
    ],

  
  },

  testimonialSections: [
    {
      category: "Parents Testimonials",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 1,
          title: "Parent Testimonial 1",
          thumbnail: "/thalambur/thumbnail/pa-1.jpg",
          videoUrl:
            "https://www.youtube.com/embed/HQ6m896ITKU?si=rWbhrjbZQMvTNYsq",
        },
        {
          id: 2,
          title: "Parent Testimonial 2",
          thumbnail: "/thalambur/thumbnail/pa-2.jpg",
          videoUrl:
            "https://www.youtube.com/embed/x1fqOjjOd4A?si=twzzPHcnFeeJQmXs",
        },
      ],
    },
  ],
};

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  const filteredVideos = useMemo(() => {
    return Object.values(VIDEO_DATA.videosByYear).flat();
  }, []);

  const openVideo = (video) => setSelectedVideo(video);
  const closeVideo = () => setSelectedVideo(null);

  const getAutoplayUrl = (url) => {
    return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };

  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-black text-slate-800">
            Video Gallery
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-2xl border-2 border-slate-200 shadow-lg">
            <button
              onClick={() => setActiveTab("videos")}
              className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl transition ${
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

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl transition ${
                activeTab === "testimonials" ? "text-white" : "text-slate-600"
              }`}
            >
              <span className="relative z-10">Testimonials</span>
              {activeTab === "testimonials" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                />
              )}
            </button>
          </div>
        </div>

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideo(video)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-none bg-slate-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-[220px] md:h-[250px] object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />
                </div>

                <h3 className="mt-3 text-center text-base md:text-[22px] font-bold text-black leading-tight">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="space-y-14">
            {VIDEO_DATA.testimonialSections.map((section, index) => (
              <div key={index}>
                <div className="border-l-4 border-primary pl-4 mb-6 flex items-center gap-3">
                  <span className="text-primary">{section.icon}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openVideo(item)}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-none bg-slate-900">
                        <img
                          src={item.thumbnail}
                          alt={item.title || section.category}
                          className="w-full h-[220px] md:h-[250px] object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />
                      </div>

                      <h3 className="mt-3 text-center text-base md:text-[22px] font-bold text-black leading-tight">
                        {item.title || section.category}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

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
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-[92vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="w-full h-[260px] md:h-[320px] lg:h-[380px] bg-black">
                  <iframe
                    src={getAutoplayUrl(selectedVideo.videoUrl)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedVideo.title || "Video"}
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">
                    {selectedVideo.title || "Video"}
                  </h3>
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