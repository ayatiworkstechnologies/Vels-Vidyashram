import Hero from "../components/Admission/Transport/Hero";
import TransportSection from "../components/Admission/Transport/TransportSection";


const siteTitle = "Transport - Vels Vidyashram";
const siteDescription = "Learn about the transportation services available at Vels Vidyashram. Discover our bus routes, safety measures, and the convenience we provide for our students' daily commute. Ensure a safe and comfortable journey for your child with our reliable transport system.";
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
       <TransportSection />
       
      
    </main>
  );
}
