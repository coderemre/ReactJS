import type { Metadata } from 'next'
import 'styles/_globals.scss'
import { Inter } from 'next/font/google'
import GlobalContextProvider from './context/global'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React JS',
  description: 'React JS Template'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>{children}</body>
      </GlobalContextProvider>
    </html>
  )
}
