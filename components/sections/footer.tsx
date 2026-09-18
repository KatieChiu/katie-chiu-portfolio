
'use client'

import { identity, navItems } from '@/lib/data/content'

const badges = [
  {
    image: '/badges/cisco-badge-1.png',
    url: 'https://www.credly.com/badges/feb3ad4a-29d9-47b2-82f5-3beb4a142332/public_url',
    alt: 'Cisco Networking Academy badge',
  },
  {
    image: '/badges/cisco-badge-2.png',
    url: 'https://www.credly.com/badges/069eb499-efa4-4fb1-813b-bda7d0ae5801/public_url',
    alt: 'Cisco Networking Academy badge',
  },
  {
    image: '/badges/cisco-badge-3.png',
    url: 'https://www.credly.com/badges/7ec99bac-cfb9-46ff-9ce5-0cd08c6b70c0/public_url',
    alt: 'Cisco Networking Academy badge',
  },
  {
    image: '/badges/cisco-badge-4.png',
    url: 'https://www.credly.com/badges/10808dc8-17a7-486e-89d3-26e19879744e/public_url',
    alt: 'Cisco Networking Academy badge',
  },
  {
    image: '/badges/cisco-badge-5.png',
    url: 'https://www.credly.com/badges/26a487f9-46d9-4536-b76f-452b46c1f68b/public_url',
    alt: 'Cisco Networking Academy badge',
  },
  {
    image: '/badges/cisco-badge-6.png',
    url: 'https://www.credly.com/badges/7e431920-af50-4ee7-8c0f-455ecc7bc259/public_url',
    alt: 'Cisco Networking Academy badge',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-beige/15 bg-carbon text-beige-light">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Identity */}
          <div className="md:col-span-6">
            <p className="font-sans text-3xl font-bold tracking-tight md:text-4xl">
              Katie Chiu
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-beige/60">
              Ingeniera en Sistemas · Full-Stack Software Developer
            </p>

            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ocre">
              Founder of KA
            </p>

            <p className="mt-6 font-sans text-lg italic text-beige/70">
              {identity.slogan}
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3" aria-label="Pie de página">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">
              Índice
            </p>

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

          {/* Links */}
          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">
              Enlaces
            </p>

            <ul className="space-y-2">
              <li>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-beige/80 transition-colors hover:text-beige-light"
                >
                  GitHub — {identity.githubHandle} ↗
                </a>
              </li>

              <li>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-beige/80 transition-colors hover:text-beige-light"
                >
                  LinkedIn ↗
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${identity.email}`}
                  className="font-sans text-beige/80 transition-colors hover:text-beige-light"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications / Badges */}
        <div className="mt-16 border-t border-beige/15 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            {/* Title */}
            <div className="shrink-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ocre">
                Certificaciones
              </p>

              <p className="mt-2 max-w-xs font-sans text-sm text-beige/50">
                Credenciales profesionales verificables
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-5 md:justify-end">
              {badges.map((badge, index) => (
                <a
                  key={badge.url}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver credencial Cisco ${index + 1} en Credly`}
                  className="group block"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-beige/10 bg-beige/[0.03] p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ocre/40 group-hover:bg-beige/[0.07]">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="h-full w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-beige/15 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-beige/40 sm:flex-row">
          <span>© {year} Katie Chiu · KA</span>
          <span>Tecnología que mueve negocios.</span>
        </div>

      </div>
    </footer>
  )
}
