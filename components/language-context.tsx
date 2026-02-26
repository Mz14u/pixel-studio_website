"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "ar" | "en"

interface LangContextType {
  lang: Lang
  toggleLang: () => void
  t: (ar: string, en: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: "ar",
  toggleLang: () => {},
  t: (ar) => ar,
})

export function useLang() {
  return useContext(LangContext)
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar")

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"))
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en)

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  )
}
