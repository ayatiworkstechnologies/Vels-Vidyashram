const SITE_URL = "https://velsvidyashram.ac.in";

const campusPages = {
  thalambur: [
    "about-kkic",
    "assessment-structure",
    "beyond-academics",
    "centre-for-professional-development",
    "cictl",
    "circular",
    "contact-us",
    "curriculum",
    "eventsection",
    "general-messages",
    "genesis",
    "lab",
    "mandatory-disclosure",
    "our-group",
    "photo-gallery",
    "physical-education",
    "procedure",
    "recruitment",
    "scheme-of-study",
    "school-information",
    "transport",
    "video",
    "vision-mission",
    "vskill",
  ],
  pallavaram: [
    "about-kkic",
    "beyond-academics",
    "centre-for-professional-development",
    "cictl",
    "circulars",
    "contact-us",
    "curriculum",
    "digital-rooms",
    "eventsection",
    "genesis",
    "mandatory-disclosure",
    "message",
    "our-group",
    "photo-gallery",
    "recruitment",
    "school-information",
    "transport",
    "video",
    "vision-mission",
    "vskill",
  ],
  dargaroad: [
    "beyond-academics",
    "circular-2025-2026",
    "contact",
    "curriculum",
    "eventsection",
    "general-messages",
    "mandatory-disclosure",
    "our-group",
    "photo-gallery",
    "recruitment",
    "school-information",
    "transport-facilities",
    "vels-global-school",
    "video-gallery",
    "vision-mission",
  ],
  cantonment: [
    "about-kkic",
    "beyond-academics",
    "centre-for-professional-development",
    "cictl",
    "contact-us",
    "genesis",
    "our-curriculum",
    "our-group",
    "photo-gallery",
    "procedure",
    "recruitment",
    "science-olympiad-foundation-sof",
    "spell-bee",
    "transport",
    "video",
    "vision-mission",
    "vskill",
  ],
};

const frequentlyUpdatedPages = new Set([
  "circular",
  "circulars",
  "circular-2025-2026",
  "eventsection",
  "photo-gallery",
  "video",
  "video-gallery",
]);

export default function sitemap() {
  const campusEntries = Object.entries(campusPages).flatMap(
    ([campus, pages]) => [
      {
        url: `${SITE_URL}/${campus}`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      ...pages.map((page) => ({
        url: `${SITE_URL}/${campus}/${page}`,
        changeFrequency: frequentlyUpdatedPages.has(page)
          ? "weekly"
          : "monthly",
        priority: frequentlyUpdatedPages.has(page) ? 0.7 : 0.6,
      })),
    ],
  );

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...campusEntries,
  ];
}
