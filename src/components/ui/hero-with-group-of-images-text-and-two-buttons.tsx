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
      paddingY="32"
      gap="16"
      fillWidth
      className="relative overflow-hidden min-h-[85vh] justify-center"
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
            {useMediaQuery('(min-width: 967px)') ? (
              // Desktop layout
              <Heading 
                wrap="balance" 
                variant="display-strong-l" 
                align="center" 
                marginBottom="16"
                className="text-5xl lg:text-6xl font-bold tracking-tight"
                style={{
                  fontSize: '4.5rem'
                }}
              >
                We Speak Fluent Analytics.
              </Heading>
            ) : (
              // Mobile layout
              <Heading 
                wrap="balance" 
                variant="display-strong-l" 
                align="center" 
                marginBottom="16"
                className="flex flex-col items-center justify-center gap-2 text-5xl lg:text-6xl font-bold tracking-tight"
              >
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
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
              className="max-w-2xl mx-auto text-xl leading-relaxed"
            >
              Overwhelmed by data & development? Let DewFlow simplify your business with AI-powered solutions.
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
              className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Text
              variant='body-strong-l'>
                Book a Free Strategy Call 
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