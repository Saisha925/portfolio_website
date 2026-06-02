"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { motion } from "framer-motion"
import { FolderGit2 } from "lucide-react"

export default function SentrySensePage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-[#f0f0ff] font-sans selection:bg-[#e91e8c]/30">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/#works" className="inline-flex items-center text-[#7986a8] hover:text-[#e91e8c] font-mono text-sm mb-12 transition-colors">
            ← Back to Portfolio
          </Link>

          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#e91e8c]/30 rounded-full text-[#e91e8c]">
                AI · Streamlit · Jul 2025
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 bg-[#e91e8c]/20 rounded-full text-[#e91e8c]">
                Complete ✅
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7] rounded-full text-[#a855f7]">
                Collaborative Project — Team of 4
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#a855f7]">
              SentrySense: AI-Powered Cybersecurity Threat Detection Dashboard
            </h1>
            
            <p className="text-lg md:text-xl text-[#7986a8] font-light leading-relaxed mb-8">
              Real-time AI-driven cybersecurity threat detection and visualisation for enterprise-level decision-making
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Saisha925/SentrySense_2.0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                GitHub <FolderGit2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Overview</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed">
              SentrySense is an AI-powered cybersecurity monitoring dashboard built using Streamlit and Python. It gives security teams a real-time view of threats, anomalies, and risk levels — turning complex threat data into clear, actionable insights. The dashboard leverages AI for intelligent threat interpretation and automated response suggestions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Key Features</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "Real-time GNN based threat detection and visualisation with dynamic risk scores",
                "Anomaly prediction with severity levels and alert summaries",
                "AI-powered threat interpretation and response suggestions",
                "Enterprise-level decision support dashboard"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#a855f7] mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Tech Stack</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <div className="flex flex-wrap gap-3">
              {["Streamlit", "Python", "AI", "Slack", "Real-time Analysis", "Data Visualisation"].map((tech) => (
                <span key={tech} className="font-mono text-xs tracking-wider px-4 py-2 bg-[#0d1117] border border-[#7986a8]/20 rounded text-[#7986a8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </main>
  )
}
