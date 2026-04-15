import HeroSection from "../components/About/Our-Group/HeroSection";
import OurGroupSection from "../components/About/Our-Group/OurGroupSection";






const siteTitle = "Our Group - Vels Vidyashram Schools";
const siteDescription = "Learn about the Vels Vidyashram group of schools and our commitment to providing excellent education. Discover our vision, mission, and the values that guide our institutions across Chennai. Explore how we foster a nurturing environment for students to thrive academically and personally.";
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
      <HeroSection />
      <OurGroupSection />
      
    </main>
  );
}
