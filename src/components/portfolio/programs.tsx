'use client'

import {
  Blocks,
  Bot,
  CodeXml,
  LayoutDashboard,
  MonitorCheck,
  MonitorSmartphone,
  Palette,
  Sun,
} from 'lucide-react'
import { Reveal, SectionHeading } from './section-primitives'

const PROGRAMS = [
  {
    icon: Blocks,
    title: 'Coding & Programming',
    tag: 'Scratch',
    body: 'Block-based foundations that teach young minds computational thinking, logic and problem-solving — the perfect first step into code.',
  },
  {
    icon: CodeXml,
    title: 'Python Programming',
    tag: 'Real-world code',
    body: 'From first script to working projects, students learn one of the world\'s most in-demand languages through guided, practical lessons.',
  },
  {
    icon: Palette,
    title: 'Graphics Design',
    tag: 'Photoshop',
    body: 'Digital creativity with industry tools — students master visual communication, photo editing and brand-quality design work.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Development',
    tag: 'Design & build',
    body: 'Students plan, design and publish real websites, learning the structure of the modern web and how ideas go live online.',
  },
  {
    icon: Bot,
    title: 'Robotics',
    tag: 'Build & program',
    body: 'Hands-on engineering: assembling, wiring and programming machines that sense, move and respond to the world.',
  },
  {
    icon: Sun,
    title: 'Solar & Free Power',
    tag: 'Renewable energy',
    body: 'Practical training in generating free electricity and installing solar systems — sustainable skills for the future.',
  },
  {
    icon: MonitorCheck,
    title: 'CBT Software Setup',
    tag: 'SOMA CBT',
    body: 'Installation of offline, standard computer-based testing systems so schools can examine digitally with zero internet dependency.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Computer Room Setup',
    tag: 'ICT labs',
    body: 'End-to-end design and installation of standard school computer rooms — ergonomic, safe and built to scale.',
  },
]

export function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24">
      {/* section glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-[28rem] w-[42rem] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.06),transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programs & services"
          title={
            <>
              Everything a school needs to go <span className="text-gold-gradient italic">digital</span>
            </>
          }
          description="Structured IT courses tailored to every class level, plus the infrastructure to support them — delivered by our own instructors, with materials and software provided by us."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={0.05 * (i % 4)}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:p-6">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] transition-transform duration-300 group-hover:scale-110">
                  <program.icon className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <span className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-gold/80 uppercase">
                  {program.tag}
                </span>
                <h3 className="font-display mt-1.5 text-lg leading-snug font-semibold">{program.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{program.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
