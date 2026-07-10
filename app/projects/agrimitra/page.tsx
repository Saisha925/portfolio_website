"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Play, Code } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

const agents = [
  { icon: "🌾", name: "Orchestrator Agent", desc: "Routes queries to the right specialist based on intent" },
  { icon: "🌱", name: "Crop Health Agent", desc: "Diagnoses crop diseases, pest issues, and recommends treatments" },
  { icon: "☁️", name: "Weather Agent", desc: "Hyperlocal weather forecasts and sowing/harvesting advisories" },
  { icon: "📈", name: "Market Price Agent", desc: "Real-time crop mandi prices and selling recommendations" },
  { icon: "🏛️", name: "Government Schemes Agent", desc: "Surfaces relevant subsidies and welfare schemes" },
  { icon: "🔒", name: "STRIDE Security Layer", desc: "Threat modelling across all agent interactions" },
]

export default function AgriMitraPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen bg-[#06080f] pt-32 pb-24 px-8 md:px-12 selection:bg-[#e91e8c]/30">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              href="/#works" 
              className="inline-flex items-center gap-2 font-mono text-sm text-[#7986a8] hover:text-[#f0f0ff] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            {/* Badges & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">

              <span className="font-mono text-xs px-3 py-1 border border-[#a855f7] text-[#a855f7] rounded-full">
                Solo Project
              </span>
              <span className="font-mono text-xs text-[#7986a8] ml-2">
                Google ADK 2.0 · Agentic AI · RAG · 2025
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e91e8c] to-[#a855f7]">
              AgriMitra AI
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-[#f0f0ff] mb-8 leading-relaxed opacity-90">
              A multilingual multi-agent AI agricultural advisor for Indian farmers powered by Google ADK 2.0, Qdrant RAG, and 5 MCP integrations across Hindi, Marathi, Punjabi, and Bhojpuri.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.kaggle.com/code/saishabhasin9/agrimitraai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#e91e8c] text-white font-mono text-sm hover:bg-[#e91e8c]/80 transition-colors rounded-lg font-semibold"
              >
                <Code className="w-4 h-4" />
                View Notebook ↗
              </a>
              <a 
                href="https://youtu.be/2hMy3Cu1MJo?si=NCMela64QxlQzg42" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded-lg font-semibold"
              >
                <Play className="w-4 h-4" />
                Watch Demo ↗
              </a>
            </div>

            {/* Project Image */}
            <div className="mt-12 h-64 md:h-[400px] w-full rounded-xl overflow-hidden border border-[#a855f7]/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative bg-[#06080f] flex items-center justify-center">
              <img src="/agrimitra-illustration.svg" alt="AgriMitra AI" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 prose prose-invert max-w-none"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e91e8c]"></span> Overview
            </h2>
            <p className="text-[#7986a8] leading-relaxed text-lg">
              AgriMitra AI is a multi-agent agricultural advisory system built for Indian farmers using Google Agent Development Kit (ADK) 2.0. It addresses the real-world gap in accessible, language-appropriate farming guidance for rural India. An OrchestratorAgent routes queries to 5 specialist sub-agents, each handling a different domain like crop health, weather, market prices, soil analysis, and government schemes. All agents communicate in the farmer's chosen language, with responses translated on the fly. Built entirely inside a Kaggle notebook (Python 3.12) after abandoning local dev due to Python 3.14 incompatibilities, using only free-tier APIs throughout.
            </p>
          </motion.div>

          {/* Agents Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#a855f7]"></span> Specialist Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agents.map((agent, idx) => (
                <div key={idx} className="bg-[#0d1117] border border-[#7986a8]/20 rounded-xl p-5 hover:border-[#a855f7]/50 transition-colors group flex items-start gap-4">
                  <div className="text-2xl p-2 bg-[#a855f7]/10 rounded-lg group-hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 shrink-0">
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="text-[#f0f0ff] font-medium mb-1">{agent.name}</h3>
                    <p className="text-[#7986a8] text-sm leading-snug">{agent.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MCP Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e91e8c]"></span> MCP Integrations
            </h2>
            <ul className="space-y-3 text-[#7986a8] list-none pl-0">
              {[
                "5 MCP integrations including custom FastMCP servers",
                "OpenStreetMap (free alternative to Google Maps) for location-aware advice",
                "Real-time weather data integration",
                "Mandi price data feeds",
                "Custom crop disease knowledge server"
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-[#e91e8c] mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#a855f7]"></span> Key Features
            </h2>
            <ul className="space-y-3 text-[#7986a8] list-none pl-0">
              {[
                "Multilingual support: Hindi, Marathi, Punjabi, and Bhojpuri",
                "Qdrant in-memory RAG with Gemini embeddings for crop knowledge retrieval",
                "STRIDE security layer across all agent boundaries",
                "100% free-tier APIs — zero paid services used",
                "OrchestratorAgent with 5 specialist sub-agents in a hierarchical architecture",
                "Benchmarked against Plantix, DeHaat, and Kisan Suvidha — stronger multilingual coverage",
                "Built and submitted entirely within a Kaggle notebook environment"
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-[#a855f7] mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e91e8c]"></span> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Google ADK 2.0", "Python 3.12", "Qdrant (in-memory)", 
                "Gemini Embeddings", "FastMCP", "LangChain", 
                "OpenStreetMap", "Kaggle Notebooks"
              ].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-[#0d1117] border border-[#a855f7]/20 text-[#f0f0ff] rounded text-sm">{tech}</span>
              ))}
            </div>
            <p className="text-[#a855f7] font-mono text-sm bg-[#a855f7]/10 p-4 rounded-lg border border-[#a855f7]/20">
              💡 AgriMitra's key differentiator was native multilingual support in 4 Indian languages with zero premium API dependencies.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
