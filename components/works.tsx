"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"

// Path2Zero Browser Mockup Component
function Path2ZeroBrowserMockup() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-[#0a1a0f] border border-[#1a3a1f]">
      {/* Browser Chrome */}
      <div className="bg-[#1a1a2e] px-4 py-2 flex items-center justify-between border-b border-[#2a2a4e]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-[#7986a8] text-xs font-mono flex-1 text-center ml-4">path2zero.vercel.app</div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col items-center justify-center h-64 bg-gradient-to-b from-[#0a1a0f] to-[#051010]">
        {/* Badge */}
        <div className="inline-block px-3 py-1 mb-6 bg-[#00c853]/10 border border-[#00c853]/30 rounded-full">
          <span className="text-[#00c853] font-mono text-[10px]">Aligned with UN SDG 13 – Climate Action</span>
        </div>

        {/* Main Text */}
        <div className="text-center mb-6">
          <p className="text-[#f0f0ff] text-xl font-light">Your Journey to</p>
          <p className="text-[#00c853] text-3xl font-bold">Carbon Neutrality</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-[#00c853] text-[#0a1a0f] font-mono text-xs rounded hover:bg-[#00e676] transition-colors">
            Calculate My Footprint →
          </button>
          <button className="px-4 py-2 border border-[#00c853]/50 text-[#00c853] font-mono text-xs rounded hover:border-[#00c853] transition-colors">
            Explore Offset Projects
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-6 text-[#7986a8] text-[10px] font-mono">
          <span>Verified Credits</span>
          <span>Real-time Trading</span>
          <span>Climate Impact</span>
        </div>
      </div>
    </div>
  )
}

// SentrySense Dashboard SVG Component
function SentrySenseDashboard() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="threatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#e91e8c" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#0a0a1a"/>

      {/* Grid Background */}
      <g stroke="#a855f7" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300"/>
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50}/>
        ))}
      </g>

      {/* Central Network Graph */}
      {/* Nodes */}
      <circle cx="100" cy="80" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8"/>
      <circle cx="200" cy="60" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8"/>
      <circle cx="300" cy="100" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8"/>
      <circle cx="150" cy="150" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8"/>
      <circle cx="250" cy="150" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8"/>
      <circle cx="100" cy="200" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8"/>
      <circle cx="200" cy="220" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8"/>
      <circle cx="300" cy="200" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8"/>

      {/* Connection Lines */}
      <line x1="100" y1="80" x2="200" y2="60" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="60" x2="300" y2="100" stroke="#e91e8c" strokeWidth="1" opacity="0.4"/>
      <line x1="300" y1="100" x2="250" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
      <line x1="250" y1="150" x2="200" y2="220" stroke="#e91e8c" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="220" x2="100" y2="200" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
      <line x1="100" y1="200" x2="150" y2="150" stroke="#e91e8c" strokeWidth="1" opacity="0.4"/>
      <line x1="100" y1="80" x2="150" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.3"/>
      <line x1="300" y1="100" x2="250" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.3"/>

      {/* Metric Cards */}
      {/* Top Left */}
      <rect x="10" y="10" width="80" height="50" fill="#e91e8c" fillOpacity="0.1" stroke="#e91e8c" strokeWidth="1" rx="4"/>
      <text x="15" y="28" fontSize="10" fill="#e91e8c" fontFamily="monospace">Threats</text>
      <text x="15" y="42" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">24</text>

      {/* Top Right */}
      <rect x="310" y="10" width="80" height="50" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1" rx="4"/>
      <text x="315" y="28" fontSize="10" fill="#a855f7" fontFamily="monospace">Risk Score</text>
      <text x="315" y="42" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">87</text>

      {/* Bottom */}
      <rect x="160" y="255" width="80" height="35" fill="#e91e8c" fillOpacity="0.1" stroke="#e91e8c" strokeWidth="1" rx="4"/>
      <text x="165" y="268" fontSize="10" fill="#e91e8c" fontFamily="monospace">Anomalies</text>
      <text x="165" y="282" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">3</text>

      {/* Threat Timeline at Bottom */}
      <rect x="20" y="270" width="360" height="15" fill="#0a0a1a" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1" rx="2"/>
      <rect x="30" y="272" width="30" height="11" fill="#e91e8c" opacity="0.6"/>
      <rect x="70" y="272" width="25" height="11" fill="#a855f7" opacity="0.5"/>
      <rect x="105" y="272" width="35" height="11" fill="#e91e8c" opacity="0.6"/>
      <rect x="150" y="272" width="20" height="11" fill="#a855f7" opacity="0.4"/>
      <rect x="180" y="272" width="40" height="11" fill="#e91e8c" opacity="0.7"/>
      <rect x="230" y="272" width="25" height="11" fill="#a855f7" opacity="0.5"/>
      <rect x="265" y="272" width="35" height="11" fill="#e91e8c" opacity="0.6"/>
      <rect x="310" y="272" width="20" height="11" fill="#a855f7" opacity="0.4"/>
    </svg>
  )
}

