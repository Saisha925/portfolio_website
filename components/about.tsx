"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

const academicFoundations = [
  "Python",
  "C++",
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "Computer Vision",
  "NLP",
  "Reinforcement Learning",
  "DSA",
  "DBMS",
  "OOPs",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-[#06080f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">02 — ABOUT ME</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic text-[#f0f0ff]">Who I Am</h2>
      </motion.div>

      {/* Bio Section */}
      <div className="px-8 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-lg md:text-xl text-[#f0f0ff]/90 leading-relaxed mb-8 font-sans">
            {"I'm a third-year B.Tech student specialising in AI and Machine Learning at IGDTUW, Delhi. I build intelligent systems — from physiological signal analysis for deepfake detection to full-stack AI marketplaces. I care about AI that works in the real world."}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Primary Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-[#0d1117] border border-[#e91e8c]/20 rounded-lg hover:border-[#e91e8c]/40 transition-all duration-300 glow-pink"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#e91e8c]/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#e91e8c]" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-1">B.Tech AI/ML</h3>
                <p className="font-mono text-sm text-[#a855f7] mb-2">IGDTUW, Delhi</p>
                <p className="font-mono text-xs text-[#7986a8]">2023 — Present</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-[#e91e8c]/10 rounded-full">
                  <Award className="w-4 h-4 text-[#e91e8c]" />
                  <span className="font-mono text-sm text-[#e91e8c]">CGPA: 9.08</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 bg-[#0d1117] border border-[#a855f7]/20 rounded-lg hover:border-[#a855f7]/40 transition-all duration-300 glow-purple"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#a855f7]/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#a855f7]" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-1">Mount Carmel School</h3>
                <p className="font-mono text-sm text-[#a855f7] mb-2">Delhi</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-3 py-1 bg-[#a855f7]/10 rounded-full font-mono text-xs text-[#a855f7]">
                    Grade 12: 95%
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-[#a855f7]/10 rounded-full font-mono text-xs text-[#a855f7]">
                    Grade 10: 96.3%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Academic Foundations - Static List */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-8 md:px-12 mb-6"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#7986a8]">ACADEMIC FOUNDATIONS</p>
        </motion.div>

        <div className="px-8 md:px-12 flex flex-wrap gap-3 max-w-4xl">
          {academicFoundations.map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 border border-[#e91e8c]/20 rounded-full font-mono text-xs md:text-sm text-[#f0f0ff] hover:bg-[#e91e8c]/10 hover:border-[#e91e8c]/50 transition-all duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-[#e91e8c]/30 to-transparent origin-left"
      />
    </section>
  )
}
