'use client'

import { ClipboardList, SlidersHorizontal, Presentation, BadgeCheck } from 'lucide-react'
import { Reveal, SectionHeading } from './section-primitives'

const STEPS = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Assess',
    body: 'We identify the school\'s current ICT facilities and student needs, laying the groundwork for a program that fits reality.',
  },
  {
    icon: SlidersHorizontal,
    number: '02',
    title: 'Customize',
    body: 'Courses are tailored for different class levels, so every student gets age-appropriate, relevant digital skills.',
  },
  {
    icon: Presentation,
    number: '03',
    title: 'Train',
    body: 'Emperor Jay instructors deploy to the school for weekly training sessions within time slots allotted to the program.',
  },
  {
    icon: BadgeCheck,
    number: '04',
    title: 'Evaluate',
    body: 'CBT and project-based exams in the 11th week. Results go onto the school\'s result portal, and projects are presented to parents at the PTA forum.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A simple, proven <span className="text-gold-gradient italic">four-step</span> delivery model
            </>
          }
          description="Each term runs as a structured 10-week curriculum, with examinations held in the 11th week — deliberately kept clear of the school's general exams."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
          {/* connector line (desktop) */}
          <div
            aria-hidden
            className="gold-hairline absolute top-7 right-[12%] left-[12%] hidden lg:block"
          />
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative">
              <Reveal delay={0.1 * i} className="h-full">
                <div className="flex h-full flex-col items-start gap-4">
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-card shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                    <step.icon className="h-6 w-6 text-gold" aria-hidden />
                  </div>
                  <span className="font-display text-sm font-bold tracking-[0.3em] text-gold/60">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.15} className="mt-14">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-gold">Showcase day:</span> every term, students present
            their own projects at the PTA forum — so parents see exactly what their children can build,
            and the value of every naira invested.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
