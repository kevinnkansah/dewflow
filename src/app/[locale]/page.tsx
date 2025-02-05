import React from 'react';
import { 
  RevealFx, 

  Flex
} from '@/once-ui/components';
import { baseURL, routes, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { VelocityScroll } from '@/components/ui/velocity-scroll';
import { ResponsiveCTA } from '@/components/ui/responsive-cta';
import { Feature } from '@/components/ui/feature-section-with-bento-grid';
import { TiltedScrollSection } from '@/components/ui/tilted-scroll-section';
import { cn } from '@/lib/utils';

export async function generateMetadata(
  {params: {locale}}: { params: { locale: string }}
) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/${locale}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home(
  { params: {locale}}: { params: { locale: string }}
) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* Show VelocityScroll only on desktop (lg and up) */}
      <div className="hidden lg:block w-full max-w-5xl mx-auto py-8">
        <div className="max-w-5xl mx-auto px-4">
          <VelocityScroll 
            text="AI Data Analytics Web Development Building Automation"
            default_velocity={5}
            className={cn(
              "text-3xl lg:text-5xl xl:text-6xl", // Adjust scaling for larger screens
              "font-bold text-center whitespace-nowrap text-white",
              "overflow-x-hidden",
              "px-2 lg:px-4",
              "motion-reduce:animate-none"
            )}
          />
        </div>
      </div>
      <Feature />
      <Flex
      padding='32'
      >
      <TiltedScrollSection />
      </Flex>
      
      <RevealFx>
      <div className="w-full">
        <ResponsiveCTA
          title="Get Started"
          buttonText="Book a Call"
          bookingUrl="https://cal.com/kevinnkansah/15min"
        />
      </div>
      </RevealFx>
      
    </main>
  );
}
