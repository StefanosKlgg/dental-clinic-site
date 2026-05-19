import type { Metadata } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Οδοντικά Εμφυτεύματα Premium | Μεταμορφώστε το Χαμόγελό σας',
  description: 'Βραβευμένοι ειδικοί σε οδοντικά εμφυτεύματα με τεχνολογία αιχμής, όψεις πορσελάνης και ολοκληρωμένη αναμόρφωση χαμόγελου. Κλείστε δωρεάν αξιολόγηση σήμερα.',
  generator: 'v0.app',
  keywords: ['οδοντικά εμφυτεύματα', 'όψεις πορσελάνης', 'αναμόρφωση χαμόγελου', 'αισθητική οδοντιατρική', 'οδοντιατρείο'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Οδοντικά Εμφυτεύματα Premium | Μεταμορφώστε το Χαμόγελό σας',
    description: 'Βραβευμένοι ειδικοί σε οδοντικά εμφυτεύματα. Κλείστε δωρεάν αξιολόγηση.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el" className={`bg-background ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
