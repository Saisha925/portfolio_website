"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, FileText, Search, Calendar, Code2, FolderGit2, Mic, BookOpen, Layers } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

const agents = [
  { icon: <FileText className="w-6 h-6" />, name: "Resume Agent", desc: "PDF parsing, ATS scoring, AI-powered bullet rewrites" },
  { icon: <Search className="w-6 h-6" />, name: "Skill Gap Agent", desc: "Semantic skill matching + RAG knowledge base lookup" },
  { icon: <Calendar className="w-6 h-6" />, name: "Career Planner Agent", desc: "Personalised 30/60/90 day roadmap (Llama 70B)" },
  { icon: <Code2 className="w-6 h-6" />, name: "DSA Agent", desc: "Daily LeetCode plan with urgency-aware scheduling" },
  { icon: <FolderGit2 className="w-6 h-6" />, name: "Project Recommender", desc: "Portfolio project suggestions tailored to skill gaps" },
  { icon: <Mic className="w-6 h-6" />, name: "Interview Agent", desc: "Multi-round mock interviews with Groq Whisper STT" },
  { icon: <BookOpen className="w-6 h-6" />, name: "CS Fundamentals Agent", desc: "OS, DBMS, CN quiz with vocal answer support" },
  { icon: <Layers className="w-6 h-6" />, name: "System Design Agent", desc: "Architecture challenges with AI evaluation" },
]

export default function PlacementCopilotPage() {
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
              <span className="font-mono text-xs px-3 py-1 bg-[#e91e8c]/10 border border-[#e91e8c]/30 text-[#e91e8c] rounded-full">
                In Progress 🚧
              </span>
              <span className="font-mono text-xs px-3 py-1 border border-[#a855f7] text-[#a855f7] rounded-full">
                Solo Project
              </span>
              <span className="font-mono text-xs text-[#7986a8] ml-2">
                Agentic AI · LangGraph · RAG · 2025–2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e91e8c] to-[#a855f7]">
              Placement Copilot AI
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-[#f0f0ff] mb-8 leading-relaxed opacity-90">
              An agentic multi-agent AI platform that orchestrates 8 specialized agents to deliver fully personalized campus placement preparation — from resume intelligence to AI mock interviews.
            </p>

            <div>
              <a 
                href="https://github.com/Saisha925/placement-copilot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded-lg font-semibold"
              >
                <Github className="w-4 h-4" />
                GitHub ↗
              </a>
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
              Placement Copilot AI is a full-stack agentic AI platform built around a LangGraph Supervisor architecture. A central Supervisor Agent dynamically routes tasks to 8 specialised sub-agents — each responsible for a distinct domain of placement preparation. Every agent reads from and writes to a shared <code className="text-[#e91e8c] bg-[#e91e8c]/10 px-1 rounded">PlacementState</code> TypedDict, so downstream agents always have full context from upstream results. The platform combines deterministic scoring, RAG-powered skill analysis, and LLM-generated personalised roadmaps into one cohesive preparation system.
            </p>
          </motion.div>

          {/* How it works — Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#f0f0ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#a855f7]"></span> How it works
            </h2>
            <div className="bg-[#0d1117] border border-[#a855f7]/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="space-y-4 relative z-10 font-mono text-sm">
                {[
                  "User sets their target role, uploads resume, and describes their goal",
                  "Supervisor Agent analyses intent and routes to the appropriate agents in sequence",
                  "Resume Agent extracts skills and computes ATS score",
                  "Skill Gap Agent semantically matches skills against role requirements using RAG (Qdrant)",
                  "Career Planner Agent generates a personalised 30/60/90 day roadmap (Llama 70B)",
                  "DSA, Interview, Project Recommender, CS Fundamentals, and System Design agents each contribute their domain output",
                  "A deterministic Readiness Score (0–100) is computed from all agent outputs and saved to Supabase"
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="text-[#a855f7] shrink-0 font-bold">Step {idx + 1}:</span>
                    <span className="text-[#f0f0ff]/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <span className="w-8 h-[1px] bg-[#e91e8c]"></span> The Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agents.map((agent, idx) => (
                <div key={idx} className="bg-[#0d1117] border border-[#7986a8]/20 rounded-xl p-5 hover:border-[#e91e8c]/50 transition-colors group flex items-start gap-4">
                  <div className="text-[#e91e8c] p-2 bg-[#e91e8c]/10 rounded-lg group-hover:scale-110 transition-transform">
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
                "Hybrid Supervisor routing — deterministic rules first, LLM fallback for edge cases",
                "Shared PlacementState ensures zero redundant LLM calls across agents",
                "RAG pipeline with Qdrant Cloud and all-MiniLM-L6-v2 embeddings",
                "Speech-to-text interview practice via Groq Whisper (whisper-large-v3)",
                "Communication analysis — clarity score, confidence score, filler word detection",
                "Deterministic readiness score across 7 weighted dimensions",
                "Feedback loop — low interview scores automatically trigger career plan revision",
                "Full session persistence via Supabase — pick up exactly where you left off"
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
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#7986a8] mb-3 tracking-wider">FRONTEND</h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Radix UI"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-[#0d1117] border border-[#e91e8c]/20 text-[#f0f0ff] rounded text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-xs text-[#7986a8] mb-3 tracking-wider">BACKEND & AI</h4>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "Python", "LangGraph 1.2.2", "Groq API", "Llama 3.1 8B", "Llama 3.3 70B"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-[#0d1117] border border-[#a855f7]/20 text-[#f0f0ff] rounded text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-xs text-[#7986a8] mb-3 tracking-wider">INFRASTRUCTURE</h4>
                <div className="flex flex-wrap gap-2">
                  {["Supabase", "Qdrant Cloud", "Groq Whisper", "HuggingFace Inference API", "pdfplumber"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-[#0d1117] border border-[#00f0ff]/20 text-[#f0f0ff] rounded text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
