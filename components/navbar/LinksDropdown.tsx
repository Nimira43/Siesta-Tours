import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import UserIcon from './UserIcon'
import { RxHamburgerMenu } from 'react-icons/rx'
import { links } from '@/utils/links'
import Link from 'next/link'
import SignOutLink from './SignOutLink'
import { SignedOut, SignedIn, SignInButton, SignOutButton } from '@clerk/nextjs'

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex gap-4 max-w-[100px]'
        >
          <RxHamburgerMenu className='w-6 h-6' />         
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-52'
        align='start'
        sideOffset={10}
      >

        <SignedOut>

        </SignedOut>

        <SignedIn>
          {links.map((link) => {
            return (
              <DropdownMenuItem
                key={link.href}
              >
                <Link
                  href={link.href}
                  className='capitalize w-full'
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            )
          })} 
        </SignedIn>
        
        
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
