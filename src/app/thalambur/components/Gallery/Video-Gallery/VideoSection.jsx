"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X, ChevronDown, Calendar, GraduationCap, Users } from "lucide-react";

const VIDEO_DATA = {
  videos: [
    {
      id: 1,
      title: "School Annual Day 2024",
      thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "5:30",
      category: "Events",
      year: "2024"
    },
    {
      id: 2,
      title: "Campus Tour",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "3:45",
      category: "Campus",
      year: "2024"
    },
    {
      id: 3,
      title: "Sports Day Highlights",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "4:20",
      category: "Sports",
      year: "2023"
    }
  ],

  testimonialSections: [
    {
      category: "Grade 1 and 2 Culmination Day",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        {
          id: 101,
          parentName: "Mrs. Priya Sharma",
          studentName: "Aarav",
          grade: "Grade 2",
          testimonial:
            "The school has provided an excellent environment for my son's overall development.",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: 102,
          parentName: "Mr. Rajesh Kumar",
          studentName: "Diya",
          grade: "Grade 1",
          testimonial:
            "Outstanding school with excellent faculty. My daughter has shown remarkable improvement.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      category: "KG Culmination Day",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          id: 201,
          parentName: "Mrs. Anita Reddy",
          studentName: "Arjun",
          grade: "UKG",
          testimonial:
            "The personalized attention and career guidance provided here are commendable.",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
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

  const years = useMemo(() => {
    const uniqueYears = [...new Set(VIDEO_DATA.videos.map(v => v.year))];
    return ["All Years", ...uniqueYears.sort((a, b) => b - a)];
  }, []);

  const filteredVideos = useMemo(() => {
    if (selectedYear === "All Years") return VIDEO_DATA.videos;
    return VIDEO_DATA.videos.filter(v => v.year === selectedYear);
  }, [selectedYear]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 md:p-12 max-w-7xl mx-auto font-sans">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-3 tracking-tight">
          Media Gallery
        </h1>
        <p className="text-slate-600 text-lg">Watch our stories come to life</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
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
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("testimonials")}
            className={`relative px-8 py-3 text-sm font-bold uppercase rounded-xl ${
              activeTab === "testimonials" ? "text-white" : "text-slate-600"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Quote size={18} /> Testimonials
            </span>
            {activeTab === "testimonials" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
              />
            )}
          </button>
        </div>

        {/* Year filter */}
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
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <motion.div
            key="videos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-64"
              >
                <img src={video.thumbnail} className="h-full w-full object-cover" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* TESTIMONIALS TAB — YOUTUBE GRID */}
          {activeTab === "testimonials" && (
            <div className="space-y-16">

              {/* Grade 1 & 2 */}
              <div>
                <h2 className="text-center text-2xl font-bold mb-8">
                  Parents Testimonials during Grade 1 and 2 Culmination Day
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {VIDEO_DATA.testimonialSections[0].items.map((item) => (
                    <div key={item.id} className="w-full aspect-video">
                      <iframe
                        src={item.videoUrl}
                        className="w-full h-full rounded-lg shadow-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* KG */}
              <div>
                <h2 className="text-center text-2xl font-bold mb-8">
                  Parents Testimonials during KG Culmination Day
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {VIDEO_DATA.testimonialSections[1].items.map((item) => (
                    <div key={item.id} className="w-full aspect-video">
                      <iframe
                        src={item.videoUrl}
                        className="w-full h-full rounded-lg shadow-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe src={selectedVideo.videoUrl} className="w-full h-full" allowFullScreen />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {selectedVideo.title || selectedVideo.parentName}
                </h3>
                <p className="text-slate-600">
                  {selectedVideo.testimonial || "Experience our school moments."}
                </p>
              </div>
            </motion.div>

            <button className="absolute top-6 right-6 text-white">
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
