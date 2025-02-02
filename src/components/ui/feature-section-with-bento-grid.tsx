// @ts-nocheck
import React from 'react';
import { Badge, Text, Heading, Flex, Button, Arrow, Icon } from '@/once-ui/components';

const features = [
  {
    title: 'Smart Payments',
    description: 'Process payments securely and efficiently with our integrated payment solution.',
    color: 'info',
    icon: 'PiShoppingCartDuotone',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track your business performance with powerful analytics and insights.',
    color: 'success',
    icon: 'PiChartLineUpDuotone',
    className: 'aspect-square hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'Inventory Control',
    description: 'Manage your stock levels and automate reordering with smart inventory management.',
    color: 'warning',
    icon: 'PiGridFourDuotone',
    className: 'aspect-square hover:scale-[1.02] transition-all duration-300'
  },
  {
    title: 'Business Dashboard',
    description: 'Get a complete overview of your business with our intuitive dashboard.',
    color: 'brand',
    icon: 'PiSquaresFourDuotone',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-all duration-300'
  }
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-16">
          <div className="flex gap-6 flex-col items-start">
            <Badge 
              title="Features"
              background="brand-weak"
              border="neutral-medium"
              effect={false}
            />
            <div className="flex gap-4 flex-col">
              {/* @ts-ignore */}
              <Heading 
                variant="display-medium-m"
                className="max-w-xl"
                wrap="balance"
              >
                Everything you need to scale your business
              </Heading>
              <Text 
                variant="body-default-l"
                onBackground="neutral-medium"
                className="max-w-xl lg:max-w-lg"
              >
                Our platform provides all the tools you need to manage and grow your business efficiently.
                Start streamlining your operations today.
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
                background={`${feature.color}-weak`}
                className={`${feature.className} relative group`}
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col gap-4">
                    <div className={`p-3 rounded-lg bg-${feature.color}-strong/10 w-fit`}>
                      <Flex
                        direction="row"
                        align="center"
                        justify="center"
                        className={`text-${feature.color}-strong`}
                      >
                        <Icon name={feature.icon} size="l" />
                      </Flex>
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3" size="l">{feature.title}</Heading>
                      <Text 
                        variant="body-default-m"
                        onBackground="neutral-medium"
                        className="max-w-xs"
                      >
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button
                      id={`feature-${index}`}
                      variant="secondary"
                      size="s"
                      href="#"
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
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
