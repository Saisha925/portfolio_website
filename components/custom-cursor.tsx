"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot - pink accent */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#e91e8c] rounded-full pointer-events-none z-[10000]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Hover ring - purple accent */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#a855f7] rounded-full pointer-events-none z-[10000]"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
      />
      {/* Glow effect on hover */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999]"
        style={{
          background: "radial-gradient(circle, rgba(233, 30, 140, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: position.x - 32,
          y: position.y - 32,
          scale: isHovering ? 1.5 : 0,
          opacity: isVisible && isHovering ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
      />
    </>
  )
}
