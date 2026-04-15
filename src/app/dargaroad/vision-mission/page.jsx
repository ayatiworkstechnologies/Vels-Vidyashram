import Chairman from "../components/About/VisionMission/Chairman";
import Hero from "../components/About/VisionMission/Hero";
import VisionMission from "../components/About/VisionMission/VisionMission";



const siteTitle = "Vision and Mission - Vels Vidyashram";
const siteDescription = "Discover the vision and mission of Vels Vidyashram, a leading CBSE school in Chennai. Learn about our core values, educational philosophy, and commitment to excellence in shaping the future of our students. Explore how we foster a nurturing environment that promotes holistic development, creativity, and academic success. Join us in our mission to empower young minds and prepare them for a bright future.";
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
        <VisionMission />
       <Chairman />
        
    </main>
  );
}
