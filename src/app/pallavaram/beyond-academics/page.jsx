import BeyondSection from "../components/BeyondAcademics/BeyondSection";
import Hero from "../components/BeyondAcademics/Hero";



const siteTitle = "Beyond Academics - Vels Vidyashram";
const siteDescription = "Explore the extracurricular activities and initiatives at Vels Vidyashram. Discover how we nurture creativity, leadership, and social responsibility beyond the classroom.";
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
        <BeyondSection />
     

    </main>
  );
}
