"use client"

import Image from "next/image"
import { useLang } from "./language-context"

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t-4 border-primary bg-card py-10 px-6 relative scanlines">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <Image
            src="/images/pixel-logo.jpeg"
            alt="Pixel Studio Logo"
            width={36}
            height={36}
            className=""
            style={{ imageRendering: "auto" }}
          />
          <span
            className="text-sm text-accent tracking-wider"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            PIXEL
          </span>
        </div>

        <p className="text-sm text-muted-foreground text-center max-w-md leading-relaxed">
          {t(
            "مبادرة شبابية تقنية لتصميم وتطوير ألعاب رقمية تفاعلية وهادفة تخدم المجتمع",
            "A youth tech initiative for designing purposeful interactive digital games that serve the community"
          )}
        </p>

        <div className="pixel-divider w-48" />

        <p className="text-xs text-muted-foreground">
          {t("جميع الحقوق محفوظة", "All Rights Reserved")} &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">Pixel Studio</span>
        </p>
      </div>
    </footer>
  )
}
