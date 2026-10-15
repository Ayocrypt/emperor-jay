'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

/**
 * Emperor Jay Enterprises gold emblem — a broken gold ring crossed by a
 * diagonal swoosh, recreated from the branded merchandise mark.
 */
export function EjEmblem({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const gradId = `ej-gold-${id}`

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Emperor Jay Enterprises emblem"
      className={cn('h-10 w-10', className)}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E8A8" />
          <stop offset="38%" stopColor="#E3C25B" />
          <stop offset="72%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8F6B14" />
        </linearGradient>
      </defs>
      {/* broken ring — opening points to the upper right */}
      <path
        d="M 141.3 41 A 72 72 0 1 1 165.3 69.6"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="24"
        strokeLinecap="round"
      />
      {/* diagonal swoosh through the heart of the mark */}
      <path
        d="M 68 132 L 132 68"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Full lockup: emblem + wordmark, used in the navbar and footer. */
export function EjLockup({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <EjEmblem className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-[0.14em] text-foreground sm:text-base">
          EMPEROR JAY
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.42em] text-gold">
          ENTERPRISES
        </span>
      </span>
    </span>
  )
}
