import Hero from "@/app/thalambur/components/About/School-Information/Hero";
import SchoolInfoPage from "../components/About/SchoolInformation/SchoolInfo";



const siteTitle = "School Information - Vels Vidyashram";
const siteDescription = "Learn more about Vels Vidyashram, a leading CBSE school in Chennai committed to providing quality education and holistic development for our students.";
const siteUrl = 'https://yourwebsite.com';
const siteImage = 'https://yourwebsite.com/default-share-image.jpg';

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
    viewport: 'width=device-width, initial-scale=1',
};
export default function Page() {
  return (
    <main>
       <Hero />
       <SchoolInfoPage />
    
    </main>
  );
}
