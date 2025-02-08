'use client'

import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTranslations } from 'next-intl'
import { Flex } from '@/once-ui/components'

export default function SignUpPage() {
  const t = useTranslations('signup')

  return (
    <Flex
      fillWidth
      fillHeight
      alignItems="center"
      justifyContent="center"

    >
      <SignUp
        appearance={{
          baseTheme: dark,
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
