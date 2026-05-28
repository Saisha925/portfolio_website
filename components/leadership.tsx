"use client"

import { motion } from "framer-motion"
import { Users, Palette } from "lucide-react"

const roles = [
  {
    title: "Social Media Head",
    organization: "ADTC Technical Society",
    icon: Users,
    accent: "pink",
  },
  {
    title: "Design Head",
    organization: "Zena Fashion Society",
    icon: Palette,
    accent: "purple",
  },
]

export function Leadership() {
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
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">06 — LEADERSHIP</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic text-[#f0f0ff]">Roles & Responsibilities</h2>
      </motion.div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        {roles.map((role, index) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`p-6 bg-[#0d1117] border rounded-xl transition-all duration-300 ${
              role.accent === "pink"
                ? "border-[#e91e8c]/20 hover:border-[#e91e8c]/40"
                : "border-[#a855f7]/20 hover:border-[#a855f7]/40"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                role.accent === "pink" ? "bg-[#e91e8c]/10" : "bg-[#a855f7]/10"
              }`}>
                <role.icon className={`w-6 h-6 ${
                  role.accent === "pink" ? "text-[#e91e8c]" : "text-[#a855f7]"
                }`} />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-1">{role.title}</h3>
                <p className="font-mono text-sm text-[#7986a8]">{role.organization}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
