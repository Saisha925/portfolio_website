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
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="threatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e91e8c" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#0a0a1a" />

      {/* Grid Background */}
      <g stroke="#a855f7" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>

      {/* Central Network Graph */}
      {/* Nodes */}
      <circle cx="100" cy="80" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8" />
      <circle cx="200" cy="60" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8" />
      <circle cx="300" cy="100" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8" />
      <circle cx="150" cy="150" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8" />
      <circle cx="250" cy="150" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8" />
      <circle cx="100" cy="200" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8" />
      <circle cx="200" cy="220" r="6" fill="#e91e8c" filter="url(#glow)" opacity="0.8" />
      <circle cx="300" cy="200" r="6" fill="#a855f7" filter="url(#glow)" opacity="0.8" />

      {/* Connection Lines */}
      <line x1="100" y1="80" x2="200" y2="60" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="60" x2="300" y2="100" stroke="#e91e8c" strokeWidth="1" opacity="0.4" />
      <line x1="300" y1="100" x2="250" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <line x1="250" y1="150" x2="200" y2="220" stroke="#e91e8c" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="220" x2="100" y2="200" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      <line x1="100" y1="200" x2="150" y2="150" stroke="#e91e8c" strokeWidth="1" opacity="0.4" />
      <line x1="100" y1="80" x2="150" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
      <line x1="300" y1="100" x2="250" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.3" />

      {/* Metric Cards */}
      {/* Top Left */}
      <rect x="10" y="10" width="80" height="50" fill="#e91e8c" fillOpacity="0.1" stroke="#e91e8c" strokeWidth="1" rx="4" />
      <text x="15" y="28" fontSize="10" fill="#e91e8c" fontFamily="monospace">Threats</text>
      <text x="15" y="42" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">24</text>

      {/* Top Right */}
      <rect x="310" y="10" width="80" height="50" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1" rx="4" />
      <text x="315" y="28" fontSize="10" fill="#a855f7" fontFamily="monospace">Risk Score</text>
      <text x="315" y="42" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">87</text>

      {/* Bottom */}
      <rect x="160" y="255" width="80" height="35" fill="#e91e8c" fillOpacity="0.1" stroke="#e91e8c" strokeWidth="1" rx="4" />
      <text x="165" y="268" fontSize="10" fill="#e91e8c" fontFamily="monospace">Anomalies</text>
      <text x="165" y="282" fontSize="12" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">3</text>

      {/* Threat Timeline at Bottom */}
      <rect x="20" y="270" width="360" height="15" fill="#0a0a1a" stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1" rx="2" />
      <rect x="30" y="272" width="30" height="11" fill="#e91e8c" opacity="0.6" />
      <rect x="70" y="272" width="25" height="11" fill="#a855f7" opacity="0.5" />
      <rect x="105" y="272" width="35" height="11" fill="#e91e8c" opacity="0.6" />
      <rect x="150" y="272" width="20" height="11" fill="#a855f7" opacity="0.4" />
      <rect x="180" y="272" width="40" height="11" fill="#e91e8c" opacity="0.7" />
      <rect x="230" y="272" width="25" height="11" fill="#a855f7" opacity="0.5" />
      <rect x="265" y="272" width="35" height="11" fill="#e91e8c" opacity="0.6" />
      <rect x="310" y="272" width="20" height="11" fill="#a855f7" opacity="0.4" />
    </svg>
  )
}

