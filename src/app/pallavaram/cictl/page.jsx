import CictlSection from "../components/R&D/CICTL/CictlSection";
import Hero from "../components/R&D/CICTL/Hero";




const siteTitle = "CICTL - Vels Vidyashram";
const siteDescription = "Learn about the Centre for Innovation and Technology Leadership at Vels Vidyashram. Discover our programs, initiatives, and commitment to fostering innovation and technological excellence among students. Explore how CICTL prepares students for successful careers in technology and leadership.";
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
       <CictlSection />
 

    </main>
  );
}
