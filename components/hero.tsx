"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"
import { Download } from "lucide-react"
import { useLenis } from "lenis/react"

const roles = [
  "AI/ML Engineer",
  "Computer Vision Researcher",
  "Full-Stack Developer",
  "Problem Solver",
]

const skills = ["Python", "Deep Learning", "Computer Vision", "Google ADK", "Streamlit", "Next.js"]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const lenis = useLenis()
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Typing animation
  useEffect(() => {
    const role = roles[currentRole]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDelay = 2000

    if (!isDeleting && displayText === role) {
      const timer = setTimeout(() => setIsDeleting(true), pauseDelay)
      return () => clearTimeout(timer)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(role.substring(0, displayText.length - 1))
      } else {
        setDisplayText(role.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#06080f]">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(233, 30, 140, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233, 30, 140, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div style={{ opacity, scale }} className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e91e8c]/30 bg-[#e91e8c]/10 text-[#e91e8c] font-mono text-xs tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#e91e8c] animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <p className="font-mono text-sm md:text-base tracking-wider text-[#a855f7]">
              <span className="typing-cursor">{displayText}</span>
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#f0f0ff] leading-tight">
              {"Hi, I'm "}
              <span className="gradient-text font-medium">Saisha Bhasin</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-[#7986a8] mb-8 font-sans"
          >
            Building real-world solutions using AI
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault()
                if (lenis) {
                  lenis.scrollTo("#works")
                } else {
                  document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              data-cursor-hover
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#e91e8c] text-[#06080f] font-mono text-sm tracking-wider rounded-lg hover:bg-[#e91e8c]/90 transition-all duration-300 glow-pink"
            >
              View My Work
            </motion.a>
            {/* Download CV button - links to saisha-bhasin-cv.pdf with download attribute */}
            <motion.a
              href="/saisha-bhasin-cv.pdf"
              download
              data-cursor-hover
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm tracking-wider rounded-lg hover:bg-[#a855f7]/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Skill Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-3 py-1 border border-[#e91e8c]/20 rounded-full font-mono text-xs text-[#7986a8] hover:border-[#e91e8c]/50 hover:text-[#f0f0ff] transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Side - 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full lg:w-auto h-[400px] md:h-[500px] lg:h-[600px] relative mt-12 lg:mt-0"
        >
          <SentientSphere />
          {/* Glow effect behind sphere */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#e91e8c]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#a855f7]/20 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-[#7986a8] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#e91e8c]/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
