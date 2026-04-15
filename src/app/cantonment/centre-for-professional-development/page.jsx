import CentreSection from "../components/R&D/Centre/CentreSection";
import Hero from "../components/R&D/Centre/Hero";





const siteTitle = "Centre for Professional Development - Vels Vidyashram";
const siteDescription = "Discover the Centre for Professional Development at Vels Vidyashram, a leading CBSE school in Chennai committed to providing quality education and holistic development for our students. Learn how we equip our students with the skills and knowledge needed for their future careers.";
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
        <CentreSection />  

    </main>
  );
}
