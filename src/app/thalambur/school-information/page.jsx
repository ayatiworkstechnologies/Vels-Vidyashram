import HeroSection from "../components/About/Our-group/HeroSection";
import OurGroupSection from "../components/About/Our-group/OurGroupSection";
import Hero from "../components/About/School-Information/Hero";
import SchoolSection from "../components/About/School-Information/SchoolSection";





const siteTitle = "School Information - Vels Vidyashram";
const siteDescription = "Get detailed information about Vels Vidyashram, including our academic programs, facilities, and commitment to excellence.";
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
      <SchoolSection />
    </main>
  );
}
