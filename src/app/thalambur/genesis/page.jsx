import GenesisSection from "../components/R&D/Genesis/GenesisSection";
import Hero from "../components/R&D/Genesis/Hero";




const siteTitle = "Genesis - Vels Vidyashram";
const siteDescription = "Discover the origins and foundational principles of Vels Vidyashram, a trusted CBSE school in Chennai dedicated to providing quality education. Learn about our journey, vision, and commitment to nurturing young minds for a brighter future.";
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
      <GenesisSection />
      
    </main>
  );
}
