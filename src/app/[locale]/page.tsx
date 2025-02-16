import React from 'react';
import { 
  RevealFx, 
  Flex
} from '@/once-ui/components';
import Logos from '@/components/ui/logos';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { VelocityScroll } from '@/components/ui/velocity-scroll';

import { ResponsiveCTA } from '@/components/ui/responsive-cta';
import { Feature } from '@/components/ui/feature-section-with-bento-grid';
import { TiltedScrollSection } from '@/components/ui/tilted-scroll-section';
import { BrandName } from '@/components';
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
      <Flex className="w-full">
        <Hero />
      </Flex>

      {/* Show VelocityScroll only on desktop (lg and up) */}
      <div className="hidden lg:block w-full max-w-5xl mx-auto py-24">
        <div className="max-w-5xl mx-auto px-4">
          <VelocityScroll 
            text="AI Analytics Development Automation"
            className={cn(
              "text-4xl lg:text-5xl xl:text-6xl font-bold",
              "text-center whitespace-nowrap",
              "text-white/80",
              "motion-reduce:animate-none",
              "transition-all duration-1000 ease-out"
            )}
          />
        </div>
      </div>
      <Flex className="w-full py-48">
        <Feature />
      </Flex>

      <Flex className="w-full py-48">
        <TiltedScrollSection />
      </Flex>

      <Flex className="w-full py-48">
        <Logos />
      </Flex>
      
      <div className="w-full py-32">
        <ResponsiveCTA
          title="Get Started"
          buttonText="Book a Free Call"
          bookingUrl="https://cal.com/dewflow/15min"
        />
      </div>
      <BrandName />
    </main>
  );
}
