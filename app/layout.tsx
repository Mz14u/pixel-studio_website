import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
})

export const metadata: Metadata = {
  title: 'Pixel Studio | استوديو بكسل',
  description: 'استوديو بكسل - مبادرة شبابية تقنية لتصميم وتطوير ألعاب رقمية تفاعلية وهادفة تخدم المجتمع',
  keywords: ['pixel', 'بكسل', 'ألعاب', 'تعليمية', 'توعوية', 'استوديو', 'game studio'],
  icons: {
    icon: '/pixel-web.jpeg', // هذا هو اسم صورتك التي رفعتها
    apple: '/pixel-web.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#070b1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexArabic.className} ${pressStart2P.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

