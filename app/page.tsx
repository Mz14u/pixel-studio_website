"use client"

import { LangProvider } from "@/components/language-context"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Vision from "@/components/vision"
import Services from "@/components/services"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PixelDivider from "@/components/pixel-divider"

export default function Home() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <PixelDivider />
        <About />
        <PixelDivider />
        <Vision />
        <PixelDivider />
        <Services />
        <PixelDivider />
        <Team />
        <PixelDivider />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  )
}
