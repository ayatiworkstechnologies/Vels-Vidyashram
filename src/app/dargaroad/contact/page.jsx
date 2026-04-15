import ContactSection from "../components/Contact/ContactSection";
import Hero from "../components/Contact/Hero";




const siteTitle = "Contact Us - Vels Vidyashram";
const siteDescription = "Get in touch with Vels Vidyashram, a leading CBSE school in Chennai committed to providing quality education and holistic development for our students. Contact us for inquiries, admissions, or any information you need about our school.";
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
      <ContactSection/>
    </main>
  );
}
