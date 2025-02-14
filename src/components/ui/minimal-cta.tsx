import { Button, Flex, Background, Column, Heading , Text} from "@/once-ui/components";

import { motion } from 'framer-motion';

interface MinimalCTAProps {
  title: string;
  buttonText?: string;
  bookingUrl?: string;
}

export const MinimalCTA: React.FC<MinimalCTAProps> = ({
  title,
  buttonText = "Book a Call",
  bookingUrl = "https://cal.com/dewflow/15min",
}) => {
  return (
    <Column
    border="neutral-alpha-weak"
    paddingX="32"
    radius="xl"
    overflow="hidden"
    paddingY="160"
    fillWidth
    position="relative"
  >
    <Background
      mask={{
        x: 100,
        y: 0,
      }}
      position="absolute"
      grid={{
        display: true,
        color: "neutral-alpha-medium",
        width: "2rem",
        height: "2rem",
      }}
    />
    <Background
      mask={{
        x: 0,
        y: 100,
        radius: 100,
      }}
      position="absolute"
      grid={{
        display: true,
        color: "brand-alpha-strong",
        width: "12",
        height: "12",
      }}
      gradient={{
        display: true,
        opacity: 100,
        height: 100,
        width: 100,
        tilt: 0,
        x: 0,
        y: 100,
        colorStart: "brand-background-strong",
        colorEnd: "brand-background-medium",
      }}
    />
    <Column gap="24" fillWidth position="relative">
      <Heading align="center" as="h2" variant="display-default-l">
        {title}
      </Heading>
      <Text align="center" variant="body-default-l">
      Start your digital journey with DewFlow
      </Text>
        <Flex
        justifyContent="center">
        <Button
            onClick={() => window.open(bookingUrl, "_blank")}
            size="l"
            suffixIcon="arrowUpRight"
          >
            {buttonText}
          </Button>
        </Flex>
        
    </Column>
  </Column>
  );
};
