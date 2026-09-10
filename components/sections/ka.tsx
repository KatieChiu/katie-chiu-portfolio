'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Magnetic } from '@/components/magnetic'
import { Reveal, Stagger, StaggerItem } from '@/components/motion-primitives'
import { kaServices } from '@/lib/data/content'

export function KA() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['12%', '-12%'])

  return (
    <section id="ka" ref={ref} className="relative overflow-hidden border-t border-border bg-coffee-dark text-beige-light">
      {/* oversized watermark K */}
      <motion.span
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-sans text-[38rem] font-bold leading-none text-beige-light/[0.04]"
      >
        K
      </motion.span>

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ocre">
          <span className="h-px w-8 bg-ocre" />
          Emprendimiento / 06
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-balance font-sans text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.88] tracking-[-0.03em]">
                Building <span className="text-ocre">KA.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-beige/80">
                KA es mi emprendimiento de desarrollo de software, creado para llevar mi experiencia
                en tecnología hacia nuevos proyectos y ayudar a negocios a crecer en el mundo
                digital.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-4 border-t border-beige/15 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-beige/60">
                <span>Katie Chiu</span>
                <span className="text-ocre">→</span>
                <span>Founder</span>
                <span className="text-ocre">→</span>
                <span className="text-beige-light">KA</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ocre">Servicios</p>
            </Reveal>
            <Stagger className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-beige/15 bg-beige/15" gap={0.06}>
              {kaServices.map((service) => (
                <StaggerItem key={service} className="bg-coffee-dark p-5 transition-colors hover:bg-coffee">
                  <span className="text-sm font-medium leading-tight text-beige-light">{service}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <p className="mt-8 font-sans text-lg italic text-beige/70">
                Tecnología que mueve negocios.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Magnetic>
                <a
                  href="#contacto"
                  className="group mt-6 inline-flex items-center gap-2 rounded-sm bg-ocre px-7 py-4 font-mono text-xs uppercase tracking-[0.15em] text-carbon transition-colors hover:bg-beige-light"
                >
                  Explorar KA
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
