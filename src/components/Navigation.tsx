'use client'

import { useAuth } from '@clerk/nextjs'
import { ToggleButton } from '@/once-ui/components'
import { useRouter } from 'next/navigation'
import { UserNav } from './UserNav'
import { Flex } from '@/once-ui/components'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const { isSignedIn } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const isActive = () => {
    const currentPath = pathname?.split('/').pop() || ''
    return currentPath === 'sign-up' || currentPath === 'sign-in'
  }

  if (isSignedIn) {
    return <UserNav />
  }

  return (
    <ToggleButton
      prefixIcon="person"
      onClick={() => router.push('/sign-in')}
      selected={isActive()}
    >
      <Flex paddingX="2">Login</Flex>
    </ToggleButton>
  )
}
