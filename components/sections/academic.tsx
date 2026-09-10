'use client'

import { Reveal, Stagger, StaggerItem } from '@/components/motion-primitives'
import { academicProjects } from '@/lib/data/projects'

export function Academic() {
  return (
    <section className="border-t border-border bg-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
          <span className="h-px w-8 bg-ocre" />
          Académico / 02
        </Reveal>
        <Reveal>
          <h2 className="max-w-3xl text-balance font-sans text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1] tracking-[-0.02em] text-carbon">
            También he construido mientras aprendía.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {academicProjects.map((p, i) => (
            <StaggerItem key={p.id} className="group flex h-full flex-col bg-beige-light p-7 transition-colors hover:bg-beige">
              <div className="flex items-center justify-between font-mono text-xs text-coffee">
                <span>A.0{i + 1}</span>
                <span className="uppercase tracking-[0.15em]">Académico</span>
              </div>
              <h3 className="mt-8 font-sans text-xl font-bold leading-tight text-carbon">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-coffee-dark">{p.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-coffee">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ocre">Objetivo · </span>
                {p.objective}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span key={t} className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-coffee">
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-carbon transition-colors group-hover:text-terracotta"
                >
                  GitHub <span aria-hidden>↗</span>
                </a>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
