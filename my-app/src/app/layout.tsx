import './globals.css'
import type { Metadata } from 'next'
import Providers from "@/utils/provider";


export const metadata: Metadata = {
  title: 'My App',
  description: 'Login and Register Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body> 
    </html>
  )
}
