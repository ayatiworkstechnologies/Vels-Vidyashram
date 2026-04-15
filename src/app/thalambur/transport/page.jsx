import Hero from "../components/Admission/Transport/Hero";
import TransportSection from "../components/Admission/Transport/TransportSection";

const siteTitle = "Transport - Vels Vidyashram";
const siteDescription = "Learn about the transport facilities available at Vels Vidyashram, ensuring a safe and convenient journey for your child. Our school provides reliable transportation services to and from our campus, making it easier for parents and students to commute.";
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

export default function Thalambur() {
  return (
    <main>
        <Hero />
        <TransportSection />
       
       
      
    </main>
  );
}
