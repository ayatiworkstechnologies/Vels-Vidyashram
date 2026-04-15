import Hero from "../components/course/Spell/Hero";
import SpellBee from "../components/course/Spell/SpellBee";



const siteTitle = "Spell Bee - Vels Vidyashram";
const siteDescription = "Participate in the exciting Spell Bee competition at Vels Vidyashram, a leading CBSE school in Chennai. Challenge your spelling skills and showcase your linguistic abilities in a fun and engaging environment. Join our vibrant community of young learners and educators in this delightful educational experience. Discover how Spell Bee fosters language proficiency, confidence, and a love for words among our students. Get ready to spell your way to success at Vels Vidyashram!";
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
        <SpellBee />
     
    </main>
  );
}
