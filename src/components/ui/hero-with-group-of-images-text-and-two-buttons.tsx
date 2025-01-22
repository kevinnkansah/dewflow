import React from 'react';
import { Button, Badge, Flex, Icon } from '@/once-ui/components';

const images = [
  {
    color: 'info',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300',
    icon: 'HiOutlineSquares2X2'
  },
  {
    color: 'success',
    className: 'row-span-2 hover:scale-[1.02] transition-transform duration-300',
    icon: 'HiOutlineChartBar'
  },
  {
    color: 'warning',
    className: 'aspect-square hover:scale-[1.02] transition-transform duration-300',
    icon: 'HiOutlineShoppingCart'
  }
];

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge 
                title="We're live!"
                background="info-strong"
                border="neutral-medium"
                effect={false}
              />
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                This is the start of something!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button 
                variant="secondary" 
                size="l"
                prefixIcon="HiOutlinePhone"
              >
                Jump on a call
              </Button>
              <Button 
                variant="primary"
                size="l"
                prefixIcon="HiOutlineArrowUpRight"
              >
                Sign up here
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {images.map((image, index) => (
              <Flex
                key={index}
                border="neutral-medium"
                direction="row"
                gap="24"
                padding="24"
                radius="m"
                background={`${image.color}-strong`}
                className={image.className}
              >
                <Icon name={image.icon} size="xl" onBackground="neutral-strong" />
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
