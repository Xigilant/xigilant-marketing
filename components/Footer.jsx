import Link from 'next/link'
import HexShield from './HexShield'

const LINKS = {
  Product: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Sign in',      href: '/contact' },
  ],
  Company: [
    { label: 'Contact',  href: '/contact' },
    { label: 'Book a demo', href: '/contact' },
  ],
  Compliance: [
    { label: 'SOC 2',    href: '/pricing' },
    { label: 'PCI-DSS',  href: '/pricing' },
    { label: 'HIPAA',    href: '/pricing' },
    { label: 'CIS AWS',  href: '/pricing' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-xi-nav text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <HexShield size={38} variant="ghost" />
              <span className="text-white font-serif font-bold text-xl">Xigilant</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Managed cloud security for cloud-first companies. No agents, no complexity.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">{group}</div>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/30">© {new Date().getFullYear()} Xigilant LLC. All rights reserved.</p>
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            <HexShield size={11} variant="ghost" />
            Managed Cloud Security · Cloud-Native
          </p>
        </div>
      </div>
    </footer>
  )
}
