'use server'

import { profileSchema } from './schemas'

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema
  } catch (error) {

  }
}