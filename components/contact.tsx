"use client"

import { Mail, MapPin, Linkedin, Globe } from "lucide-react"
import { useLang } from "./language-context"

export default function Contact() {
  const { t } = useLang()

  const contactInfo = [
    {
      icon: Mail,
      label: t("البريد الإلكتروني", "Email"),
      value: "info@pixel-play-sa.com",
      href: "info@pixel-play-sa.com",
    },
    {
      icon: MapPin,
      label: t("المقر", "Location"),
      value: t("المملكة العربية السعودية", "Saudi Arabia"),
      href: null,
    },
    {
      icon: Linkedin,
      label: t("لينكد إن", "LinkedIn"),
      value: "Pixel Studio",
      href: "https://www.linkedin.com/posts/pixelksa_%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D9%82%D8%B1%D9%88%D9%86-%D9%85%D8%B1%D8%AA-%D9%88%D8%A7%D9%86%D9%82%D8%B6%D8%AA-%D9%83%D8%AA%D8%A8%D8%AA-%D8%A8%D8%AD%D8%B1%D9%88%D9%81-%D9%85%D9%86-%D8%A7%D9%84%D8%B9%D8%B7%D8%A7%D8%A1-activity-7431433899999780864-d66D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeqgD0B1P7rPo4jZegXsE0nQSVTUlywOuchttps://linkedin.com/company/pixel-studio",
    },
    {
      icon: Globe,
      label: t("الموقع", "Website"),
      value: "pixel-studio.com",
      href: "https://pixel-play-sa.com",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 pixel-grid-bg relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// تواصل معنا", "// CONTACT US")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("نسعد بتواصلك معنا", "We'd Love to Hear from You")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t(
              "للتعاون أو الاستفسار، لا تتردد في التواصل معنا عبر أي من القنوات التالية",
              "For collaboration or inquiries, feel free to reach out through any of the following channels"
            )}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {contactInfo.map((info) => {
            const Inner = (
              <div className="pixel-card p-6 transition-all hover:scale-[1.02] group">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/15 pixel-border">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground text-sm">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            )

            return info.href ? (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Inner}
              </a>
            ) : (
              <div key={info.label}>{Inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
