'use client'

import { useToast } from '@/hooks/use-toast'

function SignOutLink() {
  const { toast } = useToast()
  const handleLogout = () => {
    toast({ description: 'You have been signed out.'})
  }
  
  return (
    <div>
      <h1>Sign Out Link</h1>
    </div>
  )
}

export default SignOutLink
