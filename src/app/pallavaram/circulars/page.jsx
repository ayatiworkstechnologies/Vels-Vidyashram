import CircularSection from "../components/Academics/Circular/CircularSection";
import HeroSection from "../components/Academics/Circular/HeroSection";



const siteTitle = "Circular - Vels Vidyashram";
const siteDescription = "Stay updated with the latest circulars and announcements from Vels Vidyashram. Find important information about academic events, holidays, and other school-related updates.";
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
       <CircularSection />
     

    </main>
  );
}
