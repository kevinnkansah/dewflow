"use client";
import { useMediaQuery } from '@react-hook/media-query'
import { LogoCarousel } from "@/components/ui/LogoCarousel"
import { 
  Flex, 
  Heading, 
  Text,
  Background,
  SmartLink,
  TiltFx,
  HoloFx,
  Fade,
  Button,
  Column
} from "@/once-ui/components"

export default function CertificationLogos() {
  const isDesktop = useMediaQuery('(min-width: 765px)')

  return (
    isDesktop ? (
      
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        paddingBottom='32'
        style={{ position: "relative", overflow: "hidden", width: "100%", padding: "5rem 1rem" }}
      ><Background borderTop="brand-alpha-strong"
      mask={{
        x: 50,
        y: 50,
      }}
      position="absolute"
      grid={{
        display: true,
        width: "0.125rem",
        color: "info-alpha-strong",
        height: "0.125rem",
      }}/>
        
        <Column 
          style={{ 
            textAlign: "center", 
            padding: "0 2rem",
            marginBottom: "2rem"
          }}
        >
          <Heading variant="display-default-l" align="center" paddingBottom='24' >
            Industry Certifications
          </Heading>
          <Text variant="body-default-l" align="center" onBackground="neutral-medium">
            Certified by leading tech companies in Data Science and AI
          </Text>
        </Column>
        <Flex 
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap='32'
        >
          
          <img src="/logos/google.png" alt="Google Logo" style={{ height: "120px" }} />
          <img src="/logos/ibm.png" alt="IBM Logo" style={{ height: "60px" }} />
          <img src="/logos/matlab.png" alt="MATLAB Logo" style={{ height: "60px" }} />
        </Flex>
      </Flex>
    ) : (
      <Flex 
        /* Mobile DO NOT EDIT BELOW*/
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ width: "100%", padding: "5rem 1rem" }}
      >
        <Fade
          position="absolute"
          top="0"
          left="0"
          to="bottom"
          height={8}
          fillWidth
          blur={0.25}
          zIndex={1}
        />
        <Flex 
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ maxWidth: "1200px", gap: "3rem" }}
        >
          <Column 
            style={{ 
              textAlign: "center", 
              padding: "0 2rem"
            }}
          >
            <Heading variant="display-default-m" align="center" paddingBottom='16'>
              Industry Certifications
            </Heading>
            <Text 
              variant="body-default-m" 
              align="center" 
              onBackground="neutral-medium"
            >
              Certified by the top tech leaders in Data Science and AI
            </Text>
          </Column>
          <TiltFx
            style={{
              width: "100%",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid var(--neutral-alpha-weak)"
            }}
          >
            <HoloFx fill>
              {/* Base dark gradient */}
              <Background
                fill
                position="absolute"
                gradient={{
                  display: true,
                  tilt: 145,
                  height: 120,
                  width: 100,
                  x: 0,
                  y: 0,
                  colorStart: "#000000",
                  colorEnd: "#1a1a1a"
                }}
              />
              {/* Animated circuit pattern */}
              <Background
                fill
                position="absolute"
                dots={{
                  display: true,
                  opacity: 20,
                  size: "4",
                  color: "accent-solid-strong"
                }}
                mask={{
                  cursor: true,
                  radius: 75
                }}
              />
              {/* Neural network grid */}
              <Background
                fill
                position="absolute"
                grid={{
                  display: true,
                  opacity: 10,
                  color: "brand-solid-strong",
                  width: "2rem",
                  height: "2rem"
                }}
                mask={{
                  x: 50,
                  y: 50,
                  radius: 100
                }}
              />
              {/* Data flow lines */}
              <Background
                fill
                position="absolute"
                gradient={{
                  display: true,
                  tilt: -35,
                  height: 80,
                  width: 120,
                  x: 20,
                  y: 30,
                  colorStart: "accent-solid-medium",
                  colorEnd: "static-transparent",
                  opacity: 30
                }}
              />
              <Flex 
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ 
                  padding: "3rem 2rem",
                  width: "100%",
                  maxWidth: "800px",
                  margin: "0 auto"
                }}
              >
                <LogoCarousel columnCount={2} />
              </Flex>
            </HoloFx>
          </TiltFx>
          <Flex 
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: "2rem" }}
          />
        </Flex>
      </Flex>
    )
  )
}
