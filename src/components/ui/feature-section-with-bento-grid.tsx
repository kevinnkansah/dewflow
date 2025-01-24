import React from 'react';
import { Badge, Text, Heading, Flex, Button, Arrow } from '@/once-ui/components';

const features = [
  {
    title: 'Pay supplier invoices',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'info',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-transform duration-300'
  },
  {
    title: 'Manage inventory',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'success',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300'
  },
  {
    title: 'Track analytics',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'warning',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300'
  },
  {
    title: 'Process payments',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'error',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-transform duration-300'
  }
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Heading 
                variant="display-medium-m"
                className="max-w-xl"
                wrap="balance"
              >
                Streamline your business operations
              </Heading>
              <Text 
                variant="body-default-l"
                onBackground="neutral-medium"
                className="max-w-xl lg:max-w-lg"
              >
                Managing a small business today is already tough.
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
                className={`${feature.className} relative min-h-[280px]`}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Heading as="h3" size="l">{feature.title}</Heading>
                    <Text 
                      variant="body-default-m"
                      onBackground="neutral-medium"
                      className="max-w-xs"
                    >
                      {feature.description}
                    </Text>
                    <Button
                      id={`feature-${index}`}
                      variant="secondary"
                      size="s"
                      href="#"
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
