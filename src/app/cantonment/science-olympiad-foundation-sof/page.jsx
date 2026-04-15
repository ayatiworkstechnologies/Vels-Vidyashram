import Hero from "../components/course/Science/Hero";
import SOFSection from "../components/course/Science/SOFSection";




const siteTitle = "Science Olympiad Foundation (SOF) - Vels Vidyashram";
const siteDescription = "Discover the Science Olympiad Foundation (SOF) programs at Vels Vidyashram, a leading CBSE school in Chennai. Engage your child in competitive science challenges and enhance their academic prowess with our structured curriculum and expert guidance. Explore how SOF fosters critical thinking, problem-solving skills, and a passion for science among our students. Join us in nurturing the next generation of scientific minds at Vels Vidyashram.";
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
        <SOFSection />
     
    </main>
  );
}
