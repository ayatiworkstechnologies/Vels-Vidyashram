import Hero from "../components/Gallery/Video-Gallery/Hero";
import VideoSection from "../components/Gallery/Video-Gallery/VideoSection";


const siteTitle = "General Messages - Vels Vidyashram";
const siteDescription = "Stay updated with the latest news and announcements from Vels Vidyashram. Explore our general messages to learn about upcoming events, achievements, and important updates.";
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
      <VideoSection />
      
    </main>
  );
}
