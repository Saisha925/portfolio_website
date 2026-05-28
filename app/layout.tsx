import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Saisha Bhasin | AI/ML Engineer & Researcher",
  description: "B.Tech AI/ML student at IGDTUW building intelligent systems — from physiological deepfake detection to full-stack AI marketplaces.",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#06080f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable} bg-[#06080f]`}>
      <body className="font-sans antialiased overflow-x-hidden bg-[#06080f]">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
