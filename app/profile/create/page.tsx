import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input' 
import { Button } from '@/components/ui/button'

const createProfileAction = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(firstName)
}

function CreateProfilePage() {
  return (
    <div>
      
    </div>
  )
}

export default CreateProfilePage
