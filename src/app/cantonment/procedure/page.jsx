import Hero from "../components/Admissions/Procedure/Hero";
import ProcedureSection from "../components/Admissions/Procedure/ProcedureSection";





const siteTitle = "Admission Procedure - Vels Vidyashram";
const siteDescription = "Learn about the admission procedure at Vels Vidyashram, a leading CBSE school in Chennai. Discover the steps involved in applying for admission and the criteria we use to evaluate prospective students. Follow our comprehensive guide to ensure a smooth application process and secure a place for your child in our esteemed institution.";
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
        <ProcedureSection />
      
    </main>
  );
}
