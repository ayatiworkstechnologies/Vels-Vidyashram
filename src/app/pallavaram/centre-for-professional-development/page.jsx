import CentreSection from "../components/R&D/Centre/CentreSection";
import Hero from "../components/R&D/Centre/Hero";





const siteTitle = "Centre for Professional Development - Vels Vidyashram";
const siteDescription = "Discover the Centre for Professional Development at Vels Vidyashram. Learn about our programs, initiatives, and commitment to fostering professional growth and skill development among students. Explore how we prepare students for successful careers and lifelong learning.";
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
          <CentreSection />

    </main>
  );
}
