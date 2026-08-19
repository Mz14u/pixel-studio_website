"use client"

import { Eye, Target } from "lucide-react"
import { useLang } from "./language-context"

export default function Vision() {
  const { t } = useLang()

  const objectives = [
    t("الألعاب التعليمية والتدريبية والمحاكاة", "Educational games, training, and simulation"),
    t("الألعاب الصحية والتوعية بالعادات والصحة النفسية", "Health games and awareness of healthy habits and mental health"),
    t("الألعاب الثقافية والتراثية وإبراز مناطق المملكة", "Cultural and heritage games highlighting Saudi regions"),
    t("الألعاب البيئية والاستدامة والحياة الفطرية", "Environmental games, sustainability, and wildlife"),
    t("الألعاب الاجتماعية والتجارب التفاعلية الرقمية", "Social games and digital interactive experiences"),
  ]

  return (
    <section id="vision" className="py-24 px-6 bg-secondary/40 relative scanlines">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// رؤيتنا ورسالتنا", "// VISION & MISSION")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("الألعاب الهادفة تصنع أثرًا", "Purposeful Games Create Impact")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="pixel-card p-10">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center bg-primary/15 p-3 pixel-border">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="text-accent" style={{ fontFamily: "var(--font-pixel)" }}>{">"}</span>
                {t("الرؤية", "Vision")}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t(
                  "أن يكون استديو بيكسل جهة رائدة في توظيف الألعاب والتجارب التفاعلية لخدمة الإنسان والثقافة والمجتمع في المملكة.",
                  "To be a leading Saudi nonprofit using games and interactive experiences to serve people, culture, and society across the Kingdom."
                )}
              </p>
            </div>
          </div>

          <div className="pixel-card p-10">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center bg-primary/15 p-3 pixel-border">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="text-accent" style={{ fontFamily: "var(--font-pixel)" }}>{">"}</span>
                {t("الرسالة", "Mission")}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t(
                  "نستخدم قوة الألعاب لصناعة تجارب تعليمية وصحية وثقافية ومجتمعية تفاعلية، مع الالتزام بأن يكون المحتوى الصحي توعويًا وتعليميًا دون ادعاءات علاجية غير مثبتة.",
                  "We use the power of games to create educational, health, cultural, and social interactive experiences, with health content focused on education and awareness without unsupported medical claims."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <span className="pixel-divider w-12 inline-block" />
            {t("مجالات الأثر", "Areas of Impact")}
            <span className="pixel-divider w-12 inline-block" />
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, i) => (
              <div key={i} className="flex items-start gap-3 pixel-card p-5">
                <div className="relative z-10 flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-primary/20 text-xs font-bold text-accent pixel-border"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