// Deepfake Detection SVG Component
function DeepfakeDetectionIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-deepfake">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="ppgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e91e8c" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#00f0ff" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#0a0a1a" />

      {/* Grid Pattern (Subtle) */}
      <g stroke="#a855f7" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>

      {/* Face Mesh Outline */}
      <path d="M 200,50 Q 130,55 130,120 Q 130,190 200,210 Q 270,190 270,120 Q 270,55 200,50"
        fill="none" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3,3" />

      {/* Inner mesh structure / lines */}
      <line x1="200" y1="50" x2="200" y2="210" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M 130,120 Q 200,140 270,120" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M 140,160 Q 200,180 260,160" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M 150,90 Q 200,105 250,90" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />

      {/* Eye areas */}
      <ellipse cx="170" cy="110" rx="15" ry="8" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
      <ellipse cx="230" cy="110" rx="15" ry="8" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />

      {/* Nose */}
      <path d="M 200,110 L 195,145 L 205,145 Z" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />

      {/* Mouth */}
      <path d="M 180,170 Q 200,185 220,170 Q 200,175 180,170" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />

      {/* ROI Regions - Pink, Purple, Blue */}
      {/* Forehead ROI - Purple */}
      <rect x="180" y="65" width="40" height="20" rx="4" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="2,2" />
      <circle cx="200" cy="75" r="2" fill="#a855f7" />
      <text x="185" y="60" fontSize="7" fill="#a855f7" fontFamily="monospace" opacity="0.8">ROI_1 (Forehead)</text>

      {/* Left Cheek ROI - Pink */}
      <rect x="145" y="130" width="35" height="25" rx="4" fill="#e91e8c" fillOpacity="0.15" stroke="#e91e8c" strokeWidth="1.5" strokeDasharray="2,2" />
      <circle cx="162.5" cy="142.5" r="2" fill="#e91e8c" />
      <text x="110" y="145" fontSize="7" fill="#e91e8c" fontFamily="monospace" opacity="0.8">ROI_2 (Cheek_L)</text>

      {/* Right Cheek ROI - Blue */}
      <rect x="220" y="130" width="35" height="25" rx="4" fill="#00f0ff" fillOpacity="0.15" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2,2" />
      <circle cx="237.5" cy="142.5" r="2" fill="#00f0ff" />
      <text x="260" y="145" fontSize="7" fill="#00f0ff" fontFamily="monospace" opacity="0.8">ROI_3 (Cheek_R)</text>

      {/* PPG Signal Wave below */}
      <path d="M 30,250 Q 55,220 80,250 T 130,250 T 180,250 T 230,250 T 280,250 T 330,250 T 370,250"
        fill="none" stroke="url(#ppgGrad)" strokeWidth="3" filter="url(#glow-deepfake)" />
      <path d="M 30,250 Q 55,220 80,250 T 130,250 T 180,250 T 230,250 T 280,250 T 330,250 T 370,250"
        fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />

      {/* Analysis UI Text overlays */}
      <text x="30" y="280" fontSize="9" fill="#7986a8" fontFamily="monospace">PPG Signal Extraction: ACTIVE</text>
      <text x="280" y="280" fontSize="9" fill="#00f0ff" fontFamily="monospace">Real-time rPPG</text>
    </svg>
  )
}

// Phishing Detector SVG Component
function PhishingDetectorIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-phishing">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#0a0a1a" />

      {/* Grid Background */}
      <g stroke="#e91e8c" strokeOpacity="0.04" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>

      {/* Stylised Email Card */}
      <g filter="url(#card-shadow)">
        <rect x="50" y="40" width="300" height="200" rx="8" fill="#0f141c" stroke="#e91e8c" strokeWidth="1.5" strokeOpacity="0.3" />

        {/* Email Header */}
        <path d="M 50,80 L 350,80" stroke="#e91e8c" strokeWidth="1" strokeOpacity="0.2" />

        {/* Header content */}
        <circle cx="70" cy="60" r="10" fill="#a855f7" fillOpacity="0.2" />
        <path d="M 66,63 C 66,57 74,57 74,63" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="70" cy="57" r="3" fill="#a855f7" />

        <text x="90" y="58" fontSize="8" fill="#7986a8" fontFamily="monospace">FROM:</text>
        <text x="125" y="58" fontSize="8" fill="#e91e8c" fontFamily="monospace" fontWeight="bold">alert-verify@security-update-alert.com</text>

        <text x="90" y="70" fontSize="8" fill="#7986a8" fontFamily="monospace">SUBJECT:</text>
        <text x="140" y="70" fontSize="8" fill="#f0f0ff" fontFamily="monospace" fontWeight="bold">Immediate Action Required: Password Lockout</text>

        {/* Email Body dummy text lines */}
        <line x1="70" y1="105" x2="330" y2="105" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />
        <line x1="70" y1="120" x2="280" y2="120" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />

        {/* Suspicious keyword 1: "verify account" */}
        <rect x="70" y="130" width="85" height="12" rx="2" fill="#e91e8c" fillOpacity="0.15" stroke="#e91e8c" strokeWidth="1" strokeDasharray="1,1" />
        <text x="73" y="139" fontSize="8" fill="#e91e8c" fontFamily="monospace" fontWeight="bold">verify account</text>

        <line x1="160" y1="136" x2="310" y2="136" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />

        {/* Suspicious keyword 2: "CLICK HERE" */}
        <rect x="70" y="150" width="60" height="12" rx="2" fill="#e91e8c" fillOpacity="0.15" stroke="#e91e8c" strokeWidth="1" strokeDasharray="1,1" />
        <text x="73" y="159" fontSize="8" fill="#e91e8c" fontFamily="monospace" fontWeight="bold">CLICK HERE</text>

        <line x1="135" y1="156" x2="250" y2="156" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />

        {/* Suspicious keyword 3: "urgent bypass" */}
        <rect x="70" y="170" width="75" height="12" rx="2" fill="#e91e8c" fillOpacity="0.15" stroke="#e91e8c" strokeWidth="1" strokeDasharray="1,1" />
        <text x="73" y="179" fontSize="8" fill="#e91e8c" fontFamily="monospace" fontWeight="bold">urgent bypass</text>

        <line x1="150" y1="176" x2="330" y2="176" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />

        <line x1="70" y1="195" x2="200" y2="195" stroke="#7986a8" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round" />
      </g>

      {/* "PHISHING DETECTED" Warning Banner/Stamp in Pink */}
      <g transform="translate(140, 110) rotate(-12)" filter="url(#glow-phishing)">
        <rect x="-10" y="-15" width="160" height="40" rx="4" fill="#0a0a1a" stroke="#e91e8c" strokeWidth="2.5" />
        <rect x="-7" y="-12" width="154" height="34" rx="2" fill="none" stroke="#e91e8c" strokeWidth="1" strokeOpacity="0.5" />
        <text x="70" y="10" textAnchor="middle" fontSize="13" fill="#e91e8c" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">
          PHISHING DETECTED
        </text>
      </g>
    </svg>
  )
}

