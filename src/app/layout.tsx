import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Тутова Оксана Сергеевна - Психолог',
  description: 'Интуитивно-ориентированная психологическая практика. Помогаю с тревогой, стрессом, отношениями и поиском смысла жизни.',
  keywords: 'психолог, психологическое консультирование, тревога, стресс, отношения, самооценка, Тутова Оксана',
  authors: [{ name: 'Тутова Оксана Сергеевна' }],
  creator: 'Тутова Оксана Сергеевна',
  publisher: 'Тутова Оксана Сергеевна',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Оксана Тутова',
    startupImage: '/apple-touch-icon.png',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Тутова Оксана Сергеевна - Психолог',
    title: 'Тутова Оксана Сергеевна - Психолог',
    description: 'Интуитивно-ориентированная психологическая практика. Помогаю с тревогой, стрессом, отношениями и поиском смысла жизни.',
  },
  twitter: {
    card: 'summary',
    title: 'Тутова Оксана Сергеевна - Психолог',
    description: 'Интуитивно-ориентированная психологическая практика. Помогаю с тревогой, стрессом, отношениями и поиском смысла жизни.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Оксана Тутова" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Оксана Тутова" />
        <meta name="description" content="Интуитивно-ориентированная психологическая практика" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#AFCBFF" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#AFCBFF" />
        
        {/* PWA Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/android-chrome-512x512.png" color="#AFCBFF" />
        <link rel="shortcut icon" href="/android-chrome-192x192.png" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}