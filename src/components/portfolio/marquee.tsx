'use client'

import { Sparkle } from 'lucide-react'

const ITEMS = [
  'Coding',
  'Robotics',
  'Graphics Design',
  'Web Development',
  'Python',
  'Solar Power',
  'CBT Systems',
  'ICT Labs',
  'Digital Creativity',
  'Future Innovators',
]

export function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-gold/15 bg-secondary/60 py-5"
    >
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-sm font-semibold tracking-[0.3em] whitespace-nowrap text-gold/85 uppercase">
              {item}
            </span>
            <Sparkle className="h-3 w-3 shrink-0 text-gold/50" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
