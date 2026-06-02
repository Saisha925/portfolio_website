"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"

export default function Path2ZeroPage() {
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
                Full Stack · AI · Feb 2026
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 bg-[#e91e8c]/20 rounded-full text-[#e91e8c]">
                Live ✅
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7] rounded-full text-[#a855f7]">
                Collaborative Project
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e91e8c] to-[#a855f7]">
              Path2Zero: Carbon Credit Marketplace
            </h1>
            
            <p className="text-lg md:text-xl text-[#7986a8] font-light leading-relaxed mb-8">
              A full-stack carbon-credit marketplace that authenticates certificates, calculates carbon footprints, generates ESG reports, and enables secure credit purchases
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://path2zero.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e91e8c] text-[#06080f] font-mono text-sm font-semibold rounded hover:bg-[#f0f0ff] transition-colors">
                View Live Site <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://github.com/Saisha925/Path2Zero-1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                GitHub <FolderGit2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 relative rounded-xl overflow-hidden border border-[#e91e8c]/20 group"
          >
            <div className="relative aspect-video">
              <Image
                src="/path2zero-hero.png"
                alt="Path2Zero Carbon Credit Marketplace — Homepage"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/20 to-transparent" />
              <div className="absolute inset-0 bg-[#e91e8c]/5 mix-blend-overlay" />
            </div>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Overview</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed mb-4">
              Path2Zero is a carbon credit marketplace that makes climate action accessible and verifiable for individuals and organizations. Built as a collaborative project, it combines carbon credit certificate authentication, AI-driven insights, and secure trading into one platform — aligned with UN SDG 13: Climate Action.
            </p>
            <p className="text-[#7986a8] leading-relaxed">
              The machine learning powered carbon footprint calculator at its core was originally built by me as a standalone solo project (<Link href="/projects/ecotrack" className="text-[#e91e8c] hover:underline">EcoTrack</Link>) and integrated into the broader platform.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">My Contributions</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "Built ML powered carbon footprint calculator — the core estimation engine of the platform",
                "Frontend development across the platform"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#e91e8c] mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Key Features</h2>
            <div className="w-12 h-px bg-[#e91e8c] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "Verified carbon credit certificate authentication using Carbonmark API",
                "Carbon footprint calculator for individuals and organizations with personalized recommendations",
                "AI chatbot for user guidance and credit purchase assistance",
                "Automated ESG report generation",
                "Secure end-to-end payment gateway for carbon credit trading",
                "Real-time marketplace for offset projects"
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
              {["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Supabase", "Stripe", "Vercel"].map((tech) => (
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
