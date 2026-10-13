'use client'

import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from './section-primitives'

const CONTACTS = [
  {
    icon: Phone,
    label: 'Call us',
    value: '0806 464 5886',
    href: 'tel:+2348064645886',
    cta: 'Call now',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '0816 474 6842',
    href: 'tel:+2348164746842',
    cta: 'Call now',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: 'https://wa.me/2348064645886',
    cta: 'Start chat',
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* CTA band */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-secondary via-card to-card px-7 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.16),transparent_65%)]"
            />
            <div
              aria-hidden
              className="grain pointer-events-none absolute inset-0 opacity-[0.04]"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-gold uppercase">
              <Sparkles className="h-3 w-3" aria-hidden />
              Limited promo
            </span>
            <h2 className="font-display relative mx-auto mt-6 max-w-2xl text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
              Ready to bring <span className="text-gold-gradient italic">future-ready skills</span> to
              your school?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Promo pricing is currently open for interested schools — ₦10,000 per student, per term,
              with 30% going back to the school. Slots are limited per term.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+2348064645886"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:brightness-110"
              >
                <Phone className="h-4 w-4" aria-hidden />
                0806 464 5886
              </a>
              <a
                href="https://wa.me/2348064645886"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        {/* contact cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {CONTACTS.map((contact, i) => (
            <Reveal key={contact.href} delay={0.06 * i}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 sm:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] transition-transform duration-300 group-hover:scale-110">
                  <contact.icon className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                    {contact.label}
                  </span>
                  <p className="font-display mt-1 text-lg font-semibold text-foreground">{contact.value}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  {contact.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
            Learning materials &amp; software are provided by Emperor Jay Enterprises · Laptops not
            included · Instructors deploy directly to your school
          </p>
        </Reveal>
      </div>
    </section>
  )
}
