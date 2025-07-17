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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}