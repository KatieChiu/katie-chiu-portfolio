'use client'

import { Magnetic } from '@/components/magnetic'
import { Reveal } from '@/components/motion-primitives'
import { identity } from '@/lib/data/content'

const links = [
  { label: 'Email', value: identity.email, href: `mailto:${identity.email}` },
  { label: 'LinkedIn', value: 'in/katiechiu', href: identity.linkedin },
  { label: 'GitHub', value: identity.githubHandle, href: identity.github },
]

export function Contact() {
  return (
    <section id="contacto" className="border-t border-border bg-carbon text-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ocre">
          <span className="h-px w-8 bg-ocre" />
          Contacto / 09
        </Reveal>

        <Reveal>
          <h2 className="text-balance font-sans text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.88] tracking-[-0.03em]">
            ¿Construimos <span className="text-ocre">algo?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-beige/80">
            Si tienes una idea, un problema que resolver o un proyecto que llevar al mundo digital,
            hablemos.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Magnetic>
            <a
              href={`mailto:${identity.email}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-sm bg-beige-light px-8 py-5 font-mono text-sm uppercase tracking-[0.15em] text-carbon transition-colors hover:bg-ocre"
            >
              Hablemos
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border-t border-beige/15 sm:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 border-beige/15 py-8 transition-colors hover:bg-beige/5 sm:border-l sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">
                  {link.label}
                </span>
                <span className="flex items-center gap-2 font-sans text-xl text-beige-light">
                  {link.value}
                  <span className="text-ocre opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>↗</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
