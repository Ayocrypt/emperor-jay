'use client'

import { Phone } from 'lucide-react'
import { EjLockup } from './ej-logo'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#process', label: 'Process' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* brand */}
          <div className="flex flex-col gap-4">
            <EjLockup />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Small but mighty — building future innovators through hands-on IT courses and digital
              skills training in schools.
            </p>
          </div>

          {/* quick links */}
          <nav aria-label="Footer">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
              Explore
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
              Talk to us
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+2348064645886"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5 text-gold/70" aria-hidden />
                  0806 464 5886
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348164746842"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5 text-gold/70" aria-hidden />
                  0816 474 6842
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              IT courses &amp; digital skills training for schools — coding, robotics, design, web
              development, solar power and CBT systems.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Emperor Jay Enterprises. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.24em] text-gold/70 uppercase">
            Small but mighty
          </p>
        </div>
      </div>
    </footer>
  )
}
