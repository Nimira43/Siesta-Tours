'use client'
import { SlReload } from 'react-icons/sl'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

type SubmitButtonProps = {
  className?: string
  text?: string
}

export function SubmitButton({
  className = '',
  text = 'submit',
}: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      disabled={pending}
      className={`capitalize ${className}`}
      size='lg'
    >
      {pending ? (
        <>
          <SlReload className='mr-2 h-4 w-4 animate-spin' />
          Please Wait
        </>
      ) : (
        text
      )}
    </Button>
  )
}