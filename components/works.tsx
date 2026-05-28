"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"

const projects = [
  {
    title: "Deepfake Detection via rPPG Signals & XceptionNet",
    tags: ["Research", "Computer Vision", "2026"],
    stack: ["XceptionNet", "rPPG", "MediaPipe", "FaceForensics++", "CelebDF-v2", "PyTorch", "timm"],
    description: "Detects deepfake videos using physiological blood-flow signals rather than visual artifacts. Facial videos are processed via MediaPipe FaceMesh to extract G-PPG and C-PPG signals from cheek ROIs, converted into 224x224 three-channel spatial maps, and classified using two models — a baseline CNN (59% accuracy, AUC 0.62) vs fine-tuned XceptionNet (65% accuracy, AUC 0.73) — empirically validating transfer learning for physiological deepfake detection across 22,348 PPG maps from two datasets.",
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    links: [
      { label: "Read Paper", url: "#" },
      { label: "View Code", url: "https://drive.google.com/drive/folders/1j8N-qGm8mM475haK_ocWmF_4qPaJp1He" }
    ],
    accent: "pink",
    featured: true,
  },
  {
    title: "Path2Zero — Carbon Credit Marketplace",
    tags: ["Full Stack", "AI", "Feb 2026"],
    stack: ["AI Agents", "Payment Gateway", "ESG Reports", "Chatbot"],
    description: "Carbon credit marketplace with verified certificate authentication, AI chatbot, automated ESG report generation, carbon footprint calculator, and end-to-end secure payment gateway.",
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    links: [],
    accent: "purple",
    featured: false,
  },
  {
    title: "SentrySense — Cybersecurity Threat Dashboard",
    tags: ["AI", "Streamlit", "Jul 2025"],
    stack: ["Streamlit", "Python", "Real-time AI", "Anomaly Detection"],
    description: "AI-powered cybersecurity dashboard with real-time threat visualisation, dynamic risk scores, anomaly flags, and intelligent response suggestions for enterprise-level decision-making.",
    image: "/abstract-memory-storage-visualization.jpg",
    links: [],
    accent: "pink",
    featured: false,
  },
  {
    title: "Phishing Email Detector",
    tags: ["ML", "NLP", "Aug 2024"],
    stack: ["NLP", "Scikit-learn", "Feature Extraction", "Supervised Learning"],
    description: "ML model using NLP and supervised learning to detect and classify phishing emails with high accuracy through feature extraction and text-based classification.",
    image: "/sound-wave-visualization-dark-theme.jpg",
    links: [],
    accent: "purple",
    featured: false,
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-24 px-8 md:px-12 md:py-32 bg-[#06080f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">03 — PROJECTS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic text-[#f0f0ff]">Selected Works</h2>
      </motion.div>

      {/* Featured Project */}
      {projects.filter(p => p.featured).map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative p-8 bg-[#0d1117] border border-[#e91e8c]/30 rounded-2xl overflow-hidden group hover:border-[#e91e8c]/50 transition-all duration-500 glow-pink">
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#e91e8c] text-[#06080f] font-mono text-xs rounded-full">
              Featured
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "saturate(0.8) contrast(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#e91e8c]/10 mix-blend-overlay" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#e91e8c]/30 rounded-full text-[#e91e8c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-sans text-2xl md:text-3xl font-medium text-[#f0f0ff] mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider px-2 py-1 bg-[#e91e8c]/10 rounded text-[#7986a8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[#7986a8] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-[#e91e8c] hover:text-[#f0f0ff] transition-colors duration-300"
                    >
                      {link.label.includes("Code") ? <FolderGit2 className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Other Projects Grid */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.filter(p => !p.featured).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative p-6 bg-[#0d1117] border rounded-xl overflow-hidden group transition-all duration-500 ${
              project.accent === "pink" 
                ? "border-[#e91e8c]/20 hover:border-[#e91e8c]/50 border-glow-pink" 
                : "border-[#a855f7]/20 hover:border-[#a855f7]/50 border-glow-purple"
            }`}
          >
            {/* Image */}
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "saturate(0.8) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
              <div className={`absolute inset-0 mix-blend-overlay ${project.accent === "pink" ? "bg-[#e91e8c]/10" : "bg-[#a855f7]/10"}`} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[10px] tracking-wider px-2 py-1 border rounded-full ${
                    project.accent === "pink" 
                      ? "border-[#e91e8c]/30 text-[#e91e8c]" 
                      : "border-[#a855f7]/30 text-[#a855f7]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-2 leading-tight">
              {project.title}
            </h3>

            {/* Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] tracking-wider px-2 py-0.5 bg-[#0d1117] border border-[#7986a8]/20 rounded text-[#7986a8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-[#7986a8] text-xs leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Image Preview */}
      <motion.div
        className="absolute pointer-events-none z-50 w-48 h-32 overflow-hidden rounded-lg hidden lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-150%",
        }}
        animate={{
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        {hoveredIndex !== null && (
          <>
            <motion.img
              src={projects.filter(p => !p.featured)[hoveredIndex]?.image}
              alt=""
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ filter: "saturate(0.8) contrast(1.1)" }}
            />
            <div className="absolute inset-0 bg-[#e91e8c]/20 mix-blend-overlay" />
          </>
        )}
      </motion.div>
    </section>
  )
}
