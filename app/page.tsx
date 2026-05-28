import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Leadership } from "@/components/leadership"
import { Contact } from "@/components/contact"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <Experience />
        <Certifications />
        <Leadership />
        <Contact />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
