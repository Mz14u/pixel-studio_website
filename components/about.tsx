"use client"

import { Gamepad2, Users, Lightbulb } from "lucide-react"
import { useLang } from "./language-context"

export default function About() {
  const { t } = useLang()

  const highlights = [
    {
      icon: Gamepad2,
      title: t("ألعاب هادفة", "Purposeful Games"),
      description: t(
        "نصمم ألعاب رقمية تفاعلية تعالج قضايا مجتمعية مثل الصحة النفسية والاستدامة والسلوكيات الإيجابية",
        "We design interactive digital games that address social issues such as mental health, sustainability, and positive behaviors"
      ),
    },
    {
      icon: Users,
      title: t("تمكين الشباب", "Youth Empowerment"),
      description: t(
        "نقدم برامج تدريبية تطبيقية تساعد الشباب على اكتساب مهارات تصميم وتطوير الألعاب الرقمية",
        "We offer hands-on training programs that help youth acquire game design and development skills"
      ),
    },
    {
      icon: Lightbulb,
      title: t("أثر مستدام", "Sustainable Impact"),
      description: t(
        "نسعى لتحقيق أثر مجتمعي مستدام من خلال توظيف التقنية والإبداع لخدمة المجتمع",
        "We strive for sustainable social impact by leveraging technology and creativity to serve the community"
      ),
    },
  ]

  return (
    <section id="about" className="py-24 px-6 pixel-grid-bg relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium text-accent mb-4 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("// من نحن", "// ABOUT US")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {t("نحول الألعاب إلى أداة للتغيير الإيجابي", "We Turn Games Into Tools for Positive Change")}
          </h2>
          <div className="pixel-divider w-24 mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-base">
            {t(
              "بكسل هي مبادرة شبابية تقنية تهدف إلى تمكين الشباب من تصميم وتطوير ألعاب رقمية تفاعلية وهادفة تسهم في معالجة قضايا مجتمعية معاصرة، من خلال تحويل الرسائل التوعوية والتعليمية إلى تجارب رقمية ممتعة وسهلة الوصول.",
              "Pixel is a youth tech initiative that empowers young people to design and develop interactive, purposeful digital games that address contemporary social issues by transforming educational and awareness messages into engaging and accessible digital experiences."
            )}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="pixel-card p-8 group transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center justify-center bg-primary/15 p-3 pixel-border">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
