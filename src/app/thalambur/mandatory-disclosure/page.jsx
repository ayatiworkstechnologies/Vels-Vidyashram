import Hero from "../components/Academics/Mandatory/Hero";
import MandatorySection from "../components/Academics/Mandatory/MandatorySection";






const siteTitle = "Mandatory Disclosure - Vels Vidyashram";
const siteDescription = "Learn about the mandatory disclosures at Vels Vidyashram. Understand our policies and commitments to transparency and accountability. Stay informed about our school's operations and governance.";
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
        <MandatorySection />
      
    </main>
  );
}
