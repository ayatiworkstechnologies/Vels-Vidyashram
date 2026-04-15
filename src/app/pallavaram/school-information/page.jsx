import HeroSection from "../components/About/School-Infromation/HeroSection";
import SchoolInfoPage from "../components/About/School-Infromation/SchoolSection";






const siteTitle = "School Information - Vels Vidyashram";
const siteDescription = "Get detailed information about Vels Vidyashram, including our academic programs, facilities, and extracurricular activities. Learn more about our school's approach to education and the values that define our community. Discover how we nurture the growth and development of our students to prepare them for a successful future. Explore our commitment to excellence in education and the unique opportunities we offer to our students.";
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
     <HeroSection />
     <SchoolInfoPage />
      
    </main>
  );
}
