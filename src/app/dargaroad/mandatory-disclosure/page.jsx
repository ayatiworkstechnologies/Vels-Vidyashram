import Hero from "../components/Academics/MandatoryDisclosure/Hero";
import MandatorySection from "../components/Academics/MandatoryDisclosure/MandatorySection";







const siteTitle = "Mandatory Disclosure - Vels Vidyashram";
const siteDescription = "View the mandatory disclosure information for Vels Vidyashram, ensuring transparency and compliance with educational regulations. Learn about our school's policies, infrastructure, faculty qualifications, and other essential details that reflect our commitment to providing quality education in Chennai.";
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

export default function Dargaroad() {
  return (
    <main>
       
      <Hero />
      <MandatorySection />
    </main>
  );
}
