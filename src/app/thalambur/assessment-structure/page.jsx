import Assessment from "../components/Academics/Assessment/Assessment";
import Hero from "../components/Academics/Assessment/Hero";







const siteTitle = "Assessment Structure - Vels Vidyashram";
const siteDescription = "Understand the assessment structure at Vels Vidyashram, designed to evaluate student progress and ensure a comprehensive learning experience.";
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
         <Assessment />
     

    </main>
  );
}
