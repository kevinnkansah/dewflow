'use client';

import { useMediaQuery } from '@react-hook/media-query';
import CTA from "./cta";
import { MinimalCTA } from "./minimal-cta";

interface ResponsiveCTAProps {
  title: string;
  buttonText?: string;
  bookingUrl?: string;
}

export const ResponsiveCTA: React.FC<ResponsiveCTAProps> = ({
  title,
  buttonText = "Book a Call",
  bookingUrl = "https://cal.com/kevinnkansah/15min",
}) => {
  const isMobile = useMediaQuery('(max-width: 1293px)');

  return isMobile ? (
    <MinimalCTA
      title={title}
      buttonText={buttonText}
      bookingUrl={bookingUrl}
    />
  ) : (
    <CTA
      title={title}
      buttonText={buttonText}
      bookingUrl={bookingUrl}
    />
  );
};
