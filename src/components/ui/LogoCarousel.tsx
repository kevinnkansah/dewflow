"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"

// Define the structure for our logo objects
interface Logo {
  name: string
  id: number
  src: string
}

// Utility function to randomly shuffle an array
// This is used to mix up the order of logos for a more dynamic display
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Utility function to distribute logos across multiple columns
// This ensures each column has a balanced number of logos
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// Props for the LogoColumn component
interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

// LogoColumn component: Displays a single column of animated logos
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000 // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200 // Stagger the start of each column's animation
    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)

    // Memoize the current logo path to prevent unnecessary re-renders
    const currentLogo = useMemo(
      () => logos[currentIndex],
      [logos, currentIndex]
    )

    return (
      // Framer Motion component for the column container
      <motion.div
        className="w-32 h-20 md:w-64 md:h-32 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below final position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
        transition={{
          delay: index * 0.1, // Stagger the animation of each column
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* AnimatePresence enables animation of components that are removed from the DOM */}
        <AnimatePresence mode="wait">
          {/* Framer Motion component for each logo */}
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            // Animation for when the logo enters
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            // Animation for when the logo is displayed
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
          >
            <Image 
              src={currentLogo.src}
              alt={currentLogo.name}
              width={300}
              height={150}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)


// Main LogoCarousel component
const logos: Logo[] = [
  { name: 'Company 1', id: 1, src: '/logos/image3.png' },
  { name: 'Company 2', id: 2, src: '/logos/image2.png' },
  { name: 'Company 3', id: 3, src: '/logos/image7.png' },
  { name: 'Company 4', id: 4, src: '/logos/image4.png' },
  { name: 'Company 5', id: 5, src: '/logos/image5.png' },
  { name: 'Company 6', id: 6, src: '/logos/image6.png' },
  { name: 'Company 7', id: 7, src: '/logos/image1.png' },
];

function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  // Distribute logos across columns when the component mounts or columnCount changes
  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [columnCount])

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Render the logo columns
  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}


// Add display name for better debugging
LogoColumn.displayName = 'LogoColumn';
LogoCarousel.displayName = 'LogoCarousel';

export { LogoCarousel }
export default LogoCarousel
