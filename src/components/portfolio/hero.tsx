'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Globe, Palette, Puzzle, Terminal } from 'lucide-react'
import { EjEmblem } from './ej-logo'

const STATS = [
  { value: '8+', label: 'Skill tracks' },
  { value: '10-week', label: 'Structured terms' },
  { value: '30%', label: 'Back to schools' },
]

const CHIPS = [
  { icon: Puzzle, label: 'Scratch', className: 'left-[2%] top-[16%] animate-float', hideOn: 'hidden sm:flex' },
  { icon: Terminal, label: 'Python', className: 'right-[0%] top-[24%] animate-float-slow', hideOn: 'flex' },
  { icon: Palette, label: 'Design', className: 'left-[6%] bottom-[20%] animate-float-slower', hideOn: 'hidden sm:flex' },
  { icon: Bot, label: 'Robotics', className: 'right-[4%] bottom-[14%] animate-float', hideOn: 'flex' },
  { icon: Globe, label: 'Web', className: 'right-[30%] top-[2%] animate-float-slower', hideOn: 'hidden lg:flex' },
]

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-28">
      {/* ambient gold glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_65%)]"
      />
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 opacity-[0.035]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-gold uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.9)]" aria-hidden />
            Small but mighty
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="font-display text-[clamp(2.3rem,10.5vw,2.6rem)] leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-[4.2rem]"
          >
            Building Future <span className="text-gold-gradient italic">Innovators</span>, one
            classroom at a time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
            className="max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
          >
            Emperor Jay Enterprises partners with schools to deliver hands-on IT courses and
            digital skills training — from coding and robotics to design, web development and
            solar power — preparing the next generation for a digital economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease }}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(212,175,55,0.28)] transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:brightness-110 sm:w-auto sm:py-3.5"
            >
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#programs"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:text-gold sm:w-auto sm:py-3.5"
            >
              Explore programs
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease }}
            className="mt-2 grid grid-cols-3 gap-3 sm:mt-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-5"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-bold text-gold sm:text-3xl">{stat.value}</dd>
                <dd className="text-[11px] leading-snug tracking-wide text-muted-foreground sm:text-xs">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Emblem visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto aspect-square w-full max-w-[15rem] sm:max-w-[22rem] lg:max-w-[24rem]"
          aria-hidden
        >
          {/* orbit ring */}
          <div className="animate-orbit absolute inset-0 rounded-full border border-dashed border-gold/25">
            <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
          </div>
          {/* glass discs */}
          <div className="absolute inset-6 rounded-full border border-border/70 bg-card/40 backdrop-blur-sm" />
          <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(212,175,55,0.14),rgba(9,9,11,0.4))]" />
          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_62%)] blur-2xl" />
          {/* emblem */}
          <div className="absolute inset-0 flex items-center justify-center">
            <EjEmblem priority className="h-[46%] w-[46%] drop-shadow-[0_0_28px_rgba(212,175,55,0.45)]" />
          </div>

          {/* floating skill chips */}
          {CHIPS.map((chip) => (
            <span
              key={chip.label}
              className={`absolute items-center gap-1.5 rounded-full border border-gold/25 bg-[#101013]/90 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-gold-pale shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur ${chip.className} ${chip.hideOn}`}
            >
              <chip.icon className="h-3.5 w-3.5 text-gold" aria-hidden />
              {chip.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
