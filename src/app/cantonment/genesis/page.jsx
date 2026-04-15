import GenesisSection from "../components/R&D/Genesis/GenesisSection";
import Hero from "../components/R&D/Genesis/Hero";





const siteTitle = "Genesis - Vels Vidyashram";
const siteDescription = "Discover the origins and journey of Vels Vidyashram, a leading CBSE school in Chennai committed to providing quality education and holistic development for our students. Learn about our founder, vision, and milestones that have shaped our institution into the esteemed educational establishment it is today.";
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

export default function Cantonment() {
  return (
    <main>
       <Hero />
       <GenesisSection />
      
      
    </main>
  );
}
