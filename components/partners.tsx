"use client"

import { Handshake, ArrowUpRight } from "lucide-react"
import { useLang } from "./language-context"

export default function Partners() {
  const { t } = useLang()

  const partners = [
    { ar: "حاضنة ماب من شباب مجتمعي", en: "MAP Incubator by Shabab Mojtamaei" },
    { ar: "وزارة الاتصالات وتقنية المعلومات", en: "Ministry of Communications and Information Technology" },
    { ar: "الأكاديمية الرقمية", en: "Saudi Digital Academy" },
    { ar: "جامعة الحدود الشمالية", en: "Northern Border University" },
  ]

  return (
    <section id="partners" className="py-24 px-6 bg-secondary/40 relative scanlines">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-pixel)" }}>
            {t("// شركاؤنا", "// OUR PARTNERS")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("شركاؤنا", "Our Partners")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t("جهات نلتقي معها حول تمكين المجتمع وتوظيف التقنية لصناعة أثر.", "Organizations connected to our shared interest in empowering society through technology and impact.")}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.ar} className="pixel-card p-6 text-center">
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary/15 pixel-border">
                  <Handshake className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-relaxed">
                  {t(partner.ar, partner.en)}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="pixel-btn inline-flex items-center gap-2 bg-primary px-7 py-3 text-sm font-medium text-primary-foreground">
            {t("كن شريكًا", "Become a Partner")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
