'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion-primitives'
import { processSteps } from '@/lib/data/content'

export function Process() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
          <span className="h-px w-8 bg-terracotta" />
          Proceso / 07
        </Reveal>
        <Reveal>
          <h2 className="mb-16 font-sans text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-carbon">
            Cómo abordo un proyecto.
          </h2>
        </Reveal>

        <div>
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.05}>
              <motion.div className="group grid grid-cols-12 items-baseline gap-4 border-t border-border py-8 last:border-b">
                <span className="col-span-12 font-mono text-sm text-ocre md:col-span-2">
                  {step.index}
                </span>
                <h3 className="col-span-12 font-sans text-3xl font-bold tracking-tight text-carbon transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-4xl">
                  {step.title}
                </h3>
                <p className="col-span-12 leading-relaxed text-coffee-dark md:col-span-6">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
