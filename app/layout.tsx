import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from "./components/footer/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Illustrations Barbara Litwiniec',
  description: 'Illustrations Barbara Litwiniec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar'>
          <Nav />

        </div>
        {children}

        {/* <Footer /> */}
      </body>
    </html >
  )
}
