import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'teraworks test',
  description: 'using next js, nest js, graphql and sqlite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
