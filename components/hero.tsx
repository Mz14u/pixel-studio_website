"use client"

import Image from "next/image"
import { useLang } from "./language-context"

function PixelStars() {
  const stars = [
    { top: "10%", left: "5%", delay: "0s" },
    { top: "20%", left: "85%", delay: "1.5s" },
    { top: "30%", left: "15%", delay: "0.7s" },
    { top: "15%", left: "70%", delay: "2.1s" },
    { top: "60%", left: "90%", delay: "0.3s" },
    { top: "70%", left: "8%", delay: "1.8s" },
    { top: "80%", left: "75%", delay: "2.5s" },
    { top: "45%", left: "95%", delay: "1.0s" },
    { top: "55%", left: "3%", delay: "0.5s" },
    { top: "85%", left: "50%", delay: "1.2s" },
    { top: "25%", left: "45%", delay: "2.0s" },
    { top: "75%", left: "30%", delay: "0.9s" },
  ]

  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          className="pixel-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            width: i % 3 === 0 ? "6px" : "4px",
            height: i % 3 === 0 ? "6px" : "4px",
            background: i % 2 === 0 ? "var(--accent)" : "var(--primary)",
          }}
        />
      ))}
    </>
  )
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pixel-grid-bg scanlines"
    >
      <PixelStars />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="relative">
          <div className="pixel-border-primary p-1 bg-card">
            <Image
              src="/images/pixel-logo.jpeg"
              alt="Pixel Studio Logo"
              width={180} 
              height={180}
              className="block"
              style={{ imageRendering: "auto" }}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h1
            className="text-4xl md:text-6xl font-bold text-accent tracking-wider"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            PIXEL
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            {t("استوديو بكسل", "Pixel Studio")}
          </p>
          <div className="pixel-divider w-32 mx-auto" />
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            {t(
              "مبادرة شبابية تقنية لتصميم وتطوير ألعاب رقمية تفاعلية وهادفة تسهم في معالجة قضايا مجتمعية وتعزز الوعي بأساليب حديثة ومبتكرة",
              "A youth tech initiative for designing and developing interactive, purposeful digital games that address social issues and raise awareness through innovative approaches"
            )}
          </p>
          <span className="pixel-cursor" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#about"
            className="pixel-btn bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
          >
            {t("تعرّف علينا", "About Us")}
          </a>
          <a
            href="#contact"
            className="pixel-btn bg-secondary border-2 border-border px-8 py-3 text-sm font-medium text-foreground"
          >
            {t("تواصل معنا", "Contact Us")}
          </a>
        </div>
      </div>
    </section>
  )
}
