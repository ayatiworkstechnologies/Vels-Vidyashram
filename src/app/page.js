import About from './components/About';
import CampusHighlight from './components/CampusHighlight';
import ExploreCampus from './components/ExploreCampus';
import HeroSection from './components/HeroSection'
import WhyVels from './components/WhyVels';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyVels />
      <About />
      <ExploreCampus />
      <CampusHighlight />
      
    </main>
  );
}
