// @ts-nocheck
import React from 'react';
import { Badge, Text, Heading, Flex, Button, Arrow, Icon, Background } from '@/once-ui/components';

const features = [
  {
    title: 'Website Creation',
    description: "We design eye-catching websites that boost your brand and engage your audience.",
    color: 'info',
    icon: 'datatable',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'Analytics',
    description: 'We deliver clear, profit-focused analytics to help you grow and optimize your business.',
    color: 'success',
    icon: 'dollar',
    className: 'aspect-square hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'AI Integration',
    description: 'Our AI solutions leverage cutting-edge AI models and data intelligence to personalize customer experiences.',
    color: 'success',
    icon: 'pie',
    className: 'aspect-square hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'Product Demos',
    description: 'We build rapid web app prototypes to test your demo concept before full-scale development.',
    color: 'brand',
    icon: 'stonks',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-all duration-300'
  }
];

function Feature() {
  return (
    <div className="w-full py-32 lg:py-48">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-16">
          <div className="flex gap-6 flex-col items-center text-center">
            <div className="flex gap-4 flex-col items-center max-w-2xl mx-auto">
              <Heading 
                variant="display-default-m"
                as="h2"
                align="center"
              >
                Our Services
              </Heading>
              <Text 
                variant="body-default-m"
                onBackground="neutral-medium"
                align="center"
                className="max-w-xl lg:max-w-lg"
              >
                Our agency provides all the solutions you need to manage and grow your business efficiently.
                
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Flex
                key={index}
                direction="column"
                padding="32"
                radius="m"
                border="neutral-medium"
                background={`${feature.color}-strong`}
                className={`${feature.className} relative group`}
              >
                  <Background
                    mask={{
                      x: 60,
                      y: 0,
                      radius: 100,
                    }}
                    position="absolute"
                    gradient={{
                      display: true,
                      tilt: -35,
                      height: 75,
                      width: 150,
                      x: 100,
                      y: 40,
                      colorStart: "accent-solid-medium",
                      colorEnd: "static-transparent",
                    }}
                    dots={{
                        display: true,
                        size: "4",
                        color: "accent-solid-strong",
                        opacity: 100
                    }}
                  />
                  <Background
                    data-solid="color"
                    mask={{
                      x: 75,
                      y: 0,
                      radius: 100,
                    }}
                    position="absolute"
                    gradient={{
                      display: true,
                      opacity: 100,
                      tilt: -35,
                      height: 50,
                      width: 120,
                      x: 80,
                      y: 50,
                      colorStart: index < 2 ? "alt-brand" : "brand-solid-strong",
                      colorEnd: "static-transparent",
                    }}
                  />
                  <Background
                    mask={{
                      x: 0,
                      y: 100,
                      radius: 100,
                    }}
                    position="absolute"
                    gradient={{
                      display: true,
                      opacity: 100,
                      tilt: -35,
                      height: 50,
                      width: 120,
                      x: 25,
                      y: 50,
                      colorStart: index < 2 ? "alt-page" : "page-background",
                      colorEnd: "static-transparent",
                    }}
                  />
                <div className="flex flex-col gap-6 h-full relative z-0">
                  <div className="flex flex-col gap-4">
                    <div className={`p-3 rounded-lg bg-${feature.color}-strong/10 w-fit`}>
                      <Flex
                        direction="row"
                        align="center"
                        justify="center"
                        className={`text-${feature.color}-strong`}
                      >
                        {feature.icon === 'datatable' && <img src="/feature-cards/datatable.svg" alt="datatable" className="w-24 h-24 object-contain" />}
                        {feature.icon === 'dollar' && <img src="/feature-cards/dollar.svg" alt="dollar" className="w-24 h-24 object-contain" />}
                        {feature.icon === 'pie' && <img src="/feature-cards/pie.svg" alt="pie" className="w-24 h-24 object-contain" />}
                        {feature.icon === 'stonks' && <img src="/feature-cards/stonks.svg" alt="stonks" className="w-24 h-24 object-contain" />}
                      </Flex>
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3">
                      <Text variant='body-strong-m'>
                        {feature.title}
                        </Text>
                        </Heading>
                      <Text 
                        variant="body-default-s"
                        onBackground="neutral-medium"
                        className="max-w-xs -z-10"
                      >
                        {feature.description}
                      
                      </Text>
                      <Button
                      id={`feature-${index}`}
                      variant="secondary"
                      size="s"
                      href="/contact"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Flex gap="8">
                        Learn more
                        <Arrow
                          trigger={`#feature-${index}`}
                          color="onBackground"
                        />
                      </Flex>
                    </Button>
                    </div>
                  </div>
                </div>
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
