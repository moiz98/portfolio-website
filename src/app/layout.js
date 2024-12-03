import './globals.css'
import { Inter } from 'next/font/google'
import NavHeader from '../components/Header';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Abdul Moiz Memon',
  description: 'developed by Moiz with ❤️',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollbarWidth: 'none'}}>
      <body className={inter.className}>
        <NavHeader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
