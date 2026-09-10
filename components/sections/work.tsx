'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/motion-primitives'
import { type FeaturedProject, featuredProjects } from '@/lib/data/projects'

const EASE = [0.16, 1, 0.3, 1] as const

function kindColor(kind: FeaturedProject['kind']) {
  switch (kind) {
    case 'PROYECTO PROFESIONAL':
      return 'text-carbon border-carbon'
    case 'PROYECTO × KA':
      return 'text-terracotta border-terracotta'
    case 'EMPRENDIMIENTO':
      return 'text-ocre border-ocre'
    default:
      return 'text-coffee border-coffee'
  }
}


function ProjectFeature({ project, flip }: { project: FeaturedProject; flip: boolean }) {
  const [hover, setHover] = useState(false)
  const reduce = useReducedMotion()

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Image */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <motion.a
          href={project.link ?? '#contacto'}
          data-cursor="link"
         className="group relative block aspect-video w-full overflow-hidden rounded-sm bg-coffee-dark"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={reduce ? {} : { clipPath: 'inset(8% 8% 8% 8%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: EASE }}
        >
        
                  <motion.div
          className="absolute inset-0"
          animate={reduce ? {} : { scale: hover ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: EASE }}
>
          {project.video ? (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="h-full w-full object-contain"
    style={{
      filter: hover
        ? 'grayscale(0) contrast(1)'
        : 'grayscale(0.35) contrast(1.05)',
    }}
  >
    <source src={project.video} type="video/mp4" />
  </video>
) : (
  <Image
    src={project.image || '/placeholder.svg'}
    alt={project.imageAlt || project.name}
    fill
    sizes="(max-width: 1024px) 100vw, 55vw"
    className="object-cover transition-[filter] duration-700"
    style={{
      filter: hover
        ? 'grayscale(0) contrast(1)'
        : 'grayscale(0.35) contrast(1.05)',
    }}
  />
)}

          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 via-transparent to-transparent" />

          <span className="pointer-events-none absolute left-4 top-4 select-none font-sans text-[clamp(3rem,7vw,6rem)] font-bold leading-none text-beige-light mix-blend-overlay">
            {project.index}
          </span>

          {/* tech reveal */}
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-sm bg-beige-light/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-carbon"
                initial={{ opacity: 0, y: 10 }}
                animate={hover || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.a>
      </div>

      {/* Info */}
      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <Reveal>
          <span
            className={`inline-block border-b pb-1 font-mono text-[11px] uppercase tracking-[0.25em] ${kindColor(project.kind)}`}
          >
            {project.kind}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none tracking-[-0.02em] text-carbon">
            {project.name}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty leading-relaxed text-coffee-dark">{project.description}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-7 border-t border-border pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee">Rol</p>
            <p className="mt-1 font-sans font-medium text-carbon">{project.role}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee">Participación</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
              {project.contributions.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-coffee-dark">
                  <span className="h-1 w-1 rounded-full bg-ocre" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="proyectos" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-coffee">
              <span className="h-px w-8 bg-terracotta" />
              Proyectos / 01
            </Reveal>
            <Reveal>
              <h2 className="text-balance font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-carbon">
                Lo que he construido.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-xs font-mono text-xs leading-relaxed text-coffee">
            Experiencia profesional, proyectos × KA y emprendimiento. Cada uno es una historia
            distinta.
          </Reveal>
        </div>

        <div className="space-y-28 md:space-y-40">
          {featuredProjects.map((project, i) => (
            <ProjectFeature key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
