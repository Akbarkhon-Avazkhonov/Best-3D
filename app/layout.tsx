import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "3D Printers Pro - Best 3D Printers and Reviews 2025",
  description:
    "Expert reviews, comparisons and best prices on 3D printers. Find the perfect printer for home and business with our detailed guides.",
  keywords: "3d printer, buy 3d printer, 3d printer reviews, creality, prusa, bambu lab",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
