import About from './components/About';
import CampusHighlight from './components/CampusHighlight';
import ExploreCampus from './components/ExploreCampus';
import HeroSection from './components/HeroSection';
import WhyVels from './components/WhyVels';

/* ======================
   SEO CONSTANTS
====================== */
const siteTitle = "Vels Vidyashram | Top CBSE School in Chennai";
const siteDescription =
  "Vels Vidyashram is a leading CBSE school in Chennai offering holistic education, modern infrastructure, and strong academic excellence.";
const siteUrl = "https://yourwebsite.com";
const siteImage = "https://yourwebsite.com/default-share-image.jpg";

/* ======================
   METADATA (NEXT.JS)
====================== */
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
};

/* ======================
   PAGE
====================== */
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
