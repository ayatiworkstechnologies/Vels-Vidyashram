"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Promo Video & Campus Virtual Tour
        </h2>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">

          {!play ? (
            <div
              className="relative cursor-pointer"
              onClick={() => setPlay(true)}
            >
              {/* Thumbnail */}
              <img
                src="/dargaroad/thumbnail.jpg"
                alt="Video Thumbnail"
                className="w-full h-[420px] object-cover"
              />

              {/* Dark overlay */}
              

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 shadow-lg hover:scale-110 transition">
                  <Play className="w-8 h-8 text-black fill-black" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-[420px]"
              src="https://www.youtube.com/embed/0O1y4VK_c7k?si=245QA9zjJ4XEbKx"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}