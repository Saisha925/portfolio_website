"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#06080f]">
      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-[#e91e8c]/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-[#7986a8]">
            Designed & built by <span className="text-[#e91e8c]">Saisha Bhasin</span> · 2026
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-[#7986a8] hover:text-[#a855f7] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-[#7986a8] hover:text-[#a855f7] transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="font-mono text-xs tracking-widest text-[#7986a8] hover:text-[#e91e8c] transition-colors duration-300"
          >
            BACK TO TOP
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
