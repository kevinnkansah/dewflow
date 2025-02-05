"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Badge, Flex, Icon, Heading, Text, RevealFx } from '@/once-ui/components';
import { Label } from '@clerk/elements/common';


export function Hero() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleBookCall = () => {
    setIsLoading(true);
    router.push('/contact');
  };

  return (
    <Flex 
      direction="column" 
  
      paddingY="40"
      gap="32"
      fillWidth
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <Flex 
        position="absolute" 
        fill 
        className="bg-gradient-to-br from-background via-background to-muted/50"
      />
        <Flex 
          direction="column" 



          gap="24"

        >
          {/* Badge - Centered */}
          <Flex 
            paddingBottom="16"
            justifyContent="center"
          >
            <Badge 
              title="We're live!"
              background="info-strong"
              border="neutral-medium"
              href="/contact"
              effect
            />
          </Flex>

          {/* Text Content */}
          <Flex 
            direction="column" 
            gap="12"
            fillWidth
          >
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              We let designers code and developers design
            </Heading>
            <Text 
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
            >
              Elevate your online presence with our expert web design and analytics services.
            </Text>
          </Flex>

          {/* Button - Centered */}
          <Flex 
            fillWidth
            gap="16"
            justifyContent="center"
            alignItems="center"
          >
            <Button 
              loading={isLoading}
              onClick={handleBookCall}
              variant="primary" 
              size="l"
              prefixIcon="phone"
            >
              Book a Call
            </Button>
          </Flex>

          {/* Success Message */}
          <Flex 
            gap="12"
            paddingTop="24"
            fillWidth
            justifyContent="center"
            alignItems="center"
          >
            <Icon name="HiCheckCircle" size="m" className="text-success-strong" />
            <Text variant="body-default-xs" onBackground="neutral-medium">
              To celebrate, we are offering a 15% discount to our first 25 customers!
            </Text>
          </Flex>
        </Flex>
    </Flex>
  );
}