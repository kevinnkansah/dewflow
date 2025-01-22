import React from 'react';
import { 
  Heading, 
  Text, 
  Button, 
  Card, 
  Grid,
  RevealFx, 
  Icon,
  Badge,
  Background,
  Row,
  Column,
  LogoCloud
} from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { baseURL, routes, renderContent, newsletter } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { Feature } from '@/components/ui/feature-section-with-bento-grid';

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
  const { home } = renderContent(t);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Feature />
    </main>
  );
}
