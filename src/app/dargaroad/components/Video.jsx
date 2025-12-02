"use client";

import { useState } from "react";
import Image from "next/image";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
    <div className="bg-primary">
     {/* MAIN VIDEO CARD */}
      <div className="relative max-w-4xl mx-auto rounded-sm pt-10 pb-10 overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        {/* Thumbnail */}
        <Image
          src="/dargaroad/thumbnail.png"   // 🔁 Replace with your thumbnail image
          alt="Video"
          width={1200}
          height={600}
          className="w-full h-auto"
        />

       

        {/* CENTER PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 flex items-center justify-center bg-white/90 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* BOTTOM-LEFT TEXT */}
        <div className="absolute bottom-14 left-6 text-white space-y-1">
          <h3 className="text-2xl font-primary-bold font-primary text-white">Our Video New</h3>
           <div className="w-30 h-[1px] bg-[#F1A544] mb-4 mt-2"></div>
          <p className="text-[18px] opacity-80 font-secondary font-secondary-regular ">Our Promo Video & Campus Virtual Tour</p>
        </div>
      </div>

      {/* FULLSCREEN VIDEO POPUP */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white text-4xl font-light"
          >
            ×
          </button>

          {/* VIDEO PLAYER */}
          <div className="w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/0O1y4VK_c7k?si=S7NsRkxZy0FLu8Od" title="YouTube video player" 
              // 🔁 Replace with your YouTube video ID 
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
 
    </>
  );
}
