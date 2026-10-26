
import AboutSchool from "./components/AboutSchool";
import BannerSection from "./components/BannerSection";
import CourseSection from "./components/CourseSection";
import GalleryGrid from "./components/GallerySection";
import InfrastructureSlider from "./components/InfrastructureSlider";
import InspireSection from "./components/InspireSection";
import LetterSection from "./components/LetterSection";
import OurMottoSection from "./components/OurMottoSection";
import TestimonialSection from "./components/TestomonialSection";
import VelsStaticOverlaySection from "./components/VelsCantonmentSection";


const siteTitle =
  "Vels Vidyashram Cantonment - A Premier CBSE School in Chennai";

const siteDescription =
  "Vels Vidyashram Cantonment is a premier CBSE school in Chennai, offering quality education and holistic development for students.";

export const metadata = {
  alternates: {
    canonical: "https://velsvidyashram.ac.in/cantonment",
  },
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://velsvidyashram.ac.in/cantonment",
    images: [
      {
        url: "https://velsvidyashram.ac.in/default-share-image.jpg",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    type: "website",
  },
};

export default function Pallavaram() {
  return (
    <main>
      <BannerSection />
      <LetterSection />
      <AboutSchool />
      <InspireSection />
      <VelsStaticOverlaySection />
      <OurMottoSection />
      <InfrastructureSlider />
      <TestimonialSection />
      <CourseSection />
      <GalleryGrid />
    </main>
  );
}
