'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion-primitives'
import { careerDisciplines } from '@/lib/data/content'

export function Career() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
              <span className="h-px w-8 bg-ocre" />
              Carrera / 08
            </Reveal>
            <Reveal>
              <h2 className="text-balance font-sans text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.02em] text-carbon">
                De construir proyectos a construir productos.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <Reveal>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-coffee-dark">
                Mi trayectoria combina disciplinas que se complementan. No busco ser especialista en
                todo, sino conectar cada área para construir soluciones más completas.
              </p>
            </Reveal>

            <Stagger className="mt-10 flex flex-wrap gap-3" gap={0.06}>
              {careerDisciplines.map((d, i) => (
                <StaggerItem key={d}>
                  <span className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-sans font-medium text-carbon transition-colors hover:border-terracotta hover:text-terracotta">
                    <span className="font-mono text-[10px] text-ocre">0{i + 1}</span>
                    {d}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
