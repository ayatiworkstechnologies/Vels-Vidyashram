import CictlSection from "../components/R&D/CICTL/CictlSection";
import Hero from "../components/R&D/CICTL/Hero";




const siteTitle = "CICTL - Vels Vidyashram";
const siteDescription = "Learn more about the Centre for Innovation, Creativity, and Technology Learning (CICTL) at Vels Vidyashram, a leading CBSE school in Chennai committed to providing quality education and holistic development for our students. Discover how CICTL fosters innovation, creativity, and technological literacy through its state-of-the-art facilities and programs designed to enhance students' learning experiences.";
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
       <CictlSection />

 

    </main>
  );
}
