"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"

export default function DeepfakeDetectionPage() {
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
                Research · Computer Vision · 2026
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 bg-[#a855f7]/20 rounded-full text-[#a855f7]">
                Research 🔬
              </span>
              <span className="font-mono text-[10px] tracking-wider px-3 py-1 border border-[#a855f7] rounded-full text-[#a855f7]">
                Collaborative Project — Team of 4
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#00f0ff]">
              Deepfake Detection via rPPG Signals & XceptionNet
            </h1>
            
            <p className="text-lg md:text-xl text-[#7986a8] font-light leading-relaxed mb-8">
              Detecting AI-generated videos through physiological blood-flow signals, not pixel-level visual artifacts
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/deepfake-detection-paper.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e91e8c] text-[#06080f] font-mono text-sm font-semibold rounded hover:bg-[#f0f0ff] transition-colors">
                Read Paper <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://drive.google.com/drive/folders/1j8N-qGm8mM475haK_ocWmF_4qPaJp1He" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                View Code <FolderGit2 className="w-4 h-4" />
              </a>
              <a href="https://github.com/Saisha925/Deepfake-Detection-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#a855f7] text-[#a855f7] font-mono text-sm hover:bg-[#a855f7]/10 transition-colors rounded">
                GitHub <FolderGit2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Overview</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed">
              Most deepfake detectors look for visual glitches like compression artifacts, blending edges and unnatural textures. This research project takes a fundamentally different approach: it detects deepfakes by analysing whether a face's blood flow is physiologically consistent across facial regions. Real faces produce coherent PPG signals but Deepfake faces don't — and that's what the model catches. Built on the FakeCatcher architecture, this project replaces its shallow CNN with XceptionNet to empirically validate whether a deeper pretrained architecture improves accuracy on physiological signal maps.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">My Contributions</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "Dataset description and preprocessing pipeline",
                "PPG map generation and data preparation",
                "Baseline CNN model training and evaluation",
                "Results, discussion and analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#a855f7] mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Methodology</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <ul className="list-none space-y-3">
              {[
                "Facial videos from FaceForensics++ (7,000 videos) and CelebDF-v2 (6,229 videos) preprocessed using MediaPipe FaceMesh",
                "3 ROIs extracted — left cheek, right cheek, mid-face — using 478 facial landmarks",
                "G-PPG (green channel) and C-PPG (chrominance) signals extracted per ROI across 128-frame sliding windows",
                "Each window converted to a 224×224 three-channel spatial map: G-PPG · C-PPG · |G−C|",
                "Final dataset: 22,348 PPG maps across train / val / test splits"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7986a8] leading-relaxed">
                  <span className="text-[#00f0ff] mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Results</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#e91e8c]/10 border-b border-[#e91e8c]/30">
                    <th className="p-4 font-mono text-sm text-[#e91e8c]">Model</th>
                    <th className="p-4 font-mono text-sm text-[#e91e8c]">Accuracy</th>
                    <th className="p-4 font-mono text-sm text-[#e91e8c]">AUC-ROC</th>
                    <th className="p-4 font-mono text-sm text-[#e91e8c]">F1 (Fake)</th>
                  </tr>
                </thead>
                <tbody className="text-[#7986a8]">
                  <tr className="border-b border-[#7986a8]/10">
                    <td className="p-4">Baseline CNN (from scratch)</td>
                    <td className="p-4 font-mono">59%</td>
                    <td className="p-4 font-mono">0.62</td>
                    <td className="p-4 font-mono">0.52</td>
                  </tr>
                  <tr className="border-b border-[#7986a8]/10 bg-[#0d1117]">
                    <td className="p-4">XceptionNet (fine-tuned)</td>
                    <td className="p-4 font-mono text-[#f0f0ff]">65%</td>
                    <td className="p-4 font-mono text-[#f0f0ff]">0.73</td>
                    <td className="p-4 font-mono text-[#f0f0ff]">0.68</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg text-[#7986a8] leading-relaxed text-sm">
              <strong className="text-[#a855f7]">Key Finding:</strong> Transfer learning provides meaningful uplift even when the input domain is physiological signal maps — completely different from typical ImageNet images. XceptionNet outperformed the baseline by 6 percentage points in accuracy and 0.11 in AUC.
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Tech Stack</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <div className="flex flex-wrap gap-3">
              {["XceptionNet", "CNN", "PyTorch", "MediaPipe FaceMesh", "rPPG", "FaceForensics++", "CelebDF-v2", "Python"].map((tech) => (
                <span key={tech} className="font-mono text-xs tracking-wider px-4 py-2 bg-[#0d1117] border border-[#7986a8]/20 rounded text-[#7986a8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4 text-[#f0f0ff]">Team</h2>
            <div className="w-12 h-px bg-[#a855f7] mb-6"></div>
            <p className="text-[#7986a8] leading-relaxed">
              Anusha Garg · Khushi Khorwal · Mishty Verma · Saisha Bhasin — <span className="text-[#f0f0ff]">IGDTUW, Dept. of IT</span>
            </p>
          </div>

        </motion.div>
      </div>
    </main>
  )
}
