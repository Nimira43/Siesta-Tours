import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Providers from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Siesta Tours',
  description: 'Next JS Airbnb clone website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  )
}
