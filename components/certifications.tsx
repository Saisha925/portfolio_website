"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Clock } from "lucide-react"

const certifications = [
  {
    title: "Engineer AI Agents with ADK",
    issuer: "Google Cloud",
    date: "Earned May 2026",
    status: "earned",
    link: "https://www.credly.com/badges/30363822-1879-48d2-8066-be529733a511",
  },
  {
    title: "Google GenAI Academy APAC Edition",
    issuer: "Google / Hack2Skill",
    date: "",
    status: "in-progress",
    link: null,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "",
    status: "in-progress",
    link: null,
  },
]

export function Certifications() {
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
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">05 — CERTIFICATIONS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic text-[#f0f0ff]">Credentials</h2>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative p-6 bg-[#0d1117] border rounded-xl transition-all duration-300 ${
              cert.status === "earned"
                ? "border-[#e91e8c]/30 hover:border-[#e91e8c]/50 glow-pink"
                : "border-[#a855f7]/20 hover:border-[#a855f7]/40"
            }`}
          >
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-lg mb-4 ${
              cert.status === "earned" ? "bg-[#e91e8c]/10" : "bg-[#a855f7]/10"
            }`}>
              <Award className={`w-6 h-6 ${cert.status === "earned" ? "text-[#e91e8c]" : "text-[#a855f7]"}`} />
            </div>

            {/* Title */}
            <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-2 leading-tight">{cert.title}</h3>

            {/* Issuer */}
            <p className="font-mono text-sm text-[#7986a8] mb-4">{cert.issuer}</p>

            {/* Status & Date */}
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs ${
                cert.status === "earned"
                  ? "bg-[#e91e8c]/20 text-[#e91e8c] border border-[#e91e8c]/30"
                  : "bg-transparent text-[#a855f7] border border-[#a855f7]/30"
              }`}>
                {cert.status === "earned" ? (
                  <>
                    <Award className="w-3 h-3" />
                    Earned
                  </>
                ) : (
                  <>
                    <Clock className="w-3 h-3" />
                    In Progress
                  </>
                )}
              </span>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 border border-[#e91e8c] text-[#e91e8c] bg-[#e91e8c]/10 hover:bg-[#e91e8c]/20 hover:text-[#f0f0ff] rounded-lg font-mono text-xs font-medium transition-all duration-300 glow-pink"
                >
                  View Badge ↗
                </a>
              )}
            </div>

            {cert.date && (
              <p className="font-mono text-xs text-[#7986a8] mt-3">{cert.date}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
