"use client";
import React, { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/navigation';
import { Button, Badge, Flex, Icon, Heading, Text, Tag } from '@/once-ui/components';
import RotatingText from '@/components/ui/RotatingText'
  




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
  
      paddingY="64"
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
              background="brand-weak"
              border="neutral-medium"
              icon="sparkles"
              arrow={false}
              iconColor="brand-strong"
              effect
              style={{
                padding: '0.25rem 0.35rem',
                transform: 'scale(0.95)'
              }}
            >
              <Flex 
              >
                <Text 
                  variant="body-default-xs"
                  onBackground="brand-medium"
                >
                  AI Automation & Analytics Agency
                </Text>
              </Flex>
            </Badge>
            
          </Flex>

          {/* Text Content */}
          <Flex 
            direction="column" 
            gap="12"
            fillWidth
          >
            {useMediaQuery('(min-width: 640px)') ? (
              // Desktop layout
              <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              We Speak Fluent Analytics.
            </Heading>
            ) : (
              // Mobile layout
              <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16" className="flex flex-col items-center justify-center gap-2">
                <span>We Speak Fluent</span>
                <RotatingText
                  texts={['Analytics.', 'Design.', 'Automation.']}
                  mainClassName="inline-flex items-center justify-center w-[220px]"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.015}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </Heading>
            )}
            <Text 
              variant="body-default-m"
              onBackground="neutral-medium"
              align="center"
            >
              Overwhelmed by data & devlopment? Let DewFlow simplify.
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
              <Text
              variant='body-strong-l'>
                Book a Free Call 
              </Text>
              
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
              To celebrate our launch, we are offering a 15% discount to our first 25 customers!
            </Text>
          </Flex>
        </Flex>
    </Flex>
  );
}