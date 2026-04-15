import Hero from "../components/Gallery/Video-Gallery/Hero";
import VideoSection from "../components/Gallery/Video-Gallery/VideoSection";



const siteTitle = "Video Gallery - Vels Vidyashram";
const siteDescription = "Explore our video gallery at Vels Vidyashram, a leading CBSE school in Chennai. Watch engaging content that showcases our academic excellence, extracurricular activities, and vibrant school life. Join us in celebrating the achievements and moments that make Vels Vidyashram a exceptional institution for your child.";
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
        <VideoSection />
      
    </main>
  );
}
