"use client";

import { motion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { Button } from "@/once-ui/components/Button";
import { Flex, Heading, Text } from "@/once-ui/components";

interface CTAProps {
  title: string;

  buttonText?: string;
  bookingUrl?: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,

  buttonText = "Book a Call",
  bookingUrl = "https://cal.com/kevinnkansah/15min",
  className = "",
}) => {
  return (
    <section className={`relative w-screen h-screen overflow-hidden ${className}`}>
      {/* Full-width background layer */}
      <div className="absolute inset-0">
        <AnimatedGradientBackground 
          startingGap={200}
          Breathing={true}
          gradientColors={[
          "#0a0a0a",
          "#0a1a1a", 
          "#006060",
          "#00b0b0", 
          "#00d0d0", 
          "#00d0d0", 
          "#00FFE9"  
        ]}
        gradientStops={[0, 15, 30, 50, 70, 90, 100]}
        animationSpeed={0.02}
        breathingRange={8}
        topOffset={30}
          containerClassName="w-full"
        />

        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 50%, black 80%)"
          }}
        />

        {/* Top Fade Gradient */}
        <div 
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-100 z-30"
        style={{
          maskImage: "linear-gradient(to bottom, #0a0a0a 30%, rgba(10,10,10,0.6) 50%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, #0a0a0a 30%, rgba(10,10,10,0.6) 50%, transparent)"
        }}
      />
      
      {/* Bottom Fade Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-100 z-30"
        style={{
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)"
          }}
        />
      </div>

      {/* Content Container with responsive horizontal padding */}
      <div className="relative z-40 flex items-center justify-center h-screen text-center">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          <Heading align="center" as="h2" variant="display-default-l">
             Get started
          </Heading>
          <Flex
            justifyContent="center"
            paddingTop="12">
              <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
              >
                Start your digital journey with DewFlow
              </Text>
            </Flex>
          
          {/* Once UI Button that opens Cal.com booking */}
          <div className="mt-8">
            <Flex
              justifyContent="center"
              padding="32"
            >
              <Flex
                justifyContent="center"
              >
                <Button
                  onClick={() => window.open(bookingUrl, "_blank")}
                  size="l"
                  suffixIcon="arrowUpRight"
                >
                  {buttonText}
                </Button>
              </Flex>
            </Flex>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;