'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Scroll-triggered reveal wrapper used across all sections. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  const centered = align === 'center'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.34em] text-gold uppercase">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" aria-hidden />
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" aria-hidden />
      </span>
      <h2 className="font-display max-w-3xl text-3xl leading-[1.12] font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
