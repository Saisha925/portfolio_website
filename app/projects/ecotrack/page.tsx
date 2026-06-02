"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"

export default function EcoTrackPage() {
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
                ML · Full Stack · Apr 2025
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 bg-[#e91e8c]/20 rounded-full text-[#e91e8c]">
                Live ✅
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7] rounded-full text-[#a855f7]">
                Solo Project
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#a855f7]">
              EcoTrack: AI-Powered Carbon Footprint Estimation
            </h1>
            
            <p className="text-lg md:text-xl text-[#7986a8] font-light leading-relaxed mb-8">
              A solo ML-powered web app helping businesses estimate, visualise, and reduce their daily carbon footprint
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://carbon-footprint-estimation.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e91e8c] text-[#06080f] font-mono text-sm font-semibold rounded hover:bg-[#f0f0ff] transition-colors">
                View Live Site <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://github.com/Saisha925/CarbonFootprintEstimation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                GitHub <FolderGit2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Overview</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed">
              EcoTrack is a full-stack web application designed to help businesses understand and optimize their carbon emissions, built independently as part of my Machine Learning coursework. Instead of relying on static, sector-wise formulae, the system's core engine leverages a predictive machine learning model to estimate CO₂ output. It processes dynamic operational inputs across the energy, transport, and industrial sectors, translating complex data into real-time visualisations and actionable sustainability recommendations.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Key Features</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                { title: "Predictive ML Engine", desc: "Replaces traditional, static formulas with custom machine learning algorithms for accurate, sector-wise CO₂ emission estimation" },
                { title: "Dynamic Data Processing", desc: "Captures and evaluates live operational inputs tailored specifically for the energy, transport, and industrial sectors" },
                { title: "Real-Time Visualizations", desc: "Transforms complex machine learning outputs into clear, interactive visual breakdowns of emission data" },
                { title: "AI-Powered Insights", desc: "Translates calculated data into actionable sustainability recommendations and targeted emission reduction strategies" },
                { title: "Contextual Dashboard", desc: "Integrates global emission statistics to help businesses benchmark their environmental impact against broader trends" },
                { title: "Live Full-Stack Deployment", desc: "Fully deployed and accessible as a production-ready application on Vercel" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#a855f7] mt-1.5">▹</span>
                  <span><strong className="text-[#f0f0ff]">{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Tech Stack</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <div className="flex flex-wrap gap-3">
              {["Python", "Streamlit", "Next.js", "Machine Learning", "Data Visualisation", "Vercel"].map((tech) => (
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
