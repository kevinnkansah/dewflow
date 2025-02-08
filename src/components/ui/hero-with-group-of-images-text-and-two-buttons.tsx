"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Badge, Flex, Icon, Heading, Text, Tag } from '@/once-ui/components';




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
              background="info-weak"
              border="neutral-medium"
              icon="sparkles"
              arrow={false}
              iconColor="text-primary-strong"
              effect
              style={{
                padding: '0.5rem 0.5rem',
              }}
            >
              <Tag
                variant="brand"
                size="s"
                label="AI Automation & Analytics Agency"
              />
            </Badge>
            
          </Flex>

          {/* Text Content */}
          <Flex 
            direction="column" 
            gap="12"
            fillWidth
          >
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              We Speak Fluent Analytics.
            </Heading>
            <Text 
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
            >
              Overwhelmed by data? Let DewFlow simplify.
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