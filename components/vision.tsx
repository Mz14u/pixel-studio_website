"use client"

import { Eye, Target } from "lucide-react"
import { useLang } from "./language-context"

export default function Vision() {
  const { t } = useLang()

  const objectives = [
    t("تمكين الشباب من اكتساب مهارات تصميم وتطوير الألعاب الرقمية", "Empower youth with game design and development skills"),
    t("إنتاج ألعاب رقمية هادفة تعالج قضايا الصحة النفسية والاستدامة", "Produce purposeful games addressing mental health and sustainability"),
    t("تعزيز مفهوم التمكين الرقمي والمجتمعي من خلال إشراك الشباب", "Promote digital and community empowerment through youth engagement"),
    t("دعم التحول الرقمي عبر توظيف الألعاب كوسيلة تعليمية وتوعوية", "Support digital transformation using games as educational tools"),
    t("بناء مجتمع شبابي تقني يساهم في تطوير المحتوى الرقمي المحلي", "Build a tech youth community contributing to local digital content"),
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
            {t("نصنع المستقبل بالإبداع والتقنية", "Crafting the Future with Creativity & Technology")}
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
                  "أن تكون مبادرة بكسل (Pixel) منصة شبابية رائدة في تصميم الألعاب الرقمية الهادفة، تسهم في تمكين الشباب وصناعة محتوى تفاعلي مبتكر يعزز الوعي المجتمعي ويحسن جودة الحياة بطريقة رقمية مستدامة.",
                  "To be a leading youth platform in designing purposeful digital games, empowering young people and creating innovative interactive content that enhances social awareness and improves quality of life through sustainable digital means."
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
                  "تمكين الشباب من اكتساب مهارات تصميم وتطوير الألعاب الرقمية وتوظيفها في إنتاج ألعاب تفاعلية تخدم قضايا مجتمعية مثل الصحة النفسية، السلوكيات الإيجابية، والاستدامة، من خلال برامج تدريبية ومشاريع تطبيقية تحقق أثراً مجتمعياً ملموساً وتدعم التحول الرقمي.",
                  "Empowering youth to acquire game design and development skills and utilize them in producing interactive games that serve social causes such as mental health, positive behaviors, and sustainability, through training programs and applied projects that achieve tangible social impact and support digital transformation."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <span className="pixel-divider w-12 inline-block" />
            {t("أهدافنا", "Our Goals")}
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
