'use client'

import { Check, Compass, GraduationCap, HeartHandshake } from 'lucide-react'
import { Reveal, SectionHeading } from './section-primitives'

const PILLARS = [
  {
    icon: Compass,
    title: 'Our Mission',
    body: 'To bridge the digital gap by extending quality learning opportunities to students — connecting learners, educators and communities through the power of technology, education and career opportunity.',
  },
  {
    icon: GraduationCap,
    title: 'What We Do',
    body: 'We identify and develop the skills people and businesses need to thrive — investing in STEM initiatives, from game development and graphics design to programming, coding and cutting-edge research.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Commitment',
    body: 'An ongoing commitment to learning and innovation. We engage schools with structured curricula, dedicated instructors and global best practices — so no student is left behind.',
  },
]

const OBJECTIVES = [
  'Hands-on training in key areas of IT and digital technology',
  'Bridging traditional education and modern technological demands',
  'Preparing students for global opportunities in coding, design and entrepreneurship',
  'Enhancing the ICT profile and competitiveness of partner schools',
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              A forward-thinking IT &amp; <span className="text-gold-gradient italic">digital training</span>{' '}
              organization
            </>
          }
          description="In today's world, digital literacy is no longer optional — it is a necessity. Emperor Jay Enterprises builds the workforce of tomorrow by bringing structured, future-ready technology education directly into schools."
        />

        {/* pillars */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 * i}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07]">
                  <pillar.icon className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* objectives */}
        <Reveal delay={0.1} className="mt-10 sm:mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-card via-card to-secondary p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1),transparent_70%)]"
            />
            <h3 className="font-display text-xl font-semibold sm:text-2xl">What drives every partnership</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {OBJECTIVES.map((objective) => (
                <li key={objective} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3 w-3 text-gold" aria-hidden />
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
