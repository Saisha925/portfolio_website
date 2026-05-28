"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    period: "Apr 15 — Jul 15, 2026",
    title: "AI/ML Intern",
    company: "HCL Technologies",
    description: "Details to be updated upon completion.",
    status: "Ongoing",
  },
  {
    period: "Jun — Aug 2025",
    title: "AI-Powered Full-Stack Development Internship",
    company: "IGDTUW",
    description: "Built full-stack AI applications using AI agents, MVC architecture, and RESTful APIs",
  },
  {
    period: "Jun — Jul 2024",
    title: "Python with Machine Learning Internship",
    company: "IGDTUW",
    description: "Hands-on ML: data preprocessing, feature engineering, algorithm selection",
  },
]

export function Experience() {
  return (
    <section className="relative py-24 md:py-32 px-8 md:px-12 bg-[#06080f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">04 — EXPERIENCE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic text-[#f0f0ff]">Work Timeline</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#a855f7]/30 transform md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#e91e8c] rounded-full transform -translate-x-1/2 mt-2 z-10 glow-pink">
              <span className="absolute inset-0 bg-[#e91e8c] rounded-full animate-ping opacity-30" />
            </div>

            {/* Content Card */}
            <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
              <div className={`p-6 bg-[#0d1117] border border-[#a855f7]/20 rounded-xl hover:border-[#a855f7]/40 transition-all duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}>
                {/* Period */}
                <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Calendar className="w-4 h-4 text-[#a855f7]" />
                  <span className="font-mono text-xs text-[#a855f7]">{exp.period}</span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-2">{exp.title}</h3>

                {/* Status Pill (if ongoing) */}
                {exp.status && (
                  <div className={`inline-block px-3 py-1 rounded-full font-mono text-xs mb-3 ${
                    exp.status === "Ongoing" 
                      ? "bg-[#e91e8c]/20 text-[#e91e8c] border border-[#e91e8c]/40" 
                      : "bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/40"
                  }`}>
                    {exp.status}
                  </div>
                )}

                {/* Company */}
                <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Briefcase className="w-4 h-4 text-[#7986a8]" />
                  <span className="font-mono text-sm text-[#7986a8]">{exp.company}</span>
                </div>

                {/* Description */}
                <p className="text-[#7986a8] text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
