"use client";

import { Flex, Spinner } from '@/once-ui/components';

export default function Loading() {
  return (
    <Flex fillWidth fillHeight alignItems="center" justifyContent="center">
      <Spinner size="l" />
    </Flex>
  );
} 