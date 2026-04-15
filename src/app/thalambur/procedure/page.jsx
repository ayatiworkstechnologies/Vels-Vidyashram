import Hero from "../components/Admission/Procedure/Hero";
import ProcedureSection from "../components/Admission/Procedure/ProcedureSection";






const siteTitle = "Admission Procedure - Vels Vidyashram";
const siteDescription = "Learn about the admission procedure at Vels Vidyashram, your trusted CBSE school in Chennai. Follow our step-by-step guide to enroll your child in our esteemed institution and provide them with a quality education.";
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
        <ProcedureSection />
       
      
    </main>
  );
}
