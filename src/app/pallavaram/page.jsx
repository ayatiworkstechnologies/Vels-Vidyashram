import OurMottoSection from "../pallavaram/components/OurMottoSection";
import BannerSlider from "./components/BannerSection";
import EventsSchedule from "./components/EventSection";
import GalleryGrid from "./components/GallerySection";
import InfrastructureSlider from "./components/InfrastructureSlider";
import LetterSection from "./components/LetterSection";
import Modal from "./layout/modals";


const siteTitle = "Best CBSE School in Chennai, Pallavaram - Vels Vidyashram";
const siteDescription = "Experience quality education at Vels Vidyashram, a top CBSE school in Pallavaram, Chennai. Discover our academic excellence, modern infrastructure, and dedicated faculty committed to nurturing your child's potential.";
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
      {/* <Modal /> */}
      <BannerSlider />
      <LetterSection />
      <OurMottoSection />
      <InfrastructureSlider />
      <GalleryGrid />
      <EventsSchedule />
     
    </main>
  );
}
