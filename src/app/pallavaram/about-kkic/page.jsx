import AboutKkicSection from "../components/R&D/AboutKkic/AboutKkicSection";
import Hero from "../components/R&D/AboutKkic/Hero";




const siteTitle = "About KKIC - Vels Vidyashram";
const siteDescription = "Learn about the K.K. Institute of Commerce and Management at Vels Vidyashram. Discover our programs, faculty, and commitment to excellence in business education. Explore how KKIC prepares students for successful careers in commerce and management.";
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
        <AboutKkicSection />
    </main>
  );
}
