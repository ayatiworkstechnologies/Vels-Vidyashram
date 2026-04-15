import CurriculumSection from "../components/Academic/Our-Curriculum/CurriculumSection";
import Hero from "../components/Academic/Our-Curriculum/Hero";






const siteTitle = "Best Primary/Senior Secondary/ 11th 12th CBSE School in OMR Chennai  - Vels Vidyashram";
const siteDescription = "Explore the comprehensive curriculum at Vels Vidyashram, a leading CBSE school in Chennai. Discover our academic programs, teaching methodologies, and the holistic development opportunities we provide for students from primary to senior secondary levels.";
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
         <CurriculumSection />
      
      
    </main>
  );
}
