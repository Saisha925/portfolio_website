"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-8 md:px-12 bg-[#06080f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#e91e8c] mb-4">07 — CONTACT</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light text-[#f0f0ff]">
          {"Let's"} <span className="italic gradient-text">build something</span> together
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Email */}
            <div className="mb-8">
              <p className="font-mono text-xs text-[#7986a8] mb-2">EMAIL</p>
              <a
                href="mailto:saishabhasin@gmail.com"
                className="inline-flex items-center gap-2 text-lg text-[#f0f0ff] hover:text-[#e91e8c] transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-[#e91e8c]" />
                saishabhasin@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-xs text-[#7986a8] mb-4">CONNECT</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border border-[#a855f7]/30 rounded-lg text-[#a855f7] hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border border-[#a855f7]/30 rounded-lg text-[#a855f7] hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-[#7986a8] mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#e91e8c]/20 rounded-lg text-[#f0f0ff] font-mono text-sm focus:outline-none focus:border-[#e91e8c]/50 transition-colors duration-300 placeholder:text-[#7986a8]/50"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-[#7986a8] mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#e91e8c]/20 rounded-lg text-[#f0f0ff] font-mono text-sm focus:outline-none focus:border-[#e91e8c]/50 transition-colors duration-300 placeholder:text-[#7986a8]/50"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-mono text-xs text-[#7986a8] mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#e91e8c]/20 rounded-lg text-[#f0f0ff] font-mono text-sm focus:outline-none focus:border-[#e91e8c]/50 transition-colors duration-300 resize-none placeholder:text-[#7986a8]/50"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-[#e91e8c] text-[#06080f] font-mono text-sm tracking-wider rounded-lg hover:bg-[#e91e8c]/90 transition-all duration-300 flex items-center justify-center gap-2 glow-pink"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
