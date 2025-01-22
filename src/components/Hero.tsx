import React from 'react';
import { Flex, Heading, Text, Button, Badge, Grid } from '@/once-ui/components';
import { iconLibrary } from '@/once-ui/icons';

function Hero() {
  return (
    <Flex direction="column" fillWidth paddingY="40" alignItems="center">
      <Grid columns={2} gap="8">
        <Flex direction="column" gap="4">
        <Badge arrow effect>We're live</Badge>
          <Heading as="h1" size="xl" align="left" wrap="balance">
            This is the start of something!
          </Heading>
          <Text variant="body-default-xl" align="left" onBackground="neutral-medium">
            Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
          </Text>
          <Flex direction="row" gap="4">
            <Button size="l" variant="secondary" prefixIcon="contact">
              Jump on a call
            </Button>
            <Button size="l" suffixIcon="chevronRight">
              Sign up here
            </Button>
          </Flex>
        </Flex>
        <Grid columns={2} gap="8">
          <Flex background="neutral-medium" radius="m" aspectRatio="1 / 1" />
          <Flex background="neutral-medium" radius="m" aspectRatio="1 / 1" />
          <Flex background="neutral-medium" radius="m" aspectRatio="1 / 1" />
        </Grid>
      </Grid>
    </Flex>
  );
}

export { Hero };
