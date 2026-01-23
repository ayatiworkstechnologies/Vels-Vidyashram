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

const siteTitle = "Best CBSE School in Chennai, Pallavaram - Vels Vidyashram";
const siteDescription = "";
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
      <InspireSection />
      <AboutSchool />
      <VelsThalamburSection />
      <OurMottoSection />
      <InfrastructureSlider />
      <GalleryGrid />
      <EventsSchedule />
      <MapSection />
    </main>
  );
}
