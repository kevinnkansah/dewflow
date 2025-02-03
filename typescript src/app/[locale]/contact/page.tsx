"use client";
import { useEffect, useState } from 'react';
import { Flex, Heading, Text, Spinner } from '@/once-ui/components';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function ContactPage() {
  const [isCalLoading, setCalLoading] = useState(true);
  
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {"styles":{"branding":{"brandColor":"#000000"}}});
        setCalLoading(false);
      } catch (error) {
        console.error('Error loading Cal.com', error);
        setCalLoading(false);
      }
    })();
  }, []);

  return (
    <Flex direction="column" gap="12">
      {isCalLoading && <Spinner size="l" />}
      
      <Cal
        calLink="kevinnkansah/15min"
        style={{ 
          width: '100%', 
          height: '100%', 
          opacity: isCalLoading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </Flex>
  );
} 