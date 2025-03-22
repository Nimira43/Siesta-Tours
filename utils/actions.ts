'use server'

export const createProfileAction = async (prevState: any, formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  if (firstName !== 'John') return { message: 'An error has occurred.' }
  return { message: 'Profile Created' }
}