// EcoTrack SVG Component
function EcoTrackIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-eco">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="300" fill="#0a0a1a" />
      <g stroke="#e91e8c" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>
      <path d="M 50,250 Q 150,200 200,150 T 350,50" fill="none" stroke="#e91e8c" strokeWidth="3" filter="url(#glow-eco)" />
      <circle cx="125" cy="175" r="4" fill="#a855f7" filter="url(#glow-eco)" />
      <circle cx="275" cy="100" r="4" fill="#00f0ff" filter="url(#glow-eco)" />
    </svg>
  )
}

const projects = [
  {
    title: "Placement Copilot AI",
    tags: ["Agentic AI", "LangGraph", "RAG", "Full Stack"],
    stack: ["LangGraph", "Python", "Next.js", "Supabase", "Qdrant", "Groq API"],
    description: "A multi-agent AI platform that orchestrates 8 specialized agents to deliver personalised placement preparation — resume analysis, skill gap detection, 30/60/90 day plans, DSA tracking, and AI mock interviews.",
    image: "/placement-copilot.svg",
    links: [
      { label: "View Details →", url: "/projects/placement-copilot" }
    ],
    accent: "pink",
    featured: true,
    status: "In Progress 🚧"
  },
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
      { label: "View Project", url: "https://github.com/Saisha925/Deepfake-Detection-" },
      { label: "Read Paper", url: "/deepfake-detection-paper.pdf" },
      { label: "View Code", url: "https://drive.google.com/drive/folders/1j8N-qGm8mM475haK_ocWmF_4qPaJp1He" }
    ],
    accent: "purple",
    featured: false,
    href: "/projects/deepfake-detection"
  },
  {
    title: "SentrySense — Cybersecurity Threat Dashboard",
    tags: ["AI", "Streamlit", "Jul 2025"],
    stack: ["Streamlit", "Python", "Real-time AI", "Anomaly Detection"],
    description: "AI-powered cybersecurity dashboard with real-time threat visualisation, dynamic risk scores, anomaly flags, and intelligent response suggestions for enterprise-level decision-making.",
    image: "/sentrysense-dashboard.svg",
    links: [
      { label: "View Project", url: "https://github.com/Saisha925/SentrySense_2.0/tree/main" }
    ],
    accent: "pink",
    featured: false,
    href: "/projects/sentrysense"
  },
  {
    title: "EcoTrack: AI-Powered Carbon Footprint Estimation",
    tags: ["ML", "Full Stack", "Apr 2025"],
    stack: ["Python", "Streamlit", "Next.js", "Machine Learning"],
    description: "A solo ML-powered web app helping businesses estimate, visualise, and reduce their daily carbon footprint.",
    image: "/ecotrack.svg",
    links: [
      { label: "View Live Site", url: "https://carbon-footprint-estimation.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Saisha925/CarbonFootprintEstimation" }
    ],
    accent: "pink",
    featured: false,
    href: "/projects/ecotrack"
  },
  {
    title: "Phishing Email Detector",
    tags: ["ML", "NLP", "Aug 2024"],
    stack: ["NLP", "Scikit-learn", "Feature Extraction", "Supervised Learning"],
    description: "ML model using NLP and supervised learning to detect and classify phishing emails with high accuracy through feature extraction and text-based classification.",
    image: "/phishing-detector.svg",
    links: [
      { label: "View Project", url: "https://github.com/Saisha925/PhishingDetectionProject" }
    ],
    accent: "purple",
    featured: false,
    href: "/projects/phishing-detector"
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
          <Link href={project.href!} className="block relative p-8 bg-[#0d1117] border border-[#e91e8c]/30 rounded-2xl overflow-hidden group hover:border-[#e91e8c] hover:shadow-[0_0_20px_rgba(233,30,140,0.4)] transition-all duration-500 glow-pink">
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
              <div className="flex flex-col justify-center relative z-10">
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
            {/* View Details Label */}
            <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] text-[#e91e8c]">View Details →</div>
          </Link>
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
          >
            <Link href={project.href!} className={`block h-full relative p-6 bg-[#0d1117] border rounded-xl overflow-hidden group transition-all duration-500 flex flex-col ${project.accent === "pink"
                ? "border-[#e91e8c]/20 hover:border-[#e91e8c] hover:shadow-[0_0_15px_rgba(233,30,140,0.3)] border-glow-pink"
                : "border-[#a855f7]/20 hover:border-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] border-glow-purple"
              }`}>
              {/* Image */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                {project.title.includes("SentrySense") && <SentrySenseDashboard />}
                {project.title.includes("Deepfake") && <DeepfakeDetectionIllustration />}
                {project.title.includes("Phishing") && <PhishingDetectorIllustration />}
                {project.title.includes("EcoTrack") && <EcoTrackIllustration />}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
                <div className={`absolute inset-0 mix-blend-overlay ${project.accent === "pink" ? "bg-[#e91e8c]/10" : "bg-[#a855f7]/10"}`} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] tracking-wider px-2 py-1 border rounded-full ${project.accent === "pink"
                        ? "border-[#e91e8c]/30 text-[#e91e8c]"
                        : "border-[#a855f7]/30 text-[#a855f7]"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-sans text-lg font-medium text-[#f0f0ff] mb-2 leading-tight relative z-10">
                {project.title}
              </h3>

              {/* Stack */}
              <div className="flex flex-wrap gap-1 mb-3 relative z-10">
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
              <p className="text-[#7986a8] text-xs leading-relaxed line-clamp-3 mb-4 relative z-10">
                {project.description}
              </p>

              <div className="flex gap-4 mt-auto pt-4 relative z-10">
                {project.links.map((link) => (
                  <span
                    key={link.label}
                    role="link"
                    tabIndex={0}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (link.url !== '#') window.open(link.url, '_blank', 'noopener,noreferrer'); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); if (link.url !== '#') window.open(link.url, '_blank', 'noopener,noreferrer'); } }}
                    className={`inline-flex items-center gap-1 font-mono text-[10px] transition-colors duration-300 cursor-pointer ${project.accent === "pink"
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
                  </span>
                ))}
              </div>
              {/* View Details Label */}
              <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] ${project.accent === "pink" ? "text-[#e91e8c]" : "text-[#a855f7]"
                }`}>
                View Details →
              </div>
            </Link>
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
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("Path2Zero") && (
              <Path2ZeroBrowserMockup />
            )}
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("SentrySense") && (
              <SentrySenseDashboard />
            )}
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("Deepfake") && (
              <DeepfakeDetectionIllustration />
            )}
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("Phishing") && (
              <PhishingDetectorIllustration />
            )}
            {projects.filter(p => !p.featured)[hoveredIndex]?.title.includes("EcoTrack") && (
              <EcoTrackIllustration />
            )}
            <div className="absolute inset-0 bg-[#e91e8c]/20 mix-blend-overlay" />
          </>
        )}
      </motion.div>
    </section>
  )
}
