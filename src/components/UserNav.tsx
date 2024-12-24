'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { UserMenu } from '@/once-ui/components'
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

  return (
    <UserMenu
      name={user.fullName || user.username || 'User'}
      subline={user.primaryEmailAddress?.emailAddress}
      avatarProps={{
        empty: !imageUrl,
        value: avatar as any
      }}
      dropdownAlignment="right"
      dropdownProps={{
        onOptionSelect: handleOptionSelect
      }}
      dropdownOptions={[
        {
          label: 'Account settings',
          value: 'account',
          hasPrefix: <PersonIcon className="w-5 h-5" />
        },
        {
          dividerAfter: true,
          label: 'Sign out',
          value: 'signout'
        }
      ]}
    />
  )
}
