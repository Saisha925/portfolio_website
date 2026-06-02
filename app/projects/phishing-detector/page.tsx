"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FolderGit2 } from "lucide-react"

export default function PhishingDetectorPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-[#f0f0ff] font-sans selection:bg-[#a855f7]/30">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/#works" className="inline-flex items-center text-[#7986a8] hover:text-[#a855f7] font-mono text-sm mb-12 transition-colors">
            ← Back to Portfolio
          </Link>

          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7]/30 rounded-full text-[#a855f7]">
                ML · NLP · Aug 2024
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 bg-[#e91e8c]/20 rounded-full text-[#e91e8c]">
                Completed ✅
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7] rounded-full text-[#a855f7]">
                Solo Project
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#e91e8c]">
              Phishing Email Detector
            </h1>
            
            <p className="text-lg md:text-xl text-[#7986a8] font-light leading-relaxed mb-8">
              ML model using NLP and supervised learning to detect and classify phishing emails with high accuracy
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Saisha925/PhishingDetectionProject" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                GitHub <FolderGit2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 relative rounded-xl overflow-hidden border border-[#a855f7]/20 group"
          >
            <div className="relative aspect-video">
              <Image
                src="/phishing-hero.png"
                alt="Phishing Email Detector — ML-Powered Email Classification"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/20 to-transparent" />
              <div className="absolute inset-0 bg-[#a855f7]/5 mix-blend-overlay" />
            </div>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Overview</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed">
              Phishing emails remain one of the most common cyberattack vectors globally. This solo project builds a machine learning classifier that automatically detects phishing emails by analysing email content using natural language processing — identifying malicious linguistic patterns, suspicious keywords, and structural signals that distinguish phishing attempts from legitimate emails.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Key Features</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "NLP preprocessing pipeline — tokenisation, stopword removal, feature extraction",
                "Supervised learning classification for real vs phishing email detection",
                "High accuracy predictions evaluated on precision, recall, and F1-score",
                "Text-based feature engineering from email content and subject lines"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#e91e8c] mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Tech Stack</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <div className="flex flex-wrap gap-3">
              {["Python", "Scikit-learn", "NLP", "TF-IDF", "Feature Extraction", "Supervised Learning", "Pandas", "NumPy"].map((tech) => (
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
