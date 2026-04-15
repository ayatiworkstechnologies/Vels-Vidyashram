import Hero from "../components/Admissions/Transport/Hero";
import TransportSection from "../components/Admissions/Transport/TransportSection";


const siteTitle = "Transport - Vels Vidyashram";
const siteDescription = "Learn about the transport facilities at Vels Vidyashram, ensuring safe and convenient travel for our students. Our school provides reliable transportation services to and from our campus, making it easier for parents and students to commute. Discover our bus routes, safety measures, and the convenience we offer for your child's daily journey.";
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

export default function Dargaroad() {
  return (
    <main>
        <Hero />
        <TransportSection />
       
       
      
    </main>
  );
}
