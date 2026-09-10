'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion-primitives'
import { education } from '@/lib/data/content'

export function Education() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
          <span className="h-px w-8 bg-ocre" />
          Formación / 05
        </Reveal>
        <Reveal>
          <h2 className="mb-16 font-sans text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-[-0.02em] text-carbon">
            Base y aprendizaje continuo.
          </h2>
        </Reveal>

        <div className="relative ml-3 border-l border-border pl-8 md:ml-0 md:pl-12">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={i * 0.08} className="relative pb-14 last:pb-0">
              <motion.span
                className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-carbon bg-beige md:-left-[57px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 300, damping: 18 }}
              />
              <div className="flex flex-col gap-1">
                {item.status && (
                  <span
                    className={`w-fit rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] ${
                      item.status === 'Graduada'
                        ? 'bg-carbon text-beige-light'
                        : 'border border-ocre text-ocre'
                    }`}
                  >
                    {item.status}
                  </span>
                )}
                <h3 className="mt-1 font-sans text-xl font-bold text-carbon md:text-2xl">
                  {item.program}
                </h3>
                <p className="text-coffee">{item.institution}</p>
                {item.detail && (
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {item.detail.map((d) => (
                      <li key={d} className="font-mono text-xs uppercase tracking-[0.12em] text-coffee-dark">
                        · {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
