'use client'

import { Card } from "@nextui-org/react"
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useTranslations } from 'next-intl'
import { Button, Flex, Text } from '@/once-ui/components'

export default function SignInPage() {
  const t = useTranslations('signin')

  return (
    <Flex
      fillWidth
      fillHeight
      alignItems="center"
      justifyContent="center"
      style={{ background: 'var(--color-brand-weak)' }}
    >
      <SignIn.Root>
        <SignIn.Step name="start">
          <Flex
            style={{ overflow: 'hidden' }}
            position="relative"
            fillWidth
            padding="xl"
            radius="l"
            direction="column"
            alignItems="center"
            background="surface"
            border="neutral-medium"
            borderStyle="solid"
            maxWidth={480}
          >
            <Text
              variant="heading-strong-l"
              marginBottom="l"
              align="center"
            >
              {t('description')}
            </Text>

            <Flex direction="column" gap="8" fillWidth>
              <Clerk.GlobalError className="text-sm text-error" />

              <Flex justifyContent="center" marginBottom="8">
                <Clerk.Connection name="google">
                  <Button variant="primary" prefixIcon="google" size="l">
                    Continue with Google
                  </Button>
                </Clerk.Connection>
              </Flex>

              <Text
                variant="body-default-s"
                color="neutral-faded"
                align="center"
              >
                No account?{' '}
                <Clerk.Link
                  navigate="sign-up"
                  className="font-medium text-primary hover:underline focus:underline"
                >
                  Sign up
                </Clerk.Link>
              </Text>
            </Flex>
          </Flex>
        </SignIn.Step>
      </SignIn.Root>
    </Flex>
  )
}