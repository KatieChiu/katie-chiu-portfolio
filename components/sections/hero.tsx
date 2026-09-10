'use client'

import { motion } from 'framer-motion'
import { HeroVisual } from '@/components/hero-visual'
import { Magnetic } from '@/components/magnetic'
import { TextReveal } from '@/components/motion-primitives'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-5 pb-16 pt-28 md:px-10"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-coffee"
          >
            <span className="h-px w-10 bg-terracotta" />
            <span>Katie Chiu</span>
            <span className="text-ocre">— Founder of KA</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-8 max-w-md font-mono text-sm leading-relaxed text-coffee"
          >
            Ingeniera en Sistemas · Full-Stack Software Developer
          </motion.p>

          <h1 className="text-balance font-sans text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-carbon">
            <TextReveal text="Tecnología" delay={0.2} className="block" />
            <TextReveal text="que mueve" delay={0.35} className="block" />
            <span className="block">
              <TextReveal text="negocios." delay={0.5} className="text-terracotta" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-coffee-dark"
          >
            Construyo soluciones digitales de extremo a extremo, desde interfaces web y APIs
            hasta bases de datos y sistemas empresariales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 rounded-sm bg-carbon px-7 py-4 font-mono text-xs uppercase tracking-[0.15em] text-beige-light transition-colors hover:bg-terracotta"
              >
                Explorar proyectos
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#sobre-mi"
                className="group inline-flex items-center gap-2 px-3 py-4 font-mono text-xs uppercase tracking-[0.15em] text-carbon"
              >
                Conocerme
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto aspect-square w-full max-w-md lg:col-span-5"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-coffee md:left-10"
      >
        <motion.span
          className="block h-8 w-px bg-coffee"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
        Scroll
      </motion.div>
    </section>
  )
}
