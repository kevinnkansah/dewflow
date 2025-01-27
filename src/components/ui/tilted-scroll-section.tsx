// @ts-nocheck
import React from 'react';
import { Heading, Text } from '@/once-ui/components';
import { TiltedScroll } from "./tilted-scroll";

const features = [
  { id: "1", text: "Instant Payment Processing" },
  { id: "2", text: "Real-time Analytics" },
  { id: "3", text: "Automated Inventory Management" },
  { id: "4", text: "Supplier Integration" },
  { id: "5", text: "Smart Invoicing" },
  { id: "6", text: "Multi-currency Support" },
  { id: "7", text: "24/7 Customer Support" },
  { id: "8", text: "Mobile App Access" },
];

export function TiltedScrollSection() {
  return (
    <div className="w-full py-20 lg:py-40 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <TiltedScroll 
              items={features}
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4 text-left">
            <Heading
              variant="display-medium-m"
              className="max-w-xl"
              wrap="balance"
            >
              Packed with Essential Features
            </Heading>
            <Text 
              variant="body-default-l"
              onBackground="neutral-medium"
              className="max-w-xl"
            >
              Everything you need to run your business efficiently, all in one place. Our platform combines powerful features with an intuitive interface, making it easier than ever to manage your operations.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
