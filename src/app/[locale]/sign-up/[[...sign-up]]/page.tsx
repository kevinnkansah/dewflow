'use client'

import { Card } from "@nextui-org/react"
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { useTranslations } from 'next-intl'
import { Button, Flex, Text } from '@/once-ui/components'

export default function SignUpPage() {
  const t = useTranslations('signup')

  return (
    <Flex
      fillWidth
      fillHeight
      alignItems="center"
      justifyContent="center"
      style={{ background: 'var(--color-brand-weak)' }}
    >
      <SignUp.Root>
        <SignUp.Step name="start">
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
                Already have an account?{' '}
                <Clerk.Link
                  navigate="sign-in"
                  className="font-medium text-primary hover:underline focus:underline"
                >
                  Sign in
                </Clerk.Link>
              </Text>
            </Flex>
          </Flex>
        </SignUp.Step>
      </SignUp.Root>
    </Flex>
  )
}
