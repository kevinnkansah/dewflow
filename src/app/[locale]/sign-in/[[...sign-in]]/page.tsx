'use client'

import { SignIn } from "@clerk/nextjs"
import { useTranslations } from 'next-intl'
import { Flex } from '@/once-ui/components'

export default function SignInPage() {
  const t = useTranslations('signin')

  return (
    <Flex
      fillWidth
      fillHeight
      alignItems="center"
      justifyContent="center"
    >
      <SignIn
        appearance={{
          variables: {
            colorPrimary: '#14b8a6',
            colorTextOnPrimaryBackground: 'white',
            borderRadius: '0.5rem'
          },
          elements: {
            socialButtonsBlockButton: {
              backgroundColor: '#0d9488',
              border: '1px solid #0f766e',
              '&:hover': {
                backgroundColor: '#0f766e',
              }
            },
          }
        }}
      />
    </Flex>
  )
}
