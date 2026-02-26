"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Languages } from "lucide-react"
import { useLang } from "./language-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, toggleLang, t } = useLang()

  const navLinks = [
    { label: t("الرئيسية", "Home"), href: "#hero" },
    { label: t("من نحن", "About"), href: "#about" },
    { label: t("رؤيتنا", "Vision"), href: "#vision" },
    { label: t("خدماتنا", "Services"), href: "#services" },
    { label: t("الفريق", "Team"), href: "#team" },
    { label: t("تواصل معنا", "Contact"), href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/90 backdrop-blur-sm border-b-4 border-primary">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/pixel-logo.jpeg"
            alt="Pixel Studio Logo"
            width={40}
            height={40}
            className="rounded-full"
            style={{ imageRendering: "auto" }}
          />
          <span className="font-[var(--font-pixel)] text-sm text-accent tracking-wider">
            PIXEL
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLang}
            className="pixel-btn bg-secondary flex items-center gap-2 px-4 py-2 text-xs text-accent border-2 border-border"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
          >
            <Languages size={16} />
            <span style={{ fontFamily: "var(--font-pixel)" }}>
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="pixel-btn bg-secondary flex items-center gap-2 px-3 py-2 text-xs text-accent border-2 border-border"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
          >
            <Languages size={14} />
            <span style={{ fontFamily: "var(--font-pixel)" }}>
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent pixel-btn bg-secondary p-2"
            aria-label={isOpen ? t("إغلاق القائمة", "Close menu") : t("فتح القائمة", "Open menu")}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t-2 border-border">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-sm text-muted-foreground hover:text-accent hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-accent ml-2">{">"}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
