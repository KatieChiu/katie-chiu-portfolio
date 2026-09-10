'use client'

import { motion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from '@/components/motion-primitives'

const pillars = [
  { label: 'SOFTWARE', meta: 'Full-Stack' },
  { label: 'DATA', meta: 'SQL · PostgreSQL' },
  { label: 'SECURITY', meta: 'En formación' },
]

export function Intro() {
  return (
    <section id="sobre-mi" className="border-t border-border bg-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
          <span className="h-px w-8 bg-ocre" />
          Perfil / 00
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-balance font-sans text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[0.98] tracking-[-0.02em] text-carbon">
              <Reveal as="span" className="block">Construyo.</Reveal>
              <Reveal as="span" delay={0.1} className="block text-ocre">Aprendo.</Reveal>
              <Reveal as="span" delay={0.2} className="block">Evoluciono.</Reveal>
            </h2>
          </div>

          <div className="space-y-6 lg:col-span-5 lg:pt-4">
            <Reveal className="text-pretty text-lg leading-relaxed text-coffee-dark">
              Soy Katie Chiu, Ingeniera en Sistemas y desarrolladora de software enfocada en
              construir soluciones digitales que resuelven problemas reales. Trabajo en desarrollo
              Full-Stack, combinando interfaces, APIs, bases de datos y sistemas empresariales.
            </Reveal>
            <Reveal delay={0.1} className="text-pretty leading-relaxed text-coffee">
              Mi experiencia también me ha llevado a explorar áreas como inteligencia artificial y
              ciberseguridad, ampliando mi perspectiva más allá del desarrollo tradicional de
              software.
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem key={p.label} className="group bg-beige-light">
              <div className="relative flex h-full flex-col justify-between overflow-hidden p-8">
                <span className="font-mono text-xs text-coffee">0{i + 1}</span>
                <div className="mt-16">
                  <motion.h3 className="font-sans text-3xl font-bold tracking-tight text-carbon md:text-4xl">
                    {p.label}
                  </motion.h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-coffee">
                    {p.meta}
                  </p>
                </div>
                <span className="pointer-events-none absolute -bottom-6 -right-2 font-sans text-8xl font-bold text-carbon/[0.04] transition-transform duration-500 group-hover:-translate-y-2">
                  {p.label.charAt(0)}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
