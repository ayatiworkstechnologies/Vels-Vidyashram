"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="bg-primary">
        {/* MAIN VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto rounded-sm pt-10 pb-10 overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          {/* Thumbnail */}
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/dargaroad/thumbnail.png"
              alt="Video"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* CENTER PLAY ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
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
          </motion.div>

          {/* BOTTOM-LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-14 left-6 text-white space-y-1"
          >
            <h3 className="text-2xl font-primary-bold font-primary text-white">
              Our Video New
            </h3>
            <div className="w-30 h-[1px] bg-[#F1A544] mb-4 mt-2"></div>
            <p className="text-[18px] opacity-80 font-secondary font-secondary-regular">
              Our Promo Video & Campus Virtual Tour
            </p>
          </motion.div>
        </motion.div>

        {/* FULLSCREEN VIDEO POPUP */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-white text-4xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ×
              </motion.button>

              {/* VIDEO PLAYER */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://www.youtube.com/embed/0O1y4VK_c7k?si=S7NsRkxZy0FLu8Od"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
