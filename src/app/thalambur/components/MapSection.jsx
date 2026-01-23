"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MapSection() {
  // Replace this with your actual Google Maps Embed API key or a valid Share URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9460269069104!2d80.1960792!3d12.846762600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a2dd2254f05%3A0xbe09b7d3e7f90c7c!2sVels%20Vidyashram%2C%20Thalambur!5e0!3m2!1sen!2sin!4v1768996122473!5m2!1sen!2sin";

  return (
    <section className="px-4 py-5">
      <div className="max-w-7xl mx-auto">
       
          
          {/* Info Side */}
          

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            />
          </motion.div>
        </div>
     
    </section>
  );
}