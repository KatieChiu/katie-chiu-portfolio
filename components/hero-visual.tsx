'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

// Nodes describing a stylized "K" plus connective structure.
const nodes = [
  { id: 'a', x: 60, y: 40 },
  { id: 'b', x: 60, y: 360 },
  { id: 'c', x: 240, y: 200 },
  { id: 'd', x: 340, y: 40 },
  { id: 'e', x: 360, y: 360 },
  { id: 'f', x: 300, y: 120 },
  { id: 'g', x: 180, y: 300 },
]

const spine = 'M60,40 L60,360'
const upper = 'M60,200 L340,40'
const lower = 'M60,200 L360,360'

const links = [
  ['a', 'd'],
  ['c', 'f'],
  ['g', 'e'],
  ['b', 'e'],
]

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!
}

export function HeroVisual() {
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.4, ease: EASE, delay: 0.3 + i * 0.25 }, opacity: { duration: 0.3, delay: 0.3 + i * 0.25 } },
    }),
  }

  return (
    <motion.div
      className="relative h-full w-full"
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
    >
      <svg
        viewBox="0 0 420 400"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* faint grid ticks */}
        <g stroke="var(--coffee)" strokeOpacity="0.18" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 52.5} y1="0" x2={i * 52.5} y2="400" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 57} x2="420" y2={i * 57} />
          ))}
        </g>

        {/* connective links */}
        {links.map(([from, to], i) => {
          const a = nodeById(from)
          const b = nodeById(to)
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--ocre)"
              strokeWidth="1"
              strokeDasharray="4 5"
              custom={i + 3}
              variants={draw}
              initial="hidden"
              animate="show"
            />
          )
        })}

        {/* the K strokes */}
        {[spine, upper, lower].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke={i === 2 ? 'var(--terracotta)' : 'var(--carbon)'}
            strokeWidth="3"
            strokeLinecap="round"
            custom={i}
            variants={draw}
            initial="hidden"
            animate="show"
          />
        ))}

        {/* nodes */}
        {nodes.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r="6"
            fill="var(--beige-light)"
            stroke="var(--carbon)"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 + i * 0.08, duration: 0.5, ease: EASE }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}

        {/* pulsing accent node */}
        {!reduce && (
          <motion.circle
            cx={240}
            cy={200}
            r="6"
            fill="var(--terracotta)"
            animate={{ scale: [1, 1.9, 1], opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ transformOrigin: '240px 200px' }}
          />
        )}
      </svg>

      <span className="absolute right-2 top-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70">
        sys.architecture
      </span>
      <span className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70">
        node/link/build
      </span>
    </motion.div>
  )
}
