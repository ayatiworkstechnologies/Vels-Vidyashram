import Hero from "../components/Physical/Hero";
import PhysicalEducationSection from "../components/Physical/PhysicalSection";





const siteTitle = "Physical Education - Vels Vidyashram";
const siteDescription = "Physical Education - Vels Vidyashram: Discover our state-of-the-art sports facilities and comprehensive athletics program that promote physical fitness and sportsmanship. Our programs are designed to develop students' motor skills, teamwork, and leadership abilities.";
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
      <PhysicalEducationSection />
      
    </main>
  );
}
