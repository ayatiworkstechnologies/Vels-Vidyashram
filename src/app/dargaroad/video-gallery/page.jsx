import Hero from "../components/Gallery/VideoGallery/Hero";
import VideoSection from "../components/Gallery/VideoGallery/VideoSection";
import Video from "../components/Video";





const siteTitle = "Video Gallery - Vels Vidyashram";
const siteDescription = "Explore our video gallery at Vels Vidyashram, showcasing student achievements, campus life, and educational initiatives.";
const siteUrl = 'https://yourwebsite.com';
const siteImage = 'https://yourwebsite.com/default-share-image.jpg';

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
    viewport: 'width=device-width, initial-scale=1',
};
export default function Page() {
  return (
    <main>
   
       <Hero />
       <VideoSection />
         
    </main>
  );
}
