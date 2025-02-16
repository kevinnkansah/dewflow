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
    <div className="w-full">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <TiltedScroll 
              items={features}
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-8 text-left relative z-10 p-8">
            <Heading 
              as="h2" 
              variant="display-strong-m"
              style={{
                lineHeight: '1.1',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}
            >
              Transformative AI Integration & Support
            </Heading>
            <Text 
              variant="body-default-l"
              onBackground="neutral-medium"
              className="max-w-xl"
            >
              Experience seamless integration of AI, data insights, cutting-edge web solutions, and interactive demos—all in one place. 
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
