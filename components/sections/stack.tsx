'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion-primitives'
import { stackGroups } from '@/lib/data/content'

export function Stack() {
  return (
    <section id="stack" className="border-t border-border bg-carbon text-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ocre">
          <span className="h-px w-8 bg-ocre" />
          Stack / 04
        </Reveal>
        <Reveal>
          <h2 className="mb-16 max-w-2xl text-balance font-sans text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.02em]">
            Tecnología con la que trabajo.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <div className="border-t border-beige/20 pt-5">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-ocre">
                  {group.label}
                </p>
                <Stagger className="flex flex-wrap gap-2" gap={0.04}>
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className="inline-block rounded-sm border border-beige/20 px-3 py-1.5 font-mono text-sm text-beige-light transition-colors hover:border-ocre hover:text-ocre">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-md font-mono text-xs leading-relaxed text-beige/50">
            herramientas que uso para construir productos
            reales.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
