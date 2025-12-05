
import HeroSection from '../dargaroad/components/HeroSection'
import WhyVels from '../components/WhyVels';
import Cbse from './components/Cbse';
import About from '../components/About';
import Video from './components/Video';
import BestCbseSection from './components/BestCbseSection';
import UpcomingEvents from './components/UpcomingEvents';
import FooterSection from './components/FooterSection';
import Events from './components/Events';


const siteTitle = "Best CBSE School in Chennai, Pallavaram - Vels Vidyashram";
const siteDescription = "";
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

export default function Dargaroad() {
  return (
    <main>
        <HeroSection />
        <Cbse />
        <About />
        <Video />
        <BestCbseSection />
         <Events />
        <UpcomingEvents />
        <FooterSection />
    </main>
  );
}
