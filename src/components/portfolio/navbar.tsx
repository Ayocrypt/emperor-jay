'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { EjLockup } from './ej-logo'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#process', label: 'Process' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Anchor scrolling inside the collapsing mobile menu cancels the browser's
 * native hash scroll, so we close the menu first and scroll manually once
 * the exit animation has finished.
 */
function scrollToSection(href: string) {
  window.setTimeout(() => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.history.replaceState(null, '', href)
  }, 330)
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav border-b border-border/80 py-3' : 'bg-transparent py-5'
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" aria-label="Emperor Jay Enterprises — back to top" onClick={() => setOpen(false)}>
          <EjLockup />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all hover:shadow-[0_0_34px_rgba(212,175,55,0.45)] hover:brightness-110"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            Partner With Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-b border-border bg-background/95 shadow-[0_24px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pt-2 pb-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      scrollToSection(link.href)
                    }}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToSection('#contact')
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Partner With Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
