'use client'

import { identity, navItems } from '@/lib/data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-beige/15 bg-carbon text-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-sans text-3xl font-bold tracking-tight md:text-4xl">Katie Chiu</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-beige/60">
              Ingeniera en Sistemas · Full-Stack Software Developer
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ocre">Founder of KA</p>
            <p className="mt-6 font-sans text-lg italic text-beige/70">{identity.slogan}</p>
          </div>

          <nav className="md:col-span-3" aria-label="Pie de página">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">Índice</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-beige/80 transition-colors hover:text-beige-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">Enlaces</p>
            <ul className="space-y-2">
              <li>
                <a href={identity.github} target="_blank" rel="noopener noreferrer" className="font-sans text-beige/80 transition-colors hover:text-beige-light">
                  GitHub — {identity.githubHandle} ↗
                </a>
              </li>
              <li>
                <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="font-sans text-beige/80 transition-colors hover:text-beige-light">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${identity.email}`} className="font-sans text-beige/80 transition-colors hover:text-beige-light">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-beige/15 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-beige/40 sm:flex-row">
          <span>© {year} Katie Chiu · KA</span>
          <span>Tecnología que mueve negocios.</span>
        </div>
      </div>
    </footer>
  )
}
