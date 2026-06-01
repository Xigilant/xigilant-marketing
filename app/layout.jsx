import { Lora, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const lora   = Lora({ subsets: ['latin'], variable: '--font-lora' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono' })

export const metadata = {
  title: 'Xigilant — Managed Cloud Security',
  description: 'Xigilant monitors your cloud environment 24/7, flags misconfigurations in plain English, and helps you pass SOC 2 — without hiring a security team.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-sans bg-xi-bg text-xi-t1 antialiased">
        {children}
      </body>
    </html>
  )
}
