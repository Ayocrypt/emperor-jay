'use client'

import { Award, GraduationCap, Package, Trophy } from 'lucide-react'
import { Check } from 'lucide-react'
import { Reveal, SectionHeading } from './section-primitives'

const STATS = [
  { value: '10', label: 'Weeks of structured curriculum per term' },
  { value: '100%', label: 'CBT & project-based examinations' },
  { value: '30%', label: 'Of every fee goes back to the school' },
  { value: '₦10,000', label: 'Per student, per term — promo pricing' },
]

const BENEFITS = [
  {
    icon: GraduationCap,
    title: 'Career-ready students',
    body: 'Improved digital competence and readiness for careers in technology, entrepreneurship and innovation.',
  },
  {
    icon: Award,
    title: 'A tech-driven reputation',
    body: 'Stand out as a forward-thinking institution with a modern ICT profile that attracts enrollment.',
  },
  {
    icon: Trophy,
    title: 'Competitions & hackathons',
    body: 'Collaboration opportunities in digital competitions and hackathons that showcase your students.',
  },
  {
    icon: Package,
    title: 'We bring everything',
    body: 'Trainers, training materials, curriculum, evaluation and certification — all handled by Emperor Jay.',
  },
]

const WE_PROVIDE = [
  'Certified instructors deployed to your school',
  'Full curriculum and training materials',
  'Learning software (no laptops required from schools)',
  'Student evaluation and certification',
  'ICT integration with global best practices',
]

const SCHOOL_PROVIDES = [
  'Classroom or ICT lab space for training',
  'Encouragement of student enrollment',
  'Supervision and schedule collaboration',
]

export function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Impact & benefits"
          title={
            <>
              Value for schools, parents and <span className="text-gold-gradient italic">students</span>
            </>
          }
          description="A partnership that equips students with future-ready digital skills while generating visible value for the school and parents — at a modest, transparent fee."
        />

        {/* stats band */}
        <Reveal className="mt-14">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/20 bg-gold/10 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 bg-card px-6 py-8 sm:px-8">
                <dt className="order-2 text-xs leading-relaxed tracking-wide text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="font-display order-1 text-3xl font-bold text-gold-gradient sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* benefit cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={0.06 * i}>
              <article className="group flex h-full items-start gap-5 rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:border-gold/40 sm:p-7">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* responsibility split */}
        <div className="mt-6 grid gap-5 sm:gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-card to-card p-7 sm:p-8">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
                Emperor Jay provides
              </span>
              <ul className="mt-5 flex flex-col gap-3.5">
                {WE_PROVIDE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Check className="h-3 w-3 text-gold" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="h-full rounded-2xl border border-border bg-card/70 p-7 sm:p-8">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                The school provides
              </span>
              <ul className="mt-5 flex flex-col gap-3.5">
                {SCHOOL_PROVIDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Check className="h-3 w-3 text-muted-foreground" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                That's it — learning materials and software are on us, so schools can start immediately
                without heavy investment.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
