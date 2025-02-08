import { Heading, Flex, Fade } from "../once-ui/components";

export const BrandName = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="32"
      maxWidth="xl"
      className="mx-auto"
      position="relative"
    >
      <Fade
        fillWidth
        position="absolute"
        top="0"
        to="bottom"
        height={8}
        pattern={{
          display: true,
          size: '2'
        }}
      />
      <Fade
        fillWidth
        position="absolute"
        bottom="0"
        to="top"
        height={8}
        pattern={{
          display: true,
          size: '2'
        }}
      />
      <Heading
        as="h1"
        variant="display-strong-xl"
        onBackground="info-weak"
        align="center"
        style={{
          fontSize: 'clamp(3.5rem, 15vw, 20rem)',
          lineHeight: '0.85',
          letterSpacing: '-0.03em',
          fontWeight: '900',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          hyphens: 'auto',
          WebkitHyphens: 'auto',
          msHyphens: 'auto'
        }}
      >
        DewFlow
      </Heading>
    </Flex>
  );
}; 