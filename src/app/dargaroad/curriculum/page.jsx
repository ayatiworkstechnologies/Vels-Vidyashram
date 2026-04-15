

import Hero from '@/app/thalambur/components/Academics/Curriculum/Hero';
import CurriculumSection from '../components/Academics/Curriculum/CurriculumPage';

const siteTitle = "Curriculum - Vels Vidyashram";
const siteDescription = "Explore the comprehensive curriculum at Vels Vidyashram, designed to provide students with a well-rounded education that fosters academic excellence and personal growth.";
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
        <CurriculumSection />
    
    </main>
  );
}
