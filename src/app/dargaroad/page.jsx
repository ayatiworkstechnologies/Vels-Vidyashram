
import HeroSection from '../dargaroad/components/HeroSection'
import WhyVels from '../components/WhyVels';
import Cbse from './components/Cbse';
import About from '../components/About';
import Video from './components/Video';
import BestCbseSection from './components/BestCbseSection';
import UpcomingEvents from './components/UpcomingEvents';
import FooterSection from './components/FooterSection';
import Events from './components/Events';


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
