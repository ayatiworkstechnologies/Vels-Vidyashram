
import Education from '../components/About/VisionMission/Education';
import FeaturesSection from '../components/About/VisionMission/FeaturesSection';
import Founder from '../components/About/VisionMission/Founder';
import Hero from '../components/About/VisionMission/Hero';
import VisionMission from '../components/About/VisionMission/VisionMission';


const siteTitle = "About Us  | Vels Vidyashram";
const siteDescription = "Discover Vels Film City in Chennai, a premier media and entertainment hub offering state-of-the-art facilities for film production, events, and more.";
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
        <Founder />
        <FeaturesSection />
        <Education />
    </main>
  );
}
