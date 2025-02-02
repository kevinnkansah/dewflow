// @ts-nocheck
import React from 'react';
import { Button, Badge, Flex, Icon, Heading, Text, RevealFx } from '@/once-ui/components';
import { Label } from '@clerk/elements/common';

const images = [
  {
    color: 'info',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300',
    label: 'Analytics',
    icon: 'dashboard'
  },
  {
    color: 'success',
    className: 'row-span-2 hover:scale-[1.02] transition-transform duration-300',
    label: 'Commerce',
    icon: 'analytics'
  },
  {
    color: 'warning',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300',
    label: 'Dashboard',
    icon: 'cart'
  }
];

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      <RevealFx speed="medium">
        <div className="relative w-full py-20 lg:py-32">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
              <div className="flex gap-6 flex-col">
                <div>
                  <Badge 
                    title="We're live!"
                    background="info-strong"
                    border="neutral-medium"
                    effect={false}
                  />
                </div>
                <div className="flex gap-4 flex-col">
                  {/* @ts-ignore */}
                  <Heading variant="display-medium-xl" className="text-left max-w-lg">
                    This is the start of something!
                  </Heading>
                  <Text 
                    variant="body-default-l"
                    onBackground="neutral-medium"
                    className="max-w-md text-left"
                  >
                    Transform your business with our all-in-one platform. Streamline payments,
                    track analytics, and manage inventory—all in one place.
                  </Text>
                </div>
                <div className="flex flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="l"
                    prefixIcon="phone"
                  >
                    Book a Demo
                  </Button>
                  <Button 
                    variant="primary"
                    size="l"
                    prefixIcon="arrowRight"
                  >
                    Pricing
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Icon name="HiCheckCircle" size="s" className="text-success-strong" />
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    No credit card required • 14-day free trial
                  </Text>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {images.map((image, index) => (
                  <Flex
                    key={index}
                    border="neutral-medium"
                    direction="column"
                    padding="32"
                    radius="m"
                    background={`${image.color}-strong`}
                    className={`${image.className} relative`}
                  >
                    <div className="absolute bottom-6 left-6">
                      <div className="flex flex-col gap-2">
                        <Icon name={image.icon} size="xl" onBackground="neutral-strong" />
                        <Text 
                          variant="body-strong-m" 
                          onBackground="neutral-strong"
                        >
                          {image.label}
                        </Text>
                      </div>
                    </div>
                  </Flex>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealFx>
    </div>
  );
}

export { Hero };
