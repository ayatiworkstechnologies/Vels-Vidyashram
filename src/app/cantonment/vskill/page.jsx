import Hero from "../components/R&D/Vskill/Hero";
import VSkillSection from "../components/R&D/Vskill/VskillSection";





const siteTitle = "VSkill - Vels Vidyashram";
const siteDescription = "Explore the VSkill program at Vels Vidyashram, a leading CBSE school in Chennai. Discover our innovative approach to skill development and learning. Join us in nurturing the talents and abilities of our students through our comprehensive VSkill initiatives.";
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
        <VSkillSection />
      
      
    </main>
  );
}
