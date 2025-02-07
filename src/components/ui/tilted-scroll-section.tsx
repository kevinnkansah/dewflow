import React from 'react';
import { Heading, Text } from '@/once-ui/components';
import { TiltedScroll } from "./tilted-scroll";

const features = [
  { id: "1", text: "Sleek Web Design" },
  { id: "2", text: "Analytic Reports" },
  { id: "3", text: "AI Chatbots" },
  { id: "4", text: "Quick Delivery" },
  { id: "5", text: "24/7 Support" },
  { id: "6", text: "Mobile Responsive Website" },
  { id: "7", text: "Latest AI Models"},
  { id: "8", text: "Premium Design"},
  { id: "9", text: "Sleek Web Design" },
  { id: "10", text: "Analytic Reports" },
  { id: "11", text: "AI Chatbots" },
  { id: "12", text: "Quick Delivery" },
  { id: "13", text: "24/7 Support" },
  { id: "14", text: "Mobile Responsive Website" },
  { id: "15", text: "Latest AI Models"},
  { id: "16", text: "Premium Design"} 
];

export function TiltedScrollSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <TiltedScroll 
              items={features}
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4 text-left">
            <Heading as="h2" variant="display-default-m">
                Everything you need
            </Heading>
            <Text 
              variant="body-default-l"
              onBackground="neutral-medium"
              className="max-w-xl"
            >
              Experience seamless integration of AI, data insights, cutting-edge web solutions, and interactive demos—all in one place. Our agency delivers transformative results through intuitive design, powerful automation, and personalized support, ensuring you stay ahead in an ever-evolving digital landscape.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
