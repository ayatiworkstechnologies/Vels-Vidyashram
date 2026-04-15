import Hero from "../components/Gallery/Photo-Gallery/Hero";
import PhotoSection from "../components/Gallery/Photo-Gallery/PhotoSection";







const siteTitle = "Photo Gallery - Vels Vidyashram";
const siteDescription = "Browse through our photo gallery to see the vibrant life at Vels Vidyashram, a leading CBSE school in Chennai. Explore images from our academic events, extracurricular activities, and campus life. Discover the moments that make our school a special place for learning and growth.";
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

export default function cantonment() {
  return (
    <main>
       <Hero />
       <PhotoSection />   
      
    </main>
  );
}
