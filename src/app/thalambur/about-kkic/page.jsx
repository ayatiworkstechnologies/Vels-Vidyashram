import AboutKkic from "../components/R&D/AboutKkic/AboutKkicSection";
import Hero from "../components/R&D/AboutKkic/Hero";



const siteTitle = "About KKIC - Vels Vidyashram";
const siteDescription = "Learn about the history, mission, and values of KKIC, a premier educational institution under the Vels Vidyashram banner. Discover how KKIC is committed to providing quality education and fostering holistic development for students.";
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
        <AboutKkic />

    </main>
  );
}
