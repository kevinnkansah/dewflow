import React from 'react';
import { Badge, Icon, Text, Heading, Flex, Button, Arrow } from '@/once-ui/components';

const features = [
  {
    icon: 'HiOutlineSquares2X2',
    title: 'Pay supplier invoices',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'info',
    className: 'lg:col-span-2 aspect-square lg:aspect-auto hover:scale-[1.02] transition-transform duration-300'
  },
  {
    icon: 'HiOutlineShoppingCart',
    title: 'Manage inventory',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'success',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300'
  },
  {
    icon: 'HiOutlineChartBar',
    title: 'Track analytics',
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever.',
    color: 'warning',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300'
  },
  {
    icon: 'HiOutlineCreditCard',
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
            <div>
              <Badge 
                title="Platform"
                background="brand-weak"
                border="brand-medium"
                effect={false}
              />
            </div>
            <div className="flex gap-2 flex-col">
              <Heading 
                as="h2"
                size="xl"
                className="max-w-xl"
                wrap="balance"
              >
                Something new!
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
                gap="24"
                padding="24"
                radius="m"
                border="neutral-medium"
                background={`${feature.color}-weak`}
                className={feature.className}
                justify="between"
              >
                <Icon name={feature.icon} size="xl" onBackground="neutral-strong" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Heading as="h3" size="l">{feature.title}</Heading>
                    <Text 
                      variant="body-default-m"
                      onBackground="neutral-medium"
                      className="max-w-xs"
                    >
                      {feature.description}
                    </Text>
                  </div>
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
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