const projects = [
  {
    title: "Path2Zero — Carbon Credit Marketplace",
    tags: ["Full Stack", "AI", "Feb 2026"],
    stack: ["AI Agents", "Payment Gateway", "ESG Reports", "Chatbot"],
    description: "Carbon credit marketplace with verified certificate authentication, AI chatbot, automated ESG report generation, carbon footprint calculator, and end-to-end secure payment gateway.",
    image: "/path2zero-dashboard.svg",
    links: [
      { label: "View Project", url: "https://path2zero.vercel.app/" }
    ],
    accent: "pink",
    featured: true,
  },
  {
    title: "Deepfake Detection via rPPG Signals & XceptionNet",
    tags: ["Research", "Computer Vision", "2026"],
    stack: ["XceptionNet", "rPPG", "MediaPipe", "FaceForensics++", "CelebDF-v2", "PyTorch", "timm"],
    description: "Detects deepfake videos using physiological blood-flow signals rather than visual artifacts. Facial videos are processed via MediaPipe FaceMesh to extract G-PPG and C-PPG signals from cheek ROIs, converted into 224x224 three-channel spatial maps, and classified using two models — a baseline CNN (59% accuracy, AUC 0.62) vs fine-tuned XceptionNet (65% accuracy, AUC 0.73) — empirically validating transfer learning for physiological deepfake detection across 22,348 PPG maps from two datasets.",
    image: "/deepfake-detection.svg",
    links: [
      { label: "View Project", url: "#" },
      { label: "Read Paper", url: "#" },
      { label: "View Code", url: "https://drive.google.com/drive/folders/1j8N-qGm8mM475haK_ocWmF_4qPaJp1He" }
    ],
    accent: "purple",
    featured: false,
  },
  {
    title: "SentrySense — Cybersecurity Threat Dashboard",
    tags: ["AI", "Streamlit", "Jul 2025"],
    stack: ["Streamlit", "Python", "Real-time AI", "Anomaly Detection"],
    description: "AI-powered cybersecurity dashboard with real-time threat visualisation, dynamic risk scores, anomaly flags, and intelligent response suggestions for enterprise-level decision-making.",
    image: "/sentrysense-dashboard.svg",
    links: [
      { label: "View Project", url: "#" }
    ],
    accent: "pink",
    featured: false,
  },
  {
    title: "Phishing Email Detector",
    tags: ["ML", "NLP", "Aug 2024"],
    stack: ["NLP", "Scikit-learn", "Feature Extraction", "Supervised Learning"],
    description: "ML model using NLP and supervised learning to detect and classify phishing emails with high accuracy through feature extraction and text-based classification.",
    image: "/phishing-detector.svg",
    links: [
      { label: "View Project", url: "#" }
    ],
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
              <a 
                href="https://path2zero.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-64 lg:h-80 rounded-lg overflow-hidden cursor-pointer"
              >
                <Path2ZeroBrowserMockup />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#e91e8c]/10 mix-blend-overlay" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#e91e8c] text-[#06080f] font-mono text-sm font-semibold rounded-lg">
                    <span>↗</span>
                    <span>View Project</span>
                  </div>
                </div>
              </a>

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
              {project.title.includes("SentrySense") ? (
                <SentrySenseDashboard />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "saturate(0.8) contrast(1.1)" }}
                />
              )}
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
            <p className="text-[#7986a8] text-xs leading-relaxed line-clamp-3 mb-4">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url === "#" ? undefined : "_blank"}
                  rel={link.url === "#" ? undefined : "noopener noreferrer"}
                  className={`inline-flex items-center gap-1 font-mono text-[10px] transition-colors duration-300 ${
                    project.accent === "pink"
                      ? "text-[#e91e8c] hover:text-[#f0f0ff]"
                      : "text-[#a855f7] hover:text-[#f0f0ff]"
                  }`}
                >
                  {link.label.includes("Code") ? (
                    <FolderGit2 className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
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
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("SentrySense") ? (
              <SentrySenseDashboard />
            ) : (
              <motion.img
                src={projects.filter(p => !p.featured)[hoveredIndex]?.image}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ filter: "saturate(0.8) contrast(1.1)" }}
              />
            )}
            <div className="absolute inset-0 bg-[#e91e8c]/20 mix-blend-overlay" />
          </>
        )}
      </motion.div>
    </section>
  )
}
