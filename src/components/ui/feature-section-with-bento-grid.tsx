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
    <div className="w-full">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-24">
          <div className="flex gap-6 flex-col items-center text-center">
            <div className="flex gap-4 flex-col items-center max-w-2xl mx-auto">
              <Heading 
                variant="display-strong-m"
                as="h2"
                align="center"
                className="text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Comprehensive Digital Solutions
              </Heading>
              <Text 
                variant="body-default-l"
                onBackground="neutral-medium"
                align="center"
                className="max-w-xl lg:max-w-2xl"
                style={{ lineHeight: 1.6 }}
              >
                Everything you need to transform your business with AI and analytics, all in one place.
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Flex
                key={index}
                direction="column"
                padding="48"
                radius="m"
                border={index === 0 ? 'accent-medium' : 'brand-medium'}
                background={index === 0 ? 'accent-strong' : `${feature.color}-strong`}
                className={`${feature.className} relative group overflow-hidden`}
              >
                  <Background
                    mask={{
                      x: 60,
                      y: 0,
                      radius: 100,
                      overflow: 'hidden'
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
                        opacity: 100,
                        overflow: "hidden"
                    }}
                  />
                  <Background
                    data-solid="color"
                    mask={{
                      x: 75,
                      y: 0,
                      radius: 100,
                      overflow: 'hidden'
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
                      overflow: 'hidden'
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
                <div className="flex flex-col gap-8 h-full relative z-10 justify-center">
                  <div className="flex flex-col gap-6 relative">
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
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    >
                      <Flex gap="8" className="items-center">
                        Learn more
                        <Arrow
                          trigger={`#feature-${index}`}
                          color="onBackground"
                          className="group-hover:translate-x-1 transition-transform duration-300"
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
