import BannerSlider from "./components/BannerSection";
import LetterSection from "./components/LetterSection";
import OurMottoSection from "./components/OurMottoSection";
import InfrastructureSlider from "./components/InfrastructureSlider";

import VelsThalamburSection from "./components/VelsThalamburSection";
import GalleryGrid from "./components/GallerySection";
import EventsSchedule from "./components/EventSection";
import MapSection from "./components/MapSection";
import InspireSection from "./components/InspireSection";
import AboutSchool from "./components/AboutSchool";

const siteTitle = "Best CBSE School in OMR | Vels Vidyashram Thalambur, OMR, Chennai";
const siteDescription = "Vels Vidyashram, The best CBSE School in OMR Thalambur tops the list of best schools in and around Thalambur for its best quality education to its students.";
const siteUrl = "https://yourwebsite.com";
const siteImage = "https://yourwebsite.com/default-share-image.jpg";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function Thalambur() {
  return (
    <main>
      <BannerSlider />
      <LetterSection />
      <AboutSchool />
      <InspireSection />
      <VelsThalamburSection />
      <OurMottoSection />
      <InfrastructureSlider />
      <GalleryGrid />
      <EventsSchedule />
      <MapSection />
    </main>
  );
}
