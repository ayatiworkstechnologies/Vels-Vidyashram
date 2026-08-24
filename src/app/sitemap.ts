import type { MetadataRoute } from "next";

const BASE_URL = "https://velsvidyashram.ac.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    /* =========================================
       MAIN CAMPUS PAGES
    ========================================== */

    {
      url: `${BASE_URL}/thalambur`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/pallavaram`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/dargaroad`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/cantonment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    /* =========================================
       DARGA ROAD
    ========================================== */

    {
      url: `${BASE_URL}/dargaroad/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/dargaroad/general-messages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/dargaroad/our-group`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/dargaroad/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${BASE_URL}/dargaroad/circular-2025-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/dargaroad/facilities/special-features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },


    /* =========================================
       CANTONMENT
    ========================================== */

    {
      url: `${BASE_URL}/cantonment/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },


    /* =========================================
       ADDITIONAL IMPORTANT PAGES
    ========================================== */

    {
      url: `${BASE_URL}/mandatory-disclosure`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}