'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useTranslations } from 'next-intl'
import { Button, Flex, Text, Background } from '@/once-ui/components'

export default function SignInPage() {
  const t = useTranslations('signin')

  return (
    <div className="grid w-full flex-grow items-center px-4 sm:justify-center" style={{ background: 'var(--color-brand-weak)' }}>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full flex-grow space-y-6 rounded-xl bg-surface px-4 py-10 shadow-lg ring-1 ring-inset ring-neutral-medium sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="text-xl font-medium tracking-tight">
              {t('description')}
            </h1>
          </header>

          <Clerk.GlobalError className="text-sm text-error" />

          <div className="space-y-2">
            <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md bg-surface-dark px-3.5 py-1.5 text-sm font-medium shadow-sm hover:bg-surface-dark/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 16"
                className="w-4"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                />
              </svg>
              Continue with Google
            </Clerk.Connection>
          </div>

          <p className="text-center text-sm text-neutral-faded">
            No account?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="font-medium text-primary hover:underline focus:underline"
            >
              Create one
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
