import Chairman from "../components/About/Vision-Mission/Chairman";
import Hero from "../components/About/Vision-Mission/Hero";
import VisionMission from "../components/About/Vision-Mission/VisionMission";




const siteTitle = "Vision and Mission - Vels Vidyashram";
const siteDescription = "Discover the vision and mission of Vels Vidyashram, a leading CBSE school in Chennai. Our commitment to excellence, holistic development, and academic rigor drives our educational philosophy and shapes the future of our students. Learn about our core values, goals, and the transformative impact we aim to create in the lives of our students and the community. Join us in our journey to nurture young minds and empower them to become responsible global citizens through innovative learning approaches and a supportive environment at Vels Vidyashram.";
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

export default function Cantonment() {
  return (
    <main>
        <Hero />
        <VisionMission />
        <Chairman />
      
    </main>
  );
}
