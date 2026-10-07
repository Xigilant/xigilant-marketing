'use client'
import { useState } from 'react'
import Link from 'next/link'
import HexShield from './HexShield'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Resources',    href: '/resources' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-xi-nav border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <HexShield size={40} variant="ghost" />
          <span className="text-white font-serif font-bold text-2xl tracking-tight">Xigilant</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact"
            className="text-sm text-white/70 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/contact"
            className="bg-xi-accl text-xi-nav text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition-colors">
            Book a demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-xi-nav border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors py-1">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="bg-xi-accl text-xi-nav text-sm font-semibold px-4 py-2 rounded-lg text-center mt-2">
            Book a demo
          </Link>
        </div>
      )}
    </header>
  )
}
