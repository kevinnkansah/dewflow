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
          "#001F1C", // Dark teal
          "#003D38", // Medium dark teal
          "#00635C", // Teal
          "#00A89C", // Bright teal
          "#00D9C9", // Light teal
          "#00FFE9", // Bright aqua
          "#00FFF0"  // Light cyan
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
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/50 to-transparent opacity-80 z-30"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
        }}
      />
      
      {/* Bottom Fade Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-30"
        style={{
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)"
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