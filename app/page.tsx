import { CustomCursor } from '@/components/custom-cursor'
import { Nav } from '@/components/nav'
import { Academic } from '@/components/sections/academic'
import { Career } from '@/components/sections/career'
import { Contact } from '@/components/sections/contact'
import { Education } from '@/components/sections/education'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Intro } from '@/components/sections/intro'
import { KA } from '@/components/sections/ka'
import { Philosophy } from '@/components/sections/philosophy'
import { Process } from '@/components/sections/process'
import { Specialties } from '@/components/sections/specialties'
import { Stack } from '@/components/sections/stack'
import { Work } from '@/components/sections/work'

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Academic />
        <Specialties />
        <Stack />
        <Education />
        <KA />
        <Process />
        <Philosophy />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
