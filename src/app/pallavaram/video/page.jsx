import Hero from "../components/Gallery/Video-Gallery/Hero";
import VideoSection from "../components/Gallery/Video-Gallery/VideoSection";








const siteTitle = "Video Gallery - Vels Vidyashram";
const siteDescription = "Watch our latest videos to get a glimpse of the dynamic life at Vels Vidyashram. Explore clips from our academic events, activities, and campus life. Stay connected with our school community through our engaging video content. Discover the memorable moments that make Vels Vidyashram a special place for students and staff alike.";
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
        <Hero />
        <VideoSection />
      
    </main>
  );
}
