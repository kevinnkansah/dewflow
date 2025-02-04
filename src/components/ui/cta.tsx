"use client";

import { motion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

interface CTAProps {
  title: string;
  description: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <section className={`relative w-screen h-screen overflow-hidden ${className}`}>
      {/* Main Animated Gradient */}
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
        containerClassName="w-screen"
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
          maskImage: "linear-gradient(to top, #0a0a0a 30%, rgba(10,10,10,0.6) 50%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, #0a0a0a 30%, rgba(10,10,10,0.6) 50%, transparent)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-4xl font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-100 md:text-xl max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;