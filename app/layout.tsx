import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Siesta Tours',
  description: 'Holiday properties website using Next JS, Clerk and Shadcn.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <Providers>
            <Navbar />
            <main className='container py-10'>
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider> 
  )
}
