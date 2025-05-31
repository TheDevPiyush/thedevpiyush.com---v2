import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { PortfolioProvider } from "@/components/portfolio-provider"

// Initialize the JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "TheDevPiyush - Portfolio",
  description: "Portfolio of TheDevPiyush, Full-Stack & Blockchain Developer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-black text-green-400 font-mono antialiased">
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  )
}
