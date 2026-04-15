import CictlSection from "../components/R&D/CICTL/CictlSection";
import Hero from "../components/R&D/CICTL/Hero";



const siteTitle = "CICTL - Vels Vidyashram";
const siteDescription = "Learn about the Computer Integrated Control and Testing Laboratory (CICTL) at Vels Vidyashram, a state-of-the-art facility equipped with the latest technology for hands-on learning and research in computer science and engineering.";
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
       <CictlSection />

 

    </main>
  );
}
