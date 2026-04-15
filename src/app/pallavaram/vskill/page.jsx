import Hero from "../components/R&D/Vskill/Hero";
import VSkillSection from "../components/R&D/Vskill/VskillSection";




const siteTitle = "V-Skill - Vels Vidyashram";
const siteDescription = "Explore the V-Skill programs at Vels Vidyashram, designed to enhance students' practical skills and prepare them for the modern workforce. Discover our industry-aligned courses, hands-on training, and the opportunities available to our students. Join us in developing the next generation of skilled professionals.";
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
     <VSkillSection />
      
      
    </main>
  );
}
