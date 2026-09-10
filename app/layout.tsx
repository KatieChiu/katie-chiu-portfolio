import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Katie Chiu — Ingeniera en Sistemas · Full-Stack Developer',
  description:
    'Portafolio de Katie Chiu, Ingeniera en Sistemas y Full-Stack Software Developer. Founder de KA. Tecnología que mueve negocios.',
  generator: 'v0.app',
  keywords: [
    'Katie Chiu',
    'Ingeniera en Sistemas',
    'Full-Stack Developer',
    'Software',
    'KA',
    'Portafolio',
  ],
  openGraph: {
    title: 'Katie Chiu — Ingeniera en Sistemas · Full-Stack Developer',
    description: 'Tecnología que mueve negocios. Founder de KA.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e8dcc8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${spaceMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
