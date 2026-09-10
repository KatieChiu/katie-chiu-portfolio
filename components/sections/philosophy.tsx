'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { philosophyChain } from '@/lib/data/content'

const EASE = [0.16, 1, 0.3, 1] as const

export function Philosophy() {
  const reduce = useReducedMotion()

  return (
    <section className="border-t border-border bg-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <div className="flex flex-col items-center text-center">
          {philosophyChain.map((word, i) => {
            const accent = i === philosophyChain.length - 1
            return (
              <div key={word} className="flex flex-col items-center">
                <motion.h2
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-20% 0px' }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className={`font-sans text-[clamp(2.5rem,12vw,10rem)] font-bold leading-[0.9] tracking-[-0.03em] ${
                    accent ? 'text-terracotta' : 'text-carbon'
                  }`}
                >
                  {word}
                </motion.h2>
                {i < philosophyChain.length - 1 && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="my-3 block h-10 w-px origin-top bg-ocre md:my-5 md:h-16"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
