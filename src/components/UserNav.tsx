'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { UserMenu, Flex, Option, Avatar, Text, Line } from '@/once-ui/components'
import { iconLibrary } from '@/once-ui/icons'

const getImageUrl = (baseUrl: string, width: number) => {
  return `${baseUrl}?width=${width}`
}

export function UserNav() {
  const router = useRouter()
  const { signOut, openUserProfile } = useClerk()
  const { user } = useUser()

  if (!user) return null

  const handleOptionSelect = async (option: { value: string }) => {
    switch (option.value) {
      case 'account':
        openUserProfile()
        break
      case 'billing':
        router.push('/billing')
        break
      case 'settings':
        router.push('/settings')
        break
      case 'signout':
        await signOut()
        router.push('/')
        break
    }
  }

  // Get the base image URL from Clerk
  const imageUrl = user.imageUrl
  const avatar = imageUrl ? (
    <img 
      crossOrigin="anonymous"
      srcSet={`${getImageUrl(imageUrl, 80)} 1x, ${getImageUrl(imageUrl, 160)} 2x`}
      src={getImageUrl(imageUrl, 160)}
      alt={`${user.fullName || user.username}'s avatar`}
      title={user.fullName || user.username || ''}
      className="w-full h-full object-cover rounded-full"
    />
  ) : null

  const PersonIcon = iconLibrary.person

  const dropdownContent = (
    <Flex direction="column" padding="4">
      <Flex direction="column" gap="8">
        <Option
          hasPrefix={<PersonIcon className="w-5 h-5" />}
          label="Account settings"
          onClick={() => handleOptionSelect({ value: 'account' })}
          value="account"
        />
        <Line />
        <Option
          label="Sign out"
          onClick={() => handleOptionSelect({ value: 'signout' })}
          value="signout"
        />
      </Flex>
    </Flex>
  )

  return (
    <Flex style={{ position: 'relative' }} alignItems="center">
      <UserMenu
        name={user.firstName || user.username || 'User'}
        avatarProps={{
          empty: !imageUrl,
          value: avatar as any
        }}
        style={{ width: 'auto' }}
        dropdown={dropdownContent}
      />
    </Flex>
  )
}
