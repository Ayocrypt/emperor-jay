import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { Marquee } from '@/components/portfolio/marquee'
import { About } from '@/components/portfolio/about'
import { Programs } from '@/components/portfolio/programs'
import { Process } from '@/components/portfolio/process'
import { Impact } from '@/components/portfolio/impact'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Process />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
