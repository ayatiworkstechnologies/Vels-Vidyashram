import BannerSection from "./components/BannerSection";
import CourseSection from "./components/CourseSection";
import GalleryGrid from "./components/GallerySection";
import InfrastructureSlider from "./components/InfrastructureSlider";
import OurMottoSection from "./components/OurMottoSection";
import TestimonialSection from "./components/TestomonialSection";


const siteTitle = "Vels Vidyashram Cantonment - A Premier CBSE School in Chennai";
const siteDescription = "Vels Vidyashram Cantonment is a premier CBSE school in Chennai, offering quality education and holistic development for students. Discover our academic programs, infrastructure, and extracurricular activities. Join us in nurturing the potential of every child and providing a vibrant learning environment. Explore our campus, meet our dedicated faculty, and learn about our commitment to excellence in education at Vels Vidyashram Cantonment.";
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

export default function Pallavaram() {
  return (
    <main>

        <BannerSection />
        <OurMottoSection />
        <InfrastructureSlider />
        <TestimonialSection />
        <CourseSection />
        <GalleryGrid />
     
    </main>
  );
}
