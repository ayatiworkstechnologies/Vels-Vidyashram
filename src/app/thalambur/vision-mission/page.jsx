import Chairman from "../components/About/Vision-Mission/Chairman";
import HeroSection from "../components/About/Vision-Mission/HeroSection";
import VisionMission from "../components/About/Vision-Mission/VisionMission";



const siteTitle = "Vision and Mission - Vels Vidyashram";
const siteDescription = "Discover the vision and mission of Vels Vidyashram, where we strive to nurture young minds, foster creativity, and empower students to become responsible global citizens through holistic education and innovative learning approaches.";
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
        <HeroSection />
        <VisionMission />
        <Chairman />
      
    </main>
  );
}
