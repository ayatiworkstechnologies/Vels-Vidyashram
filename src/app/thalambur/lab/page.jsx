import Hero from "../components/Lab/Hero";
import LabsPage from "../components/Lab/LabSection";





const siteTitle = "Lab - Vels Vidyashram";
const siteDescription = "Lab - Vels Vidyashram: Explore our state-of-the-art laboratories that foster hands-on learning and scientific exploration. Our labs are equipped with modern facilities to support a wide range of subjects, including physics, chemistry, biology, and computer science. At Vels Vidyashram, we believe in providing students with practical experiences that enhance their understanding of theoretical concepts and encourage innovation.";
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
       <LabsPage />

      
    </main>
  );
}
