import CurriculumSection from "../components/Academics/Curriculum/CurriculumSection";
import HeroSection from "../components/Academics/Curriculum/HeroSection";






const siteTitle = "Best Primary/Senior Secondary/ 11th 12th CBSE School in OMR Chennai";
const siteDescription = "Explore the comprehensive curriculum at Vels Vidyashram, a leading CBSE school in OMR Chennai. Discover our academic programs, teaching methodologies, and commitment to holistic education for primary and secondary students. Enroll your child in one of the best schools in Chennai for 11th and 12th grade and experience excellence in education.";
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
       <CurriculumSection />
  
      
    </main>
  );
}
