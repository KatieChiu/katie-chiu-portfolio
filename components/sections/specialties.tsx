'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from '@/components/motion-primitives'
import { specialties } from '@/lib/data/content'

export function Specialties() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
          <span className="h-px w-8 bg-terracotta" />
          Especialidades / 03
        </Reveal>
        <Reveal>
          <h2 className="mb-14 max-w-2xl text-balance font-sans text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1] tracking-[-0.02em] text-carbon">
            Áreas técnicas donde construyo.
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {specialties.map((s) => {
            const isActive = active === s.id
            return (
              <motion.div
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                className="group relative border-b border-border"
              >
                <Reveal>
                  <div className="relative grid grid-cols-12 items-center gap-4 py-7 md:py-9">
                    <span className="col-span-2 font-mono text-xs text-coffee md:col-span-1">{s.index}</span>
                    <div className="col-span-10 md:col-span-4">
                      <h3
                        className={`font-sans text-2xl font-bold tracking-tight transition-colors md:text-3xl ${
                          isActive ? 'text-terracotta' : 'text-carbon'
                        }`}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <div className="col-span-12 col-start-3 md:col-span-6 md:col-start-7">
                      <p className="text-pretty leading-relaxed text-coffee-dark">{s.description}</p>
                      {s.note && (
                        <span className="mt-2 inline-block rounded-sm border border-ocre px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ocre">
                          {s.note}
                        </span>
                      )}
                    </div>
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1/2 hidden text-ocre md:block"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    >
                      →
                    </motion.span>
                  </div>
                </Reveal>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
