import HeroSection from "../components/About/Our-group/HeroSection";
import OurGroupSection from "../components/About/Our-group/OurGroupSection";
import CurriculumSection from "../components/Academics/Curriculum/CurriculumSection";
import Hero from "../components/Academics/Curriculum/Hero";





const siteTitle = "Best Primary/Senior Secondary/ 11th 12th CBSE School in OMR Chennai";
const siteDescription = "Want to enrol your child in pre school, primary & secondary school in Chennai. Vels Vidyashram Thalambur, one of the best schools in Chennai for 11th and 12th grade.";
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
    
       <Hero />
       <CurriculumSection />
      
    </main>
  );
}
