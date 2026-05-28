"use client"

import { motion } from "framer-motion"

const techItems = [
  "PYTHON",
  "PYTORCH",
  "TENSORFLOW",
  "DEEP LEARNING",
  "COMPUTER VISION",
  "NLP",
  "STREAMLIT",
  "NEXT.JS",
  "REACT",
  "NODE.JS",
  "GOOGLE ADK",
  "OPENAI",
]

const concepts = [
  "NEURAL NETWORKS",
  "TRANSFER LEARNING",
  "TRANSFORMERS",
  "CNNS",
  "RNNS",
  "ATTENTION",
  "EMBEDDINGS",
  "FEATURE EXTRACTION",
  "DATA PIPELINES",
  "MLOPS",
  "RESEARCH",
  "INNOVATION",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px rgba(233, 30, 140, 0.3)",
              color: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e91e8c"
              e.currentTarget.style.WebkitTextStroke = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.WebkitTextStroke = "1px rgba(233, 30, 140, 0.3)"
            }}
          >
            {item}
            <span className="mx-8 text-[#a855f7]/30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 overflow-hidden md:py-32 bg-[#06080f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">08 — TECHNICAL ARSENAL</p>
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
