import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Emperor Jay Enterprises brand assets (from the official logo upload, keyed
 * to transparency):
 *  - /brand/emperor-jay-emblem.png  — circular gold "e" mark, square canvas
 *  - /brand/emperor-jay-logo-full.png — emblem + wordmark + tagline lockup
 */

export function EjEmblem({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/emperor-jay-emblem.png"
      alt=""
      width={191}
      height={191}
      priority={priority}
      aria-hidden
      className={cn('h-10 w-10 object-contain', className)}
    />
  )
}

/** Full official lockup: emblem + "Emperor Jay Enterprises …small but mighty". */
export function EjLogoFull({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/emperor-jay-logo-full.png"
      alt="Emperor Jay Enterprises — small but mighty"
      width={448}
      height={260}
      className={cn('h-auto w-56 object-contain', className)}
    />
  )
}

/** Compact lockup: emblem + typographic wordmark, used in the navbar. */
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
